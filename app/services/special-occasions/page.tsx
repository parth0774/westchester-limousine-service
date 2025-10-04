"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Star, Gift, Calendar, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Luxury Transportation",
    description: "Arrive in style with high-end vehicles and professional chauffeurs",
  },
  {
    icon: Gift,
    title: "Custom Packages",
    description: "Tailored transportation packages for weddings, anniversaries, and celebrations",
  },
  {
    icon: Calendar,
    title: "Event Coordination",
    description: "Expert planning to ensure timely arrival and smooth transportation",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "Attention to detail that makes your special day unforgettable",
  },
]

export default function SpecialOccasionsPage() {
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
                  Special Occasion Transportation
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Experience the ultimate in comfort and elegance for weddings, anniversaries, birthdays, proms, and other milestones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Book Your Ride</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="tel:914-XXX-XXXX">Call Now</Link>
                  </Button>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                {/* Placeholder Image */}
                <span className="text-muted-foreground">Image Placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Special Occasion Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Offering a range of premium transportation options designed to make your special events truly memorable.
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

        {/* Benefits Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                {/* Placeholder Image */}
                <span className="text-muted-foreground">Image Placeholder</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us for Your Special Day</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Experienced Chauffeurs</h3>
                      <p className="text-muted-foreground">
                        Professional drivers trained for elegance and reliability during important events
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Calendar className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">On-Time Guarantee</h3>
                      <p className="text-muted-foreground">
                        Punctual arrivals with precision timing, every time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Heart className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Attention to Detail</h3>
                      <p className="text-muted-foreground">
                        Personalized touches to enhance the ambiance and experience of your event
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Make Your Event Truly Unforgettable</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Let us provide a flawless transportation experience so you can focus on enjoying your special day.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
