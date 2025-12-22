/**
 * Airport Pricing Utilities
 * 
 * Usage examples:
 * 
 * // Get exact price for airport ride
 * const price = getAirportPrice("Mount Kisco", "JFK") // Returns 170
 * 
 * // Get price with fuzzy matching (handles variations)
 * const price = getAirportPriceFuzzy("mount kisco", "jfk") // Returns 170
 * 
 * // Get all available towns
 * const towns = getAllTowns()
 * 
 * // Get all destinations for a town
 * const destinations = getDestinationsForTown("Yorktown Heights")
 * 
 * // Get all available destinations
 * const allDestinations = getAllDestinations()
 * 
 * // Get destination display name
 * const displayName = getDestinationDisplayName("lga") // Returns "LaGuardia Airport"
 */

import airportPricingData from './airport-pricing.json'

/**
 * Normalizes a location name for matching
 * - Converts to lowercase
 * - Trims whitespace
 * - Removes special characters and extra spaces
 */
function normalizeLocation(location: string): string {
  return location
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, ' ')
}

/**
 * Normalizes a destination name for matching
 * Handles common variations of airport and NYC destination names
 */
function normalizeDestination(destination: string): string {
  let normalized = normalizeLocation(destination)
  
  // Handle common airport name variations
  const airportAliases: Record<string, string> = {
    'laguardia': 'lga',
    'lga airport': 'lga',
    'laguardia airport': 'lga',
    'jfk airport': 'jfk',
    'jfk international': 'jfk',
    'john f kennedy': 'jfk',
    'kennedy airport': 'jfk',
    'newark': 'ewr',
    'ewr airport': 'ewr',
    'newark airport': 'ewr',
    'newark liberty': 'ewr',
    'westchester airport': 'hpn',
    'hpn airport': 'hpn',
    'westchester county airport': 'hpn',
    'white plains airport': 'hpn',
    'nyc': 'nyc above 42nd',
    'new york city': 'nyc above 42nd',
    'manhattan': 'nyc above 42nd',
    'nyc above 42nd street': 'nyc above 42nd',
    'nyc below 42nd street': 'nyc below 42nd',
    'downtown nyc': 'nyc below 42nd',
    'lower manhattan': 'nyc below 42nd',
    'nyc zone 1': 'nyc 1',
    'nyc zone 2': 'nyc 2',
    'new york city zone 1': 'nyc 1',
    'new york city zone 2': 'nyc 2'
  }
  
  // Check for aliases
  for (const [alias, standard] of Object.entries(airportAliases)) {
    if (normalized.includes(alias) || alias.includes(normalized)) {
      return standard
    }
  }
  
  return normalized
}

/**
 * Finds a price for a given town and destination (airport or NYC zone)
 * @param town - The pickup town name
 * @param destination - The destination (LGA, JFK, EWR, HPN, NYC Above 42nd, NYC Below 42nd)
 * @returns The price in USD, or null if no route found
 */
export function getAirportPrice(town: string, destination: string): number | null {
  const normalizedTown = normalizeLocation(town)
  const normalizedDestination = normalizeDestination(destination)

  // Find the route that matches the town
  for (const route of airportPricingData.routes) {
    if (normalizeLocation(route.town) === normalizedTown) {
      // Check if destination exists in this route's destinations
      for (const [dest, price] of Object.entries(route.destinations)) {
        if (normalizeDestination(dest) === normalizedDestination) {
          return price
        }
      }
    }
  }

  return null
}

/**
 * Finds a price with fuzzy matching (partial match)
 * @param town - The pickup town name
 * @param destination - The destination (airport or NYC zone)
 * @returns The price in USD, or null if no route found
 */
export function getAirportPriceFuzzy(town: string, destination: string): number | null {
  const normalizedTown = normalizeLocation(town)
  const normalizedDestination = normalizeDestination(destination)

  // Try exact match first
  const exactMatch = getAirportPrice(town, destination)
  if (exactMatch !== null) {
    return exactMatch
  }

  // Find a route that matches the town (fuzzy)
  for (const route of airportPricingData.routes) {
    const normalizedRouteTown = normalizeLocation(route.town)
    const townMatch =
      normalizedRouteTown === normalizedTown ||
      normalizedRouteTown.includes(normalizedTown) ||
      normalizedTown.includes(normalizedRouteTown)

    if (townMatch) {
      // Check if destination exists in this route's destinations (fuzzy)
      for (const [dest, price] of Object.entries(route.destinations)) {
        const normalizedDest = normalizeDestination(dest)
        if (
          normalizedDest === normalizedDestination ||
          normalizedDest.includes(normalizedDestination) ||
          normalizedDestination.includes(normalizedDest)
        ) {
          return price
        }
      }
    }
  }

  return null
}

/**
 * Gets all available pickup towns
 * @returns Array of town names
 */
export function getAllTowns(): string[] {
  return airportPricingData.routes
    .map((route) => route.town)
    .sort()
}

/**
 * Gets all destinations with prices for a given town
 * @param town - The pickup town name
 * @returns Array of destination names with prices, or empty array if town not found
 */
export function getDestinationsForTown(town: string): Array<{ destination: string; price: number; displayName: string }> {
  const normalizedTown = normalizeLocation(town)
  const destinations: Array<{ destination: string; price: number; displayName: string }> = []

  for (const route of airportPricingData.routes) {
    if (normalizeLocation(route.town) === normalizedTown) {
      for (const [dest, price] of Object.entries(route.destinations)) {
        const displayName = getDestinationDisplayName(dest)
        destinations.push({ destination: dest, price, displayName })
      }
      break // Found the route, no need to continue
    }
  }

  return destinations.sort((a, b) => a.destination.localeCompare(b.destination))
}

/**
 * Gets all available destinations
 * @returns Array of unique destination names
 */
export function getAllDestinations(): string[] {
  const destinations = new Set<string>()
  for (const route of airportPricingData.routes) {
    Object.keys(route.destinations).forEach((dest) => destinations.add(dest))
  }
  return Array.from(destinations).sort()
}

/**
 * Gets the display name for a destination
 * @param destination - The destination key (e.g., "lga", "jfk", "nyc above 42nd")
 * @returns The human-readable display name
 */
export function getDestinationDisplayName(destination: string): string {
  const normalized = normalizeDestination(destination)
  const metadata = airportPricingData.metadata.destinations as Record<string, string>
  
  // Check if we have a display name in metadata
  for (const [key, displayName] of Object.entries(metadata)) {
    if (normalizeDestination(key) === normalized) {
      return displayName
    }
  }
  
  // Fallback: capitalize and format the destination name
  return normalized
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Gets all destination display names with their keys
 * @returns Array of objects with destination key and display name
 */
export function getAllDestinationsWithDisplayNames(): Array<{ key: string; displayName: string }> {
  const destinations = getAllDestinations()
  return destinations.map((dest) => ({
    key: dest,
    displayName: getDestinationDisplayName(dest),
  }))
}

