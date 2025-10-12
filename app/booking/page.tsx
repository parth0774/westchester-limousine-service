"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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

export default function BookingPage() {
  useEffect(() => {
    // Remove any previously inserted forms to prevent duplication
    const existingScript = document.getElementById("booking-jotform-script")
    if (existingScript) existingScript.remove()

    // Create the Jotform script element (using your provided form)
    const script = document.createElement("script")
    script.src = "https://form.jotform.com/jsform/252758231234253"
    script.type = "text/javascript"
    script.id = "booking-jotform-script"
    script.async = true

    document.getElementById("booking-jotform-container")?.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Book Your Ride
            </h1>
            <p className="text-xl text-muted-foreground">
              Reserve your luxury transportation with Westchester Limousine today
            </p>
          </div>
        </section>

        {/* Booking Info + Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Persuasive Booking Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    Exceptional Service, Every Time
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At Westchester Limousine, every trip is designed around your comfort and satisfaction. 
                    Whether you need airport transportation, corporate travel, or a ride for a special event, 
                    we guarantee a seamless experience handled by professional chauffeurs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    What Sets Us Apart
                  </h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Luxury vehicles that are immaculate and well maintained</li>
                    <li>Experienced and courteous chauffeurs</li>
                    <li>Always punctual and reliable</li>
                    <li>24/7 availability for your convenience</li>
                    <li>Clear pricing with no surprises</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    How to Book
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete the booking form to reserve your vehicle. 
                    Our team will review your details and confirm everything quickly. 
                    We take pride in making your journey smooth from start to finish.
                  </p>
                </div>
              </div>

              {/* Jotform Embed */}
              <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-lg">
                <div id="booking-jotform-container" className="w-full h-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
