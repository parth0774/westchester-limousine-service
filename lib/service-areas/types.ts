export interface SEOContentSection {
  title: string
  content: string
  items?: string[]
}

export interface CityData {
  name: string
  slug: string
  description: string
  landmarks: string[]
  popularRoutes: { from: string; to: string; time: string }[]
  localServices: string[]
  businessDistricts: string[]
  nearbyAttractions: string[]
  travelTimes: { destination: string; time: string }[]
  seoContent?: {
    introduction?: string
    sections?: SEOContentSection[]
  }
}

export interface AreaData {
  name: string
  slug: string
  description: string
  cities: CityData[]
  features: string[]
  popularDestinations: { name: string; description: string }[]
  travelTime: { destination: string; time: string }[]
  serviceTypes: string[]
  whyChoose: string[]
}

