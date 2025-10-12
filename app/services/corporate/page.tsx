import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Briefcase, Clock, Users, Shield, Phone, Calendar } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Airport Limo Service Westchester NY | JFK, LGA, Newark, HPN Car Service",
  description: "Premium airport transportation in Westchester County NY. Luxury car service to JFK, LaGuardia, Newark, HPN airports. 24/7 availability, flight tracking, professional chauffeurs. Book your airport transfer now!",
  keywords: "airport limo Westchester NY, JFK airport car service, LaGuardia airport transfer, Newark airport limo, HPN airport service, Westchester airport transportation, luxury airport car service NY",
  openGraph: {
    title: "Westchester Airport Limousine Service | Luxury Airport Transfers",
    description: "Professional airport car service to JFK, LGA, EWR, HPN. Real-time flight tracking, meet & greet service, 24/7 availability.",
    type: "website",
  },
}

const features = [
  {
    icon: Briefcase,
    title: "Executive Transportation",
    description: "Professional service for business executives and VIPs",
  },
  {
    icon: Calendar,
    title: "Meeting Transfers",
    description: "Reliable transportation to conferences and business meetings",
  },
  {
    icon: Users,
    title: "Account Management",
    description: "Dedicated corporate account managers for seamless service",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Accommodating last-minute changes and tight schedules",
  },
]

export default function CorporatePage() {
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
                  Corporate Travel Solutions
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Executive transportation solutions designed for business professionals who demand reliability,
                  punctuality, and luxury.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Request Corporate Account</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="tel:914-XXX-XXXX">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/business-executive-getting-into-luxury-black-sedan.jpg"
                  alt="Corporate transportation service"
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Corporate Service Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tailored transportation solutions for your business needs
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

        {/* Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/professional-chauffeur-opening-car-door-for-busine.jpg"
                  alt="Professional chauffeur service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our Corporate Service</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Professional Chauffeurs</h3>
                      <p className="text-muted-foreground">
                        Experienced drivers with extensive knowledge of business districts and airports
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Punctuality Guaranteed</h3>
                      <p className="text-muted-foreground">
                        On-time service with real-time tracking and traffic monitoring
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Account Management</h3>
                      <p className="text-muted-foreground">
                        Dedicated support with monthly billing and volume discounts
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
              <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Business Travel?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Contact us today to set up your corporate account and experience premium transportation
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
