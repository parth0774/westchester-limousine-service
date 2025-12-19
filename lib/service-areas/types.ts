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
    focusKeyphrase: string
    seoTitle: string
    metaDescription: string
    urlSlug: string
    content: string
    imageAltText: string
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

