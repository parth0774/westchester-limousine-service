import type { AreaData } from "./types"

export const fairfieldCountyData: AreaData = {
  name: "Fairfield County, CT",
  slug: "fairfield-county-ct",
  description: "Connecting Connecticut to New York with premium transportation services. Our cross-state expertise ensures seamless travel between Fairfield County and New York airports, Manhattan, and the greater Tri-State Area.",
  cities: [
    {
      name: "Stamford",
      slug: "stamford",
      description: "Stamford, Connecticut's second-largest city, is a major business hub with numerous corporate headquarters. Our professional limousine service provides reliable transportation for Stamford executives, business travelers, and residents to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Stamford Town Center", "Stamford Museum & Nature Center", "Mill River Park", "Palace Theatre", "Stamford Harbor"],
      popularRoutes: [
        { from: "Stamford", to: "JFK Airport", time: "70-90 minutes" },
        { from: "Stamford", to: "LaGuardia Airport", time: "60-80 minutes" },
        { from: "Stamford", to: "Manhattan", time: "50-70 minutes" },
        { from: "Stamford", to: "Newark Airport", time: "80-100 minutes" }
      ],
      localServices: ["Corporate Executive Transportation", "Airport Shuttle Services", "Wedding Limousine Services", "Hourly Chauffeur Rentals"],
      businessDistricts: ["Downtown Stamford", "Stamford Financial District", "Stamford Harbor"],
      nearbyAttractions: ["Stamford Museum & Nature Center", "Mill River Park", "Palace Theatre", "Stamford Harbor"],
      travelTimes: [
        { destination: "JFK Airport", time: "70-90 minutes" },
        { destination: "LaGuardia Airport", time: "60-80 minutes" },
        { destination: "Newark Airport", time: "80-100 minutes" },
        { destination: "Manhattan", time: "50-70 minutes" }
      ]
    },
    {
      name: "Greenwich",
      slug: "greenwich",
      description: "Greenwich, an affluent coastal town, is known for its luxury homes and corporate headquarters. Our luxury limousine service provides premium transportation for Greenwich executives, residents, and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Greenwich Avenue", "Bruce Museum", "Greenwich Point Park", "Audubon Center", "Greenwich Harbor"],
      popularRoutes: [
        { from: "Greenwich", to: "JFK Airport", time: "65-85 minutes" },
        { from: "Greenwich", to: "LaGuardia Airport", time: "55-75 minutes" },
        { from: "Greenwich", to: "Manhattan", time: "45-65 minutes" },
        { from: "Greenwich", to: "Newark Airport", time: "75-95 minutes" }
      ],
      localServices: ["Executive Transportation", "Airport Services", "Wedding Services", "Corporate Events"],
      businessDistricts: ["Greenwich Avenue", "Putnam Avenue", "Greenwich Financial District"],
      nearbyAttractions: ["Bruce Museum", "Greenwich Point Park", "Audubon Center", "Greenwich Harbor"],
      travelTimes: [
        { destination: "JFK Airport", time: "65-85 minutes" },
        { destination: "LaGuardia Airport", time: "55-75 minutes" },
        { destination: "Newark Airport", time: "75-95 minutes" },
        { destination: "Manhattan", time: "45-65 minutes" }
      ]
    },
    {
      name: "Danbury",
      slug: "danbury",
      description: "Danbury, a city in western Connecticut, offers excellent access to major highways and airports. Our professional limousine service provides reliable transportation for Danbury residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Danbury Fair Mall", "Tarrywile Park", "Danbury Railway Museum", "Danbury Library", "Western Connecticut State University"],
      popularRoutes: [
        { from: "Danbury", to: "JFK Airport", time: "85-105 minutes" },
        { from: "Danbury", to: "LaGuardia Airport", time: "75-95 minutes" },
        { from: "Danbury", to: "Manhattan", time: "70-85 minutes" },
        { from: "Danbury", to: "Newark Airport", time: "95-115 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Downtown Danbury", "Main Street", "Mill Plain Road"],
      nearbyAttractions: ["Danbury Fair Mall", "Tarrywile Park", "Danbury Railway Museum"],
      travelTimes: [
        { destination: "JFK Airport", time: "85-105 minutes" },
        { destination: "LaGuardia Airport", time: "75-95 minutes" },
        { destination: "Newark Airport", time: "95-115 minutes" },
        { destination: "Manhattan", time: "70-85 minutes" }
      ]
    },
    {
      name: "Norwalk",
      slug: "norwalk",
      description: "Norwalk, a coastal city on Long Island Sound, offers waterfront views and a vibrant downtown. Our limousine service provides premium transportation for Norwalk residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Norwalk Harbor", "SoNo District", "Maritime Aquarium", "Lockwood-Mathews Mansion", "Norwalk Public Library"],
      popularRoutes: [
        { from: "Norwalk", to: "JFK Airport", time: "75-95 minutes" },
        { from: "Norwalk", to: "LaGuardia Airport", time: "65-85 minutes" },
        { from: "Norwalk", to: "Manhattan", time: "55-75 minutes" },
        { from: "Norwalk", to: "Newark Airport", time: "85-105 minutes" }
      ],
      localServices: ["Corporate Transportation", "Airport Services", "Wedding Services", "Special Events"],
      businessDistricts: ["SoNo District", "Downtown Norwalk", "Main Avenue"],
      nearbyAttractions: ["Maritime Aquarium", "Lockwood-Mathews Mansion", "Norwalk Harbor", "SoNo District"],
      travelTimes: [
        { destination: "JFK Airport", time: "75-95 minutes" },
        { destination: "LaGuardia Airport", time: "65-85 minutes" },
        { destination: "Newark Airport", time: "85-105 minutes" },
        { destination: "Manhattan", time: "55-75 minutes" }
      ]
    },
    {
      name: "Bridgeport",
      slug: "bridgeport",
      description: "Bridgeport, Connecticut's largest city, offers a diverse community and excellent transportation access. Our professional limousine service provides reliable transportation for Bridgeport residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Beardsley Zoo", "Bridgeport Harbor", "Downtown Bridgeport", "Bridgeport Public Library", "Seaside Park"],
      popularRoutes: [
        { from: "Bridgeport", to: "JFK Airport", time: "80-100 minutes" },
        { from: "Bridgeport", to: "LaGuardia Airport", time: "70-90 minutes" },
        { from: "Bridgeport", to: "Manhattan", time: "60-80 minutes" },
        { from: "Bridgeport", to: "Newark Airport", time: "90-110 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Downtown Bridgeport", "Main Street", "Bridgeport Harbor"],
      nearbyAttractions: ["Beardsley Zoo", "Bridgeport Harbor", "Seaside Park"],
      travelTimes: [
        { destination: "JFK Airport", time: "80-100 minutes" },
        { destination: "LaGuardia Airport", time: "70-90 minutes" },
        { destination: "Newark Airport", time: "90-110 minutes" },
        { destination: "Manhattan", time: "60-80 minutes" }
      ]
    },
    {
      name: "Fairfield",
      slug: "fairfield",
      description: "Fairfield, a coastal town on Long Island Sound, offers beautiful beaches and a vibrant community. Our limousine service provides premium transportation for Fairfield residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Fairfield Beach", "Fairfield University", "Fairfield Museum", "Fairfield Public Library", "Penfield Beach"],
      popularRoutes: [
        { from: "Fairfield", to: "JFK Airport", time: "75-95 minutes" },
        { from: "Fairfield", to: "LaGuardia Airport", time: "65-85 minutes" },
        { from: "Fairfield", to: "Manhattan", time: "55-75 minutes" },
        { from: "Fairfield", to: "Newark Airport", time: "85-105 minutes" }
      ],
      localServices: ["Corporate Transportation", "Airport Services", "Wedding Services", "Special Events"],
      businessDistricts: ["Post Road", "Fairfield Center", "Black Rock Turnpike"],
      nearbyAttractions: ["Fairfield Beach", "Fairfield University", "Fairfield Museum", "Penfield Beach"],
      travelTimes: [
        { destination: "JFK Airport", time: "75-95 minutes" },
        { destination: "LaGuardia Airport", time: "65-85 minutes" },
        { destination: "Newark Airport", time: "85-105 minutes" },
        { destination: "Manhattan", time: "55-75 minutes" }
      ]
    },
    {
      name: "Westport",
      slug: "westport",
      description: "Westport, an affluent coastal town, is known for its arts community and beautiful waterfront. Our luxury limousine service provides premium transportation for Westport residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Westport Playhouse", "Compo Beach", "Levitt Pavilion", "Westport Library", "Saugatuck River"],
      popularRoutes: [
        { from: "Westport", to: "JFK Airport", time: "70-90 minutes" },
        { from: "Westport", to: "LaGuardia Airport", time: "60-80 minutes" },
        { from: "Westport", to: "Manhattan", time: "50-70 minutes" },
        { from: "Westport", to: "Newark Airport", time: "80-100 minutes" }
      ],
      localServices: ["Executive Transportation", "Airport Services", "Wedding Services", "Corporate Events"],
      businessDistricts: ["Main Street", "Post Road", "Westport Center"],
      nearbyAttractions: ["Westport Playhouse", "Compo Beach", "Levitt Pavilion", "Saugatuck River"],
      travelTimes: [
        { destination: "JFK Airport", time: "70-90 minutes" },
        { destination: "LaGuardia Airport", time: "60-80 minutes" },
        { destination: "Newark Airport", time: "80-100 minutes" },
        { destination: "Manhattan", time: "50-70 minutes" }
      ]
    },
    {
      name: "Darien",
      slug: "darien",
      description: "Darien, an affluent coastal town, offers excellent schools and a beautiful community. Our professional limousine service provides reliable transportation for Darien residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Darien Library", "Darien Town Hall", "Darien Beach", "Goodwives River", "Darien Community Association"],
      popularRoutes: [
        { from: "Darien", to: "JFK Airport", time: "70-90 minutes" },
        { from: "Darien", to: "LaGuardia Airport", time: "60-80 minutes" },
        { from: "Darien", to: "Manhattan", time: "50-70 minutes" },
        { from: "Darien", to: "Newark Airport", time: "80-100 minutes" }
      ],
      localServices: ["Executive Transportation", "Airport Services", "Wedding Services", "Corporate Events"],
      businessDistricts: ["Post Road", "Darien Center", "Tokeneke Road"],
      nearbyAttractions: ["Darien Library", "Darien Beach", "Goodwives River"],
      travelTimes: [
        { destination: "JFK Airport", time: "70-90 minutes" },
        { destination: "LaGuardia Airport", time: "60-80 minutes" },
        { destination: "Newark Airport", time: "80-100 minutes" },
        { destination: "Manhattan", time: "50-70 minutes" }
      ]
    }
  ],
  features: [
    "Cross-State Travel",
    "Corporate Executives",
    "Airport Services",
    "Luxury Events",
    "Business Travel"
  ],
  popularDestinations: [
    { name: "JFK International Airport", description: "Reliable cross-state service to JFK" },
    { name: "LaGuardia Airport", description: "Efficient transfers to LGA from Connecticut" },
    { name: "Newark Airport", description: "Convenient service to EWR" },
    { name: "Manhattan", description: "Direct service to all NYC business districts" }
  ],
  travelTime: [
    { destination: "JFK Airport", time: "60-90 minutes" },
    { destination: "LaGuardia Airport", time: "45-75 minutes" },
    { destination: "Newark Airport", time: "75-105 minutes" },
    { destination: "Manhattan", time: "45-75 minutes" }
  ],
  serviceTypes: [
    "Cross-State Corporate Transportation",
    "Airport Shuttle Services",
    "Executive Chauffeur Services",
    "Luxury Event Transportation",
    "Business Travel Solutions"
  ],
  whyChoose: [
    "Expert knowledge of Connecticut-New York routes",
    "Experience with corporate executives and business travelers",
    "Reliable service across state lines",
    "Luxury vehicles perfect for business and special occasions"
  ]
}

