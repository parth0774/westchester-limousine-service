import { Car, Users, Bus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fleet = [
  {
    icon: Car,
    title: "Sedan Car — Westchester County Limo",
    subtitle: "Sedan",
    description:
      "Exclusive chauffeured executive transportation by Westchester County Limo in sedan vehicles with classic interiors and modern amenities that make every trip comfortable and enjoyable.",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
  },
  {
    icon: Car,
    title: "Sedan Car — Westchester County Limo",
    subtitle: "Luxury Sedans",
    description:
      "Travel in comfort and elegance in our luxury sedans, offering an exceptional transportation experience for clients who expect exclusive service that is safe, reliable, and refined.",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
  },
  {
    icon: Users,
    title: "Suburban Car — Westchester County Limo",
    subtitle: "6 Passenger Luxury SUV",
    description:
      "Our luxury SUVs combine performance, design, and spacious comfort. Ideal for small groups or clients who value efficiency and premium travel in every mile.",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
  },
  {
    icon: Bus,
    title: "Transit Van — Westchester County Limo",
    subtitle: "Mercedes Benz Sprinter",
    description:
      "We understand the planning required for group travel, and our Mercedes Benz Sprinter service is tailored to deliver comfort, flexibility, and convenience for any occasion.",
    image: "/luxury-black-sedan-mercedes-s-class.jpg",
  },
]

export function HomeFleet() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Fleet — Comfort Meets Class
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From luxury sedans to executive SUVs and sprinters, our fleet delivers comfort, safety, and sophistication for every trip.
            Each vehicle is maintained with precision, sanitized after every ride, and operated by professional chauffeurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleet.map((vehicle) => {
            const Icon = vehicle.icon
            return (
              <div
                key={vehicle.title + vehicle.subtitle}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.subtitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide">
                    {vehicle.subtitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                  <Button asChild size="lg" className="mt-2">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
