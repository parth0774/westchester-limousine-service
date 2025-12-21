"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbsProps {
  className?: string
  items?: {
    label: string
    href: string
  }[]
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
  const pathname = usePathname()

  // Generate breadcrumbs from path if items not provided
  const generatedItems =
    items ||
    pathname
      .split("/")
      .filter((segment) => segment !== "")
      .map((segment, index, array) => {
        const href = "/" + array.slice(0, index + 1).join("/")
        const label = segment
          .replace(/-/g, " ")
          .replace(/^\w/, (c) => c.toUpperCase()) // Capitalize first letter
        return { label, href }
      })

  const breadcrumbList = [
    { label: "Home", href: "/" },
    ...generatedItems,
  ]

  // Schema.org BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbList.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://westchesterlimousine.net${item.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={cn("flex", className)}>
        <ol className="flex items-center space-x-2">
          {breadcrumbList.map((item, index) => {
            const isLast = index === breadcrumbList.length - 1
            return (
              <li key={`breadcrumb-${index}-${item.href}`} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />}
                {index === 0 ? (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-foreground font-medium capitalize" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors capitalize"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
