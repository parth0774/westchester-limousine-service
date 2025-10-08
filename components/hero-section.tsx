import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Westchester Limousine <span className="block text-accent">Luxury Black Car & Airport Service</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Experience professional chauffeur service in Westchester County, Putnam, Dutchess, and Connecticut. 
                Airport transfers to JFK, LGA, and NYC. Always on time, clean vehicles, easy booking.
              </p>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Always On Time",
                "Professional Chauffeurs",
                "Clean Luxury Fleet",
                "Family Owned & Local"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/booking">
                  Book Online Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="tel:914-222-1919">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 914-222-1919
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted shadow-lg">
              <img
                src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
                alt="Luxury black car service in Westchester County"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
