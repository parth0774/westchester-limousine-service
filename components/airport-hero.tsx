import { Button } from "@/components/ui/button"
import { Plane, Clock, Shield, Users } from "lucide-react"
import Link from "next/link"

export function AirportHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Plane className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Premium Airport Transportation Services</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
            Reliable luxury transportation to all major airports in the Tri-State Area
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium">24/7 Service</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium">Flight Monitoring</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium">Meet & Greet</span>
            </div>
            <div className="flex flex-col items-center">
              <Plane className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium">All Airports</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Book Airport Transfer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:914-218-0909">Call (914) 218-0909</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
