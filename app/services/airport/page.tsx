import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Plane, Clock, MapPin, Luggage, Phone, Shield, Star } from "lucide-react"

const features = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable pickups and drop-offs for all major airports including JFK, LGA, EWR, HPN, BDL, and STW",
  },
  {
    icon: Clock,
    title: "Flight Tracking",
    description: "Real-time flight monitoring to ensure on-time service, even with delays or early arrivals",
  },
  {
    icon: Luggage,
    title: "Luggage Assistance",
    description: "Professional chauffeurs help with your luggage for a smooth start or finish to your journey",
  },
  {
    icon: MapPin,
    title: "Door-to-Door Service",
    description: "We pick you up and drop you off right at your destination, ensuring complete convenience",
  },
]

const airports = [
  {
    name: "John F. Kennedy International Airport (JFK)",
    image: "/professional-chauffeur-standing-next-to-luxury-bla.jpg",
    description:
      "Luxury limousine transfers to and from JFK Airport. Our chauffeurs monitor your flight schedule and ensure timely arrivals and departures with complete comfort.",
  },
  {
    name: "LaGuardia Airport (LGA)",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
    description:
      "Convenient and stress-free travel to LaGuardia Airport. Perfect for business and leisure travelers looking for reliable transportation.",
  },
  {
    name: "Westchester County Airport (HPN)",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
    description:
      "Your local airport deserves local expertise. We provide efficient and comfortable rides to HPN for residents and visitors of Westchester.",
  },
  {
    name: "Newark Liberty International Airport (EWR)",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
    description:
      "Experience punctual service to Newark Airport. We handle traffic and timing so you can focus on your travel.",
  },
  {
    name: "Bradley International Airport (BDL)",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
    description:
      "Reliable limousine service connecting Westchester to Bradley International Airport for both business and personal trips.",
  },
  {
    name: "Stewart International Airport (STW)",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
    description:
      "Smooth and professional transfers to Stewart Airport. A convenient choice for regional travel across New York and Connecticut.",
  },
]

export default function AirportServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Airport Limousine Service
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Luxury airport transfers serving JFK, LGA, HPN, EWR, BDL, and STW. Experience reliable, comfortable, and punctual service every time you travel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Book Airport Transfer</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="tel:+19142180909">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
                  alt="Luxury airport limousine service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Airport Service Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Designed for travelers who value reliability, comfort, and peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Individual Airports */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Airports We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our airport transfer service covers all major airports in and around Westchester, New York
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {airports.map((airport) => (
                <Card key={airport.name} className="overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src={airport.image}
                      alt={airport.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{airport.name}</CardTitle>
                    <CardDescription>{airport.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" asChild>
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
                  alt="Professional chauffeur at airport"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our Airport Service</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Professional Chauffeurs</h3>
                      <p className="text-muted-foreground">
                        Courteous, trained drivers who handle your trip from door to terminal with care and professionalism
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Always On Time</h3>
                      <p className="text-muted-foreground">
                        We track every flight and adjust pick-up times to make sure you are never left waiting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Star className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Comfort and Style</h3>
                      <p className="text-muted-foreground">
                        Enjoy the comfort of our luxury vehicles equipped with premium interiors and amenities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Book Your Airport Transfer Today</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Whether arriving or departing, Westchester Limousine ensures your journey begins and ends with excellence
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Reserve Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
