import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plane, Briefcase, Baby, Clock, Heart } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Airport Car Service",
    description:
      "Reliable door-to-door service to and from JFK, LGA, EWR, HPN, and all major airports. We track your flight in real-time and guarantee punctual pickups.",
    href: "/services/airport",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Executive car service for business professionals. Travel in comfort and style with professional chauffeurs and priority booking for corporate clients.",
    href: "/services/corporate",
  },
  {
    icon: Baby,
    title: "School Transportation",
    description:
      "Trusted private school transfers for families across Westchester County. Safe drivers, verified routes, and dependable service every day.",
    href: "/services/school",
  },
  {
    icon: Clock,
    title: "Hourly & City-to-City",
    description:
      "Perfect for meetings, shopping trips, or inter-city transfers. Enjoy flexibility and convenience with a dedicated chauffeur by the hour.",
    href: "/services/hourly",
  },
  {
    icon: Heart,
    title: "Proms, Weddings & Events",
    description:
      "Arrive in style for your special day. Our luxury sedans, SUVs, and executive shuttles make any occasion unforgettable.",
    href: "/services/events",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Premium Transportation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need an airport transfer, executive car, or luxury ride for a special occasion, 
            Westchester Limousine delivers comfort, reliability, and first-class service every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-shadow border border-border"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
