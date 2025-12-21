"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="h-8 w-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">WL</span>
              </div>
              <span className="font-bold text-lg">Westchester Limousine</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Westchester Limousine is your trusted black car and airport service provider in Westchester County, NY. Serving business travelers, families, and event organizers with professionalism, safety, and luxury since 1995.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>24/7 Reliable Service</span>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/services/airport" className="hover:text-accent transition-colors">
                  Airport Car Service
                </Link>
              </li>
              <li>
                <Link href="/services/corporate" className="hover:text-accent transition-colors">
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link href="/services/school" className="hover:text-accent transition-colors">
                  School Transportation
                </Link>
              </li>
              <li>
                <Link href="/services/hourly" className="hover:text-accent transition-colors">
                  Hourly & City-to-City
                </Link>
              </li>
              <li>
                <Link href="/services/events" className="hover:text-accent transition-colors">
                  Proms, Weddings & Special Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-accent transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4" />
                <span>(914) 222-1919</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info.westchesterlimousine@gmail.com" className="hover:text-accent transition-colors">
                  info.westchesterlimousine@gmail.com
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <p>2945 Lexington Avenue</p>
                  <p>Mohegan Lake 10547</p>
                  <p className="text-sm mt-1">Serving Westchester, Putnam, Dutchess Counties, Fairfield County (CT) & NYC Metro Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p className="mb-2">
            Experience premium chauffeured transportation with Westchester Limousine — your trusted choice for airport transfers, corporate travel, and special events in Westchester County and beyond.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
            <span>Call us now at <a href="tel:+19142221919" className="text-accent font-semibold">(914) 222-1919</a> or email <a href="mailto:info.westchesterlimousine@gmail.com" className="text-accent font-semibold">info.westchesterlimousine@gmail.com</a> to book your ride today.</span>
          </div>
          <p className="text-sm">
            &copy; 2025 Westchester Limousine. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  )
}
