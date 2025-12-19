import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

const serviceAreas = [
  {
    name: "Westchester County, NY",
    slug: "westchester-county-ny",
    description: "Comprehensive luxury transportation services throughout Westchester County",
    cities: ["White Plains", "Yonkers", "Mount Vernon", "New Rochelle", "Peekskill", "Ossining", "Tarrytown", "Scarsdale"],
    features: ["Corporate Transportation", "Airport Transfers", "Event Services", "Hourly Chauffeur Service"]
  },
  {
    name: "Putnam County, NY",
    slug: "putnam-county-ny",
    description: "Reliable limousine and black car services across Putnam County",
    cities: ["Carmel", "Mahopac", "Brewster", "Putnam Valley", "Cold Spring", "Garrison"],
    features: ["Airport Shuttles", "Wedding Transportation", "Corporate Travel", "Special Events"]
  },
  {
    name: "Dutchess County, NY",
    slug: "dutchess-county-ny",
    description: "Premium transportation solutions for Dutchess County residents and businesses",
    cities: ["Poughkeepsie", "Beacon", "Fishkill", "Wappingers Falls", "Hyde Park", "Rhinebeck"],
    features: ["Long Distance Travel", "Corporate Services", "Airport Transfers", "Group Transportation"]
  },
  {
    name: "Fairfield County, CT",
    slug: "fairfield-county-ct",
    description: "Professional chauffeur services connecting Connecticut to New York",
    cities: ["Stamford", "Greenwich", "Danbury", "Norwalk", "Bridgeport", "Fairfield"],
    features: ["Cross-State Travel", "Corporate Executives", "Airport Services", "Luxury Events"]
  },
  {
    name: "New York City Metro Area",
    slug: "new-york-city-metro-area",
    description: "Complete coverage of Manhattan, Brooklyn, Queens, Bronx, and Staten Island",
    cities: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    features: ["City Navigation", "Corporate Meetings", "Entertainment Venues", "24/7 Service"]
  }
]

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">SERVICE AREAS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Where We Serve
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Westchester Limousine provides premium chauffeured transportation services 
                throughout Westchester County and the greater Tri-State Area. Click on any 
                area below to learn more about our services in that region.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group"
                >
                  <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-gradient-to-br from-accent to-accent/70 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-accent transition-colors">
                      {area.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {area.description}
                    </p>
                    <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Ride?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Whether you're traveling to the airport, attending a corporate event, or celebrating a special occasion, 
                we're here to provide you with luxury transportation services.
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

