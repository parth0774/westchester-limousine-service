import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Briefcase, Clock, Users, Shield, Phone, Calendar, ArrowRight } from "lucide-react"
import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

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

export const metadata: Metadata = {
  title: "Corporate Car Service | Westchester Limousine",
  description: "Executive corporate transportation for business travel, meetings, and events. Professional chauffeurs and corporate accounts available.",
  alternates: {
    canonical: "/services/corporate",
  },
}

export default function CorporatePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Executive Corporate Transportation Service",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://westchesterlimousine.net",
      "name": "Westchester Limousine"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "New York"
      },
      {
        "@type": "State",
        "name": "Connecticut"
      },
      {
        "@type": "City",
        "name": "New York City"
      }
    ],
    "description": "Executive corporate transportation for business travel, meetings, and events. Professional chauffeurs and corporate accounts available.",
    "url": "https://westchesterlimousine.net/services/corporate"
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        <Breadcrumbs
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
          items={[
            { label: "Services", href: "/services" },
            { label: "Corporate Travel", href: "/services/corporate" },
          ]}
        />
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
                  punctuality, and luxury. Our <Link href="/services/corporate" className="text-accent hover:underline font-semibold">executive limo service Westchester</Link> serves <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">corporate limo service Scarsdale</Link>, <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">corporate limo service White Plains</Link>, and <Link href="/service-areas/westchester-county-ny/yonkers" className="text-accent hover:underline font-semibold">corporate limo service Yonkers</Link> with professional chauffeurs and luxury vehicles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Request Corporate Account</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="tel:914-222-1919">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (914) 222-1919
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
                        Experienced drivers with extensive knowledge of business districts and airports. Our <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service</Link> complements our corporate transportation, ensuring seamless travel for business executives.
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

        {/* Related Content */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Learn More About Corporate Transportation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Corporate Services Guide
                    </CardTitle>
                    <CardDescription>
                      Professional executive transportation for Westchester County business travelers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/blog/corporate-limousine-services-westchester-ny">
                        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-accent" />
                      Airport Services
                    </CardTitle>
                    <CardDescription>
                      Reliable airport transfers for business executives traveling to JFK, LGA, and Newark.
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
