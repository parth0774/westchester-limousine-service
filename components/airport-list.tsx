import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export function AirportList() {
  const airports = [
    {
      code: "HPN",
      name: "Westchester County Airport",
      distance: "10-30 minutes",
      specialty: "Business travelers, private aircraft",
      airlines: "JetBlue, American Airlines",
      rate: "$45",
      description: "Executive transportation for business travelers with local expertise and guaranteed punctuality.",
    },
    {
      code: "SWF",
      name: "Stewart International Airport",
      distance: "~45 minutes",
      specialty: "Domestic and limited international flights",
      airlines: "Popular destinations: Florida, Myrtle Beach",
      rate: "$95",
      description: "Door-to-door luxury transportation with flight tracking to Orange County, NY region.",
    },
    {
      code: "LGA",
      name: "LaGuardia Airport",
      distance: "45-60 minutes",
      specialty: "Domestic flights primarily",
      airlines: "All major domestic carriers",
      rate: "$120",
      description:
        "Stress-free transportation with traffic route optimization for quick turnarounds and business routes.",
    },
    {
      code: "EWR",
      name: "Newark Liberty Airport",
      distance: "60-75 minutes",
      specialty: "Major international hub",
      airlines: "United, international carriers",
      rate: "$140",
      description: "Cross-state transportation with toll and traffic management to United Airlines hub.",
    },
    {
      code: "JFK",
      name: "John F. Kennedy Airport",
      distance: "60-90 minutes",
      specialty: "International flights, long-haul destinations",
      airlines: "All major international and domestic carriers",
      rate: "$150",
      description: "International arrival specialists with customs wait time for major international hub.",
    },
    {
      code: "BDL",
      name: "Bradley International Airport",
      distance: "75-90 minutes",
      specialty: "Connecticut's primary airport",
      airlines: "Major domestic carriers, limited international",
      rate: "$160",
      description: "Cross-state luxury transportation serving New England destinations and seasonal routes.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Airport Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional transportation services to all major airports in the Tri-State Area with competitive rates and
            reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airports.map((airport, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                    {airport.code}
                  </Badge>
                  <div className="flex items-center text-accent font-bold">
                    <DollarSign className="h-4 w-4" />
                    <span>{airport.rate}</span>
                    <span className="text-sm text-muted-foreground ml-1">one-way</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{airport.name}</CardTitle>
                <CardDescription className="text-base">{airport.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>
                      <strong>Distance:</strong> {airport.distance}
                    </span>
                  </div>
                  <div className="flex items-start text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                    <div>
                      <p>
                        <strong>Specialty:</strong> {airport.specialty}
                      </p>
                      <p className="text-muted-foreground">{airport.airlines}</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/contact">Book {airport.code} Transfer</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
