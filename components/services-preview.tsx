import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plane, Briefcase, Baby, Clock, Heart, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Airport Car Service",
    description:
      "Reliable door-to-door service to and from JFK, LGA, EWR, HPN, and all major airports. We track your flight in real-time and guarantee punctual pickups.",
    href: "/services/airport",
    featured: true,
    ctaText: "Explore Airport Transfer Services"
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Executive car service for business professionals. Travel in comfort and style with professional chauffeurs and priority booking for corporate clients.",
    href: "/services/corporate",
    featured: true,
    ctaText: "Discover Corporate Limousine Solutions"
  },
  {
    icon: Plane,
    title: "Point to Point Limousine Service",
    description:
      "Reliable door-to-door service to and from any location in Westchester County, New York. We track your flight in real-time and guarantee punctual pickups.",
    href: "/services/point-to-point",
    featured: true,
    ctaText: "Explore Point to Point Limousine Service"
  },
  {
    icon: Baby,
    title: "School Transportation",
    description:
      "Trusted private school transfers for families across Westchester County. Safe drivers, verified routes, and dependable service every day.",
    href: "/services/school",
    featured: false,
    ctaText: "School Event Transportation"
  },
  {
    icon: Clock,
    title: "Hourly & City-to-City",
    description:
      "Perfect for meetings, shopping trips, or inter-city transfers. Enjoy flexibility and convenience with a dedicated chauffeur by the hour.",
    href: "/services/hourly",
    featured: false,
    ctaText: "Book Hourly Car Service"
  },
  {
    icon: Heart,
    title: "Proms, Weddings & Events",
    description:
      "Arrive in style for your special day. Our luxury sedans, SUVs, and executive shuttles make any occasion unforgettable.",
    href: "/services/events",
    featured: false,
    ctaText: "Special Event Transportation"
  }
]

export function ServicesPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-sm font-semibold text-accent">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium Transportation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you need an airport transfer, executive car, or luxury ride for a special occasion, 
            Westchester Limousine delivers comfort, reliability, and first-class service every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  service.featured 
                    ? 'border-accent bg-gradient-to-br from-accent/5 to-transparent' 
                    : 'border-border hover:border-accent/50'
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                
                <CardHeader className="space-y-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    {/* Decorative circle */}
                    <div className="absolute -top-2 -left-2 w-20 h-20 bg-accent/10 rounded-xl -z-10 group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  
                  <div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Button
                    variant="ghost"
                    asChild
                    className="w-full group/btn hover:bg-accent hover:text-white transition-all duration-300 text-accent font-semibold"
                  >
                    <Link href={service.href} className="flex items-center justify-center">
                      {service.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Don't See What You're Looking For?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer customized transportation solutions for any occasion. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}