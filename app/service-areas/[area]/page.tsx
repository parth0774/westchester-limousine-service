import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, Plane, Building2, CheckCircle, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const areaData: Record<string, {
  name: string
  description: string
  cities: string[]
  features: string[]
  popularDestinations: { name: string; description: string }[]
  travelTime: { destination: string; time: string }[]
  serviceTypes: string[]
  whyChoose: string[]
}> = {
  "westchester-county-ny": {
    name: "Westchester County, NY",
    description: "Westchester Limousine has been serving Westchester County since 1995, providing premium transportation services to residents, businesses, and visitors throughout the region. Our local expertise and deep knowledge of Westchester's roads and traffic patterns ensure timely and efficient service.",
    cities: ["White Plains", "Yonkers", "Mount Vernon", "New Rochelle", "Peekskill", "Ossining", "Tarrytown", "Scarsdale", "Rye", "Mamaroneck", "Harrison", "Bronxville"],
    features: [
      "Corporate Transportation",
      "Airport Transfers to JFK, LGA, and EWR",
      "Wedding and Special Event Services",
      "Hourly Chauffeur Service",
      "Point-to-Point Transportation"
    ],
    popularDestinations: [
      { name: "Westchester County Airport (HPN)", description: "Convenient transfers to and from Westchester County Airport" },
      { name: "JFK International Airport", description: "Reliable service to JFK with professional chauffeurs" },
      { name: "LaGuardia Airport", description: "Efficient transfers to LGA for business and leisure travelers" },
      { name: "New York City", description: "Seamless connections to Manhattan and all NYC boroughs" }
    ],
    travelTime: [
      { destination: "JFK Airport", time: "45-60 minutes" },
      { destination: "LaGuardia Airport", time: "30-45 minutes" },
      { destination: "Newark Airport", time: "60-75 minutes" },
      { destination: "Manhattan", time: "30-50 minutes" }
    ],
    serviceTypes: [
      "Corporate Executive Transportation",
      "Airport Shuttle Services",
      "Wedding Limousine Services",
      "Hourly Chauffeur Rentals",
      "Special Event Transportation"
    ],
    whyChoose: [
      "25+ years of local experience in Westchester County",
      "Knowledge of all major routes and traffic patterns",
      "24/7 availability for your convenience",
      "Fleet of luxury vehicles maintained to highest standards"
    ]
  },
  "putnam-county-ny": {
    name: "Putnam County, NY",
    description: "Serving Putnam County with reliable and luxurious transportation services. Our professional chauffeurs are familiar with the scenic routes and communities throughout Putnam County, ensuring safe and comfortable travel for all your transportation needs.",
    cities: ["Carmel", "Mahopac", "Brewster", "Putnam Valley", "Cold Spring", "Garrison", "Patterson", "Southeast"],
    features: [
      "Airport Shuttle Services",
      "Wedding Transportation",
      "Corporate Travel",
      "Special Events",
      "Long Distance Travel"
    ],
    popularDestinations: [
      { name: "JFK International Airport", description: "Comfortable transfers to JFK from Putnam County" },
      { name: "LaGuardia Airport", description: "Reliable service to LGA for business travelers" },
      { name: "New York City", description: "Direct service to Manhattan and surrounding areas" },
      { name: "Westchester County", description: "Connections to all Westchester destinations" }
    ],
    travelTime: [
      { destination: "JFK Airport", time: "60-75 minutes" },
      { destination: "LaGuardia Airport", time: "50-65 minutes" },
      { destination: "Newark Airport", time: "75-90 minutes" },
      { destination: "Manhattan", time: "50-70 minutes" }
    ],
    serviceTypes: [
      "Airport Transportation",
      "Wedding Limousine Services",
      "Corporate Chauffeur Services",
      "Special Event Transportation",
      "Group Transportation"
    ],
    whyChoose: [
      "Expert knowledge of Putnam County routes",
      "Reliable service for rural and suburban areas",
      "Flexible scheduling for your convenience",
      "Professional chauffeurs trained in luxury service"
    ]
  },
  "dutchess-county-ny": {
    name: "Dutchess County, NY",
    description: "Premium transportation services for Dutchess County residents and businesses. Whether you're traveling to the airport, attending a corporate event, or planning a special occasion, we provide reliable and luxurious transportation throughout the Hudson Valley region.",
    cities: ["Poughkeepsie", "Beacon", "Fishkill", "Wappingers Falls", "Hyde Park", "Rhinebeck", "Millbrook", "Pawling"],
    features: [
      "Long Distance Travel",
      "Corporate Services",
      "Airport Transfers",
      "Group Transportation",
      "Event Services"
    ],
    popularDestinations: [
      { name: "JFK International Airport", description: "Comfortable long-distance transfers to JFK" },
      { name: "LaGuardia Airport", description: "Reliable service to LGA from Dutchess County" },
      { name: "Newark Airport", description: "Convenient transfers to EWR" },
      { name: "New York City", description: "Direct service to Manhattan and all boroughs" }
    ],
    travelTime: [
      { destination: "JFK Airport", time: "90-120 minutes" },
      { destination: "LaGuardia Airport", time: "75-105 minutes" },
      { destination: "Newark Airport", time: "105-135 minutes" },
      { destination: "Manhattan", time: "75-105 minutes" }
    ],
    serviceTypes: [
      "Long Distance Airport Transportation",
      "Corporate Executive Services",
      "Special Event Limousine Services",
      "Group Transportation",
      "Hourly Chauffeur Services"
    ],
    whyChoose: [
      "Experience with long-distance travel routes",
      "Comfortable vehicles for extended journeys",
      "Professional service for Hudson Valley region",
      "Flexible scheduling for early morning and late night flights"
    ]
  },
  "fairfield-county-ct": {
    name: "Fairfield County, CT",
    description: "Connecting Connecticut to New York with premium transportation services. Our cross-state expertise ensures seamless travel between Fairfield County and New York airports, Manhattan, and the greater Tri-State Area.",
    cities: ["Stamford", "Greenwich", "Danbury", "Norwalk", "Bridgeport", "Fairfield", "Westport", "Darien"],
    features: [
      "Cross-State Travel",
      "Corporate Executives",
      "Airport Services",
      "Luxury Events",
      "Business Travel"
    ],
    popularDestinations: [
      { name: "JFK International Airport", description: "Reliable cross-state service to JFK" },
      { name: "LaGuardia Airport", description: "Efficient transfers to LGA from Connecticut" },
      { name: "Newark Airport", description: "Convenient service to EWR" },
      { name: "Manhattan", description: "Direct service to all NYC business districts" }
    ],
    travelTime: [
      { destination: "JFK Airport", time: "60-90 minutes" },
      { destination: "LaGuardia Airport", time: "45-75 minutes" },
      { destination: "Newark Airport", time: "75-105 minutes" },
      { destination: "Manhattan", time: "45-75 minutes" }
    ],
    serviceTypes: [
      "Cross-State Corporate Transportation",
      "Airport Shuttle Services",
      "Executive Chauffeur Services",
      "Luxury Event Transportation",
      "Business Travel Solutions"
    ],
    whyChoose: [
      "Expert knowledge of Connecticut-New York routes",
      "Experience with corporate executives and business travelers",
      "Reliable service across state lines",
      "Luxury vehicles perfect for business and special occasions"
    ]
  },
  "new-york-city-metro-area": {
    name: "New York City Metro Area",
    description: "Complete coverage of all five boroughs with professional chauffeur services. Our experienced drivers navigate Manhattan, Brooklyn, Queens, Bronx, and Staten Island with expertise, ensuring timely arrivals for business meetings, events, and airport transfers.",
    cities: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
    features: [
      "City Navigation",
      "Corporate Meetings",
      "Entertainment Venues",
      "24/7 Service",
      "Airport Connections"
    ],
    popularDestinations: [
      { name: "JFK International Airport", description: "Direct service from all NYC boroughs to JFK" },
      { name: "LaGuardia Airport", description: "Efficient transfers to LGA from Manhattan and outer boroughs" },
      { name: "Newark Airport", description: "Reliable service to EWR from all NYC locations" },
      { name: "Business Districts", description: "Service to Wall Street, Midtown, Downtown, and all major business areas" }
    ],
    travelTime: [
      { destination: "JFK Airport", time: "30-60 minutes (varies by borough)" },
      { destination: "LaGuardia Airport", time: "20-45 minutes (varies by borough)" },
      { destination: "Newark Airport", time: "45-75 minutes (varies by borough)" },
      { destination: "Inter-Borough", time: "20-60 minutes (varies by route)" }
    ],
    serviceTypes: [
      "Corporate Executive Transportation",
      "Airport Transfer Services",
      "Event Transportation",
      "Hourly City Chauffeur Services",
      "Special Occasion Limousine Services"
    ],
    whyChoose: [
      "Expert navigation of NYC traffic and routes",
      "Knowledge of all five boroughs",
      "24/7 availability for your convenience",
      "Professional service for business and leisure"
    ]
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
                  <div 
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{city}</span>
                  </div>
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

