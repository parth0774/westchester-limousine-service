"use client"

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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Westchester Limousine
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence, safety, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
