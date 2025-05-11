export interface Beach {
  id: string;
  name: string;
  location: {
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    nearestCity: string;
  };
  description: string;
  features: {
    erosionType: string;
    treeSpecies?: string[];
    accessibility: string;
    bestTimeToVisit: string[];
    amenities?: string[];
  };
  images: {
    main: string;
    gallery?: string[];
  };
  conservationStatus: string;
  additionalInfo?: {
    historicalContext?: string;
    geologicalInfo?: string;
    wildlifeInfo?: string;
  };
}

export const beaches: Beach[] = [
  {
    id: "boneyard-beach-talbot",
    name: "Boneyard Beach",
    location: {
      state: "Florida",
      coordinates: {
        latitude: 30.5122,
        longitude: -81.4581
      },
      nearestCity: "Jacksonville"
    },
    description: "Boneyard Beach on Big Talbot Island is a stunning shoreline where salt-washed skeletons of live oak and cedar trees create a hauntingly beautiful landscape. The beach gets its name from the bleached driftwood scattered across the shore, resembling a boneyard. This natural phenomenon is the result of erosion that has caused the maritime forest to gradually fall onto the beach.",
    features: {
      erosionType: "Coastal erosion of maritime forest",
      treeSpecies: ["Live Oak", "Cedar"],
      accessibility: "Moderate - requires a short hike",
      bestTimeToVisit: ["Low tide", "Sunrise", "Sunset"],
      amenities: ["Parking", "Trails", "Picnic areas"]
    },
    images: {
      main: "/images/boneyard-beach-talbot.jpg"
    },
    conservationStatus: "Protected as part of Big Talbot Island State Park",
    additionalInfo: {
      historicalContext: "Big Talbot Island has been shaped by centuries of coastal processes and has been protected as a state park since 1985.",
      geologicalInfo: "The island's eastern shore faces the Atlantic Ocean and experiences significant erosion, creating the dramatic landscape of fallen trees.",
      wildlifeInfo: "The area is home to various shorebirds, and visitors might spot dolphins offshore."
    }
  },
  {
    id: "hunting-island",
    name: "Hunting Island Beach",
    location: {
      state: "South Carolina",
      coordinates: {
        latitude: 32.3805,
        longitude: -80.4382
      },
      nearestCity: "Beaufort"
    },
    description: "Hunting Island Beach features one of the most iconic boneyard beaches on the East Coast. Years of erosion have toppled many of the island's palmetto trees onto the beach, creating a surreal landscape of skeletal trees bleached by the sun and salt water. The beach loses about 15 feet of shoreline each year to erosion, continually transforming the landscape.",
    features: {
      erosionType: "Severe coastal erosion",
      treeSpecies: ["Palmetto", "Pine"],
      accessibility: "Easy - direct beach access",
      bestTimeToVisit: ["Morning", "Low tide"],
      amenities: ["Visitor center", "Camping", "Lighthouse", "Restrooms"]
    },
    images: {
      main: "/images/hunting-island.jpg"
    },
    conservationStatus: "Protected as part of Hunting Island State Park",
    additionalInfo: {
      historicalContext: "Hunting Island was once used as a hunting preserve for plantation owners, hence its name.",
      geologicalInfo: "The island is a barrier island that continues to be shaped by the Atlantic Ocean's currents and storms.",
      wildlifeInfo: "The park is home to loggerhead turtles that nest on the beach, as well as alligators in the lagoon areas."
    }
  },
  {
    id: "botany-bay",
    name: "Botany Bay Plantation Beach",
    location: {
      state: "South Carolina",
      coordinates: {
        latitude: 32.5437,
        longitude: -80.2384
      },
      nearestCity: "Edisto Island"
    },
    description: "Botany Bay Plantation Beach on Edisto Island features a stunning boneyard beach where the ocean has eroded the shoreline, leaving behind a 'graveyard' of dead trees. The beach is known for its otherworldly appearance, with weathered tree trunks and branches creating a dramatic scene against the backdrop of the Atlantic Ocean.",
    features: {
      erosionType: "Coastal erosion and salt water intrusion",
      treeSpecies: ["Oak", "Pine", "Palmetto"],
      accessibility: "Moderate - requires a walk from parking area",
      bestTimeToVisit: ["Low tide", "Early morning"],
      amenities: ["Limited parking", "Walking trails"]
    },
    images: {
      main: "/images/botany-bay.jpg"
    },
    conservationStatus: "Protected as part of Botany Bay Plantation Heritage Preserve",
    additionalInfo: {
      historicalContext: "The area was once home to Sea Cloud and Bleak Hall plantations, which produced Sea Island cotton.",
      geologicalInfo: "The beach continues to change with each tide and storm, with erosion constantly reshaping the shoreline.",
      wildlifeInfo: "The beach is an important nesting site for loggerhead turtles and various shorebirds."
    }
  }
];
