import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                About Westchester Limousine
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Serving the Tri-State Area with premium transportation services since 1995
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Westchester Limousine has been serving the Tri-State Area with premium transportation services since
                    1995. Our commitment to excellence, safety, and customer satisfaction has made us the preferred
                    choice for discerning clients throughout Westchester County and beyond.
                  </p>
                  <p>
                    What started as a small family business has grown into one of the region's most trusted luxury
                    transportation companies, while maintaining our core values of personalized service and attention to
                    detail.
                  </p>
                  <p>
                    Today, we continue to set the standard for premium transportation with our modern fleet,
                    professional chauffeurs, and unwavering commitment to exceeding our clients' expectations.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/professional-chauffeur-standing-next-to-luxury-bla.jpg"
                  alt="Professional chauffeur service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                To provide safe, reliable, and luxurious transportation experiences that exceed our clients'
                expectations while maintaining the highest standards of professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Experienced Chauffeurs</h3>
                <p className="text-muted-foreground text-sm">Professional, courteous, and knowledgeable drivers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Luxury Fleet</h3>
                <p className="text-muted-foreground text-sm">Meticulously maintained premium vehicles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Punctual Service</h3>
                <p className="text-muted-foreground text-sm">On-time guarantee with reliable scheduling</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fully Licensed</h3>
                <p className="text-muted-foreground text-sm">Licensed, insured, and safety certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Experience the Difference</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join thousands of satisfied customers who trust us for their transportation needs
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
