import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Car, Clock, Shield, DollarSign, Plane, MapPin, Users, Star } from "lucide-react"

export const metadata = {
  title: "Airport Transportation Westchester County | JFK, LaGuardia & Newark Limo Service",
  description:
    "Premium airport limousine service in Westchester County NY. Reliable transfers to JFK, LaGuardia, Newark, and Westchester Airport. Professional chauffeurs, competitive rates, 24/7 availability.",
  keywords: "airport transportation Westchester County, JFK limo service, LaGuardia car service, Newark airport transfer, Westchester airport limo, White Plains airport service, airport chauffeur Westchester NY",
  openGraph: {
    title: "Ultimate Guide to Airport Transportation in Westchester County",
    description:
      "Discover reliable limousine services for JFK, LaGuardia, Newark, and Westchester Airport transfers in Westchester County, NY.",
    url: "https://westchesterlimousine.net/blog/airport-transportation-westchester-county-guide",
    siteName: "Westchester Limousine",
    images: [
      {
        url: "https://westchesterlimousine.net/images/blog/luxury-mercedes-sprinter-van-executive-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Airport Limousine Service in Westchester County",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-09-15T09:00:00Z",
  },
  alternates: {
    canonical: "https://westchesterlimousine.net/blog/airport-transportation-westchester-county-guide",
  },
}

const airports = [
  {
    name: "John F. Kennedy International Airport (JFK)",
    distance: "Approx. 45-60 minutes from Westchester",
    icon: Plane,
    description: "Major international hub serving destinations worldwide. Our chauffeurs monitor flight status for on-time pickups.",
  },
  {
    name: "LaGuardia Airport (LGA)",
    distance: "Approx. 35-50 minutes from Westchester",
    icon: Plane,
    description: "Convenient domestic airport with easy access from Westchester County via I-95 and Hutchinson River Parkway.",
  },
  {
    name: "Newark Liberty International Airport (EWR)",
    distance: "Approx. 50-70 minutes from Westchester",
    icon: Plane,
    description: "Full-service international airport in New Jersey, offering competitive rates and excellent terminal facilities.",
  },
  {
    name: "Westchester County Airport (HPN)",
    distance: "Located in White Plains, NY",
    icon: Plane,
    description: "Your local airport serving major destinations. Quick, convenient access from all Westchester communities.",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Punctual & Reliable",
    description: "Flight tracking and early arrivals ensure you never miss your flight or wait at the airport.",
  },
  {
    icon: Shield,
    title: "Professional Chauffeurs",
    description: "Experienced, licensed drivers with extensive knowledge of Westchester County and airport procedures.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Flat-rate pricing with no hidden fees. Know your cost upfront, including tolls and gratuity options.",
  },
  {
    icon: Car,
    title: "Luxury Fleet",
    description: "Modern sedans, SUVs, and Mercedes Sprinter vans equipped with Wi-Fi and premium amenities.",
  },
]

const serviceAreas = [
  "White Plains", "Scarsdale", "Rye", "Harrison", "Mamaroneck",
  "New Rochelle", "Yonkers", "Mount Vernon", "Larchmont", "Pelham",
  "Eastchester", "Tuckahoe", "Bronxville", "Tarrytown", "Sleepy Hollow",
  "Dobbs Ferry", "Irvington", "Ardsley", "Elmsford", "Greenburgh",
]

export default function AirportTransportationBlog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/luxury-mercedes-sprinter-van-executive-interior.jpg"
              alt="Luxury Airport Transportation in Westchester County"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Westchester County, NY</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Ultimate Guide to Airport Transportation in Westchester County
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Discover reliable, luxury limousine services for seamless transfers to JFK, LaGuardia, Newark, and Westchester County Airport
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Book Your Airport Transfer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  When traveling from Westchester County, choosing the right airport transportation service can make the difference between a stressful journey and a smooth, comfortable experience. Whether you're a business executive heading to JFK for an international flight, a family departing from LaGuardia, or a frequent traveler using Westchester County Airport, professional limousine service offers unmatched convenience and reliability.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  This comprehensive guide covers everything you need to know about airport transportation in Westchester County, including the best practices for booking, what to expect from premium chauffeur services, and how to choose the right vehicle for your needs.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                    Why Choose Professional Airport Transportation?
                  </h3>
                  <p className="mb-0 text-gray-700">
                    Skip the parking fees, avoid traffic stress, and arrive relaxed. Professional airport limousine service in Westchester County provides door-to-door convenience, flight monitoring, and experienced chauffeurs who know the fastest routes to every major airport.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Airport Coverage */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Airports We Serve from Westchester County
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Convenient limousine service to all major New York and New Jersey airports
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {airports.map((airport, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <airport.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {airport.name}
                        </h3>
                        <p className="text-sm text-blue-600 font-semibold mb-3">
                          {airport.distance}
                        </p>
                        <p className="text-gray-600">
                          {airport.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our Westchester Airport Limo Service
                </h2>
                <p className="text-xl text-gray-600">
                  Premium features that set us apart from traditional taxi and rideshare services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Booking Your Westchester Airport Transportation: Best Practices
                </h2>

                <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/luxury-mercedes-sprinter-van-executive-interior.jpg"
                    alt="Professional chauffeur providing airport pickup service in Westchester"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Plan Ahead for Peace of Mind
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The key to stress-free airport transportation in Westchester County is advance booking. We recommend reserving your limousine service at least 24-48 hours before your flight, especially during peak travel seasons like holidays, summer vacation periods, and major business conference dates. Early booking ensures vehicle availability and allows our dispatch team to optimize routes and timing.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Flight Monitoring Technology
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  One of the most valuable features of professional airport limousine service is real-time flight tracking. Our chauffeurs monitor your flight status from departure to arrival. If your flight is delayed, we adjust pickup times automatically—no need to call and reschedule. For early arrivals, your driver will be ready and waiting. This technology eliminates the guesswork and ensures punctual service regardless of airline schedules.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Choosing the Right Vehicle for Airport Transfers
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vehicle selection depends on your group size, luggage requirements, and comfort preferences:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Luxury Sedans:</strong> Perfect for solo travelers or couples with standard luggage. Ideal for business travelers heading to JFK or LaGuardia from White Plains or Scarsdale.</li>
                  <li><strong>Executive SUVs:</strong> Great for families or small groups (up to 6 passengers). Offers extra luggage space and premium comfort for Newark or JFK trips.</li>
                  <li><strong>Mercedes Sprinter Vans:</strong> Best for larger groups (up to 14 passengers) or corporate teams. Perfect for group travel from Westchester County to any airport with ample luggage capacity.</li>
                </ul>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 my-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Popular Routes from Westchester County
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold mb-2">To JFK Airport:</p>
                      <ul className="space-y-1 text-blue-100">
                        <li>• White Plains to JFK: 45-60 min</li>
                        <li>• Scarsdale to JFK: 50-65 min</li>
                        <li>• Rye to JFK: 55-70 min</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">To LaGuardia Airport:</p>
                      <ul className="space-y-1 text-blue-100">
                        <li>• White Plains to LGA: 35-50 min</li>
                        <li>• New Rochelle to LGA: 30-45 min</li>
                        <li>• Yonkers to LGA: 25-40 min</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Airport Pickup Service: What to Expect
                </h2>

                <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/luxury-mercedes-sprinter-van-executive-interior.jpg"
                    alt="Professional chauffeur greeting passenger at airport arrival"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Airport pickups require special coordination, and our Westchester limousine service has perfected the process. For domestic arrivals at JFK, LaGuardia, or Newark, chauffeurs arrive 15-20 minutes before your scheduled landing time. For international arrivals, we allow extra time for customs and baggage claim (typically 30-45 minutes after landing).
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Meet and Greet Service
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our premium meet-and-greet service includes a professional chauffeur waiting at the baggage claim area or arrivals hall with a personalized sign displaying your name. This service is especially valuable for first-time visitors to New York airports or business executives who need immediate assistance with luggage. The chauffeur will help with bags and escort you directly to your vehicle in the designated pickup area.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Curbside Pickup Alternative
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For travelers familiar with airport layouts, curbside pickup offers a faster alternative. Your chauffeur will text you upon arrival at the designated pickup location. Most major airports have specific zones for livery vehicles—our drivers know these locations intimately and will guide you via phone to the exact spot.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Pricing and Payment for Westchester Airport Limo Service
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Transparent pricing is a cornerstone of quality airport transportation. Unlike metered taxis or surge-priced rideshares, our Westchester County limousine service offers flat-rate pricing for all airport transfers. When you book, you'll receive a complete quote that includes:
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Base fare for your selected vehicle type</li>
                  <li>All tolls (Throgs Neck Bridge, Whitestone Bridge, etc.)</li>
                  <li>Fuel surcharges (if applicable)</li>
                  <li>Airport fees and parking costs</li>
                  <li>Optional gratuity (typically 15-20%)</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Payment options include credit cards, corporate accounts, and mobile payment platforms. For frequent travelers, we offer corporate billing arrangements with monthly invoicing, making expense reporting simple for business professionals in White Plains, Scarsdale, and throughout Westchester County.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-600" />
                    Pro Tip: Save with Round-Trip Bookings
                  </h3>
                  <p className="mb-0 text-gray-700">
                    Book both your departure and return airport transfers together to receive discounted rates. Round-trip reservations from Westchester County locations often include 10-15% savings compared to booking separate one-way trips.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Corporate Airport Transportation in Westchester
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Business travelers from Westchester County companies rely on professional airport limousine service for several compelling reasons. First, time efficiency—executives can work during the commute using onboard Wi-Fi and charging ports available in our luxury vehicles. Second, reliability—corporate reputations depend on punctuality, and our flight-tracking technology ensures on-time arrivals. Third, professional image—arriving at business meetings or conferences via chauffeur-driven sedan creates a strong first impression.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Many Fortune 500 companies and established businesses in White Plains, Purchase, and Rye Brook trust our corporate airport transportation service. We offer dedicated account management, priority booking, detailed travel reports, and consolidated billing for accounting departments.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Safety and Licensing Requirements
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Professional airport transportation in New York State requires specific licensing and insurance coverage. All legitimate limousine services operating in Westchester County must maintain:
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>New York State Department of Transportation (DOT) operating authority</li>
                  <li>Commercial vehicle insurance with minimum $1.5 million liability coverage</li>
                  <li>Chauffeurs with valid NYS commercial driver's licenses</li>
                  <li>Regular vehicle safety inspections and maintenance records</li>
                  <li>Background checks and drug testing for all drivers</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  When booking airport transportation, always verify that your provider maintains proper licensing. This ensures passenger safety, vehicle reliability, and legal compliance—factors that distinguish professional limousine services from unlicensed operators.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Special Considerations for Westchester County Airport (HPN)
                </h2>

                <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/luxury-mercedes-sprinter-van-executive-interior.jpg"
                    alt="Westchester County Airport terminal building"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Westchester County Airport (HPN) in White Plains offers unique advantages for local travelers. As a smaller, more manageable facility compared to JFK or Newark, HPN provides faster check-in, shorter security lines, and easier navigation. The airport serves major destinations through carriers including JetBlue, Delta, and American Airlines.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  For residents of Westchester communities like Harrison, Mamaroneck, Larchmont, or Pelham, HPN is often the most convenient option, with typical drive times under 20 minutes. Our limousine service to Westchester County Airport includes the same professional amenities as our NYC airport transfers—flight monitoring, meet and greet service, and luxury vehicles—at competitive rates reflecting the shorter distance.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Seasonal Travel Tips for Airport Transportation
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Westchester County experiences distinct seasonal challenges that affect airport transportation timing and planning:
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Winter (November-March):</strong> Snow and ice can significantly impact travel times from Westchester to NYC airports. During winter months, we recommend adding 30-45 minutes to standard travel times for flights departing JFK, LaGuardia, or Newark. Our chauffeurs monitor weather forecasts and road conditions, adjusting departure times proactively to ensure on-time arrivals despite challenging conditions.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Summer (June-August):</strong> Peak vacation season means heavier traffic on I-95, Hutchinson River Parkway, and major airport access roads. Friday afternoons and Sunday evenings see particularly heavy congestion. Book morning or midday transfers when possible to avoid rush hour delays.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Holiday Periods:</strong> Thanksgiving, Christmas, and New Year's weeks represent the busiest travel periods. Vehicle availability can be limited, and prices may reflect premium demand. We strongly recommend booking holiday airport transfers 2-3 weeks in advance to secure your preferred vehicle and time slot.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How early should I book my Westchester airport transfer?
                    </h3>
                    <p className="text-gray-700">
                      We recommend booking at least 24-48 hours in advance for regular travel dates. For holiday periods, major events, or large group transportation, book 1-2 weeks ahead to ensure availability.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What happens if my flight is delayed?
                    </h3>
                    <p className="text-gray-700">
                      Our flight monitoring system automatically tracks delays and adjusts chauffeur dispatch times accordingly. There's no need to call us—we'll be there when you land, regardless of delays up to several hours.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Are tolls included in the quoted price?
                    </h3>
                    <p className="text-gray-700">
                      Yes, all tolls (Throgs Neck Bridge, Whitestone Bridge, Triborough Bridge, etc.) are included in our flat-rate pricing. The quote you receive is the total cost with no hidden fees.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Can I make stops during my airport transfer?
                    </h3>
                    <p className="text-gray-700">
                      Additional stops can be accommodated with advance notice. Common requests include stops at offices in White Plains or brief detours to pick up additional passengers in nearby Westchester communities.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What vehicles are available for airport transportation?
                    </h3>
                    <p className="text-gray-700">
                      Our fleet includes luxury sedans (Lincoln, Cadillac), executive SUVs (Chevrolet Suburban, Cadillac Escalade), and Mercedes Sprinter vans for larger groups. All vehicles feature leather interiors, climate control, and premium amenities.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Conclusion: Your Trusted Partner for Westchester Airport Transportation
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Choosing professional limousine service for airport transfers from Westchester County transforms travel from stressful to seamless. Whether you're departing from White Plains, Scarsdale, Rye, or any Westchester community, reliable transportation to JFK, LaGuardia, Newark, or Westchester County Airport is essential for starting your journey on the right note.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our commitment to punctuality, safety, and customer service has made us the preferred airport transportation provider for thousands of Westchester residents and businesses. From solo business travelers to large corporate groups, we have the expertise, vehicles, and dedication to ensure your airport transfer exceeds expectations.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Ready to book your next airport transfer? Contact us today for a quote, or reserve your vehicle online through our simple booking system. Experience the difference that professional Westchester County airport limousine service can make—reliable, comfortable, and stress-free travel every time.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  We Serve All Westchester County Communities
                </h2>
                <p className="text-xl text-gray-600">
                  Premium airport transportation from every neighborhood in Westchester
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="flex flex-wrap justify-center gap-4">
                  {serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Book Your Westchester Airport Transfer Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience professional, reliable airport transportation from Westchester County to JFK, LaGuardia, Newark, and HPN. Available 24/7 with instant online booking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" asChild>
                <Link href="tel:914-222-1919">Call: (914) 222-1919</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Transportation Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/blog/corporate-limousine-services-westchester-ny" className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/luxury-mercedes-sprinter-van-executive-interior.jpg"
                        alt="Corporate Limousine Services in Westchester NY"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                        Corporate Limousine Services in Westchester NY
                      </h3>
                      <p className="text-gray-600">
                        Discover how professional chauffeur services enhance business travel for Westchester executives.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/wedding-limousine-services-westchester" className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/white-stretch-limousine-luxury-interior.jpg"
                        alt="Wedding Limousine Services in Westchester"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                        Wedding Limousine Services in Westchester
                      </h3>
                      <p className="text-gray-600">
                        Planning a wedding in Westchester County? Learn about luxury vehicle options for your special day.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}