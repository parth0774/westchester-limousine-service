import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plane, Clock, MapPin, ArrowRight, Navigation } from "lucide-react"
import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Airport Limo Service Guide: Westchester to JFK, LGA, EWR | Westchester Limousine",
  description: "Complete guide to airport limo service from Westchester County to JFK, LaGuardia, and Newark airports. Route details, travel times, and booking information for airport limo service Westchester.",
  keywords: "airport limo Westchester JFK LGA, airport limo service Westchester, JFK limo service Westchester, LGA limo service, EWR limo service",
  alternates: {
    canonical: "/blog/airport-limo-service-guide-westchester-jfk-lga-ewr",
  },
  openGraph: {
    title: "Airport Limo Service Guide: Westchester to JFK, LGA, EWR",
    description: "Complete guide to airport limo service from Westchester County to JFK, LaGuardia, and Newark airports.",
    url: "https://westchesterlimousine.net/blog/airport-limo-service-guide-westchester-jfk-lga-ewr",
    type: "article",
  },
}

const airportRoutes = [
  {
    airport: "John F. Kennedy International Airport (JFK)",
    code: "JFK",
    distance: "~60 miles",
    travelTime: "60-90 minutes",
    description: "JFK is New York's busiest international airport, serving millions of travelers annually. Our JFK limo service Westchester provides reliable transportation with professional chauffeurs who know the fastest routes and monitor your flight in real-time.",
    cities: ["White Plains", "Scarsdale", "Yonkers", "New Rochelle"],
  },
  {
    airport: "LaGuardia Airport (LGA)",
    code: "LGA",
    distance: "~40 miles",
    travelTime: "45-75 minutes",
    description: "LaGuardia Airport is convenient for domestic flights and some international destinations. Our LGA limo service from Westchester ensures you arrive on time with comfortable, luxury transportation.",
    cities: ["White Plains", "Scarsdale", "Rye", "Tarrytown"],
  },
  {
    airport: "Newark Liberty International Airport (EWR)",
    code: "EWR",
    distance: "~65 miles",
    travelTime: "70-100 minutes",
    description: "Newark Airport offers excellent connectivity to international destinations. Our EWR limo service Westchester handles bridge traffic and tolls, ensuring a smooth journey across state lines.",
    cities: ["White Plains", "Yonkers", "Mount Vernon", "New Rochelle"],
  },
  {
    airport: "Westchester County Airport (HPN)",
    code: "HPN",
    distance: "Central Westchester",
    travelTime: "15-30 minutes",
    description: "Your local airport deserves local expertise. Our HPN limo service provides fast, convenient transportation to Westchester County Airport with intimate knowledge of the area.",
    cities: ["White Plains", "Scarsdale", "Rye", "Tarrytown", "Ossining"],
  },
]

export default function AirportLimoGuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Airport Limo Service Guide: Westchester to JFK, LGA, EWR",
    "description": "Complete guide to airport limo service from Westchester County to JFK, LaGuardia, and Newark airports.",
    "author": {
      "@type": "Organization",
      "name": "Westchester Limousine"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Westchester Limousine",
      "logo": {
        "@type": "ImageObject",
        "url": "https://westchesterlimousine.net/og-image.jpg"
      }
    },
    "datePublished": "2025-01-20",
    "dateModified": "2025-01-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://westchesterlimousine.net/blog/airport-limo-service-guide-westchester-jfk-lga-ewr"
    }
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Breadcrumbs
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
          items={[
            { label: "Blog", href: "/blog" },
            { label: "Airport Limo Guide", href: "/blog/airport-limo-service-guide-westchester-jfk-lga-ewr" }
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">AIRPORT TRANSPORTATION GUIDE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Airport Limo Service Guide: Westchester to JFK, LGA, EWR
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Planning your trip to New York's major airports? Our comprehensive guide covers everything you need to know about <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service Westchester</Link> to JFK, LaGuardia, and Newark airports. Learn about routes, travel times, and how to book reliable transportation.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traveling from Westchester County to New York's major airports can be stressful, especially when dealing with traffic, parking, and timing. That's where professional <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service Westchester</Link> makes all the difference. At Westchester Limousine, we provide reliable, comfortable transportation to JFK, LaGuardia, Newark, and Westchester County Airport.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service</Link> serves all of <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">Westchester County</Link>, including <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">airport limo service White Plains</Link>, <Link href="/service-areas/westchester-county-ny/scarsdale" className="text-accent hover:underline font-semibold">airport limo service Scarsdale</Link>, and <Link href="/service-areas/westchester-county-ny/yonkers" className="text-accent hover:underline font-semibold">airport limo service Yonkers</Link>. With real-time flight tracking and professional chauffeurs, we ensure you arrive on time, every time.
              </p>
            </div>
          </div>
        </section>

        {/* Airport Routes */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Airport Routes from Westchester County</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {airportRoutes.map((route, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Plane className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{route.airport}</CardTitle>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{route.distance}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{route.travelTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {route.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Popular Cities Served:</p>
                        <div className="flex flex-wrap gap-2">
                          {route.cities.map((city, idx) => (
                            <Link
                              key={idx}
                              href={`/service-areas/westchester-county-ny/${city.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-xs px-2 py-1 bg-accent/10 text-accent rounded hover:bg-accent/20 transition-colors"
                            >
                              {city}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/services/airport">
                          Book {route.code} Limo Service <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Airport Limo Service */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Why Choose Airport Limo Service from Westchester</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When traveling to JFK, LaGuardia, or Newark from Westchester County, our <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service Westchester</Link> offers numerous advantages over driving yourself or using ride-sharing services:
                </p>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground text-lg ml-4">
                  <li><strong className="text-foreground">Real-Time Flight Tracking:</strong> We monitor your flight status and adjust pickup times automatically for delays or early arrivals, ensuring you're never left waiting.</li>
                  <li><strong className="text-foreground">Professional Chauffeurs:</strong> Our experienced drivers know the fastest routes to each airport terminal, avoiding traffic and construction delays.</li>
                  <li><strong className="text-foreground">Luxury Vehicles:</strong> Travel in comfort with our fleet of luxury sedans and SUVs, equipped with amenities like Wi-Fi, phone chargers, and climate control.</li>
                  <li><strong className="text-foreground">Flat-Rate Pricing:</strong> No surge pricing or hidden fees. Our <Link href="/services/airport" className="text-accent hover:underline font-semibold">JFK limo service Westchester</Link> and <Link href="/services/airport" className="text-accent hover:underline font-semibold">LGA limo service</Link> offer transparent, flat-rate pricing.</li>
                  <li><strong className="text-foreground">Meet & Greet Service:</strong> Professional chauffeurs greet you at baggage claim with a nameplate, assist with luggage, and escort you to your vehicle.</li>
                  <li><strong className="text-foreground">24/7 Availability:</strong> Whether you have an early morning flight or a late-night arrival, our <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service</Link> is available around the clock.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Airport Limo Service Throughout Westchester County</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service Westchester</Link> covers all major cities and towns in the county. Popular routes include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">From White Plains</h3>
                  <p className="text-sm text-muted-foreground">
                    <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">Airport limo service White Plains</Link> to JFK, LGA, and EWR with convenient pickup from your home or office.
                  </p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">From Scarsdale</h3>
                  <p className="text-sm text-muted-foreground">
                    <Link href="/service-areas/westchester-county-ny/scarsdale" className="text-accent hover:underline font-semibold">Airport limo service Scarsdale</Link> providing reliable transportation to all major NYC airports.
                  </p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">From Yonkers</h3>
                  <p className="text-sm text-muted-foreground">
                    <Link href="/service-areas/westchester-county-ny/yonkers" className="text-accent hover:underline font-semibold">Airport limo service Yonkers</Link> with professional chauffeurs and luxury vehicles for your airport transfer.
                  </p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">From New Rochelle</h3>
                  <p className="text-sm text-muted-foreground">
                    <Link href="/service-areas/westchester-county-ny/new-rochelle" className="text-accent hover:underline font-semibold">Airport limo service New Rochelle</Link> connecting you to JFK, LaGuardia, and Newark airports.
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In addition to airport transportation, we also provide <Link href="/services/corporate" className="text-accent hover:underline font-semibold">corporate limo service</Link> for business travelers and <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service</Link> for special occasions. Explore our complete <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">limo service Westchester County</Link> coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Related Articles & Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-accent" />
                      Airport Transportation Guide
                    </CardTitle>
                    <CardDescription>
                      Complete guide to reliable <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service</Link> from Westchester to all major NYC airports.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/blog/airport-transportation-westchester-county-guide">
                        Read Full Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Navigation className="h-5 w-5 text-accent" />
                      Airport Services
                    </CardTitle>
                    <CardDescription>
                      Learn more about our comprehensive <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service Westchester</Link> offerings.
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
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Airport Transfer?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Experience reliable and comfortable <Link href="/services/airport" className="text-accent font-semibold hover:underline">airport limo service Westchester</Link> to JFK, LaGuardia, Newark, and HPN. Book your ride today and travel with confidence.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Airport Limo Service</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

