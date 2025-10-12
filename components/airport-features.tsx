import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Shield, Bell, CreditCard, Headphones } from "lucide-react"
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

export function AirportFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Flight Monitoring & Tracking",
      description:
        "Real-time flight tracking with automatic pickup time adjustments and delay notifications to customers.",
    },
    {
      icon: Users,
      title: "Meet & Greet Service",
      description:
        "Chauffeur meets you at baggage claim with assistance for luggage and personalized name sign for VIP treatment.",
    },
    {
      icon: Clock,
      title: "Complimentary Wait Time",
      description:
        "30 minutes for domestic flights, 60 minutes for international flights - no extra charges for flight delays.",
    },
    {
      icon: Bell,
      title: "24/7 Airport Transportation",
      description:
        "Round-the-clock service for early morning departures and late-night arrivals at all major airports.",
    },
    {
      icon: Headphones,
      title: "Professional Airport Chauffeurs",
      description: "Experienced drivers with extensive airport knowledge and expertise in traffic route optimization.",
    },
    {
      icon: CreditCard,
      title: "Corporate Airport Accounts",
      description:
        "Monthly billing arrangements, priority booking system, dedicated account management, and volume discounts.",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Airport Service Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional airport transportation with comprehensive services designed for business travelers and leisure
            passengers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
