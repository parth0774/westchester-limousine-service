"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Plane, 
  Navigation, 
  MapPin, 
  CreditCard, 
  DollarSign, 
  Mail, 
  CheckCircle2, 
  ArrowLeft,
  ArrowRight,
  Loader2,
  Sparkles
} from "lucide-react"
import { getAirportPriceFuzzy, getAllTowns, getAirportDestinations, getDestinationDisplayName } from "@/lib/airport-pricing-utils"
import { getPriceFuzzy, getAllPickupLocations, getAllDropoffLocations } from "@/lib/pricing-utils"
import { sendQuoteEmail, type QuoteData } from "@/lib/email-service"
import { useToast } from "@/hooks/use-toast"

type ServiceType = "airport" | "long-distance" | null
type Direction = "pickup" | "dropoff" | null
type PaymentMethod = "cash" | "card" | null

export function PricingTool() {
  const { toast } = useToast()
  
  // Form state
  const [step, setStep] = useState(1)
  const [serviceType, setServiceType] = useState<ServiceType>(null)
  const [direction, setDirection] = useState<Direction>(null)
  const [pickupTown, setPickupTown] = useState("")
  const [dropoffTown, setDropoffTown] = useState("")
  const [destination, setDestination] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null)
  const [wantsDiscounts, setWantsDiscounts] = useState(false)
  const [customerEmail, setCustomerEmail] = useState("")
  const [basePrice, setBasePrice] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Options
  const [allTowns] = useState(() => getAllTowns())
  const [allPickupLocations] = useState(() => getAllPickupLocations())
  const [allDropoffLocations] = useState(() => getAllDropoffLocations())
  const [allDestinations] = useState(() => getAirportDestinations())

  // Calculate price when relevant fields change
  useEffect(() => {
    let price: number | null = null

    if (serviceType === "airport") {
      // Pickup from airport: destination (airport) + dropoffTown
      // Dropoff to airport: pickupTown + destination (airport)
      if (direction === "pickup" && destination && dropoffTown) {
        price = getAirportPriceFuzzy(dropoffTown, destination)
      } else if (direction === "dropoff" && pickupTown && destination) {
        price = getAirportPriceFuzzy(pickupTown, destination)
      }
    } else if (serviceType === "long-distance" && pickupTown && dropoffTown) {
      price = getPriceFuzzy(pickupTown, dropoffTown)
    }

    setBasePrice(price)
  }, [serviceType, direction, pickupTown, dropoffTown, destination])

  const finalPrice = basePrice && paymentMethod
    ? paymentMethod === "card"
      ? basePrice * 1.135
      : basePrice
    : null

  const handleNext = () => {
    if (step === 1 && serviceType) {
      if (serviceType === "airport") {
        setStep(2)
      } else {
        setStep(3)
      }
    } else if (step === 2 && direction && serviceType === "airport") {
      // Clear previous selections when moving forward
      setPickupTown("")
      setDropoffTown("")
      setDestination("")
      setStep(3)
    } else if (step === 3) {
      if (serviceType === "airport") {
        if (direction === "pickup" && destination && dropoffTown) {
          setStep(4)
        } else if (direction === "dropoff" && pickupTown && destination) {
          setStep(4)
        }
      } else if (serviceType === "long-distance" && pickupTown && dropoffTown) {
        setStep(4)
      }
    } else if (step === 4 && paymentMethod) {
      setStep(5)
    } else if (step === 5) {
      setStep(6)
    }
  }

  const handleBack = () => {
    if (step === 2) {
      setStep(1)
    } else if (step === 3) {
      if (serviceType === "airport") {
        setStep(2)
      } else {
        setStep(1)
      }
    } else if (step === 4) {
      setStep(3)
    } else if (step === 5) {
      setStep(4)
    } else if (step === 6) {
      setStep(5)
    }
  }

  const canProceed = () => {
    if (step === 1) return !!serviceType
    if (step === 2) return !!direction && serviceType === "airport"
    if (step === 3) {
      if (serviceType === "airport") {
        if (direction === "pickup") return !!(destination && dropoffTown)
        if (direction === "dropoff") return !!(pickupTown && destination)
      } else {
        return !!(pickupTown && dropoffTown)
      }
    }
    if (step === 4) return !!paymentMethod
    if (step === 5) return basePrice !== null && paymentMethod !== null
    return false
  }

  const handleSubmit = async () => {
    if (!basePrice || !finalPrice) {
      return
    }

    setIsSubmitting(true)

    const quoteData: QuoteData = {
      serviceType: serviceType!,
      direction: serviceType === "airport" ? direction! : undefined,
      pickupTown: serviceType === "airport" && direction === "dropoff" ? pickupTown : 
                  serviceType === "long-distance" ? pickupTown : undefined,
      dropoffTown: serviceType === "airport" && direction === "pickup" ? dropoffTown :
                   serviceType === "long-distance" ? dropoffTown : undefined,
      destination: serviceType === "airport" ? destination : undefined,
      paymentMethod: paymentMethod!,
      basePrice,
      finalPrice,
      customerEmail: customerEmail && customerEmail.includes("@") ? customerEmail : undefined,
      wantsDiscounts: !!(wantsDiscounts && customerEmail && customerEmail.includes("@")),
    }

    const result = await sendQuoteEmail(quoteData)

    setIsSubmitting(false)

    if (result.success) {
      setIsSubmitted(true)
      toast({
        title: "Quote Sent Successfully!",
        description: customerEmail 
          ? "We've received your quote request and will contact you soon."
          : "We've received your quote request. Please contact us for more details.",
      })
    } else {
      toast({
        title: "Error Sending Quote",
        description: result.error || "Please try again or contact us directly.",
        variant: "destructive",
      })
    }
  }

  const resetForm = () => {
    setStep(1)
    setServiceType(null)
    setDirection(null)
    setPickupTown("")
    setDropoffTown("")
    setDestination("")
    setPaymentMethod(null)
    setWantsDiscounts(false)
    setCustomerEmail("")
    setBasePrice(null)
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-2xl">Quote Request Sent!</CardTitle>
          <CardDescription className="text-base">
            Thank you for your interest. We've received your quote request and will contact you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service:</span>
                <span className="font-medium">
                  {serviceType === "airport" ? "Airport Service" : "Long Distance Service"}
                </span>
              </div>
              {serviceType === "airport" && direction && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Direction:</span>
                  <span className="font-medium">
                    {direction === "pickup" ? "Pickup from Airport" : "Dropoff to Airport"}
                  </span>
                </div>
              )}
              {serviceType === "airport" && destination && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {direction === "pickup" ? "Pickup Airport:" : "Dropoff Airport:"}
                  </span>
                  <span className="font-medium">{getDestinationDisplayName(destination)}</span>
                </div>
              )}
              {serviceType === "airport" && direction === "pickup" && dropoffTown && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dropoff Town:</span>
                  <span className="font-medium">{dropoffTown}</span>
                </div>
              )}
              {serviceType === "airport" && direction === "dropoff" && pickupTown && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pickup Town:</span>
                  <span className="font-medium">{pickupTown}</span>
                </div>
              )}
              {serviceType === "long-distance" && pickupTown && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pickup:</span>
                  <span className="font-medium">{pickupTown}</span>
                </div>
              )}
              {serviceType === "long-distance" && dropoffTown && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dropoff:</span>
                  <span className="font-medium">{dropoffTown}</span>
                </div>
              )}
              {paymentMethod && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment:</span>
                  <span className="font-medium">{paymentMethod === "cash" ? "Cash" : "Credit Card"}</span>
                </div>
              )}
              <div className="flex justify-between border-t pt-2">
                <span className="text-muted-foreground">Final Price:</span>
                <span className="text-lg font-bold text-accent">
                  ${finalPrice?.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <Button onClick={resetForm} className="w-full" variant="outline">
            Get Another Quote
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Calculate max steps based on service type
  const maxSteps = serviceType === "airport" ? 7 : 6

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Get Your Instant Quote</CardTitle>
        <CardDescription>
          Follow the steps below to get an accurate price for your transportation needs.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between">
          {Array.from({ length: maxSteps }, (_, i) => i + 1).map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${
                  step >= s
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-muted bg-muted text-muted-foreground"
                }`}
              >
                {step > s ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <span className="text-xs font-medium">{s}</span>
                )}
              </div>
              {s < maxSteps && (
                <div
                  className={`h-0.5 flex-1 mx-1 transition-all ${
                    step > s ? "bg-accent" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[400px]">
          {/* Step 1: Service Type */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  What type of service do you need?
                </Label>
                <RadioGroup value={serviceType || ""} onValueChange={(v) => setServiceType(v as ServiceType)}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                      <RadioGroupItem value="airport" className="mt-2" />
                      <Plane className="h-12 w-12 mt-4 mb-2 text-accent" />
                      <span className="font-semibold">Airport Service</span>
                      <span className="text-sm text-muted-foreground text-center mt-1">
                        To/from airports
                      </span>
                    </label>
                    <label className="flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                      <RadioGroupItem value="long-distance" className="mt-2" />
                      <Navigation className="h-12 w-12 mt-4 mb-2 text-accent" />
                      <span className="font-semibold">Long Distance</span>
                      <span className="text-sm text-muted-foreground text-center mt-1">
                        City to city
                      </span>
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 2: Direction (Airport only) */}
          {step === 2 && serviceType === "airport" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Are you being picked up from the airport or dropped off at the airport?
                </Label>
                <RadioGroup value={direction || ""} onValueChange={(v) => setDirection(v as Direction)}>
                  <div className="grid gap-4">
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                      <RadioGroupItem value="pickup" className="mr-4" />
                      <div>
                        <span className="font-semibold block">Pickup from Airport</span>
                        <span className="text-sm text-muted-foreground">
                          We'll pick you up at the airport and take you to your destination
                        </span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                      <RadioGroupItem value="dropoff" className="mr-4" />
                      <div>
                        <span className="font-semibold block">Dropoff to Airport</span>
                        <span className="text-sm text-muted-foreground">
                          We'll pick you up from your location and take you to the airport
                        </span>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 3: Airport - Airport + Town / Long Distance - Pickup + Dropoff */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
              {serviceType === "airport" ? (
                // Airport Service: Airport dropdown + Town dropdown on same page
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="airport-destination" className="text-base font-semibold mb-2 block">
                      {direction === "pickup" ? "Pickup Airport" : "Dropoff Airport"}
                    </Label>
                    <Select value={destination} onValueChange={setDestination}>
                      <SelectTrigger id="airport-destination" className="w-full">
                        <SelectValue placeholder="Choose airport..." />
                      </SelectTrigger>
                      <SelectContent>
                        {allDestinations.map((dest) => (
                          <SelectItem key={dest} value={dest}>
                            {getDestinationDisplayName(dest)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="airport-town" className="text-base font-semibold mb-2 block">
                      {direction === "pickup" ? "Dropoff Town" : "Pickup Town"}
                    </Label>
                    <Select 
                      value={direction === "pickup" ? dropoffTown : pickupTown} 
                      onValueChange={direction === "pickup" ? setDropoffTown : setPickupTown}
                    >
                      <SelectTrigger id="airport-town" className="w-full">
                        <SelectValue placeholder="Choose town..." />
                      </SelectTrigger>
                      <SelectContent>
                        {allTowns.map((town) => (
                          <SelectItem key={town} value={town}>
                            {town.charAt(0).toUpperCase() + town.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ) : (
                // Long Distance Service: Pickup and Dropoff towns
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pickup-town-ld" className="text-base font-semibold mb-2 block">
                      Pickup Town
                    </Label>
                    <Select value={pickupTown} onValueChange={setPickupTown}>
                      <SelectTrigger id="pickup-town-ld" className="w-full">
                        <SelectValue placeholder="Choose pickup town..." />
                      </SelectTrigger>
                      <SelectContent>
                        {allPickupLocations.map((town) => {
                          // Use airport pricing display name for NYC destinations
                          const displayName = town === "nyc above 42nd" || town === "nyc below 42nd"
                            ? getDestinationDisplayName(town)
                            : town.charAt(0).toUpperCase() + town.slice(1)
                          return (
                            <SelectItem key={town} value={town}>
                              {displayName}
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dropoff-town-ld" className="text-base font-semibold mb-2 block">
                      Dropoff Town
                    </Label>
                    <Select value={dropoffTown} onValueChange={setDropoffTown}>
                      <SelectTrigger id="dropoff-town-ld" className="w-full">
                        <SelectValue placeholder="Choose dropoff town..." />
                      </SelectTrigger>
                      <SelectContent>
                        {allDropoffLocations.map((town) => {
                          // Use airport pricing display name for NYC destinations
                          const displayName = town === "nyc above 42nd" || town === "nyc below 42nd"
                            ? getDestinationDisplayName(town)
                            : town.charAt(0).toUpperCase() + town.slice(1)
                          return (
                            <SelectItem key={town} value={town}>
                              {displayName}
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Payment Method */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  How would you like to pay?
                </Label>
                <RadioGroup value={paymentMethod || ""} onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}>
                  <div className="grid gap-4">
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                      <RadioGroupItem value="cash" className="mr-4" />
                      <DollarSign className="h-6 w-6 mr-3 text-accent" />
                      <div>
                        <span className="font-semibold block">Cash</span>
                        <span className="text-sm text-muted-foreground">No additional fees</span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-accent hover:bg-accent/5 has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                      <RadioGroupItem value="card" className="mr-4" />
                      <CreditCard className="h-6 w-6 mr-3 text-accent" />
                      <div>
                        <span className="font-semibold block">Credit Card</span>
                        <span className="text-sm text-muted-foreground">
                          +13.5% processing fee
                        </span>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 5: Price Display */}
          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
              {basePrice !== null ? (
                <>
                  <div className="rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 p-6 border-2 border-accent/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Your Quote</h3>
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Base Price:</span>
                        <span className="font-medium">${basePrice.toFixed(2)}</span>
                      </div>
                      {paymentMethod === "card" && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Processing Fee (13.5%):</span>
                          <span className="font-medium">
                            ${((finalPrice || basePrice) - basePrice).toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between border-t pt-3 mt-3">
                        <span className="text-lg font-semibold">Total Price:</span>
                        <span className="text-2xl font-bold text-accent">
                          ${finalPrice?.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
                    <p>
                      This is an estimated price. Final pricing may vary based on specific requirements, 
                      time of day, and other factors. Contact us for a confirmed quote.
                    </p>
                  </div>
                </>
              ) : (
                <div className="rounded-lg bg-muted/50 p-6 text-center">
                  <p className="text-muted-foreground">
                    Unable to calculate price. Please go back and verify your selections.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 6: Email Collection */}
          {step === 6 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
              <div className="rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-6 border border-primary/20">
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Get Exclusive Discounts! (Optional)</h3>
                    <p className="text-sm text-muted-foreground">
                      Provide your email to receive special offers and discounts for future rides. 
                      We'll send you exclusive deals and promotions. Your quote will be sent to us regardless.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address <span className="text-muted-foreground text-xs">(Optional)</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Optional: Provide your email to receive the quote confirmation and exclusive discounts.
                    </p>
                  </div>
                  {customerEmail && customerEmail.includes("@") && (
                    <div className="flex items-start space-x-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <Checkbox
                        id="wants-discounts"
                        checked={wantsDiscounts}
                        onCheckedChange={(checked) => setWantsDiscounts(checked as boolean)}
                      />
                      <label
                        htmlFor="wants-discounts"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        Yes, I'd like to receive discount offers and promotions
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
            className="animate-in fade-in"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          {step === 6 ? (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="animate-in fade-in"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Quote Request
                  <Mail className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="animate-in fade-in"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
