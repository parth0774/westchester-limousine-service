import { Car, Users, Bus, ArrowRight, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fleet = [
  {
    icon: Car,
    title: "Sedan Car — Westchester County Limo",
    subtitle: "Sedan",
    description:
      "Exclusive chauffeured executive transportation by Westchester County Limo in sedan vehicles with classic interiors and modern amenities that make every trip comfortable and enjoyable.",
    image: "/forte.png",
    capacity: "3 Passengers",
    luggage: "2-3 Bags",
  },
  {
    icon: Car,
    title: "Sedan Car — Westchester County Limo",
    subtitle: "Luxury Sedans",
    description:
      "Travel in comfort and elegance in our luxury sedans, offering an exceptional transportation experience for clients who expect exclusive service that is safe, reliable, and refined.",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
    capacity: "3 Passengers",
    luggage: "3-4 Bags",
  },
  {
    icon: Users,
    title: "Suburban Car — Westchester County Limo",
    subtitle: "6 Passenger Luxury SUV",
    description:
      "Our luxury SUVs combine performance, design, and spacious comfort. Ideal for small groups or clients who value efficiency and premium travel in every mile.",
    image: "/luxury-black-suv-cadillac-escalade.jpg",
    capacity: "6 Passengers",
    luggage: "5-6 Bags",
  },
  {
    icon: Bus,
    title: "Transit Van — Westchester County Limo",
    subtitle: "Mercedes Benz Sprinter",
    description:
      "We understand the planning required for group travel, and our Mercedes Benz Sprinter service is tailored to deliver comfort, flexibility, and convenience for any occasion.",
    image: "/sprinter.png",
    capacity: "14 Passengers",
    luggage: "10+ Bags",
  },
]

export function HomeFleet() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/10"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-sm font-semibold text-accent">OUR FLEET</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comfort Meets Class
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From luxury sedans to executive SUVs and sprinters, our fleet delivers comfort, safety, and sophistication for every trip.
            Each vehicle is maintained with precision, sanitized after every ride, and operated by professional chauffeurs.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fleet.map((vehicle, index) => {
            const Icon = vehicle.icon
            return (
              <div
                key={vehicle.title + vehicle.subtitle}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-accent/50 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.subtitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>

                  {/* Vehicle Type Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-1">
                      {vehicle.subtitle}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {vehicle.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        {vehicle.luggage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {vehicle.description}
                  </p>
                  
                  <Button 
                    asChild 
                    className="w-full bg-accent hover:bg-accent/90 text-white group/btn"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8">
          {[
            {
              icon: Shield,
              title: "Fully Insured & Licensed",
              description: "All vehicles meet stringent safety standards"
            },
            {
              icon: Sparkles,
              title: "Meticulously Maintained",
              description: "Regular inspections and professional detailing"
            },
            {
              icon: Car,
              title: "Latest Models",
              description: "Featuring cutting-edge comfort and technology"
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}