import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { HomeFleet } from "@/components/home-fleet"
import { HomeAboutUs } from "@/components/home-aboutus"
import { ServiceHome } from "@/components/home-areas"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Book a Ride</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reserve your luxury transportation directly from our homepage.
                  Enter your trip details and submit your booking request in minutes.
                </p>
              </div>
              <div>
                <iframe
                  src="/wl-widget.html"
                  width="100%"
                  height="950"
                  style={{ border: "none", display: "block", maxWidth: "960px", margin: "0 auto" }}
                  title="Book a Ride - Westchester Limousine"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <HomeAboutUs />
        <ServicesPreview />
        <HomeFleet />
        <FeaturesSection />
        <ServiceHome />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
