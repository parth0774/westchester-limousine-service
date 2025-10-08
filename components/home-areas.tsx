"use client"

import { MapPin } from "lucide-react"

export function ServiceHome() {
  return (
    <section
      className="py-20 bg-background"
      id="service-areas"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta
        itemProp="serviceType"
        content="Chauffeured Transportation Service in Westchester County and surrounding areas"
      />
      <meta
        itemProp="provider"
        content="Westchester Limousine"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Westchester Limousine proudly provides premium chauffeured transportation services to clients throughout Westchester County and beyond. We cater to corporate clients, travelers, and individuals seeking reliable, luxurious transportation for business, leisure, or special events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex justify-center items-center">
              <MapPin className="h-6 w-6 mr-2 text-accent" />
              Primary Service Areas
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 flex flex-col items-center">
              <li>Westchester County, NY</li>
              <li>Putnam County, NY</li>
              <li>Dutchess County, NY</li>
              <li>Fairfield County, CT</li>
              <li>New York City Metro Area</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex justify-center items-center">
              <MapPin className="h-6 w-6 mr-2 text-accent" />
              Popular Destinations
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 flex flex-col items-center">
              <li>JFK International Airport (New York, NY)</li>
              <li>LaGuardia Airport (New York, NY)</li>
              <li>Newark Liberty International Airport (NJ)</li>
              <li>Westchester County Airport (HPN)</li>
              <li>New York City – Manhattan, Bronx, Brooklyn, Queens</li>
              <li>Stamford, Greenwich, and Danbury, CT</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
          <p className="mb-4">
            At Westchester Limousine, we understand the importance of reliability, safety, and comfort when traveling to and from your desired destinations. Our professional chauffeurs know these service areas inside and out, ensuring you arrive on time, every time.
          </p>
          <p className="mb-4">
            Whether you are traveling to the airports for business or leisure, attending a corporate event, or enjoying a night out in New York City, we tailor our service to your needs. Our vehicles are meticulously maintained and equipped for comfort and safety, providing you with a premium travel experience.
          </p>
          <p>
            Choosing Westchester Limousine for your travel needs means choosing a company committed to excellence, local expertise, and unmatched customer service. Serving Westchester, Putnam, Dutchess, Fairfield Counties, and the greater New York City area, we bring the luxury and reliability you deserve wherever you go.
          </p>
        </div>
      </div>
    </section>
  )
}
