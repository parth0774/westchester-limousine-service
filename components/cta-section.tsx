import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, ArrowRight, Clock, Shield, Star, DollarSign } from "lucide-react"

interface CtaSectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export function CtaSection({
  title = "Ready to Experience Luxury Transportation?",
  description = "Whether for business or personal travel, your comfort and satisfaction come first.",
  primaryButtonText = "Book Your Ride Now",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Call (914) 222-1919",
  secondaryButtonHref = "tel:914-222-1919",
}: CtaSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/85"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Content */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="text-sm font-semibold text-white">GET STARTED TODAY</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
              {title}
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                asChild
              >
                <Link href={primaryButtonHref}>
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-accent text-lg px-8 py-6 transition-all"
                asChild
              >
                <Link href={secondaryButtonHref}>
                  <Phone className="mr-2 h-5 w-5" />
                  {secondaryButtonText}
                </Link>
              </Button>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Clock, text: "24/7 Available" },
              { icon: Shield, text: "Fully Licensed & Insured" },
              { icon: Star, text: "5-Star Service" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 hover:bg-white/20 transition-colors"
              >
                <feature.icon className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">{feature.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export { CtaSection as CTASection }