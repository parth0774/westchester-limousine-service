import type { AreaData } from "./types"

export const dutchessCountyData: AreaData = {
  name: "Dutchess County, NY",
  slug: "dutchess-county-ny",
  description: "Premium transportation services for Dutchess County residents and businesses. Whether you're traveling to the airport, attending a corporate event, or planning a special occasion, we provide reliable and luxurious transportation throughout the Hudson Valley region.",
  cities: [
    {
      name: "Poughkeepsie",
      slug: "poughkeepsie",
      description: "Poughkeepsie, the county seat of Dutchess County, is a major Hudson Valley city with a vibrant downtown and excellent access to transportation. Our professional limousine service provides reliable transportation for Poughkeepsie residents and businesses to airports and destinations throughout the region.",
      landmarks: ["Walkway Over the Hudson", "Vassar College", "Marist College", "Poughkeepsie Train Station", "Mid-Hudson Civic Center"],
      popularRoutes: [
        { from: "Poughkeepsie", to: "JFK Airport", time: "105-125 minutes" },
        { from: "Poughkeepsie", to: "LaGuardia Airport", time: "95-115 minutes" },
        { from: "Poughkeepsie", to: "Manhattan", time: "90-105 minutes" },
        { from: "Poughkeepsie", to: "Westchester County Airport", time: "75-90 minutes" }
      ],
      localServices: ["Long Distance Airport Transportation", "Corporate Executive Services", "Wedding Services", "Group Transportation"],
      businessDistricts: ["Main Street", "Market Street", "Poughkeepsie Downtown"],
      nearbyAttractions: ["Walkway Over the Hudson", "Vassar College", "Marist College", "Mid-Hudson Civic Center"],
      travelTimes: [
        { destination: "JFK Airport", time: "105-125 minutes" },
        { destination: "LaGuardia Airport", time: "95-115 minutes" },
        { destination: "Newark Airport", time: "125-145 minutes" },
        { destination: "Manhattan", time: "90-105 minutes" }
      ]
    },
    {
      name: "Beacon",
      slug: "beacon",
      description: "Beacon, a vibrant arts community on the Hudson River, offers galleries, restaurants, and scenic beauty. Our limousine service provides premium transportation for Beacon residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Dia:Beacon", "Mount Beacon", "Beacon Falls", "Beacon Train Station", "Main Street Beacon"],
      popularRoutes: [
        { from: "Beacon", to: "JFK Airport", time: "100-120 minutes" },
        { from: "Beacon", to: "LaGuardia Airport", time: "90-110 minutes" },
        { from: "Beacon", to: "Manhattan", time: "85-100 minutes" },
        { from: "Beacon", to: "Westchester County Airport", time: "70-85 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Main Street", "Beacon Downtown", "Route 9D"],
      nearbyAttractions: ["Dia:Beacon", "Mount Beacon", "Beacon Falls", "Main Street Beacon"],
      travelTimes: [
        { destination: "JFK Airport", time: "100-120 minutes" },
        { destination: "LaGuardia Airport", time: "90-110 minutes" },
        { destination: "Newark Airport", time: "120-140 minutes" },
        { destination: "Manhattan", time: "85-100 minutes" }
      ]
    },
    {
      name: "Fishkill",
      slug: "fishkill",
      description: "Fishkill, a growing community in Dutchess County, offers excellent access to major highways and airports. Our professional limousine service provides reliable transportation for Fishkill residents and businesses.",
      landmarks: ["Fishkill Town Hall", "Fishkill Ridge", "Dutchess Stadium", "Fishkill Library"],
      popularRoutes: [
        { from: "Fishkill", to: "JFK Airport", time: "95-115 minutes" },
        { from: "Fishkill", to: "LaGuardia Airport", time: "85-105 minutes" },
        { from: "Fishkill", to: "Manhattan", time: "80-95 minutes" },
        { from: "Fishkill", to: "Westchester County Airport", time: "65-80 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Route 9", "Fishkill Center", "Route 52"],
      nearbyAttractions: ["Fishkill Ridge", "Dutchess Stadium", "Fishkill Library"],
      travelTimes: [
        { destination: "JFK Airport", time: "95-115 minutes" },
        { destination: "LaGuardia Airport", time: "85-105 minutes" },
        { destination: "Newark Airport", time: "115-135 minutes" },
        { destination: "Manhattan", time: "80-95 minutes" }
      ]
    },
    {
      name: "Wappingers Falls",
      slug: "wappingers-falls",
      description: "Wappingers Falls, a village in Dutchess County, offers a mix of residential and commercial areas. Our limousine service provides premium transportation for Wappingers Falls residents and businesses to airports and destinations throughout the region.",
      landmarks: ["Wappingers Falls", "Wappingers Creek", "Wappingers Falls Library", "Mesier Park"],
      popularRoutes: [
        { from: "Wappingers Falls", to: "JFK Airport", time: "100-120 minutes" },
        { from: "Wappingers Falls", to: "LaGuardia Airport", time: "90-110 minutes" },
        { from: "Wappingers Falls", to: "Manhattan", time: "85-100 minutes" },
        { from: "Wappingers Falls", to: "Westchester County Airport", time: "70-85 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Main Street", "Wappingers Falls Village", "Route 9"],
      nearbyAttractions: ["Wappingers Falls", "Wappingers Creek", "Mesier Park"],
      travelTimes: [
        { destination: "JFK Airport", time: "100-120 minutes" },
        { destination: "LaGuardia Airport", time: "90-110 minutes" },
        { destination: "Newark Airport", time: "120-140 minutes" },
        { destination: "Manhattan", time: "85-100 minutes" }
      ]
    },
    {
      name: "Hyde Park",
      slug: "hyde-park",
      description: "Hyde Park, known for the FDR National Historic Site, offers historic charm and scenic beauty. Our professional limousine service provides reliable transportation for Hyde Park residents and businesses.",
      landmarks: ["Franklin D. Roosevelt National Historic Site", "Vanderbilt Mansion", "Culinary Institute of America", "Hyde Park Library"],
      popularRoutes: [
        { from: "Hyde Park", to: "JFK Airport", time: "110-130 minutes" },
        { from: "Hyde Park", to: "LaGuardia Airport", time: "100-120 minutes" },
        { from: "Hyde Park", to: "Manhattan", time: "95-110 minutes" },
        { from: "Hyde Park", to: "Westchester County Airport", time: "80-95 minutes" }
      ],
      localServices: ["Wedding Services", "Corporate Transportation", "Airport Services", "Special Events"],
      businessDistricts: ["Route 9", "Hyde Park Village"],
      nearbyAttractions: ["Franklin D. Roosevelt National Historic Site", "Vanderbilt Mansion", "Culinary Institute of America"],
      travelTimes: [
        { destination: "JFK Airport", time: "110-130 minutes" },
        { destination: "LaGuardia Airport", time: "100-120 minutes" },
        { destination: "Newark Airport", time: "130-150 minutes" },
        { destination: "Manhattan", time: "95-110 minutes" }
      ]
    },
    {
      name: "Rhinebeck",
      slug: "rhinebeck",
      description: "Rhinebeck, a charming Hudson Valley village, offers historic architecture and a vibrant downtown. Our limousine service provides premium transportation for Rhinebeck residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Rhinebeck Village", "Dutchess County Fairgrounds", "Old Rhinebeck Aerodrome", "Rhinebeck Library"],
      popularRoutes: [
        { from: "Rhinebeck", to: "JFK Airport", time: "115-135 minutes" },
        { from: "Rhinebeck", to: "LaGuardia Airport", time: "105-125 minutes" },
        { from: "Rhinebeck", to: "Manhattan", time: "100-115 minutes" },
        { from: "Rhinebeck", to: "Westchester County Airport", time: "85-100 minutes" }
      ],
      localServices: ["Wedding Services", "Corporate Transportation", "Airport Services", "Special Events"],
      businessDistricts: ["Main Street", "Rhinebeck Village", "Route 9"],
      nearbyAttractions: ["Dutchess County Fairgrounds", "Old Rhinebeck Aerodrome", "Rhinebeck Village"],
      travelTimes: [
        { destination: "JFK Airport", time: "115-135 minutes" },
        { destination: "LaGuardia Airport", time: "105-125 minutes" },
        { destination: "Newark Airport", time: "135-155 minutes" },
        { destination: "Manhattan", time: "100-115 minutes" }
      ]
    },
    {
      name: "Millbrook",
      slug: "millbrook",
      description: "Millbrook, an affluent village in Dutchess County, offers rural charm and equestrian culture. Our professional limousine service provides reliable transportation for Millbrook residents and businesses.",
      landmarks: ["Millbrook Village", "Innisfree Garden", "Millbrook Winery", "Millbrook Library"],
      popularRoutes: [
        { from: "Millbrook", to: "JFK Airport", time: "120-140 minutes" },
        { from: "Millbrook", to: "LaGuardia Airport", time: "110-130 minutes" },
        { from: "Millbrook", to: "Manhattan", time: "105-120 minutes" },
        { from: "Millbrook", to: "Westchester County Airport", time: "90-105 minutes" }
      ],
      localServices: ["Wedding Services", "Corporate Transportation", "Airport Services", "Special Events"],
      businessDistricts: ["Main Street", "Millbrook Village", "Route 44"],
      nearbyAttractions: ["Innisfree Garden", "Millbrook Winery", "Millbrook Village"],
      travelTimes: [
        { destination: "JFK Airport", time: "120-140 minutes" },
        { destination: "LaGuardia Airport", time: "110-130 minutes" },
        { destination: "Newark Airport", time: "140-160 minutes" },
        { destination: "Manhattan", time: "105-120 minutes" }
      ]
    },
    {
      name: "Pawling",
      slug: "pawling",
      description: "Pawling, a town in Dutchess County, offers natural beauty and a peaceful atmosphere. Our limousine service provides premium transportation for Pawling residents to airports and destinations throughout the region.",
      landmarks: ["Pawling Town Hall", "Appalachian Trail", "Pawling Library", "Pawling Nature Reserve"],
      popularRoutes: [
        { from: "Pawling", to: "JFK Airport", time: "105-125 minutes" },
        { from: "Pawling", to: "LaGuardia Airport", time: "95-115 minutes" },
        { from: "Pawling", to: "Manhattan", time: "90-105 minutes" },
        { from: "Pawling", to: "Westchester County Airport", time: "75-90 minutes" }
      ],
      localServices: ["Long Distance Transportation", "Airport Services", "Wedding Transportation", "Corporate Travel"],
      businessDistricts: ["Route 22", "Pawling Center"],
      nearbyAttractions: ["Appalachian Trail", "Pawling Nature Reserve", "Pawling Library"],
      travelTimes: [
        { destination: "JFK Airport", time: "105-125 minutes" },
        { destination: "LaGuardia Airport", time: "95-115 minutes" },
        { destination: "Newark Airport", time: "125-145 minutes" },
        { destination: "Manhattan", time: "90-105 minutes" }
      ]
    }
  ],
  features: [
    "Long Distance Travel",
    "Corporate Services",
    "Airport Transfers",
    "Group Transportation",
    "Event Services"
  ],
  popularDestinations: [
    { name: "JFK International Airport", description: "Comfortable long-distance transfers to JFK" },
    { name: "LaGuardia Airport", description: "Reliable service to LGA from Dutchess County" },
    { name: "Newark Airport", description: "Convenient transfers to EWR" },
    { name: "New York City", description: "Direct service to Manhattan and all boroughs" }
  ],
  travelTime: [
    { destination: "JFK Airport", time: "90-120 minutes" },
    { destination: "LaGuardia Airport", time: "75-105 minutes" },
    { destination: "Newark Airport", time: "105-135 minutes" },
    { destination: "Manhattan", time: "75-105 minutes" }
  ],
  serviceTypes: [
    "Long Distance Airport Transportation",
    "Corporate Executive Services",
    "Special Event Limousine Services",
    "Group Transportation",
    "Hourly Chauffeur Services"
  ],
  whyChoose: [
    "Experience with long-distance travel routes",
    "Comfortable vehicles for extended journeys",
    "Professional service for Hudson Valley region",
    "Flexible scheduling for early morning and late night flights"
  ]
}

