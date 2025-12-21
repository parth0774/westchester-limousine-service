"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">WL</span>
            </div>
            <span className="font-bold text-xl text-foreground">Westchester Limousine</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-accent transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/services/airport">Airport Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/corporate">Corporate Travel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/school">School Transportation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/hourly">Hourly & City-to-City</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/events">Proms, Weddings & Events</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/fleet" className="text-foreground hover:text-accent transition-colors">
              Fleet
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="tel:914-222-1919">
                <Phone className="mr-2 h-4 w-4" />
                (914) 222-1919
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col px-4 pb-6">
              <Link href="/" className="w-full py-3 text-lg font-medium text-foreground hover:text-accent border-b border-border/50 transition-colors">
                Home
              </Link>
              <Link href="/about" className="w-full py-3 text-lg font-medium text-foreground hover:text-accent border-b border-border/50 transition-colors">
                About
              </Link>

              <div className="py-2 space-y-1">
                <p className="px-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider py-2">Services</p>
                <Link href="/services/airport" className="block w-full py-2.5 pl-4 text-base font-medium text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors">
                  Airport Services
                </Link>
                <Link href="/services/corporate" className="block w-full py-2.5 pl-4 text-base font-medium text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors">
                  Corporate Travel
                </Link>
                <Link href="/services/school" className="block w-full py-2.5 pl-4 text-base font-medium text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors">
                  School Transportation
                </Link>
                <Link href="/services/hourly" className="block w-full py-2.5 pl-4 text-base font-medium text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors">
                  Hourly & City-to-City
                </Link>
                <Link href="/services/events" className="block w-full py-2.5 pl-4 text-base font-medium text-foreground hover:text-accent hover:bg-accent/5 rounded-md transition-colors">
                  Proms, Weddings & Events
                </Link>
              </div>

              <Link href="/fleet" className="w-full py-3 text-lg font-medium text-foreground hover:text-accent border-b border-border/50 transition-colors">
                Fleet
              </Link>
              <Link href="/contact" className="w-full py-3 text-lg font-medium text-foreground hover:text-accent border-b border-border/50 transition-colors">
                Contact
              </Link>

              <div className="flex flex-col space-y-3 pt-6 mt-2">
                <Button size="lg" className="w-full text-base" asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full text-base" asChild>
                  <Link href="tel:914-222-1919">
                    <Phone className="mr-2 h-5 w-5" />
                    (914) 222-1919
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
