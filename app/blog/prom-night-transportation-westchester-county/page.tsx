import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Star, Users, ArrowRight, Calendar, Shield } from "lucide-react"
import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Best Prom Night Transportation in Westchester County | Westchester Limousine",
  description: "Complete guide to prom limo service Westchester County. Safe, reliable, and stylish transportation for prom night with professional chauffeurs and luxury vehicles.",
  keywords: "prom limo Westchester, prom limo service Westchester County, prom transportation Westchester NY, prom night limo service",
  alternates: {
    canonical: "/blog/prom-night-transportation-westchester-county",
  },
  openGraph: {
    title: "Best Prom Night Transportation in Westchester County",
    description: "Complete guide to prom limo service Westchester County for a safe and memorable prom night experience.",
    url: "https://westchesterlimousine.net/blog/prom-night-transportation-westchester-county",
    type: "article",
  },
}

const promTips = [
  {
    title: "Book Early",
    description: "Prom season is busy, so reserve your prom limo service Westchester well in advance to ensure availability for your special night.",
  },
  {
    title: "Choose the Right Vehicle",
    description: "Consider your group size when selecting a vehicle. Our luxury sedans accommodate couples, while SUVs and vans are perfect for larger groups.",
  },
  {
    title: "Plan Your Route",
    description: "Coordinate pickup and drop-off locations with your group. Our professional chauffeurs ensure everyone arrives on time and safely.",
  },
  {
    title: "Safety First",
    description: "All our chauffeurs are background-checked and trained in safe driving practices. Your safety is our top priority on prom night.",
  },
]

const popularPromCities = [
  {
    name: "White Plains",
    description: "Home to several high schools hosting prom events. Our prom limo service White Plains provides reliable transportation for students.",
    citySlug: "white-plains",
  },
  {
    name: "Scarsdale",
    description: "Prestigious schools in Scarsdale host elegant prom celebrations. Professional prom limo service ensures students arrive in style.",
    citySlug: "scarsdale",
  },
  {
    name: "Yonkers",
    description: "Large student population makes prom limo service Yonkers essential for safe and reliable transportation on prom night.",
    citySlug: "yonkers",
  },
  {
    name: "New Rochelle",
    description: "Multiple high schools in New Rochelle require professional transportation. Our prom limo service New Rochelle serves all schools.",
    citySlug: "new-rochelle",
  },
  {
    name: "Rye",
    description: "Elegant prom celebrations in Rye deserve luxury transportation. Professional prom limo service ensures a memorable arrival.",
    citySlug: "rye",
  },
]

export default function PromNightTransportationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Prom Night Transportation in Westchester County",
    "description": "Complete guide to prom limo service Westchester County for a safe and memorable prom night experience.",
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
      "@id": "https://westchesterlimousine.net/blog/prom-night-transportation-westchester-county"
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
            { label: "Prom Transportation Guide", href: "/blog/prom-night-transportation-westchester-county" }
          ]}
        />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">PROM NIGHT GUIDE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Best Prom Night Transportation in Westchester County
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Make your prom night unforgettable with safe, reliable, and stylish transportation. Our <Link href="/services/events" className="text-accent hover:underline font-semibold">prom limo service Westchester County</Link> ensures you arrive in style and return home safely after your special celebration.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Prom night is one of the most memorable events in a student's high school experience. From getting ready with friends to the grand entrance at the venue, every moment matters. Professional <Link href="/services/events" className="text-accent hover:underline font-semibold">prom limo service Westchester</Link> adds elegance to your special night while ensuring safety and reliability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Westchester Limousine, we specialize in providing safe and stylish transportation for prom night throughout <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">Westchester County</Link>. Our <Link href="/services/events" className="text-accent hover:underline font-semibold">prom limo service</Link> serves students in <Link href="/service-areas/westchester-county-ny/white-plains" className="text-accent hover:underline font-semibold">White Plains</Link>, <Link href="/service-areas/westchester-county-ny/scarsdale" className="text-accent hover:underline font-semibold">Scarsdale</Link>, <Link href="/service-areas/westchester-county-ny/yonkers" className="text-accent hover:underline font-semibold">Yonkers</Link>, and all surrounding areas. With professional chauffeurs and luxury vehicles, we make your prom night perfect.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Prom Limo Service */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Prom Limo Service for Your Special Night</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promTips.map((tip, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-accent" />
                        {tip.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {tip.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Prom Limo Service Throughout Westchester County</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {popularPromCities.map((city, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-accent" />
                        Prom Limo Service {city.name}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {city.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link 
                        href={`/service-areas/westchester-county-ny/${city.citySlug}`}
                        className="text-accent hover:underline font-semibold text-sm"
                      >
                        Learn about limo service in {city.name} →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Reliability */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Safety & Reliability for Prom Night</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Safety is our top priority, especially for prom night transportation. Our <Link href="/services/events" className="text-accent hover:underline font-semibold">prom limo service Westchester County</Link> includes:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground text-lg ml-4">
                <li><strong className="text-foreground">Background-Checked Chauffeurs:</strong> All our drivers undergo thorough background checks and professional training to ensure your safety.</li>
                <li><strong className="text-foreground">Fully Licensed & Insured:</strong> Our vehicles and drivers are fully licensed and insured, providing peace of mind for parents and students.</li>
                <li><strong className="text-foreground">Luxury Fleet:</strong> Choose from our immaculate fleet of luxury sedans, SUVs, and executive shuttles, all maintained to the highest standards.</li>
                <li><strong className="text-foreground">Punctual Service:</strong> We understand the importance of arriving on time for prom. Our professional chauffeurs ensure timely pickups and drop-offs.</li>
                <li><strong className="text-foreground">24/7 Support:</strong> Our customer service team is available around the clock to assist with any questions or concerns.</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                In addition to <Link href="/services/events" className="text-accent hover:underline font-semibold">prom limo service</Link>, we also provide <Link href="/services/wedding" className="text-accent hover:underline font-semibold">wedding limo service</Link> for other special occasions. Our comprehensive <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">limo service Westchester County</Link> covers all your transportation needs.
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
                      Wedding Limo Services
                    </CardTitle>
                    <CardDescription>
                      Learn about our <Link href="/services/events" className="text-accent hover:underline font-semibold">wedding limo service Westchester</Link> for other special occasions.
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
                      Explore our comprehensive <Link href="/services/events" className="text-accent hover:underline font-semibold">event and prom limo service</Link> options.
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
              <h2 className="text-3xl font-bold mb-6">Make Your Prom Night Unforgettable</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Book your <Link href="/services/events" className="text-accent font-semibold hover:underline">prom limo service Westchester County</Link> today and ensure a safe, stylish, and memorable prom night experience. Contact us to discuss your transportation needs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Prom Limo Service</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

