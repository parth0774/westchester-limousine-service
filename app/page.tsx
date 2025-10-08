import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { HomeFleet } from "@/components/home-fleet"
import { HomeAboutUs } from "@/components/home-aboutus"
import { ServiceHome } from "@/components/home-areas"
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
