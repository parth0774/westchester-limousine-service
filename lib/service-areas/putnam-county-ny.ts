import type { AreaData } from "./types"

export const putnamCountyData: AreaData = {
  name: "Putnam County, NY",
  slug: "putnam-county-ny",
  description: "Serving Putnam County with reliable and luxurious transportation services. Our professional chauffeurs are familiar with the scenic routes and communities throughout Putnam County, ensuring safe and comfortable travel for all your transportation needs.",
  cities: [
    {
      name: "Carmel",
      slug: "carmel",
      description: "Carmel, the county seat of Putnam County, offers a mix of suburban charm and natural beauty. Our professional limousine service provides reliable transportation for Carmel residents and businesses to airports and destinations throughout the region.",
      landmarks: ["Carmel Town Hall", "Putnam County Courthouse", "Carmel High School", "Lake Gleneida", "Mahopac Golf Club"],
      popularRoutes: [
        { from: "Carmel", to: "JFK Airport", time: "75-95 minutes" },
        { from: "Carmel", to: "LaGuardia Airport", time: "65-85 minutes" },
        { from: "Carmel", to: "Manhattan", time: "60-75 minutes" },
        { from: "Carmel", to: "Westchester County Airport", time: "45-60 minutes" }
      ],
      localServices: ["Airport Transportation", "Wedding Services", "Corporate Travel", "Special Events"],
      businessDistricts: ["Route 6 Corridor", "Carmel Hamlet", "Downtown Carmel"],
      nearbyAttractions: ["Lake Gleneida", "Putnam County Courthouse", "Mahopac Golf Club"],
      travelTimes: [
        { destination: "JFK Airport", time: "75-95 minutes" },
        { destination: "LaGuardia Airport", time: "65-85 minutes" },
        { destination: "Newark Airport", time: "95-115 minutes" },
        { destination: "Manhattan", time: "60-75 minutes" }
      ]
    },
    {
      name: "Mahopac",
      slug: "mahopac",
      description: "Mahopac, a lakeside community, offers scenic beauty and a relaxed atmosphere. Our limousine service provides premium transportation for Mahopac residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Lake Mahopac", "Mahopac Golf Club", "Mahopac Public Library", "Mahopac Falls"],
      popularRoutes: [
        { from: "Mahopac", to: "JFK Airport", time: "70-90 minutes" },
        { from: "Mahopac", to: "LaGuardia Airport", time: "60-80 minutes" },
        { from: "Mahopac", to: "Manhattan", time: "55-70 minutes" },
        { from: "Mahopac", to: "Westchester County Airport", time: "40-55 minutes" }
      ],
      localServices: ["Airport Shuttles", "Wedding Transportation", "Corporate Travel", "Special Events"],
      businessDistricts: ["Route 6", "Mahopac Avenue", "Downtown Mahopac"],
      nearbyAttractions: ["Lake Mahopac", "Mahopac Golf Club", "Mahopac Falls"],
      travelTimes: [
        { destination: "JFK Airport", time: "70-90 minutes" },
        { destination: "LaGuardia Airport", time: "60-80 minutes" },
        { destination: "Newark Airport", time: "90-110 minutes" },
        { destination: "Manhattan", time: "55-70 minutes" }
      ]
    },
    {
      name: "Brewster",
      slug: "brewster",
      description: "Brewster, a historic village in Putnam County, offers easy access to major highways and airports. Our professional limousine service provides reliable transportation for Brewster residents and businesses.",
      landmarks: ["Brewster Train Station", "Southeast Museum", "Brewster Public Library", "Tilly Foster Farm"],
      popularRoutes: [
        { from: "Brewster", to: "JFK Airport", time: "80-100 minutes" },
        { from: "Brewster", to: "LaGuardia Airport", time: "70-90 minutes" },
        { from: "Brewster", to: "Manhattan", time: "65-80 minutes" },
        { from: "Brewster", to: "Westchester County Airport", time: "50-65 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Main Street", "Route 22", "Brewster Village"],
      nearbyAttractions: ["Southeast Museum", "Tilly Foster Farm", "Brewster Train Station"],
      travelTimes: [
        { destination: "JFK Airport", time: "80-100 minutes" },
        { destination: "LaGuardia Airport", time: "70-90 minutes" },
        { destination: "Newark Airport", time: "100-120 minutes" },
        { destination: "Manhattan", time: "65-80 minutes" }
      ]
    },
    {
      name: "Putnam Valley",
      slug: "putnam-valley",
      description: "Putnam Valley, a rural community, offers natural beauty and tranquility. Our limousine service provides premium transportation for Putnam Valley residents to airports and destinations throughout the region.",
      landmarks: ["Putnam Valley Town Hall", "Clarence Fahnestock State Park", "Putnam Valley Library"],
      popularRoutes: [
        { from: "Putnam Valley", to: "JFK Airport", time: "85-105 minutes" },
        { from: "Putnam Valley", to: "LaGuardia Airport", time: "75-95 minutes" },
        { from: "Putnam Valley", to: "Manhattan", time: "70-85 minutes" },
        { from: "Putnam Valley", to: "Westchester County Airport", time: "55-70 minutes" }
      ],
      localServices: ["Long Distance Transportation", "Airport Services", "Wedding Transportation", "Corporate Travel"],
      businessDistricts: ["Peekskill Hollow Road", "Putnam Valley Center"],
      nearbyAttractions: ["Clarence Fahnestock State Park", "Putnam Valley Library"],
      travelTimes: [
        { destination: "JFK Airport", time: "85-105 minutes" },
        { destination: "LaGuardia Airport", time: "75-95 minutes" },
        { destination: "Newark Airport", time: "105-125 minutes" },
        { destination: "Manhattan", time: "70-85 minutes" }
      ]
    },
    {
      name: "Cold Spring",
      slug: "cold-spring",
      description: "Cold Spring, a charming Hudson River village, offers historic charm and scenic beauty. Our professional limousine service provides reliable transportation for Cold Spring residents and businesses.",
      landmarks: ["Cold Spring Village", "Hudson Highlands State Park", "Boscobel House and Gardens", "Cold Spring Harbor"],
      popularRoutes: [
        { from: "Cold Spring", to: "JFK Airport", time: "85-105 minutes" },
        { from: "Cold Spring", to: "LaGuardia Airport", time: "75-95 minutes" },
        { from: "Cold Spring", to: "Manhattan", time: "70-85 minutes" },
        { from: "Cold Spring", to: "Westchester County Airport", time: "55-70 minutes" }
      ],
      localServices: ["Wedding Services", "Corporate Transportation", "Airport Services", "Special Events"],
      businessDistricts: ["Main Street", "Cold Spring Village"],
      nearbyAttractions: ["Hudson Highlands State Park", "Boscobel House and Gardens", "Cold Spring Harbor"],
      travelTimes: [
        { destination: "JFK Airport", time: "85-105 minutes" },
        { destination: "LaGuardia Airport", time: "75-95 minutes" },
        { destination: "Newark Airport", time: "105-125 minutes" },
        { destination: "Manhattan", time: "70-85 minutes" }
      ]
    },
    {
      name: "Garrison",
      slug: "garrison",
      description: "Garrison, a scenic Hudson River community, offers historic sites and natural beauty. Our limousine service provides premium transportation for Garrison residents and businesses.",
      landmarks: ["Boscobel House and Gardens", "Garrison Landing", "Garrison Art Center", "Hudson Highlands"],
      popularRoutes: [
        { from: "Garrison", to: "JFK Airport", time: "90-110 minutes" },
        { from: "Garrison", to: "LaGuardia Airport", time: "80-100 minutes" },
        { from: "Garrison", to: "Manhattan", time: "75-90 minutes" },
        { from: "Garrison", to: "Westchester County Airport", time: "60-75 minutes" }
      ],
      localServices: ["Wedding Services", "Corporate Transportation", "Airport Services", "Special Events"],
      businessDistricts: ["Garrison Landing", "Route 9D"],
      nearbyAttractions: ["Boscobel House and Gardens", "Garrison Art Center", "Hudson Highlands"],
      travelTimes: [
        { destination: "JFK Airport", time: "90-110 minutes" },
        { destination: "LaGuardia Airport", time: "80-100 minutes" },
        { destination: "Newark Airport", time: "110-130 minutes" },
        { destination: "Manhattan", time: "75-90 minutes" }
      ]
    },
    {
      name: "Patterson",
      slug: "patterson",
      description: "Patterson, a rural town in Putnam County, offers natural beauty and a peaceful atmosphere. Our professional limousine service provides reliable transportation for Patterson residents to airports and destinations throughout the region.",
      landmarks: ["Patterson Town Hall", "Patterson Library", "Great Swamp"],
      popularRoutes: [
        { from: "Patterson", to: "JFK Airport", time: "85-105 minutes" },
        { from: "Patterson", to: "LaGuardia Airport", time: "75-95 minutes" },
        { from: "Patterson", to: "Manhattan", time: "70-85 minutes" },
        { from: "Patterson", to: "Westchester County Airport", time: "55-70 minutes" }
      ],
      localServices: ["Long Distance Transportation", "Airport Services", "Wedding Transportation", "Corporate Travel"],
      businessDistricts: ["Route 22", "Patterson Center"],
      nearbyAttractions: ["Great Swamp", "Patterson Library"],
      travelTimes: [
        { destination: "JFK Airport", time: "85-105 minutes" },
        { destination: "LaGuardia Airport", time: "75-95 minutes" },
        { destination: "Newark Airport", time: "105-125 minutes" },
        { destination: "Manhattan", time: "70-85 minutes" }
      ]
    },
    {
      name: "Southeast",
      slug: "southeast",
      description: "Southeast, a town in Putnam County, offers a mix of residential and rural areas. Our limousine service provides premium transportation for Southeast residents and businesses to airports and destinations throughout the Tri-State Area.",
      landmarks: ["Southeast Museum", "Brewster Train Station", "Southeast Town Hall"],
      popularRoutes: [
        { from: "Southeast", to: "JFK Airport", time: "80-100 minutes" },
        { from: "Southeast", to: "LaGuardia Airport", time: "70-90 minutes" },
        { from: "Southeast", to: "Manhattan", time: "65-80 minutes" },
        { from: "Southeast", to: "Westchester County Airport", time: "50-65 minutes" }
      ],
      localServices: ["Airport Transportation", "Corporate Services", "Wedding Services", "Event Transportation"],
      businessDistricts: ["Route 22", "Southeast Center"],
      nearbyAttractions: ["Southeast Museum", "Brewster Train Station"],
      travelTimes: [
        { destination: "JFK Airport", time: "80-100 minutes" },
        { destination: "LaGuardia Airport", time: "70-90 minutes" },
        { destination: "Newark Airport", time: "100-120 minutes" },
        { destination: "Manhattan", time: "65-80 minutes" }
      ]
    }
  ],
  features: [
    "Airport Shuttle Services",
    "Wedding Transportation",
    "Corporate Travel",
    "Special Events",
    "Long Distance Travel"
  ],
  popularDestinations: [
    { name: "JFK International Airport", description: "Comfortable transfers to JFK from Putnam County" },
    { name: "LaGuardia Airport", description: "Reliable service to LGA for business travelers" },
    { name: "New York City", description: "Direct service to Manhattan and surrounding areas" },
    { name: "Westchester County", description: "Connections to all Westchester destinations" }
  ],
  travelTime: [
    { destination: "JFK Airport", time: "60-75 minutes" },
    { destination: "LaGuardia Airport", time: "50-65 minutes" },
    { destination: "Newark Airport", time: "75-90 minutes" },
    { destination: "Manhattan", time: "50-70 minutes" }
  ],
  serviceTypes: [
    "Airport Transportation",
    "Wedding Limousine Services",
    "Corporate Chauffeur Services",
    "Special Event Transportation",
    "Group Transportation"
  ],
  whyChoose: [
    "Expert knowledge of Putnam County routes",
    "Reliable service for rural and suburban areas",
    "Flexible scheduling for your convenience",
    "Professional chauffeurs trained in luxury service"
  ]
}

