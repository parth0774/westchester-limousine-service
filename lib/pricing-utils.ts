/**
 * Pricing Utilities for Long Distance Routes
 * 
 * Usage examples:
 * 
 * // Get exact price
 * const price = getPrice("Mount Kisco", "White Plains") // Returns 50
 * 
 * // Get price with fuzzy matching (handles variations)
 * const price = getPriceFuzzy("mount kisco", "white plains") // Returns 50
 * 
 * // Get all pickup locations
 * const pickups = getAllPickupLocations()
 * 
 * // Get all dropoff locations for a pickup
 * const dropoffs = getDropoffsForPickup("Yorktown Heights")
 * 
 * // Get all dropoff locations
 * const allDropoffs = getAllDropoffLocations()
 */

import pricingData from './long-distance-pricing.json'

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
 * Finds a price for a given pickup and dropoff location
 * @param pickup - The pickup location name
 * @param dropoff - The dropoff location name
 * @returns The price in USD, or null if no route found
 */
export function getPrice(pickup: string, dropoff: string): number | null {
  const normalizedPickup = normalizeLocation(pickup)
  const normalizedDropoff = normalizeLocation(dropoff)

  // Find a route that matches the pickup location
  for (const route of pricingData.routes) {
    // Check if any pickup location in this route matches
    const pickupMatch = route.pickupLocations.some(
      (loc) => normalizeLocation(loc) === normalizedPickup
    )

    if (pickupMatch) {
      // Check if dropoff exists in this route's dropoffs
      for (const [dropoffLocation, price] of Object.entries(route.dropoffs)) {
        if (normalizeLocation(dropoffLocation) === normalizedDropoff) {
          return price
        }
      }
    }
  }

  return null
}

/**
 * Finds a price with fuzzy matching (partial match)
 * @param pickup - The pickup location name
 * @param dropoff - The dropoff location name
 * @returns The price in USD, or null if no route found
 */
export function getPriceFuzzy(pickup: string, dropoff: string): number | null {
  const normalizedPickup = normalizeLocation(pickup)
  const normalizedDropoff = normalizeLocation(dropoff)

  // Try exact match first
  const exactMatch = getPrice(pickup, dropoff)
  if (exactMatch !== null) {
    return exactMatch
  }

  // Find a route that matches the pickup location (fuzzy)
  for (const route of pricingData.routes) {
    // Check if any pickup location in this route matches (fuzzy)
    const pickupMatch = route.pickupLocations.some((loc) => {
      const normalizedLoc = normalizeLocation(loc)
      return (
        normalizedLoc === normalizedPickup ||
        normalizedLoc.includes(normalizedPickup) ||
        normalizedPickup.includes(normalizedLoc)
      )
    })

    if (pickupMatch) {
      // Check if dropoff exists in this route's dropoffs (fuzzy)
      for (const [dropoffLocation, price] of Object.entries(route.dropoffs)) {
        const normalizedDropoffLoc = normalizeLocation(dropoffLocation)
        if (
          normalizedDropoffLoc === normalizedDropoff ||
          normalizedDropoffLoc.includes(normalizedDropoff) ||
          normalizedDropoff.includes(normalizedDropoffLoc)
        ) {
          return price
        }
      }
    }
  }

  return null
}

/**
 * Gets all available pickup locations
 * @returns Array of unique pickup location names
 */
export function getAllPickupLocations(): string[] {
  const locations = new Set<string>()
  for (const route of pricingData.routes) {
    route.pickupLocations.forEach((loc) => locations.add(loc))
  }
  return Array.from(locations).sort()
}

/**
 * Gets all available dropoff locations for a given pickup location
 * @param pickup - The pickup location name
 * @returns Array of dropoff location names with prices, or empty array if pickup not found
 */
export function getDropoffsForPickup(pickup: string): Array<{ location: string; price: number }> {
  const normalizedPickup = normalizeLocation(pickup)
  const dropoffs: Array<{ location: string; price: number }> = []

  for (const route of pricingData.routes) {
    const pickupMatch = route.pickupLocations.some(
      (loc) => normalizeLocation(loc) === normalizedPickup
    )

    if (pickupMatch) {
      for (const [location, price] of Object.entries(route.dropoffs)) {
        dropoffs.push({ location, price })
      }
      break // Found the route, no need to continue
    }
  }

  return dropoffs.sort((a, b) => a.location.localeCompare(b.location))
}

/**
 * Gets all available dropoff locations
 * @returns Array of unique dropoff location names
 */
export function getAllDropoffLocations(): string[] {
  const locations = new Set<string>()
  for (const route of pricingData.routes) {
    Object.keys(route.dropoffs).forEach((loc) => locations.add(loc))
  }
  return Array.from(locations).sort()
}

