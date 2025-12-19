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

  // Use SEO content if available, otherwise use default
  const title = city.seoContent?.seoTitle || `Limousine Service in ${city.name}, ${area.name} | Westchester Limousine`
  const description = city.seoContent?.metaDescription || `${city.description} Professional chauffeur services for ${city.name} residents and businesses. Airport transfers, corporate transportation, and luxury event services.`

  return {
    title,
    description,
    keywords: `limousine service ${city.name}, car service ${city.name}, chauffeur ${city.name} ${area.name}, airport transportation ${city.name}, limo ${city.name}, black car service ${city.name}`,
    openGraph: {
      title: city.seoContent?.seoTitle || `Premium Limousine Service in ${city.name}, ${area.name}`,
      description: city.seoContent?.metaDescription || city.description,
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
                {city.seoContent?.seoTitle?.split(" | ")[0] || `Limousine Service in ${city.name}`}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {city.description}
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        {city.seoContent?.content && (() => {
          const parseContent = (content: string) => {
            const sections: JSX.Element[] = []
            const allBlocks = content.split('\n\n').filter(b => b.trim())
            
            let currentSection: { title?: string; paragraphs: string[]; lists: { header?: string; items: string[] }[] } = {
              paragraphs: [],
              lists: []
            }
            let sectionIndex = 0

            allBlocks.forEach((block, idx) => {
              const trimmed = block.trim()
              if (!trimmed) return

              const lines = trimmed.split('\n').map(l => l.trim()).filter(l => l)
              
              // Check for main section headings
              const mainHeadingPatterns = [
                'Luxury Limousine Services for',
                'Airport Transportation from',
                'Corporate & Business Limousine Services',
                'Special Event & Wedding Limousine Services',
                'Our Premium Fleet',
                'Why Choose Our',
                'Serving',
                'Book Your'
              ]
              
              const isMainHeading = mainHeadingPatterns.some(pattern => trimmed.startsWith(pattern))
              
              // Check for subheadings
              const subHeadings = ['Airports We Serve', 'What Sets Us Apart']
              const isSubHeading = subHeadings.some(pattern => trimmed === pattern)
              
              // Check if it's a list
              const hasListHeader = trimmed.includes('ideal for:') || trimmed.includes('include:') || trimmed.includes('serve:')
              const potentialListItems = lines.filter(line => 
                line.length < 60 && 
                /^[A-Z][a-z]/.test(line) && 
                !line.includes('.') &&
                !line.includes('?') &&
                !line.includes(':') &&
                !isSubHeading
              )
              const isList = hasListHeader || (lines.length > 1 && potentialListItems.length >= 2)

              if (isMainHeading) {
                // Save previous section if it has content
                if (currentSection.paragraphs.length > 0 || currentSection.lists.length > 0) {
                  sections.push(renderSection(currentSection, sectionIndex++))
                  currentSection = { paragraphs: [], lists: [] }
                }
                currentSection.title = trimmed
              } else if (isSubHeading) {
                // Add subheading as a paragraph with special styling
                currentSection.paragraphs.push(`<h3>${trimmed}</h3>`)
              } else if (isList && lines.length > 1) {
                const headerLine = lines.find(l => l.includes('ideal for:') || l.includes('include:') || l.includes('serve:'))
                const listItems = lines.filter(line => {
                  const isHeader = line.includes('ideal for:') || line.includes('include:') || line.includes('serve:')
                  return !isHeader && line.length < 60 && /^[A-Z]/.test(line)
                })
                
                if (listItems.length > 0) {
                  currentSection.lists.push({
                    header: headerLine,
                    items: listItems
                  })
                } else {
                  currentSection.paragraphs.push(trimmed)
                }
              } else {
                // Regular paragraph
                currentSection.paragraphs.push(trimmed)
              }
            })

            // Add the last section
            if (currentSection.paragraphs.length > 0 || currentSection.lists.length > 0) {
              sections.push(renderSection(currentSection, sectionIndex))
            }

            return sections
          }

          const renderSection = (section: { title?: string; paragraphs: string[]; lists: { header?: string; items: string[] }[] }, index: number) => {
            return (
              <div key={index} className="mb-8">
                {section.title && (
                  <div className="bg-card border border-border rounded-lg p-6 mb-6 hover:border-accent/50 hover:shadow-lg transition-all">
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                )}
                <div className="space-y-6">
                  {section.paragraphs.map((para, pIdx) => {
                    if (para.startsWith('<h3>')) {
                      const headingText = para.replace('<h3>', '').replace('</h3>', '')
                      return (
                        <div key={pIdx} className="bg-secondary/50 rounded-lg p-4 border border-border">
                          <h3 className="text-xl font-semibold text-foreground">
                            {headingText}
                          </h3>
                        </div>
                      )
                    }
                    return (
                      <div key={pIdx} className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                        <p className="text-base text-foreground leading-relaxed">
                          {para}
                        </p>
                      </div>
                    )
                  })}
                  {section.lists.map((list, lIdx) => (
                    <div key={lIdx} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all">
                      {list.header && (
                        <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                          {list.header}
                        </h3>
                      )}
                      <ul className="space-y-3">
                        {list.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground leading-relaxed flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          return (
            <section className="py-16 bg-secondary/30">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <div className="text-foreground">
                    {parseContent(city.seoContent.content)}
                  </div>
                </div>
              </div>
            </section>
          )
        })()}

        {/* Quick Info Grid */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Travel Times */}
                {city.travelTimes.length > 0 && (
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      Travel Times
                    </h3>
                    <div className="space-y-3">
                      {city.travelTimes.slice(0, 4).map((time, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{time.destination}</span>
                          <span className="text-accent font-semibold">{time.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Routes */}
                {city.popularRoutes.length > 0 && (
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Navigation className="h-5 w-5 text-accent" />
                      Popular Routes
                    </h3>
                    <div className="space-y-3">
                      {city.popularRoutes.slice(0, 4).map((route, index) => (
                        <div key={index} className="text-sm">
                          <div className="text-foreground font-medium">{route.from} → {route.to}</div>
                          <div className="text-muted-foreground text-xs mt-1">{route.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Local Services */}
                {city.localServices.length > 0 && (
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Our Services
                    </h3>
                    <ul className="space-y-2">
                      {city.localServices.slice(0, 5).map((service, index) => (
                        <li key={index} className="text-sm text-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Local Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Landmarks */}
                {city.landmarks.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Landmark className="h-6 w-6 text-accent" />
                      Local Landmarks & Destinations
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {city.landmarks.map((landmark, index) => (
                        <div 
                          key={index}
                          className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors"
                        >
                          <span className="text-foreground font-medium text-sm">{landmark}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Business Districts & Attractions */}
                <div className="space-y-8">
                  {city.businessDistricts.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-accent" />
                        Business Districts
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {city.businessDistricts.map((district, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors"
                          >
                            <span className="text-foreground font-medium text-sm">{district}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {city.nearbyAttractions.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-accent" />
                        Nearby Attractions
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {city.nearbyAttractions.map((attraction, index) => (
                          <div 
                            key={index}
                            className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors"
                          >
                            <span className="text-foreground font-medium text-sm">{attraction}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        {area.whyChoose && area.whyChoose.length > 0 && (
          <section className="py-16 bg-secondary/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Why Choose Westchester Limousine in {city.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {area.whyChoose.map((reason, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

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

