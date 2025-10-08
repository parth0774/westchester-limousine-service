import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Users, Clock } from "lucide-react"

export default function SchoolTransportationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                School Transportation Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Trusted private school transfers for families across Westchester County.
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer safe drivers, verified routes, and dependable service every day to ensure peace of mind
                for families and schools.
              </p>
              <Button size="lg" variant="secondary" className="mt-8">
                <Link href="/contact">Book a Ride</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Families Trust Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At Westchester Limousine, we understand that safety, reliability, and comfort matter most when
                transporting students. Our school transportation services are designed to meet the needs of
                busy families and schools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Safety First</h3>
                <p className="text-muted-foreground text-sm">
                  All drivers are background checked, trained in child safety, and follow verified school routes
                  every day.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Dependable Service</h3>
                <p className="text-muted-foreground text-sm">
                  We pride ourselves on punctual school transfers so your children arrive on time for their day
                  every time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Verified Routes</h3>
                <p className="text-muted-foreground text-sm">
                  Our routes are planned in advance to ensure safe, efficient, and timely transportation for
                  students every school day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our School Transportation Services Include</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 text-lg">
                <li>Daily school drop-offs and pick-ups for students of all ages</li>
                <li>Private transfers tailored to family schedules</li>
                <li>Verified safe routes for every school day</li>
                <li>Fully licensed and insured drivers with child safety training</li>
                <li>24/7 scheduling and support for schools and families</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Reliable School Transportation You Can Trust</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Ensure safe and dependable transportation for your children. Contact us today to schedule
                private school transfers in Westchester County.
              </p>
              <Button size="lg" variant="secondary">
                <Link href="/contact">Book Now</Link>
              </Button>
              <p className="mt-6 text-sm text-primary-foreground/70">
                Serving families and schools across Westchester County with trusted school transportation services every day.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
