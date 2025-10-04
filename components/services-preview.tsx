import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, Car, Heart, Users, Baby, Plane } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Airport Services",
    description: "Reliable transportation to all major airports",
    href: "/services/airport",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Executive transportation solutions for business professionals",
    href: "/services/corporate",
  },
  {
    icon: Heart,
    title: "Special Occasions",
    description: "Wedding, prom, and celebration transportation",
    href: "/services/special-occasions",
  }
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Premium Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From corporate travel to special occasions, we provide luxury transportation solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
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
