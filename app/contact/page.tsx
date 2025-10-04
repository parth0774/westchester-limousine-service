"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to book your luxury transportation? Get in touch with us today
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">Phone</h3>
                  <p>(914) 218-0909</p>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">Email</h3>
                  <p>info@westchesterlimousine.com</p>
                  <p className="text-muted-foreground">We respond within 2 hours</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">Service Areas</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Westchester County</li>
                    <li>Fairfield County, CT</li>
                    <li>New York City</li>
                    <li>Long Island</li>
                    <li>Northern New Jersey</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">Hours</h3>
                  <p>24/7 Service Available</p>
                  <p className="text-muted-foreground">Office: Mon-Sun 8AM-6PM</p>
                </div>
              </div>

              {/* Jotform Embed */}
              <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-lg">
                <div id="jotform-container" className="w-full h-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
