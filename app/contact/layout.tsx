import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Westchester Limousine",
    description: "Get in touch with Westchester Limousine. 24/7 customer service for all your luxury transportation needs.",
    alternates: {
        canonical: "/contact",
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
