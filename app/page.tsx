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
  title: "Airport Limo Service Westchester NY | JFK, LGA, Newark, HPN Car Service",
  description: "Premium airport transportation in Westchester County NY. Luxury car service to JFK, LaGuardia, Newark, HPN airports. 24/7 availability, flight tracking, professional chauffeurs. Book your airport transfer now!",
  keywords: "airport limo Westchester NY, JFK airport car service, LaGuardia airport transfer, Newark airport limo, HPN airport service, Westchester airport transportation, luxury airport car service NY",
  openGraph: {
    title: "Westchester Airport Limousine Service | Luxury Airport Transfers",
    description: "Professional airport car service to JFK, LGA, EWR, HPN. Real-time flight tracking, meet & greet service, 24/7 availability.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HomeAboutUs/>
        <ServicesPreview />
        <HomeFleet/>
        <FeaturesSection />
        <ServiceHome/>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
