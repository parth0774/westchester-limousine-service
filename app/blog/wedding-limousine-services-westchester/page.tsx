import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Heart, Camera, Clock, Users, CheckCircle, Star, MapPin, Calendar } from "lucide-react"

export const metadata = {
  title: "Wedding Limousine Services Westchester NY | Luxury Wedding Transportation",
  description:
    "Premium wedding limousine services in Westchester County. Stretch limos, luxury sedans, and Mercedes Sprinters for weddings in White Plains, Tarrytown, and all Westchester venues. Book your dream wedding transportation.",
  keywords: "wedding limousine Westchester, wedding car service White Plains, bridal limo Tarrytown, wedding transportation Westchester County, luxury wedding vehicles NY",
  openGraph: {
    title: "Wedding Limousine Services in Westchester: What You Need to Know",
    description:
      "Choose the perfect luxury vehicle for your Westchester County wedding. From stretch limos to Mercedes Sprinters for venues across White Plains, Tarrytown, and beyond.",
    url: "https://westchesterlimousine.net/blog/wedding-limousine-services-westchester",
    siteName: "Westchester Limousine",
    images: [
      {
        url: "https://westchesterlimousine.net/images/blog/luxury-black-limousine-parked-in-front-of-elegant-.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Limousine Service in Westchester County",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2025-07-10T09:00:00Z",
  },
  alternates: {
    canonical: "https://westchesterlimousine.net/blog/wedding-limousine-services-westchester",
  },
}

const vehicles = [
  {
    icon: Heart,
    name: "Stretch Limousines",
    capacity: "6-10 passengers",
    description: "Classic elegance for bridal parties. Perfect for photos and arriving in style.",
    ideal: "Bride & bridesmaids, groomsmen parties",
  },
  {
    icon: Users,
    name: "Luxury Sedans",
    capacity: "2-4 passengers",
    description: "Intimate transportation for couples. Sophisticated and romantic getaway vehicles.",
    ideal: "Bride & groom departure, parents",
  },
  {
    icon: Users,
    name: "SUV Limousines",
    capacity: "8-12 passengers",
    description: "Spacious luxury for larger bridal parties with extra room for dresses.",
    ideal: "Full bridal party, family groups",
  },
  {
    icon: Users,
    name: "Mercedes Sprinter Vans",
    capacity: "10-14 passengers",
    description: "Executive comfort for wedding parties. Stand-up height and premium amenities.",
    ideal: "Large bridal parties, guest shuttles",
  },
]

const weddingServices = [
  "Bridal party transportation",
  "Ceremony to reception transfers",
  "Guest shuttle services",
  "Photo tour transportation",
  "Bachelor/bachelorette parties",
  "Rehearsal dinner transport",
  "Airport transfers for wedding guests",
  "Honeymoon departure service",
]

const popularVenues = [
  { name: "Castle at Tarrytown", location: "Tarrytown" },
  { name: "Westchester Country Club", location: "Rye" },
  { name: "Glen Island Harbour Club", location: "New Rochelle" },
  { name: "The Opus", location: "White Plains" },
  { name: "Abigail Kirsch at Tappan Hill", location: "Tarrytown" },
  { name: "Flowerfield Celebrations", location: "St. James" },
]

export default function WeddingLimousineBlog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-rose-900 to-pink-800 text-white">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
              alt="Elegant Wedding Limousine in Westchester County"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Wedding Transportation</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Wedding Limousine Services in Westchester: What You Need to Know
              </h1>
              <p className="text-xl text-pink-100 mb-8">
                Make your special day unforgettable with luxury wedding transportation for venues across White Plains, Tarrytown, and all of Westchester County
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get Wedding Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  <Link href="tel:914-222-1919">Call (914) 222-1919</Link>
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
                  Your wedding day deserves flawless execution in every detail, and transportation is no exception. Whether you're planning an elegant celebration at a historic Tarrytown estate, a modern reception in White Plains, or an intimate ceremony at a charming Westchester venue, professional limousine service ensures you and your guests arrive on time, in style, and stress-free.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  This comprehensive guide covers everything couples need to know about choosing wedding transportation in Westchester County—from selecting the perfect vehicle to planning timelines and avoiding common booking mistakes.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Vehicle Options */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Luxury Wedding Vehicles for Your Westchester Celebration
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the perfect transportation to match your wedding style and party size
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {vehicles.map((vehicle, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <vehicle.icon className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-rose-600 font-semibold mb-3">
                      {vehicle.capacity}
                    </p>
                    <p className="text-gray-700 mb-3">
                      {vehicle.description}
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      <strong>Ideal for:</strong> {vehicle.ideal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Planning Your Wedding Transportation Timeline
                </h2>

                <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
                    alt="Bride entering luxury wedding limousine"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  When to Book Your Wedding Limousine
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <Link href="/service-areas/westchester-county-ny" className="text-blue-600 hover:underline">Westchester County</Link> is home to numerous stunning wedding venues, making it a popular wedding destination year-round. For peak wedding season (May through October), we recommend booking your <Link href="/services/events" className="text-blue-600 hover:underline font-semibold">limousine service</Link> 6-9 months in advance. Popular Saturdays at sought-after venues like The Castle at <Link href="/service-areas/westchester-county-ny/tarrytown" className="text-blue-600 hover:underline">Tarrytown</Link> or Westchester Country Club book quickly, especially for luxury vehicles like stretch limousines and large Sprinter vans. Winter and early spring weddings offer more flexibility, with 3-4 months advance booking typically sufficient.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Creating Your Transportation Schedule
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Successful wedding day transportation requires careful timing. Start by mapping all locations: getting-ready venues, ceremony site, photo locations, and reception venue. Account for Westchester traffic patterns—Saturday afternoon traffic on major routes like I-287 or the Hutchinson River Parkway can add 20-30 minutes to travel times. Build buffer time for photos, last-minute preparations, and unexpected delays. Most couples allocate vehicles for 6-8 hours to cover all wedding day transportation needs comfortably.
                </p>

                <div className="bg-rose-50 border-l-4 border-rose-500 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-rose-600" />
                    Sample Wedding Day Timeline
                  </h3>
                  <ul className="mb-0 text-gray-700 space-y-2">
                    <li><strong>2:00 PM:</strong> Limousine picks up bridal party from hotel in White Plains</li>
                    <li><strong>2:30 PM:</strong> Arrive at ceremony venue in Tarrytown</li>
                    <li><strong>4:30 PM:</strong> Transport to photo location (e.g., Sleepy Hollow estates)</li>
                    <li><strong>5:30 PM:</strong> Arrive at reception venue</li>
                    <li><strong>11:00 PM:</strong> Bride and groom departure to hotel</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Wedding Transportation Services We Provide
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {weddingServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Choosing the Right Vehicle for Your Wedding Style
                </h2>

                <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
                    alt="Wedding party celebrating in luxury limousine"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Traditional Elegance: Stretch Limousines
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For couples seeking classic wedding transportation, stretch limousines remain the iconic choice. These vehicles accommodate 6-10 passengers comfortably, perfect for bridesmaids traveling together from getting-ready locations in Scarsdale or Harrison to ceremony sites. The extended interior provides ample space for wedding gowns, bouquets, and champagne toasts en route. White or black exterior options complement any wedding color scheme, and the elegant profile creates stunning photo opportunities at Westchester's beautiful venues.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Modern Luxury: Mercedes Sprinter Vans
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mercedes Sprinter vans have become increasingly popular for Westchester weddings, offering executive comfort combined with practical capacity. These vehicles seat up to 14 passengers with stand-up height, making them ideal for larger bridal parties or guest shuttle services between hotels and venues. Premium features include leather seating, ambient lighting, climate control, and entertainment systems. Sprinters work exceptionally well for transporting guests from Westchester hotels to ceremony and reception locations, ensuring everyone arrives together and on time.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Intimate Sophistication: Luxury Sedans
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Many couples choose luxury sedans for their private departure from the reception to their wedding night hotel or honeymoon departure the next morning. Lincoln and Cadillac sedans provide intimate, romantic transportation with professional chauffeur service. This option is also popular for transporting parents, grandparents, or VIP guests who require special attention and comfort during wedding day travel throughout Westchester County.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Popular Westchester Wedding Venues and Transportation
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Westchester County boasts diverse wedding venues, each with unique transportation considerations. Here are insights for some of the region's most beloved locations:
                </p>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 my-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Featured Westchester Wedding Venues
                  </h3>
                  <div className="space-y-4">
                    {popularVenues.map((venue, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                        <MapPin className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{venue.name}</h4>
                          <p className="text-sm text-gray-600">{venue.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Each venue has specific arrival procedures, parking configurations, and photo location opportunities. Our experienced chauffeurs are familiar with all major Westchester wedding venues and work closely with venue coordinators to ensure seamless arrivals and departures. We also know the best nearby locations for wedding party photos—waterfront parks, historic estates, and scenic overlooks throughout the county.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Guest Shuttle Services for Westchester Weddings
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Many couples hosting destination-style weddings in Westchester provide shuttle transportation for out-of-town guests. This thoughtful service ensures guests staying at hotels in White Plains, Rye, or nearby areas can enjoy the celebration without worrying about navigation or parking. Shuttle services typically operate on a loop schedule, transporting guests from designated hotels to the ceremony/reception venue and returning them safely at the evening's conclusion. This approach also reduces parking congestion at venues and allows guests to celebrate without designated driver concerns.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Pricing and Packages for Wedding Limousine Service
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Wedding limousine services in Westchester County typically offer hourly rates or package pricing. Most packages include a minimum rental period (often 4-6 hours), which covers essential wedding day transportation needs. Pricing factors include vehicle type, rental duration, date (peak season Saturdays command premium rates), and distance traveled. Many companies offer complete wedding packages that bundle bridal party transportation with guest shuttle services at discounted rates.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  When requesting quotes, provide detailed information about your timeline, guest count, and all pick-up/drop-off locations. Transparent pricing should include vehicle rental, chauffeur gratuity, fuel costs, and any applicable taxes. Some companies charge extra for services like red carpet rollout, champagne service, or decorative ribbons—clarify these details during booking to avoid surprises.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-600" />
                    Money-Saving Tips
                  </h3>
                  <ul className="mb-0 text-gray-700 space-y-2">
                    <li>Book early to secure better rates and vehicle availability</li>
                    <li>Consider Friday or Sunday weddings for lower transportation costs</li>
                    <li>Bundle bridal party and guest shuttle services for package discounts</li>
                    <li>Off-season weddings (November-April) often feature reduced rates</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Questions to Ask Your Wedding Transportation Provider
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Before finalizing your Westchester wedding transportation, ensure your provider can answer these essential questions:
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Are you licensed and insured for wedding transportation in New York State?</li>
                  <li>Can we see photos of the actual vehicles we'll receive (not stock photos)?</li>
                  <li>What is your backup plan if a vehicle experiences mechanical issues?</li>
                  <li>Are chauffeurs familiar with our specific wedding venues?</li>
                  <li>What is included in the quoted price, and what costs extra?</li>
                  <li>What is your cancellation and refund policy?</li>
                  <li>How do you handle schedule changes or delays on the wedding day?</li>
                  <li>Can you provide recent references from Westchester County weddings?</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Making Your Wedding Transportation Memorable
                </h2>

                <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/luxury-black-limousine-parked-in-front-of-elegant-.jpg"
                    alt="Romantic couple in wedding limousine at sunset"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Beyond practical transportation, your wedding limousine becomes part of your celebration's memories. Many couples enhance their experience with special touches: champagne service for toasts with the bridal party, custom decorations matching wedding colors, or surprise messages displayed inside the vehicle. The private moments in the limousine—whether celebrating with your closest friends or enjoying quiet time as newlyweds—become cherished memories captured by photographers and remembered for years to come.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Final Thoughts: Stress-Free Wedding Transportation in Westchester
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your wedding day should be filled with joy, not transportation stress. Professional limousine service in Westchester County ensures you, your wedding party, and your guests travel safely, comfortably, and on schedule throughout your celebration. From the moment the bridal party departs for the ceremony through the newlyweds' romantic departure, experienced chauffeurs handle every detail with precision and care.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Whether you envision a classic stretch limousine arrival at a historic Tarrytown estate or modern Sprinter van transportation for your entire wedding party through White Plains and beyond, the right transportation partner transforms logistics into luxury. Start planning your wedding transportation early, communicate your vision clearly, and trust experienced professionals to deliver flawless service that complements your perfect day.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Book Your Westchester Wedding Transportation?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
              Let us make your wedding day transportation as special as your celebration. Professional service, luxury vehicles, and attention to every detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Your Wedding Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20" asChild>
                <Link href="/services">View Wedding Fleet</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Explore Our Transportation Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/services/airport" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600">
                      Airport Services
                    </h3>
                    <p className="text-gray-600">
                      Reliable airport transfers for wedding guests traveling to JFK, LaGuardia, or Newark.
                    </p>
                  </div>
                </Link>
                <Link href="/services/corporate" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600">
                      Corporate Events
                    </h3>
                    <p className="text-gray-600">
                      Professional transportation for corporate events, conferences, and business gatherings.
                    </p>
                  </div>
                </Link>
                <Link href="/service-areas" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600">
                      Service Areas
                    </h3>
                    <p className="text-gray-600">
                      We serve Westchester County, Putnam, Dutchess, Fairfield County, and NYC.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                More Luxury Transportation Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/blog/airport-transportation-westchester-county-guide" className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/luxury-black-suv-cadillac-escalade.jpg"
                        alt="Airport Transportation Westchester County"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600">
                        Airport Transportation in Westchester County
                      </h3>
                      <p className="text-gray-600">
                        Complete guide to reliable airport transfers from Westchester to all major NYC airports.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/blog/corporate-limousine-services-westchester-ny" className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/luxury-black-sedan-mercedes-s-class.jpg"
                        alt="Corporate Limousine Services Westchester NY"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600">
                        Corporate Limousine Services in Westchester NY
                      </h3>
                      <p className="text-gray-600">
                        Professional executive transportation for Westchester County business travelers.
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