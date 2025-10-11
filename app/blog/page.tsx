import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Westchester Limousine Blog | Airport, Corporate & Wedding Transportation Tips",
  description:
    "Expert advice on limousine services in Westchester County NY. Learn about airport transfers, corporate travel, and wedding transportation in White Plains, Scarsdale, and beyond.",
  openGraph: {
    title: "Westchester Limousine Blog | Local Transportation Insights",
    description:
      "Professional insights about chauffeur services, airport transfers, and luxury transportation in Westchester County, New York.",
    url: "https://westchesterlimousine.net/blog",
    siteName: "Westchester Limousine",
    images: [
      {
        url: "https://westchesterlimousine.net/images/blog/luxury-mercedes-sprinter-van-executive-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Mercedes Sprinter Van Executive Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://westchesterlimousine.net/blog",
  },
}

const blogPosts = [
  {
    title: "Ultimate Guide to Airport Transportation in Westchester County",
    date: "September 15, 2025",
    slug: "airport-transportation-westchester-county-guide",
    excerpt:
      "Discover reliable limousine services for JFK, LaGuardia, Newark, and Westchester Airport transfers. Learn about rates, booking tips, and why local Westchester chauffeurs offer the best experience.",
    image: "/white-stretch-limousine-luxury-interior.jpg",
  },
  {
    title: "Top Corporate Limousine Services in Westchester NY for Business Executives",
    date: "August 28, 2025",
    slug: "corporate-limousine-services-westchester-ny",
    excerpt:
      "Professional chauffeur services for White Plains, Scarsdale, and Rye businesses. Explore how Westchester County executives benefit from reliable, punctual corporate transportation.",
    image: "/luxury-mercedes-sprinter-van-executive-interior.jpg",
  },
  {
    title: "Wedding Limousine Services in Westchester: What You Need to Know",
    date: "July 10, 2025",
    slug: "wedding-limousine-services-westchester",
    excerpt:
      "Planning a wedding in Westchester County? Learn how to choose the perfect luxury vehicle, from stretch limos to Mercedes Sprinters, for venues across White Plains, Tarrytown, and beyond.",
    image: "/luxury-black-limousine-parked-in-front-of-elegant-.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Westchester County Limousine Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights on luxury transportation, airport transfers, corporate travel, and special events in Westchester County, NY.
            </p>
          </div>
        </section>

        {/* Blog List Section */}
        <section className="py-20" aria-labelledby="blog-list">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="blog-list" className="text-3xl font-semibold mb-10 text-center">
              Latest Transportation Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      priority={true}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                    <p className="text-base text-foreground mb-4">{post.excerpt}</p>
                    <Button variant="outline" asChild>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Luxury Transportation in Westchester County?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contact us for premium limousine services throughout Westchester, NY. Airport transfers, corporate travel, and special events.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}