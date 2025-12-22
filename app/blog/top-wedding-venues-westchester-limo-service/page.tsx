import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Heart, Star, ArrowRight, Calendar } from "lucide-react"
import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Top 10 Wedding Venues in Westchester NY for Limo Service | Westchester Limousine",
  description: "Discover the top wedding venues in Westchester County, NY and learn how our wedding limo service Westchester enhances your special day. Professional transportation to premier venues.",
  keywords: "wedding venues Westchester limo service, wedding limo service Westchester, limo service Westchester County, wedding transportation Westchester NY",
  alternates: {
    canonical: "/blog/top-wedding-venues-westchester-limo-service",
  },
  openGraph: {
    title: "Top 10 Wedding Venues in Westchester NY for Limo Service",
    description: "Discover the top wedding venues in Westchester County, NY and learn how our wedding limo service Westchester enhances your special day.",
    url: "https://westchesterlimousine.net/blog/top-wedding-venues-westchester-limo-service",
    type: "article",
  },
}

const weddingVenues = [
  {
    name: "The Ritz-Carlton, Westchester",
    location: "White Plains, NY",
    description: "Luxury hotel venue with elegant ballrooms and impeccable service. Our wedding limo service Westchester provides seamless transportation for your guests.",
    citySlug: "white-plains",
  },
  {
    name: "The Tarrytown House Estate",
    location: "Tarrytown, NY",
    description: "Historic estate with stunning Hudson River views. Perfect for couples seeking a romantic setting with our wedding limo Tarrytown service.",
    citySlug: "tarrytown",
  },
  {
    name: "The Sleepy Hollow Country Club",
    location: "Scarborough, NY",
    description: "Exclusive country club setting with beautiful grounds. Our wedding limo Scarsdale service ensures elegant arrivals for your celebration.",
    citySlug: "scarsdale",
  },
  {
    name: "The Westchester Marriott",
    location: "Tarrytown, NY",
    description: "Modern hotel venue with versatile event spaces. Reliable wedding limo service connects your guests to this premier location.",
    citySlug: "tarrytown",
  },
  {
    name: "The Castle at Tarrytown",
    location: "Tarrytown, NY",
    description: "Medieval-style castle venue offering unique wedding experiences. Our professional chauffeurs ensure a memorable arrival.",
    citySlug: "tarrytown",
  },
  {
    name: "The Brae Burn Country Club",
    location: "Purchase, NY",
    description: "Prestigious country club with championship golf course. Wedding limo service Purchase provides luxury transportation for your special day.",
    citySlug: "white-plains",
  },
  {
    name: "The DoubleTree by Hilton Tarrytown",
    location: "Tarrytown, NY",
    description: "Riverside hotel with elegant event spaces. Our wedding limo service ensures all guests arrive on time and in style.",
    citySlug: "tarrytown",
  },
  {
    name: "The Westchester Country Club",
    location: "Rye, NY",
    description: "Historic country club with beautiful waterfront views. Professional wedding limo Rye service complements this elegant venue.",
    citySlug: "rye",
  },
  {
    name: "The Glen Island Harbour Club",
    location: "New Rochelle, NY",
    description: "Waterfront venue with stunning Long Island Sound views. Our wedding limo New Rochelle service provides reliable transportation.",
    citySlug: "new-rochelle",
  },
  {
    name: "The Abigail Kirsch at Tappan Hill",
    location: "Tarrytown, NY",
    description: "Historic mansion with beautiful gardens and Hudson River views. Wedding limo service Tarrytown ensures elegant arrivals.",
    citySlug: "tarrytown",
  },
]

export default function TopWeddingVenuesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Top 10 Wedding Venues in Westchester NY for Limo Service",
    "description": "Discover the top wedding venues in Westchester County, NY and learn how our wedding limo service Westchester enhances your special day.",
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
      "@id": "https://westchesterlimousine.net/blog/top-wedding-venues-westchester-limo-service"
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
            { label: "Top Wedding Venues", href: "/blog/top-wedding-venues-westchester-limo-service" }
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">WEDDING GUIDE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Top 10 Wedding Venues in Westchester NY for Limo Service
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Planning your dream wedding in Westchester County? Discover the most sought-after wedding venues and learn how our <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service Westchester</Link> can make your special day even more memorable. From historic estates to luxury hotels, these venues offer the perfect backdrop for your celebration.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Westchester County, New York, is home to some of the most beautiful and prestigious wedding venues in the region. Whether you're planning an intimate gathering or a grand celebration, choosing the right venue is crucial. Equally important is ensuring your guests arrive in style and on time with professional <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service Westchester</Link>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Westchester Limousine, we specialize in providing luxury transportation for weddings throughout <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">Westchester County</Link>. Our <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service</Link> ensures that you, your wedding party, and your guests arrive at your chosen venue in comfort and elegance. From <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">wedding limo White Plains</Link> to <Link href="/service-areas/westchester-county-ny/tarrytown" className="text-accent hover:underline font-semibold">wedding limo Tarrytown</Link>, we serve all major wedding destinations.
              </p>
            </div>
          </div>
        </section>

        {/* Venues List */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Premier Wedding Venues in Westchester County</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {weddingVenues.map((venue, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                            <span className="text-accent font-bold text-sm">{index + 1}</span>
                          </div>
                          <CardTitle className="text-xl">{venue.name}</CardTitle>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{venue.location}</span>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {venue.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link 
                        href={`/service-areas/westchester-county-ny/${venue.citySlug}`}
                        className="text-accent hover:underline font-semibold text-sm"
                      >
                        Learn about limo service in {venue.location.split(',')[0]} →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Wedding Limo Service */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Why Choose Wedding Limo Service for Your Westchester Venue</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When planning your wedding at one of these premier venues, reliable transportation is essential. Our <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service Westchester</Link> offers several advantages:
                </p>
                <ul className="list-disc list-inside space-y-3 text-muted-foreground text-lg ml-4">
                  <li><strong className="text-foreground">Punctual Arrivals:</strong> Our professional chauffeurs ensure you and your wedding party arrive on time, eliminating stress on your special day.</li>
                  <li><strong className="text-foreground">Luxury Fleet:</strong> Choose from our elegant sedans, spacious SUVs, or executive shuttles to accommodate your wedding party size.</li>
                  <li><strong className="text-foreground">Local Expertise:</strong> Our drivers know all the best routes to Westchester wedding venues, including <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">wedding limo White Plains</Link> and <Link href="/service-areas/westchester-county-ny/tarrytown" className="text-accent hover:underline font-semibold">wedding limo Tarrytown</Link> services.</li>
                  <li><strong className="text-foreground">Guest Transportation:</strong> Coordinate transportation for your wedding guests, ensuring everyone arrives safely and on time.</li>
                  <li><strong className="text-foreground">Special Occasion Service:</strong> We understand the importance of your wedding day and provide personalized service to make it perfect.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Wedding Limo Service Throughout Westchester County</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service Westchester</Link> covers all major wedding destinations in the county. Whether your venue is in <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">White Plains</Link>, <Link href="/service-areas/westchester-county-ny/scarsdale" className="text-accent hover:underline font-semibold">Scarsdale</Link>, <Link href="/service-areas/westchester-county-ny/tarrytown" className="text-accent hover:underline font-semibold">Tarrytown</Link>, <Link href="/service-areas/westchester-county-ny/rye" className="text-accent hover:underline font-semibold">Rye</Link>, or <Link href="/service-areas/westchester-county-ny/new-rochelle" className="text-accent hover:underline font-semibold">New Rochelle</Link>, we provide reliable and elegant transportation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In addition to wedding transportation, we also offer <Link href="/services/airport" className="text-accent hover:underline font-semibold">airport limo service</Link> for out-of-town guests and <Link href="/services/corporate" className="text-accent hover:underline font-semibold">corporate transportation</Link> for business events. Our comprehensive <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">limo service Westchester County</Link> ensures you have transportation solutions for every aspect of your wedding celebration.
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
                      <Heart className="h-5 w-5 text-accent" />
                      Wedding Limo Services Guide
                    </CardTitle>
                    <CardDescription>
                      Complete guide to <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service Westchester</Link> for your special day.
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
                      <Calendar className="h-5 w-5 text-accent" />
                      Event Transportation
                    </CardTitle>
                    <CardDescription>
                      Learn more about our <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding and event limo service</Link> options.
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
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Wedding Transportation?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Make your wedding day perfect with our <Link href="/services/events" className="text-accent font-semibold hover:underline">wedding limo service Westchester</Link>. Contact us today to discuss your transportation needs for your special day.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Wedding Limo Service</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

