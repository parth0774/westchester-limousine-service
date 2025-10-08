"use client"
import Image from "next/image"
import { Award, Clock, Shield, Users } from "lucide-react"

export function HomeAboutUs() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      id="about"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="Westchester Limousine" />
      <meta
        itemProp="description"
        content="Westchester Limousine provides professional chauffeur and executive car service in Mohegan Lake, NY, serving Westchester County, Putnam, Dutchess County, Connecticut, and the greater New York area."
      />
      <meta
        itemProp="address"
        content="Mohegan Lake, New York, United States"
      />
      <meta itemProp="telephone" content="+1-914-555-1234" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
            <span className="text-sm font-semibold text-accent">WHO WE ARE</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Westchester Limousine
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Redefining luxury transportation with comfort, style, and unwavering reliability
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Image Side with Overlapping Cards */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/luxury-black-sedan-mercedes-s-class.jpg"
                alt="Westchester Limousine luxury sedan car service"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-border rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Based in <strong className="text-foreground">Mohegan Lake, New York</strong>, we proudly serve clients across
                Westchester County, Putnam, Dutchess County, Connecticut, and the
                greater New York area. Every journey with us reflects our focus on
                excellence, professionalism, and personal care.
              </p>
              <p>
                Our mission is simple. We provide a seamless and luxurious ground
                transportation experience for every client. Whether you are
                catching a flight, attending a business meeting, or celebrating a
                special occasion, our chauffeurs ensure that you arrive safely and
                on time.
              </p>
              <p>
                Each trip is supported by a dedicated customer service team and
                conducted in a meticulously maintained vehicle. We combine
                elegance and reliability to create a travel experience that meets
                the expectations of both leisure and corporate clients.
              </p>
            </div>

            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-accent rounded-xl shadow-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:scale-105"
            >
              Know More About Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Clock,
              title: "Punctuality",
              description: "Always on time, every time. Your schedule is our priority."
            },
            {
              icon: Shield,
              title: "Safety First",
              description: "Professionally trained chauffeurs and maintained vehicles."
            },
            {
              icon: Award,
              title: "Premium Service",
              description: "Luxury fleet with impeccable attention to detail."
            },
            {
              icon: Users,
              title: "Client Focus",
              description: "Dedicated support team available 24/7 for you."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}