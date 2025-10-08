import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Plane, Clock, MapPin, Luggage, Phone, Shield, Star, ArrowRight, CheckCircle, DollarSign, Users, Calendar } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Airport Limo Service Westchester NY | JFK, LGA, Newark, HPN Car Service",
  description: "Premium airport transportation in Westchester County NY. Luxury car service to JFK, LaGuardia, Newark, HPN airports. 24/7 availability, flight tracking, professional chauffeurs. Book your airport transfer now!",
  keywords: "airport limo Westchester NY, JFK airport car service, LaGuardia airport transfer, Newark airport limo, HPN airport service, Westchester airport transportation, luxury airport car service NY",
  openGraph: {
    title: "Westchester Airport Limousine Service | Luxury Airport Transfers",
    description: "Professional airport car service to JFK, LGA, EWR, HPN. Real-time flight tracking, meet & greet service, 24/7 availability.",
    type: "website",
  },
}

const features = [
  {
    icon: Plane,
    title: "All Major Airports Covered",
    description: "Comprehensive service to JFK, LaGuardia, Newark, Westchester County (HPN), Bradley (BDL), and Stewart (SWF) airports with guaranteed on-time pickups",
  },
  {
    icon: Clock,
    title: "Real-Time Flight Tracking",
    description: "Advanced flight monitoring system adjusts pickup times automatically for delays or early arrivals, ensuring you're never left waiting",
  },
  {
    icon: Luggage,
    title: "Meet & Greet Service",
    description: "Professional chauffeurs greet you at baggage claim with nameplate, assist with luggage, and escort you to your luxury vehicle",
  },
  {
    icon: MapPin,
    title: "Door-to-Door Convenience",
    description: "Complete pickup from your home, office, or hotel with direct drop-off at your airport terminal curb - no parking hassles",
  },
  {
    icon: DollarSign,
    title: "Flat-Rate Pricing",
    description: "Transparent flat rates for all airport transfers with no surge pricing, hidden fees, or meter surprises - book with confidence",
  },
  {
    icon: Users,
    title: "Group Transportation",
    description: "Spacious SUVs and vans accommodate groups, families, and business teams with ample luggage space for everyone",
  },
]

const airports = [
  {
    name: "John F. Kennedy International Airport",
    code: "JFK",
    location: "Queens, New York",
    distance: "~60 miles from Westchester",
    image: "/jfk.png",
    description:
      "Our most popular airport transfer service. JFK airport limo service from Westchester with professional chauffeurs who know the fastest routes, monitor your flight in real-time, and provide luxury sedans and SUVs for a stress-free journey to New York's busiest international airport.",
  },
  {
    name: "LaGuardia Airport",
    code: "LGA",
    location: "Queens, New York",
    distance: "~40 miles from Westchester",
    image: "/lga.png",
    description:
      "Convenient LaGuardia airport car service for business and leisure travelers. Our chauffeurs navigate LGA's terminals efficiently, provide complimentary wait time, and ensure you arrive relaxed whether flying domestic or international.",
  },
  {
    name: "Westchester County Airport",
    code: "HPN",
    location: "White Plains, NY",
    distance: "Central Westchester location",
    image: "/westchester.png",
    description:
      "Your local airport deserves local expertise. As Westchester County's premier car service, we provide seamless transportation to HPN with intimate knowledge of the area, fast pickup times, and personalized service for residents and visitors.",
  },
  {
    name: "Newark Liberty International Airport",
    code: "EWR",
    location: "Newark, New Jersey",
    distance: "~65 miles from Westchester",
    image: "/ewr.png",
    description:
      "Reliable Newark airport limo service across state lines. Our experienced drivers handle bridge traffic, tolls, and timing so you can focus on your travel. Premium vehicles and professional service make the journey comfortable.",
  },
  {
    name: "Bradley International Airport",
    code: "BDL",
    location: "Windsor Locks, CT",
    distance: "~75 miles from Westchester",
    image: "/bdl.png",
    description:
      "Professional car service connecting Westchester to Bradley International Airport in Connecticut. Ideal for travelers seeking alternative airport options with competitive rates and luxury transportation.",
  },
  {
    name: "Stewart International Airport",
    code: "SWF",
    location: "New Windsor, NY",
    distance: "~45 miles from Westchester",
    image: "/stw.png",
    description:
      "Smooth transfers to Stewart Airport for convenient regional travel. A growing hub serving Westchester, Dutchess, and Orange counties with hassle-free parking alternatives through our car service.",
  },
]

const serviceAreas = [
  "White Plains", "Yonkers", "New Rochelle", "Mount Vernon", "Scarsdale", 
  "Rye", "Harrison", "Mamaroneck", "Larchmont", "Pelham",
  "Bronxville", "Tuckahoe", "Eastchester", "Ardsley", "Dobbs Ferry",
  "Hastings-on-Hudson", "Irvington", "Tarrytown", "Sleepy Hollow", "Briarcliff Manor",
  "Ossining", "Croton-on-Hudson", "Yorktown Heights", "Peekskill", "Mohegan Lake"
]

export default function AirportServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
              alt="Westchester airport limousine service with professional chauffeur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-5 py-2 mb-6">
                <Plane className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-white">Professional Airport Transportation Since 1999</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Westchester Airport
                <span className="block text-accent mt-2">Limousine Service</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 mb-6 leading-relaxed max-w-3xl">
                Premium car service to JFK, LaGuardia, Newark, HPN and all major NYC airports. Professional chauffeurs, luxury vehicles, real-time flight tracking, and guaranteed on-time service.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                {[
                  "24/7 Available",
                  "Flight Tracking",
                  "Meet & Greet",
                  "Flat-Rate Pricing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-xl" asChild>
                  <Link href="/contact">
                    Book Airport Transfer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black text-lg px-8 py-6"
                  asChild
                >
                  <Link href="tel:+19142221919">
                    <Phone className="mr-2 h-5 w-5" />
                    (914) 222-1919
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-gray-300">
                <strong className="text-white">Serving all of Westchester County:</strong> White Plains, Scarsdale, Rye, New Rochelle, Yonkers, and surrounding areas
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">PREMIUM FEATURES</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Westchester Airport Car Service Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the difference with our comprehensive airport transportation services designed for comfort, reliability, and peace of mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="border-2 border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardHeader className="space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -left-2 w-20 h-20 bg-accent/10 rounded-2xl -z-10"></div>
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-3 group-hover:text-accent transition-colors">{feature.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Airports We Serve */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-secondary/20"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">AIRPORTS WE SERVE</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Complete Airport Coverage Across NY, NJ & CT
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Professional limousine and car service to all major airports serving the New York metropolitan area and surrounding regions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {airports.map((airport) => (
                <Card key={airport.code} className="overflow-hidden border-2 border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative w-full h-full overflow-hidden bg-muted">

                    <img
                      src={airport.image}
                      alt={`${airport.name} ${airport.code} car service from Westchester`}
                      className="w-full h-full object-contain group-hover:scale-250 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                      <span className="text-lg font-bold text-accent">{airport.code}</span>
                    </div>
                    
                    <div className="absolute bottom-1 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{airport.name}</h3>
                      <div className="flex flex-col gap-1 text-sm text-white/90">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{airport.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{airport.distance}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardDescription className="text-base leading-relaxed">{airport.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white group/btn" asChild>
                      <Link href="/contact">
                        Book {airport.code} Transfer
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Why Choose Westchester Limousine for Airport Service?</h3>
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                With over <strong className="text-foreground">25 years of experience</strong> serving Westchester County, we understand the unique needs of airport travelers. Our fleet of luxury sedans and SUVs, combined with our professional chauffeurs' extensive knowledge of local routes and traffic patterns, ensures you arrive at your airport terminal relaxed and on time. We specialize in corporate travel, family vacations, and special occasions requiring reliable airport transportation.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
                    alt="Professional chauffeur providing luxury airport service in Westchester NY"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-card border-2 border-accent/30 rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Star className="h-8 w-8 text-accent fill-accent" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">4.9/5</div>
                      <div className="text-sm text-muted-foreground">Customer Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <span className="text-sm font-semibold text-accent">WHY CHOOSE US</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                  The Westchester Airport Service Advantage
                </h2>
                
                <div className="space-y-5">
                  <div className="flex items-start space-x-4 p-5 bg-card border-2 border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-br from-accent to-accent/70 p-3 rounded-lg flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Licensed & Insured Chauffeurs</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        All our chauffeurs are professionally trained, background-checked, fully licensed, and insured. They know the fastest routes to every terminal and provide courteous, discreet service from door to gate.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-5 bg-card border-2 border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-br from-accent to-accent/70 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Guaranteed On-Time Service</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We monitor your flight in real-time and adjust pickup times for delays or early arrivals. You'll never miss a flight or wait unnecessarily. We build in buffer time for traffic and TSA lines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-5 bg-card border-2 border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-br from-accent to-accent/70 p-3 rounded-lg flex-shrink-0">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Luxury Fleet & Comfort</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Travel in style with our immaculate fleet of Mercedes, BMW, and Cadillac vehicles. Enjoy leather seats, climate control, bottled water, and phone chargers. Every vehicle is detailed after each trip.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-5 bg-card border-2 border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-lg">
                    <div className="bg-gradient-to-br from-accent to-accent/70 p-3 rounded-lg flex-shrink-0">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Easy Online Booking</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Book your airport transfer in minutes with our simple online reservation system. Get instant confirmation, flat-rate pricing, and the ability to modify your booking up to 24 hours in advance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent">SERVICE COVERAGE</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Westchester County Airport Service Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We provide premium airport car service throughout Westchester County and surrounding areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover:shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <MapPin className="h-6 w-6 text-accent mr-3" />
                  Southern Westchester
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {serviceAreas.slice(0, 13).map((area, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover:shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <MapPin className="h-6 w-6 text-accent mr-3" />
                  Northern Westchester
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {serviceAreas.slice(13).map((area, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-muted-foreground text-base">
                <strong className="text-foreground">Don't see your location?</strong> We serve all of Westchester, Putnam, Dutchess, and Fairfield Counties. <Link href="/contact" className="text-accent font-semibold hover:underline">Contact us</Link> for service to your area.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/85"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span className="text-sm font-semibold text-white">BOOK YOUR RIDE</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Reserve Your Airport Transfer Today
              </h2>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Whether you're traveling for business or pleasure, arriving or departing, Westchester Limousine ensures your airport journey is comfortable, reliable, and stress-free. Book now and experience the difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button 
                  size="lg" 
                  className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                  asChild
                >
                  <Link href="/contact">
                    Book Online Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-accent text-lg px-8 py-6 transition-all"
                  asChild
                >
                  <Link href="tel:+19142221919">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (914) 222-1919
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Clock, text: "Available 24/7" },
                  { icon: Shield, text: "Fully Licensed" },
                  { icon: Star, text: "4.9/5 Rating" },
                  { icon: DollarSign, text: "Flat-Rate Pricing" }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3"
                  >
                    <feature.icon className="h-4 w-4 text-white" />
                    <span className="text-sm font-semibold text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}