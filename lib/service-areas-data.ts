// Re-export types for convenience
export type { CityData, AreaData } from "./service-areas/types"

// Import all area data files
import { westchesterCountyData } from "./service-areas/westchester-county-ny"
import { putnamCountyData } from "./service-areas/putnam-county-ny"
import { dutchessCountyData } from "./service-areas/dutchess-county-ny"
import { fairfieldCountyData } from "./service-areas/fairfield-county-ct"
import { newYorkCityMetroAreaData } from "./service-areas/new-york-city-metro-area"
import type { AreaData } from "./service-areas/types"

// Combine all area data into a single object
export const areaData: Record<string, AreaData> = {
  "westchester-county-ny": westchesterCountyData,
  "putnam-county-ny": putnamCountyData,
  "dutchess-county-ny": dutchessCountyData,
  "fairfield-county-ct": fairfieldCountyData,
  "new-york-city-metro-area": newYorkCityMetroAreaData,
}

// Helper function to get all cities for static generation
export function getAllCities(): Array<{ area: string; city: string }> {
  const cities: Array<{ area: string; city: string }> = []
  for (const [areaSlug, area] of Object.entries(areaData)) {
    for (const city of area.cities) {
      cities.push({ area: areaSlug, city: city.slug })
    }
  }
  return cities
}
