"use client"

import Image from "next/image"

export function HomeAboutUs() {
  return (
    <section
      className="py-20 bg-background"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <Image
            src="/luxury-black-sedan-mercedes-s-class.jpg"
            alt="Westchester Limousine luxury sedan car service"
            width={700}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2">
          <header className="mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About Westchester Limousine
            </h2>
            <p className="text-xl text-muted-foreground">
              At Westchester Limousine, we redefine what it means to travel in comfort, style, and reliability.
            </p>
          </header>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Based in Mohegan Lake, New York, we proudly serve clients across
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

          <div className="mt-8">
            <a
              href="/about"
              className="inline-block px-6 py-3 text-lg font-semibold text-accent-foreground bg-accent rounded-2xl shadow hover:bg-accent/90 transition-colors"
            >
              Know More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
