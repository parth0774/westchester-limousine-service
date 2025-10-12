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

export default function ContactPage() {
  useEffect(() => {
    // Remove any previously inserted forms to prevent duplication
    const existingScript = document.getElementById("jotform-script")
    if (existingScript) existingScript.remove()

    // Create the Jotform script element
    const script = document.createElement("script")
    script.src = "https://form.jotform.com/jsform/252758231234253"
    script.type = "text/javascript"
    script.id = "jotform-script"
    script.async = true

    document.getElementById("jotform-container")?.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Westchester Limousine
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are here to make your transportation experience seamless, comfortable, and reliable. 
              Whether you are booking a ride, requesting a quote, or need assistance, our team is always ready to help.
            </p>
          </div>
        </section>

        {/* Info + Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Info and Trust Text */}
              <div className="space-y-10">
                {/* Company Overview */}
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">About Us</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Westchester Limousine has built its reputation on professionalism and reliability. 
                    We provide premium transportation services for airport transfers, corporate travel, 
                    weddings, proms, and special occasions throughout the New York metropolitan area.
                  </p>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">Contact Information</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Phone:</strong> (914) 218-0909</p>
                    <p><strong>Email:</strong> info@westchesterlimousine.com</p>
                    <p><strong>Availability:</strong> 24/7 Service</p>
                    <p><strong>Office Hours:</strong> Mon-Sun 8AM-6PM</p>
                  </div>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">Service Areas</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Westchester County</li>
                    <li>Dutch County, CT</li>
                    <li>New York City</li>
                  </ul>
                </div>

                {/* Trust and Quality Section */}
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">Why Clients Choose Us</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Luxury vehicles maintained to the highest standards</li>
                    <li>Professional and courteous chauffeurs</li>
                    <li>Always on time, every time</li>
                    <li>Simple and secure booking process</li>
                    <li>Dedicated customer service team</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Fill out the form below and one of our representatives will respond promptly.
                </p>
                <div id="jotform-container" className="w-full h-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-gray-50 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Excellence in Every Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every ride with Westchester Limousine is tailored to your needs. 
              From luxury sedans to executive SUVs, our fleet offers comfort and style. 
              We take care of every detail so you can travel stress-free, whether you are heading to the airport, 
              a meeting, or a special event.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
