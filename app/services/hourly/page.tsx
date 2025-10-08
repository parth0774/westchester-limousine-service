import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, MapPin, Users } from "lucide-react"

export default function HourlyCityPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
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
                Enjoy flexibility and convenience with a dedicated chauffeur by the hour. Whether you need a ride for a few hours or a full day, we provide reliable, luxury transportation to meet your schedule.
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
