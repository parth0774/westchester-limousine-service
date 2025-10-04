"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "5 Tips for Choosing the Perfect Transportation for Your Event",
    date: "September 15, 2025",
    excerpt:
      "Learn how to select the right vehicle, driver, and service package to make your event truly memorable.",
  },
  {
    title: "Why Professional Chauffeur Services Enhance Corporate Travel",
    date: "August 28, 2025",
    excerpt:
      "Discover the benefits of hiring a professional chauffeur service for business trips and corporate events.",
  },
  {
    title: "Top 10 Luxury Vehicles for Special Occasions",
    date: "July 10, 2025",
    excerpt:
      "Explore the most elegant and stylish vehicles for weddings, proms, and other milestone events.",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and updates about luxury transportation and special event travel.
            </p>
          </div>
        </section>

        {/* Blog List Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.title}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                    <span className="text-muted-foreground">Image Placeholder</span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                    <p className="text-base text-foreground mb-4">{post.excerpt}</p>
                    {/* <Button variant="outline" asChild>
                      <Link href="/blog/5-tips-for-choosing-the-perfect-transportation-for-your-event">Read More</Link>
                    </Button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Want More Insights About Luxury Transportation?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Subscribe to our newsletter for tips, industry updates, and exclusive offers.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Subscribe Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
