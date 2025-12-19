"use client"

import { MapPin, Plane, Building2, Navigation } from "lucide-react"
import Link from "next/link"

const primaryAreas = [
  { name: "Westchester County, NY", slug: "westchester-county-ny" },
  { name: "Putnam County, NY", slug: "putnam-county-ny" },
  { name: "Dutchess County, NY", slug: "dutchess-county-ny" },
  { name: "Fairfield County, CT", slug: "fairfield-county-ct" },
  { name: "New York City Metro Area", slug: "new-york-city-metro-area" }
]

const destinations = [
  { name: "JFK International Airport", location: "New York, NY", icon: Plane },
  { name: "LaGuardia Airport", location: "New York, NY", icon: Plane },
  { name: "Newark Liberty Airport", location: "New Jersey", icon: Plane },
  { name: "Westchester County Airport", location: "HPN", icon: Plane },
  { name: "New York City", location: "Manhattan, Bronx, Brooklyn, Queens", icon: Building2 },
  { name: "Connecticut Cities", location: "Stamford, Greenwich, Danbury", icon: Building2 }
]

export function ServiceHome() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      id="service-areas"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta
        itemProp="serviceType"
        content="Chauffeured Transportation Service in Westchester County and surrounding areas"
      />
      <meta
        itemProp="provider"
        content="Westchester Limousine"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-sm font-semibold text-accent">WHERE WE SERVE</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Westchester Limousine proudly provides premium chauffeured transportation services to clients throughout Westchester County and beyond. We cater to corporate clients, travelers, and individuals seeking reliable, luxurious transportation for business, leisure, or special events.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Primary Service Areas */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-accent to-accent/70 p-4 rounded-xl shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Primary Service Areas
            </h3>
            <div className="space-y-3">
              {primaryAreas.map((area, index) => (
                <Link
                  key={index}
                  href={`/service-areas/${area.slug}/`}
                  className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer group"
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <span className="text-foreground font-medium group-hover:text-accent transition-colors">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-accent to-accent/70 p-4 rounded-xl shadow-lg">
                <Navigation className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Popular Destinations
            </h3>
            <div className="space-y-3">
              {destinations.map((dest, index) => {
                const Icon = dest.icon
                return (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors group"
                  >
                    <div className="bg-accent/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-foreground font-medium">{dest.name}</div>
                      <div className="text-sm text-muted-foreground">{dest.location}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              At Westchester Limousine, we understand the importance of <strong className="text-foreground">reliability, safety, and comfort</strong> when traveling to and from your desired destinations. Our professional chauffeurs know these service areas inside and out, ensuring you arrive on time, every time.
            </p>
            <p>
              Whether you are traveling to the airports for business or leisure, attending a corporate event, or enjoying a night out in New York City, we tailor our service to your needs. Our vehicles are <strong className="text-foreground">meticulously maintained and equipped</strong> for comfort and safety, providing you with a premium travel experience.
            </p>
            <p>
              Choosing Westchester Limousine for your travel needs means choosing a company committed to <strong className="text-foreground">excellence, local expertise, and unmatched customer service</strong>. Serving Westchester, Putnam, Dutchess, Fairfield Counties, and the greater New York City area, we bring the luxury and reliability you deserve wherever you go.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-xl shadow-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:scale-105"
            >
              Book Your Ride Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}