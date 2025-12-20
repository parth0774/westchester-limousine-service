import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, Plane, Building2, CheckCircle, ArrowLeft, Navigation, Landmark } from "lucide-react"
import { notFound } from "next/navigation"
import { areaData, getAllCities } from "@/lib/service-areas-data"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export function generateStaticParams() {
  return getAllCities()
}

export async function generateMetadata({ params }: { params: { area: string; city: string } }): Promise<Metadata> {
  const area = areaData[params.area]
  const city = area?.cities.find(c => c.slug === params.city)
  
  if (!area || !city) {
    return {
      title: "City Not Found | Westchester Limousine",
    }
  }

  const title = city.seoContent 
    ? `Westchester Limousine Service in ${city.name}, ${area.name} | Professional Transportation`
    : `Limousine Service in ${city.name}, ${area.name} | Westchester Limousine`
  const description = city.seoContent?.introduction 
    ? city.seoContent.introduction.substring(0, 155) + "..."
    : `${city.description} Professional chauffeur services for ${city.name} residents and businesses. Airport transfers, corporate transportation, and luxury event services.`

  return {
    title,
    description,
    keywords: `limousine service ${city.name}, car service ${city.name}, chauffeur ${city.name} ${area.name}, airport transportation ${city.name}, limo ${city.name}, black car service ${city.name}`,
    openGraph: {
      title: `Premium Limousine Service in ${city.name}, ${area.name}`,
      description: city.description,
      url: `https://westchesterlimousine.net/service-areas/${params.area}/${params.city}/`,
      siteName: "Westchester Limousine",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://westchesterlimousine.net/service-areas/${params.area}/${params.city}/`,
    },
  }
}

export default function CityPage({ params }: { params: { area: string; city: string } }) {
  const area = areaData[params.area]
  const city = area?.cities.find(c => c.slug === params.city)

  if (!area || !city) {
    notFound()
  }

  // Structured data for LocalBusiness
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Westchester Limousine",
    "description": `Professional limousine and chauffeur services in ${city.name}, ${area.name}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": area.name.includes("NY") ? "NY" : area.name.includes("CT") ? "CT" : "NY",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "serviceType": city.localServices,
    "url": `https://westchesterlimousine.net/service-areas/${params.area}/${params.city}/`
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs 
                items={[
                  { label: "Service Areas", href: "/#service-areas" },
                  { label: area.name, href: `/service-areas/${params.area}/` },
                  { label: city.name }
                ]}
              />
              <Link 
                href={`/service-areas/${params.area}/`}
                className="inline-flex items-center text-muted-foreground hover:text-accent mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {area.name}
              </Link>
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">CITY SERVICE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Limousine Service in {city.name}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {city.description}
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        {city.seoContent && (
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                {/* Introduction */}
                {city.seoContent.introduction && (
                  <div className="mb-16">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {city.seoContent.introduction}
                    </p>
                  </div>
                )}
                
                {/* Sections */}
                {city.seoContent.sections && city.seoContent.sections.map((section, index) => (
                  <div key={index} className={`mb-16 ${index > 0 ? 'pt-16 border-t border-border' : ''}`}>
                    {/* Section Header and Content */}
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                        {section.title}
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                    
                    {/* Items List - Card Style */}
                    {section.items && section.items.length > 0 && (
                      <div className="mt-8 p-6 md:p-8 bg-card border border-border rounded-lg shadow-sm">
                        <ul className="space-y-4">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-4">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Local Landmarks */}
        {city.landmarks.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Local Landmarks & Destinations</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {city.landmarks.map((landmark, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <Landmark className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Popular Routes */}
        {city.popularRoutes.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Popular Routes from {city.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.popularRoutes.map((route, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Navigation className="h-6 w-6 text-accent" />
                        <h3 className="text-xl font-bold text-foreground">{route.from} → {route.to}</h3>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-accent font-semibold">{route.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Local Services */}
        {city.localServices.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Services Available in {city.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.localServices.map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Business Districts */}
        {city.businessDistricts.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Business Districts in {city.name}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {city.businessDistricts.map((district, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
                    >
                      <Building2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{district}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Nearby Attractions */}
        {city.nearbyAttractions.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nearby Attractions</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {city.nearbyAttractions.map((attraction, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Travel Times */}
        {city.travelTimes.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Estimated Travel Times from {city.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {city.travelTimes.map((time, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {time.destination.includes("Airport") ? (
                          <Plane className="h-5 w-5 text-accent" />
                        ) : (
                          <Clock className="h-5 w-5 text-accent" />
                        )}
                        <span className="text-foreground font-medium">{time.destination}</span>
                      </div>
                      <span className="text-accent font-semibold">{time.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Westchester Limousine in {city.name}</h2>
              <div className="space-y-4">
                {area.whyChoose.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-card border border-border rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Transportation in {city.name}?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Experience luxury and reliability with Westchester Limousine. Book your ride today and let us take care of your transportation needs in {city.name}, {area.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/booking">Book Online Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

