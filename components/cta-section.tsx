import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"

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
  description = "Book your premium limousine service today and travel in style, comfort, and reliability",
  primaryButtonText = "Book Your Ride Now",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Call (914) 222-1919",
  secondaryButtonHref = "tel:914-222-1919",
}: CtaSectionProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">{title}</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href={primaryButtonHref}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href={secondaryButtonHref}>
                <Phone className="mr-2 h-5 w-5" />
                {secondaryButtonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CtaSection as CTASection }
