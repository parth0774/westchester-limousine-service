import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const viewport = {
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Westchester Limousine | Premium Transportation Services",
  description:
    "Experience luxury, reliability, and professional chauffeur services for all your transportation needs in Westchester County and the Tri-State Area.",
  generator: "v0.app",
  metadataBase: new URL("https://westchesterlimousine.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://westchesterlimousine.net",
    title: "Westchester Limousine | Premium Car Service",
    description: "Experience luxury, reliability, and professional chauffeur services for all your transportation needs in Westchester County and the Tri-State Area.",
    siteName: "Westchester Limousine",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder or update path
        width: 1200,
        height: 630,
        alt: "Westchester Limousine Luxury Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Westchester Limousine | Premium Car Service",
    description: "Professional chauffeur services for airport transfers, corporate travel, and special events in Westchester County.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Westchester Limousine",
              image: "https://westchesterlimousine.net/og-image.jpg", // Assuming an image exists or will exist
              "@id": "https://westchesterlimousine.net",
              url: "https://westchesterlimousine.net",
              telephone: "+19142221919",
              email: "info.westchesterlimousine@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2945 Lexington Avenue",
                addressLocality: "Mohegan Lake",
                addressRegion: "NY",
                postalCode: "10547",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.3164, // Approximate lat for Mohegan Lake
                longitude: -73.8656, // Approximate lon for Mohegan Lake
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$",
            }),
          }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
