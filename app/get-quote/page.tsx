"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingTool } from "@/components/pricing-tool"
import { Phone, Mail, MapPin, Clock, CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export default function GetQuotePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-4">
              <Sparkles className="h-8 w-8 text-accent animate-pulse" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get Your Instant Quote
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get an accurate price estimate for your transportation needs in just a few simple steps.
              No commitment required.
            </p>
          </div>
        </section>

        {/* Info + Pricing Tool */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Info and Trust Text */}
              <div className="space-y-10">
                {/* Company Overview */}
                <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    About Our Pricing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our transparent pricing ensures you know exactly what you'll pay. All quotes include 
                    professional chauffeur service, luxury vehicle, and full insurance coverage. 
                    No hidden fees, no surprises.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                    <Phone className="h-5 w-5 text-accent" />
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Phone:</strong> (914) 222-1919</p>
                    <p><strong>Email:</strong> <a href="mailto:info.westchesterlimousine@gmail.com" className="text-accent hover:underline">info.westchesterlimousine@gmail.com</a></p>
                    <p><strong>Address:</strong> 2945 Lexington Avenue, Mohegan Lake, 10547</p>
                    <p><strong>Availability:</strong> 24/7 Service</p>
                    <p><strong>Office Hours:</strong> Mon-Sun 8AM-6PM</p>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    Service Areas
                  </h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>
                      <Link 
                        href="/service-areas/westchester-county-ny/" 
                        className="text-accent hover:underline transition-colors"
                      >
                        Westchester County, NY
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/service-areas/putnam-county-ny/" 
                        className="text-accent hover:underline transition-colors"
                      >
                        Putnam County, NY
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/service-areas/dutchess-county-ny/" 
                        className="text-accent hover:underline transition-colors"
                      >
                        Dutchess County, NY
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/service-areas/fairfield-county-ct/" 
                        className="text-accent hover:underline transition-colors"
                      >
                        Fairfield County, CT
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/service-areas/new-haven-county-ct/" 
                        className="text-accent hover:underline transition-colors"
                      >
                        New Haven County, CT
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/service-areas/new-york-city-metro-area/" 
                        className="text-accent hover:underline transition-colors"
                      >
                        New York City Metro Area
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Trust and Quality Section */}
                <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-accent" />
                    Why Choose Us
                  </h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Transparent, upfront pricing with no hidden fees</li>
                    <li>Luxury vehicles maintained to the highest standards</li>
                    <li>Professional and courteous licensed chauffeurs</li>
                    <li>Always on time, every time</li>
                    <li>Fully licensed and insured</li>
                    <li>24/7 availability for your convenience</li>
                  </ul>
                </div>

                {/* Payment Info */}
                <div className="animate-in fade-in slide-in-from-left-4 duration-500 delay-400 rounded-lg bg-muted/50 p-4">
                  <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    Quick Response
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    After submitting your quote request, our team will contact you promptly to confirm 
                    your booking and answer any questions you may have.
                  </p>
                </div>
              </div>

              {/* Right Column - Pricing Tool */}
              <div className="lg:col-span-2 animate-in fade-in slide-in-from-right-4 duration-500">
                <PricingTool />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-gray-50 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Transparent Pricing, Exceptional Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Westchester Limousine, we believe in fair, transparent pricing. The quote you receive 
              reflects the exact service you'll get—professional chauffeurs, luxury vehicles, and 
              peace of mind. All quotes are estimates and final pricing may vary based on specific 
              requirements, time of day, and other factors. Contact us for a confirmed booking.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

