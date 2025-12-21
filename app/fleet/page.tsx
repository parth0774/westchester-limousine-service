import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Luggage, Wifi, Car } from "lucide-react"

const vehicles = [
  {
    category: "Luxury Sedans",
    capacity: "1-4 Passengers",
    vehicles: ["Lincoln Town Car Executive", "Cadillac XTS Premium", "Mercedes-Benz S-Class"],
    features: ["Leather seating", "Climate control", "Privacy partition", "Complimentary water"],
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
  },
  {
    category: "Premium SUVs",
    capacity: "5-7 Passengers",
    vehicles: ["Cadillac Escalade ESV", "Lincoln Navigator L", "Mercedes-Benz GLS"],
    features: ["Captain's chairs", "Entertainment system", "Ample luggage space", "Tinted windows"],
    image: "/luxury-black-suv-cadillac-escalade.jpg",
  },
  {
    category: "Stretch Limousines",
    capacity: "8-10 Passengers",
    vehicles: ["Lincoln Stretch Limousine", "Cadillac Stretch Limousine"],
    features: ["Full bar", "Entertainment system", "Mood lighting", "Privacy partition"],
    image: "/white-stretch-limousine-luxury-interior.jpg",
  },
  {
    category: "Luxury Vans",
    capacity: "10-14 Passengers",
    vehicles: ["Mercedes-Benz Sprinter", "Ford Transit Executive"],
    features: ["Executive seating", "Conference table", "Wi-Fi", "Refreshment center"],
    image: "/luxury-mercedes-sprinter-van-executive-interior.jpg",
  },
]

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Fleet | Westchester Limousine",
  description: "Explore our luxury fleet of sedans, SUVs, limousines, and vans. Premium vehicles for every occasion.",
  alternates: {
    canonical: "/fleet",
  },
}

export default function FleetPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Our Luxury Fleet</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Meticulously maintained premium vehicles to meet every transportation need
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {vehicles.map((vehicleType) => (
                <Card key={vehicleType.category} className="overflow-hidden">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={vehicleType.image || "/placeholder.svg"}
                      alt={vehicleType.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{vehicleType.category}</CardTitle>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {vehicleType.capacity}
                      </Badge>
                    </div>
                    <CardDescription>{vehicleType.vehicles.join(" • ")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {vehicleType.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Features */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">All Vehicles Include</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Standard amenities across our entire fleet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Maintenance</h3>
                <p className="text-muted-foreground text-sm">Regular inspections and detailing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Complimentary Wi-Fi</h3>
                <p className="text-muted-foreground text-sm">Stay connected during your journey</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Luggage className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Luggage Assistance</h3>
                <p className="text-muted-foreground text-sm">Professional handling of your belongings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Chauffeurs</h3>
                <p className="text-muted-foreground text-sm">Experienced and courteous drivers</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Fleet?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Choose the perfect vehicle for your next journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  asChild
                >
                  <Link href="/rates">View Rates</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
