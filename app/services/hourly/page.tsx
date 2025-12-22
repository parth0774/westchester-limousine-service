import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Clock, MapPin, Users, ArrowRight, Briefcase, Plane, Heart } from "lucide-react"
import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Hourly Car Service | Westchester Limousine",
  description: "Flexible hourly limo service and city-to-city transfers. Rent a chauffeur and vehicle for as long as you need.",
  alternates: {
    canonical: "/services/hourly",
  },
}

export default function HourlyCityPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Breadcrumbs
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
          items={[
            { label: "Services", href: "/services" },
            { label: "Hourly & City-to-City", href: "/services/hourly" },
          ]}
        />
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Hourly & City-to-City Transportation
              </h1>
              <p className="text-xl text-muted-foreground">
                Perfect for meetings, shopping trips, or inter-city transfers.
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Enjoy flexibility and convenience with a dedicated chauffeur by the hour. Our <Link href="/services/hourly" className="text-accent hover:underline font-semibold">hourly limo service Westchester</Link> serves <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">White Plains</Link>, <Link href="/service-areas/westchester-county-ny/scarsdale" className="text-accent hover:underline font-semibold">Scarsdale</Link>, and all of <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">Westchester County</Link>. Whether you need a ride for a few hours or a full day, we provide reliable, luxury transportation to meet your schedule.
              </p>
              <Button size="lg" variant="secondary" className="mt-8">
                <Link href="/contact">Book Your Ride</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Hourly & City-to-City Service */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Service</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Westchester Limousine offers hourly and city-to-city transportation designed for flexibility and comfort. Our professional chauffeurs ensure your ride is stress-free and tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                <p className="text-muted-foreground text-sm">
                  Book a chauffeur for as long as you need, whether it’s a few hours for errands or a full day for business trips.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">City-to-City Transfers</h3>
                <p className="text-muted-foreground text-sm">
                  Enjoy comfortable, direct transfers between cities with a professional chauffeur handling every detail of the journey.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Service</h3>
                <p className="text-muted-foreground text-sm">
                  Our chauffeurs adapt to your schedule and preferences to ensure your ride is smooth, efficient, and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">What Our Hourly & City-to-City Service Offers</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 text-lg">
                <li>Hourly chauffeured service for complete flexibility</li>
                <li>Direct city-to-city transfers without stops or delays</li>
                <li>Luxury fleet with the latest amenities for comfort</li>
                <li>Experienced chauffeurs trained in safety and professionalism</li>
                <li>Full support and scheduling assistance for your needs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Services & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Corporate Travel
                    </CardTitle>
                    <CardDescription>
                      Executive car service for business professionals with priority booking and dedicated account management.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/services/corporate">
                        View Corporate Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-accent" />
                      Airport Services
                    </CardTitle>
                    <CardDescription>
                      Reliable airport transfers to JFK, LaGuardia, Newark, and Westchester County Airport with flight tracking.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/services/airport">
                        View Airport Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      Events & Weddings
                    </CardTitle>
                    <CardDescription>
                      Luxury transportation for special occasions including weddings, proms, and corporate events.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/services/events">
                        View Event Services <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      Service Areas
                    </CardTitle>
                    <CardDescription>
                      We serve all of Westchester County, Putnam, Dutchess, Fairfield County, and surrounding areas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/service-areas">
                        View Service Areas <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Book Your Flexible Ride Today</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Enjoy the convenience of dedicated transportation tailored to your schedule. Contact us now to book hourly or city-to-city service in Westchester County and beyond.
              </p>
              <Button size="lg" variant="secondary">
                <Link href="/contact">Reserve Now</Link>
              </Button>
              <p className="mt-6 text-sm text-primary-foreground/70">
                Serving Westchester County and surrounding areas with premium, dependable transportation services.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
