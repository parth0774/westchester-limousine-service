import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Star, Heart, Users, ArrowRight, Briefcase, Plane, MapPin } from "lucide-react"
import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Wedding & Event Limousine | Westchester Limousine",
  description: "Luxury transportation for weddings, proms, and special events. Make your special day unforgettable with our premium limo service.",
  alternates: {
    canonical: "/services/events",
  },
}

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Breadcrumbs
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
          items={[
            { label: "Services", href: "/services" },
            { label: "Proms, Weddings & Events", href: "/services/events" },
          ]}
        />
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Proms, Weddings & Events Transportation
              </h1>
              <p className="text-xl text-muted-foreground">
                Arrive in style for your special day with our premium transportation services.
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our luxury sedans, SUVs, and executive shuttles ensure a memorable experience for proms, weddings, and special events. Our <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service Westchester</Link> serves <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">wedding limo Yonkers</Link>, <Link href="/service-areas/westchester-county-ny/scarsdale" className="text-accent hover:underline font-semibold">wedding limo Scarsdale</Link>, and all of <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">wedding limo Westchester County</Link>. With professional chauffeurs and elegant vehicles, we make every event extraordinary.
              </p>
              <Button size="lg" variant="secondary" className="mt-8">
                <Link href="/contact">Reserve Your Ride</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Us for Special Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Westchester Limousine is the trusted choice for unforgettable events. From weddings to proms, we deliver seamless, luxurious transportation tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Luxury Fleet</h3>
                <p className="text-muted-foreground text-sm">
                  Choose from our fleet of luxury sedans, SUVs, and executive shuttles for the perfect ride.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Special Occasion Service</h3>
                <p className="text-muted-foreground text-sm">
                  Personalized transportation services designed to make your special day flawless and memorable.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Chauffeurs</h3>
                <p className="text-muted-foreground text-sm">
                  Experienced chauffeurs provide safe, punctual, and courteous service for every event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Event Transportation Services Include</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 text-lg">
                <li>Luxury sedans for intimate arrivals</li>
                <li>SUVs for group or family transportation</li>
                <li>Executive shuttles for larger wedding parties or corporate events</li>
                <li>Customizable service to fit your event schedule and location needs</li>
                <li>On-time arrival and departure to keep your day running smoothly</li>
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
                      <Plane className="h-5 w-5 text-accent" />
                      Airport Services
                    </CardTitle>
                    <CardDescription>
                      Reliable airport transfers for wedding guests or event attendees traveling to JFK, LaGuardia, or Newark.
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
                      <Briefcase className="h-5 w-5 text-accent" />
                      Corporate Events
                    </CardTitle>
                    <CardDescription>
                      Professional transportation for corporate events, conferences, and business gatherings.
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
                      <Heart className="h-5 w-5 text-accent" />
                      Wedding Guide
                    </CardTitle>
                    <CardDescription>
                      Complete guide to choosing the perfect luxury vehicle for your Westchester County wedding celebration.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/blog/wedding-limousine-services-westchester">
                        Read Wedding Guide <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl font-bold mb-6">Make Your Event Unforgettable</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                With Westchester Limousine, your prom, wedding, or special event will be complemented by unmatched luxury transportation. Let us make your arrival as memorable as the event itself.
              </p>
              <Button size="lg" variant="secondary">
                <Link href="/contact">Book Now</Link>
              </Button>
              <p className="mt-6 text-sm text-primary-foreground/70">
                Serving Westchester County and surrounding areas with exceptional limousine services for all occasions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
