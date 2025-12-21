import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Shield, Users, Award, Clock, Plane, Briefcase, Heart, MapPin, ArrowRight } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Westchester Limousine",
  description: "Learn about Westchester Limousine's history, mission, and commitment to luxury transportation services since 1995.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Westchester Limousine
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Serving the Tri State Area with premiums limousine and black car service since 1995.
                Westchester Limousine is your trusted partner for luxury transportation.
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From airport transfers to corporate travel, special occasions, and group transportation,
                our professional chauffeurs deliver punctual, safe, and luxurious service every time.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Westchester Limousine has proudly served <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline font-semibold">Westchester County, New York</Link> and the Tri-State Area since 1995.
                    Over the years, we have built a reputation for excellence in the luxury transportation industry.
                    Our team understands the importance of comfort, reliability, and professionalism.
                  </p>
                  <p>
                    Starting as a small family-run business, we have grown into one of the most trusted
                    limousine and black car service providers in the region. Our growth is a reflection of
                    our commitment to exceptional service, attention to detail, and a dedication to exceeding expectations.
                  </p>
                  <p>
                    Whether it is a <Link href="/services/corporate" className="text-accent hover:underline">corporate meeting</Link>, a <Link href="/services/events" className="text-accent hover:underline">wedding</Link>, an <Link href="/services/airport" className="text-accent hover:underline">airport transfer</Link>, or a special event,
                    Westchester Limousine delivers a first-class experience with every ride.
                  </p>
                  <p>
                    Our success is built on strong relationships with our clients. We listen, adapt, and
                    ensure that every trip is tailored to meet their needs. Our chauffeurs are trained,
                    licensed, and fully insured to deliver safety and comfort at all times.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/professional-chauffeur-standing-next-to-luxury-bla.jpg"
                  alt="Professional chauffeur service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Our mission at Westchester Limousine is simple: to provide safe, reliable, and luxurious
                transportation services that exceed our clients’ expectations. We strive to ensure
                every ride is smooth, comfortable, and stress-free.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We are committed to upholding the highest standards in the limousine industry by offering:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
                <li>Professional and courteous chauffeurs trained in safety and etiquette</li>
                <li>A modern fleet of luxury vehicles equipped for comfort and convenience</li>
                <li>Reliable, on-time service tailored to each client’s schedule</li>
                <li>Transparent pricing with no hidden fees</li>
              </ul>
              <p className="mt-4 text-lg text-muted-foreground">
                Our goal is not just transportation — it is creating an experience worthy of your trust.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Westchester Limousine</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choosing the right limousine service makes all the difference. Here is why clients trust us for their transportation needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Experienced Chauffeurs</h3>
                <p className="text-muted-foreground text-sm">
                  Our chauffeurs are professionally trained, licensed, and experienced in luxury transportation
                  to provide a safe and comfortable ride.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Luxury Fleet</h3>
                <p className="text-muted-foreground text-sm">
                  Our fleet includes high-end sedans, SUVs, stretch limousines, and executive vans
                  maintained to the highest standards for comfort and safety.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Punctual Service</h3>
                <p className="text-muted-foreground text-sm">
                  Timely pick-ups and drop-offs are part of our guarantee. We value your time and make punctuality our priority.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fully Licensed & Insured</h3>
                <p className="text-muted-foreground text-sm">
                  We are fully licensed and insured to provide safe, legal, and trustworthy transportation
                  throughout Westchester County and the Tri-State Area.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Westchester Limousine is more than a transportation company — we are a partner in your travel experience.
                Whether for <Link href="/services/corporate" className="text-accent hover:underline">corporate travel</Link>, <Link href="/services/events" className="text-accent hover:underline">weddings</Link>, <Link href="/services/airport" className="text-accent hover:underline">airport transfers</Link>, or special events, we tailor every detail
                to your needs. Your comfort, safety, and satisfaction are our priorities.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Transportation Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-accent" />
                      Airport Services
                    </CardTitle>
                    <CardDescription>
                      Reliable airport transfers to JFK, LaGuardia, Newark, and Westchester County Airport.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/services/airport">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      Corporate Travel
                    </CardTitle>
                    <CardDescription>
                      Executive car service for business professionals with priority booking.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/services/corporate">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-accent" />
                      Events & Weddings
                    </CardTitle>
                    <CardDescription>
                      Luxury transportation for weddings, proms, and special events.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/services/events">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent" />
                      Hourly Service
                    </CardTitle>
                    <CardDescription>
                      Flexible hourly limo service for meetings, shopping, or city-to-city transfers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/services/hourly">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-accent" />
                      School Transportation
                    </CardTitle>
                    <CardDescription>
                      Safe and reliable private school transportation in Westchester County.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/services/school">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      Service Areas
                    </CardTitle>
                    <CardDescription>
                      We serve Westchester County, Putnam, Dutchess, Fairfield County, and NYC.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/service-areas">
                        View Areas <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Where We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/service-areas/westchester-county-ny" className="p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Westchester County, NY</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive luxury transportation services</p>
                </Link>
                <Link href="/service-areas/putnam-county-ny" className="p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Putnam County, NY</h3>
                  <p className="text-sm text-muted-foreground">Reliable limousine and black car services</p>
                </Link>
                <Link href="/service-areas/dutchess-county-ny" className="p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Dutchess County, NY</h3>
                  <p className="text-sm text-muted-foreground">Premium transportation solutions</p>
                </Link>
                <Link href="/service-areas/fairfield-county-ct" className="p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">Fairfield County, CT</h3>
                  <p className="text-sm text-muted-foreground">Professional chauffeur services</p>
                </Link>
                <Link href="/service-areas/new-york-city-metro-area" className="p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">New York City Metro</h3>
                  <p className="text-sm text-muted-foreground">Complete coverage of NYC boroughs</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Experience the Westchester Limousine Difference</h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Contact us today to book your next luxury transportation experience. Enjoy the comfort of a professional
                chauffeur and the prestige of a luxury limousine service tailored to your needs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Now</Link>
              </Button>
              <div className="mt-6 space-y-2 text-sm text-primary-foreground/70">
                <p>
                  Serving <Link href="/service-areas/westchester-county-ny" className="text-accent hover:underline">Westchester County</Link> and the Tri-State Area with professional, reliable, and luxurious transportation
                  since 1995.
                </p>
                <p>
                  <strong>Address:</strong> 2945 Lexington Avenue, Mohegan Lake, 10547
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:info.westchesterlimousine@gmail.com" className="text-accent hover:underline">info.westchesterlimousine@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
