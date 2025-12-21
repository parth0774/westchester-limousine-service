import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Book a Ride | Westchester Limousine",
    description: "Book your luxury limousine service online. Easy reservation for airport transfers, corporate travel, and special events.",
    alternates: {
        canonical: "/booking",
    },
}

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
