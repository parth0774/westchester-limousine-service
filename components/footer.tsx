import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">WL</span>
              </div>
              <span className="font-bold text-lg">Westchester Limousine</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Premium transportation services in Westchester County and the Tri-State Area since 1995.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>24/7 Service Available</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/services/corporate" className="hover:text-accent transition-colors">
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link href="/services/black-car" className="hover:text-accent transition-colors">
                  Black Car Services
                </Link>
              </li>
              <li>
                <Link href="/services/special-occasions" className="hover:text-accent transition-colors">
                  Special Occasions
                </Link>
              </li>
              <li>
                <Link href="/services/group-travel" className="hover:text-accent transition-colors">
                  Group Travel
                </Link>
              </li>
              <li>
                <Link href="/services/family" className="hover:text-accent transition-colors">
                  Travel with Kids
                </Link>
              </li>
              <li>
                <Link href="/services/airport" className="hover:text-accent transition-colors">
                  Airport Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
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
                <Link href="/rates" className="hover:text-accent transition-colors">
                  Rates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
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
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(914) 22-1919</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@westchesterlimousine.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <p>Westchester County, NY</p>
                  <p className="text-sm">Serving Tri-State Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Westchester Limousine. All rights reserved. | Licensed & Insured</p>
        </div>
      </div>
    </footer>
  )
}
