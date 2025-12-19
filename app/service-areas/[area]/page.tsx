import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, Plane, Building2, CheckCircle, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { areaData } from "@/lib/service-areas-data"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export async function generateMetadata({ params }: { params: { area: string } }): Promise<Metadata> {
  const area = areaData[params.area]
  
  if (!area) {
    return {
      title: "Service Area Not Found | Westchester Limousine",
    }
  }

  return {
    title: `Limousine Service in ${area.name} | Westchester Limousine`,
    description: `${area.description} Professional chauffeur services for ${area.cities.map(c => c.name).join(", ")} and surrounding areas.`,
    keywords: `limousine service ${area.name}, car service ${area.name}, chauffeur ${area.name}, airport transportation ${area.name}, ${area.cities.map(c => `limo ${c.name}`).join(", ")}`,
    openGraph: {
      title: `Premium Limousine Service in ${area.name} | Westchester Limousine`,
      description: area.description,
      url: `https://westchesterlimousine.net/service-areas/${params.area}/`,
      siteName: "Westchester Limousine",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://westchesterlimousine.net/service-areas/${params.area}/`,
    },
  }
}

// Generate static params for all service areas
export function generateStaticParams() {
  return [
    { area: "westchester-county-ny" },
    { area: "putnam-county-ny" },
    { area: "dutchess-county-ny" },
    { area: "fairfield-county-ct" },
    { area: "new-york-city-metro-area" },
  ]
}

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = areaData[params.area]

  if (!area) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Breadcrumbs 
                items={[
                  { label: "Service Areas", href: "/#service-areas" },
                  { label: area.name }
                ]}
              />
              <Link 
                href="/#service-areas" 
                className="inline-flex items-center text-muted-foreground hover:text-accent mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Service Areas
              </Link>
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">SERVICE AREA</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {area.name}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {area.description}
              </p>
            </div>
          </div>
        </section>

        {/* Cities Served */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Cities We Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {area.cities.map((city, index) => (
                  <Link
                    key={index}
                    href={`/service-areas/${params.area}/${city.slug}/`}
                    className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer group"
                  >
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium group-hover:text-accent transition-colors">{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Services Available</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {area.serviceTypes.map((service, index) => (
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

        {/* Popular Destinations */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Popular Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {area.popularDestinations.map((dest, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      {dest.name.includes("Airport") ? (
                        <Plane className="h-6 w-6 text-accent" />
                      ) : (
                        <Building2 className="h-6 w-6 text-accent" />
                      )}
                      <h3 className="text-xl font-bold text-foreground">{dest.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{dest.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Travel Times */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Estimated Travel Times</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {area.travelTime.map((time, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="text-foreground font-medium">{time.destination}</span>
                    </div>
                    <span className="text-accent font-semibold">{time.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Westchester Limousine</h2>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Transportation?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Experience luxury and reliability with Westchester Limousine. Book your ride today and let us take care of your transportation needs in {area.name}.
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

