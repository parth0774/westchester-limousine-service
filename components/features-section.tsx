"use client"

import Link from "next/link"
import { Shield, Clock, Star, Users, Phone, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind",
  },
  {
    icon: Clock,
    title: "24/7 Available Service",
    description: "Round-the-clock transportation whenever you need it",
  },
  {
    icon: Star,
    title: "Professional Chauffeurs",
    description: "Experienced, courteous, and professionally trained drivers",
  },
  {
    icon: Users,
    title: "Corporate Accounts",
    description: "Dedicated account management and volume discounts",
  },
  {
    icon: Phone,
    title: "On-Time Guarantee",
    description: "Punctual service with real-time flight monitoring",
  },
  {
    icon: Award,
    title: "Luxury Fleet",
    description: "Meticulously maintained premium vehicles",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-sm font-semibold text-accent">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Westchester Limousine Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our commitment to excellence, safety, and customer satisfaction
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative bg-card border-2 border-border rounded-2xl p-8 text-center hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  {/* Background circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/10 rounded-2xl -z-10 group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-2xl px-8 py-6">
            <p className="text-lg text-foreground mb-2">
              <span className="font-bold">Ready to experience luxury transportation?</span>
            </p>
            <p className="text-muted-foreground mb-4">
              Call us at <a href="tel:914-222-1919" className="text-accent font-semibold hover:underline">(914) 222-1919</a> or book online in minutes
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/services/airport" className="text-accent hover:underline font-medium">Airport Services</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/services/corporate" className="text-accent hover:underline font-medium">Corporate Travel</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/services/events" className="text-accent hover:underline font-medium">Events & Weddings</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/service-areas" className="text-accent hover:underline font-medium">Service Areas</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}