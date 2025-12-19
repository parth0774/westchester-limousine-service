import type { AreaData } from "./types"

export const newYorkCityMetroAreaData: AreaData = {
  name: "New York City Metro Area",
  slug: "new-york-city-metro-area",
  description: "Complete coverage of all five boroughs with professional chauffeur services. Our experienced drivers navigate Manhattan, Brooklyn, Queens, Bronx, and Staten Island with expertise, ensuring timely arrivals for business meetings, events, and airport transfers.",
  cities: [
    {
      name: "Manhattan",
      slug: "manhattan",
      description: "Manhattan, the heart of New York City, is home to world-famous business districts, entertainment venues, and cultural attractions. Our professional limousine service provides reliable transportation throughout Manhattan and to all major airports.",
      landmarks: ["Times Square", "Central Park", "Empire State Building", "Statue of Liberty", "Brooklyn Bridge", "Wall Street", "Broadway", "Metropolitan Museum of Art"],
      popularRoutes: [
        { from: "Manhattan", to: "JFK Airport", time: "45-75 minutes" },
        { from: "Manhattan", to: "LaGuardia Airport", time: "30-60 minutes" },
        { from: "Manhattan", to: "Newark Airport", time: "60-90 minutes" },
        { from: "Manhattan", to: "Brooklyn", time: "20-45 minutes" }
      ],
      localServices: ["Corporate Executive Transportation", "Airport Transfer Services", "Event Transportation", "Hourly City Chauffeur Services"],
      businessDistricts: ["Wall Street", "Midtown", "Downtown", "Upper East Side", "Upper West Side"],
      nearbyAttractions: ["Times Square", "Central Park", "Empire State Building", "Statue of Liberty", "Broadway"],
      travelTimes: [
        { destination: "JFK Airport", time: "45-75 minutes" },
        { destination: "LaGuardia Airport", time: "30-60 minutes" },
        { destination: "Newark Airport", time: "60-90 minutes" },
        { destination: "Brooklyn", time: "20-45 minutes" }
      ]
    },
    {
      name: "Brooklyn",
      slug: "brooklyn",
      description: "Brooklyn, New York's most populous borough, offers diverse neighborhoods, cultural attractions, and excellent access to Manhattan. Our limousine service provides premium transportation throughout Brooklyn and to all major airports.",
      landmarks: ["Brooklyn Bridge", "Coney Island", "Prospect Park", "Brooklyn Museum", "Barclays Center", "DUMBO", "Williamsburg"],
      popularRoutes: [
        { from: "Brooklyn", to: "JFK Airport", time: "30-60 minutes" },
        { from: "Brooklyn", to: "LaGuardia Airport", time: "40-70 minutes" },
        { from: "Brooklyn", to: "Manhattan", time: "20-45 minutes" },
        { from: "Brooklyn", to: "Newark Airport", time: "50-80 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Downtown Brooklyn", "DUMBO", "Williamsburg", "Park Slope"],
      nearbyAttractions: ["Brooklyn Bridge", "Coney Island", "Prospect Park", "Brooklyn Museum", "Barclays Center"],
      travelTimes: [
        { destination: "JFK Airport", time: "30-60 minutes" },
        { destination: "LaGuardia Airport", time: "40-70 minutes" },
        { destination: "Newark Airport", time: "50-80 minutes" },
        { destination: "Manhattan", time: "20-45 minutes" }
      ]
    },
    {
      name: "Queens",
      slug: "queens",
      description: "Queens, the most ethnically diverse urban area in the world, offers excellent access to JFK and LaGuardia airports. Our professional limousine service provides reliable transportation throughout Queens and to destinations throughout the Tri-State Area.",
      landmarks: ["Flushing Meadows Corona Park", "Citi Field", "U.S. Open Tennis Center", "Queens Museum", "Astoria", "Long Island City"],
      popularRoutes: [
        { from: "Queens", to: "JFK Airport", time: "20-50 minutes" },
        { from: "Queens", to: "LaGuardia Airport", time: "15-40 minutes" },
        { from: "Queens", to: "Manhattan", time: "25-50 minutes" },
        { from: "Queens", to: "Newark Airport", time: "45-75 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Long Island City", "Flushing", "Astoria", "Jamaica"],
      nearbyAttractions: ["Flushing Meadows Corona Park", "Citi Field", "U.S. Open Tennis Center", "Queens Museum"],
      travelTimes: [
        { destination: "JFK Airport", time: "20-50 minutes" },
        { destination: "LaGuardia Airport", time: "15-40 minutes" },
        { destination: "Newark Airport", time: "45-75 minutes" },
        { destination: "Manhattan", time: "25-50 minutes" }
      ]
    },
    {
      name: "Bronx",
      slug: "bronx",
      description: "The Bronx, known for Yankee Stadium and the Bronx Zoo, offers diverse neighborhoods and cultural attractions. Our limousine service provides premium transportation throughout the Bronx and to all major airports.",
      landmarks: ["Yankee Stadium", "Bronx Zoo", "New York Botanical Garden", "Bronx Museum", "Van Cortlandt Park"],
      popularRoutes: [
        { from: "Bronx", to: "JFK Airport", time: "50-80 minutes" },
        { from: "Bronx", to: "LaGuardia Airport", time: "30-60 minutes" },
        { from: "Bronx", to: "Manhattan", time: "20-40 minutes" },
        { from: "Bronx", to: "Newark Airport", time: "60-90 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Fordham", "Bronx Downtown", "Concourse"],
      nearbyAttractions: ["Yankee Stadium", "Bronx Zoo", "New York Botanical Garden", "Van Cortlandt Park"],
      travelTimes: [
        { destination: "JFK Airport", time: "50-80 minutes" },
        { destination: "LaGuardia Airport", time: "30-60 minutes" },
        { destination: "Newark Airport", time: "60-90 minutes" },
        { destination: "Manhattan", time: "20-40 minutes" }
      ]
    },
    {
      name: "Staten Island",
      slug: "staten-island",
      description: "Staten Island, the most suburban of New York's boroughs, offers a peaceful atmosphere with excellent access to Manhattan and airports. Our professional limousine service provides reliable transportation throughout Staten Island and to destinations throughout the Tri-State Area.",
      landmarks: ["Staten Island Ferry", "Snug Harbor Cultural Center", "Staten Island Zoo", "Conference House Park", "Fort Wadsworth"],
      popularRoutes: [
        { from: "Staten Island", to: "JFK Airport", time: "60-90 minutes" },
        { from: "Staten Island", to: "LaGuardia Airport", time: "70-100 minutes" },
        { from: "Staten Island", to: "Manhattan", time: "45-75 minutes" },
        { from: "Staten Island", to: "Newark Airport", time: "40-70 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["St. George", "New Dorp", "Richmond Avenue"],
      nearbyAttractions: ["Staten Island Ferry", "Snug Harbor Cultural Center", "Staten Island Zoo", "Conference House Park"],
      travelTimes: [
        { destination: "JFK Airport", time: "60-90 minutes" },
        { destination: "LaGuardia Airport", time: "70-100 minutes" },
        { destination: "Newark Airport", time: "40-70 minutes" },
        { destination: "Manhattan", time: "45-75 minutes" }
      ]
    }
  ],
  features: [
    "City Navigation",
    "Corporate Meetings",
    "Entertainment Venues",
    "24/7 Service",
    "Airport Connections"
  ],
  popularDestinations: [
    { name: "JFK International Airport", description: "Direct service from all NYC boroughs to JFK" },
    { name: "LaGuardia Airport", description: "Efficient transfers to LGA from Manhattan and outer boroughs" },
    { name: "Newark Airport", description: "Reliable service to EWR from all NYC locations" },
    { name: "Business Districts", description: "Service to Wall Street, Midtown, Downtown, and all major business areas" }
  ],
  travelTime: [
    { destination: "JFK Airport", time: "30-60 minutes (varies by borough)" },
    { destination: "LaGuardia Airport", time: "20-45 minutes (varies by borough)" },
    { destination: "Newark Airport", time: "45-75 minutes (varies by borough)" },
    { destination: "Inter-Borough", time: "20-60 minutes (varies by route)" }
  ],
  serviceTypes: [
    "Corporate Executive Transportation",
    "Airport Transfer Services",
    "Event Transportation",
    "Hourly City Chauffeur Services",
    "Special Occasion Limousine Services"
  ],
  whyChoose: [
    "Expert navigation of NYC traffic and routes",
    "Knowledge of all five boroughs",
    "24/7 availability for your convenience",
    "Professional service for business and leisure"
  ]
}

