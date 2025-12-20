import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center overflow-hidden">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-start pt-8 sm:pt-12 lg:pt-16 pb-4">
        <div className="max-w-3xl w-full">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-1.5 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-2.5 sm:px-3 py-1 mb-3 sm:mb-4">
            <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent fill-accent" />
            <span className="text-xs font-medium text-white">Westchester's Premier Luxury Transportation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] mb-3 sm:mb-4">
            Westchester Limousine
            <span className="block text-accent mt-1">Luxury Black Car Service</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-4 sm:mb-5 leading-snug">
            Experience professional chauffeur service in Westchester County, Putnam, Dutchess, and Connecticut. 
            Airport transfers to JFK, LGA, and NYC.
          </p>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 mb-4 sm:mb-5 mt-4 sm:mt-6 lg:mt-9">
            {[
              "Always On Time",
              "Professional Chauffeurs",
              "Clean Luxury Fleet",
              "Family Owned & Local"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-lg px-1.5 sm:px-2 py-1.5 border border-white/20">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                <span className="text-xs font-medium text-white">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6 lg:mt-10">
            <Button size="default" className="bg-accent hover:bg-accent/90 text-white text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3" asChild>
              <Link href="/booking">
                Book Online Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="default" 
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
              asChild
            >
              <Link href="tel:914-222-1919">
                <Phone className="mr-2 h-4 w-4" />
                Call 914-222-1919
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}