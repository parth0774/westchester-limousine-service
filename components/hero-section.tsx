import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <video
          src="/temp_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitTransform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
          }}
        />
        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-white">Westchester's Premier Luxury Transportation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Westchester Limousine
            <span className="block text-accent mt-2">Luxury Black Car Service</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
            Experience professional chauffeur service in Westchester County, Putnam, Dutchess, and Connecticut. 
            Airport transfers to JFK, LGA, and NYC.
          </p>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              "Always On Time",
              "Professional Chauffeurs",
              "Clean Luxury Fleet",
              "Family Owned & Local"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 border border-white/20">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6" asChild>
              <Link href="/booking">
                Book Online Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black text-lg px-8 py-6"
              asChild
            >
              <Link href="tel:914-222-1919">
                <Phone className="mr-2 h-5 w-5" />
                Call 914-222-1919
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "50K+", label: "Happy Clients" },
              { number: "24/7", label: "Available" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}