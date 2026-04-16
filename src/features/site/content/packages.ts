import type { TravelPackage } from "@/shared/types/site";
import { findByFlexibleSlug } from "./slug-match";

type PackageSeed = Omit<
  TravelPackage,
  "pickupSupport" | "dropSupport" | "travelNotes" | "packageFaqs" | "pricingTiers"
>;

function createPricingTiers(
  basePriceLabel: string,
  category: TravelPackage["category"],
) {
  const amount = Number(basePriceLabel.replace(/[^0-9]/g, ""));

  if (!amount) {
    return [
      {
        label: "Flexible Quote",
        price: "On request",
        bestFor: "Travelers planning a customized route",
        features: [
          "Cab selection based on group size",
          "Hotel category planning support",
          "Meal and darshan add-on guidance",
        ],
      },
    ];
  }

  const standard = amount;
  const deluxe = Math.round(amount * 1.22);
  const premium = Math.round(amount * 1.46);
  const heritageAddon =
    category === "Heritage" || category === "Pilgrimage + Heritage"
      ? "Heritage stop coordination and slower scenic pacing"
      : "Temple-focused route pacing with darshan-first coordination";

  return [
    {
      label: "Standard",
      price: `From INR ${standard.toLocaleString("en-IN")}`,
      bestFor: "Practical and comfortable family travel",
      features: [
        "Private cab with route assistance",
        "Pickup and drop planning support",
        "Hotel recommendations on request",
      ],
    },
    {
      label: "Deluxe",
      price: `From INR ${deluxe.toLocaleString("en-IN")}`,
      bestFor: "Families wanting stay and meal convenience",
      features: [
        "Private cab with multi-stop comfort pacing",
        "Hotel assistance with meal planning support",
        heritageAddon,
      ],
    },
    {
      label: "Premium",
      price: `From INR ${premium.toLocaleString("en-IN")}`,
      bestFor: "Senior-friendly or higher-comfort pilgrim groups",
      features: [
        "Priority-focused route structuring",
        "Premium stay guidance and flexible halts",
        "WhatsApp-first coordination before and during travel",
      ],
    },
  ];
}

const packageSeeds: PackageSeed[] = [
  {
    id: "pkg-ujjain-1-day",
    slug: "1-day-ujjain-darshan",
    title: "1 Day Ujjain Darshan",
    duration: "1 Day",
    category: "Pilgrimage",
    shortDescription:
      "A focused Ujjain temple circuit for devotees who want a clean, well-paced city darshan experience in a private cab.",
    destinations: ["Indore", "Ujjain", "Mahakaleshwar", "Kaal Bhairav", "Ram Ghat"],
    inclusions: [
      "Private cab for the full route",
      "Pickup and drop assistance",
      "Local darshan route support",
      "Water bottles inside the vehicle",
    ],
    exclusions: [
      "Temple VIP tickets",
      "Personal puja expenses",
      "Meals unless requested",
    ],
    addOns: ["Hotel stay", "Lunch or dinner", "Extended Ujjain temple circuit"],
    priceLabel: "Starting from INR 3,900",
    featured: true,
    whatsappMessage:
      "Namaste, I want details for the 1 Day Ujjain Darshan package.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival, darshan, and local temple circuit",
        description:
          "Pickup, Mahakaleshwar darshan planning, selected temple visits, and return with comfortable pacing for family travel.",
      },
    ],
    recommendedFor: ["Weekend pilgrims", "Families", "Outstation visitors arriving via Indore"],
    badges: ["Popular", "Family Friendly", "Hotel Available", "Food Add-on", "Pilgrimage Special"],
    accent: "Har Har Mahadev",
    highlightsCovered: ["Mahakaleshwar Temple", "Kaal Bhairav", "Ram Ghat", "Mahakal Corridor"],
  },
  {
    id: "pkg-ujjain-omkareshwar-2d",
    slug: "1-night-2-day-ujjain-omkareshwar",
    title: "1 Night / 2 Day Ujjain + Omkareshwar",
    duration: "1 Night / 2 Days",
    category: "Pilgrimage",
    shortDescription:
      "A premium Jyotirling-focused route for travelers who want both Ujjain and Omkareshwar in one smooth spiritual journey.",
    destinations: ["Indore", "Ujjain", "Omkareshwar", "Mamleshwar"],
    inclusions: [
      "Private cab for the full itinerary",
      "Darshan-oriented route planning",
      "Water bottles and support coordination",
      "Driver assistance for intercity movement",
    ],
    exclusions: ["Temple special darshan fees", "Personal shopping", "Meals unless added"],
    addOns: ["Hotel stay", "Dinner arrangement", "Extra stop in Indore"],
    priceLabel: "Starting from INR 7,200",
    featured: true,
    whatsappMessage:
      "Namaste, I want details for the 1 Night / 2 Day Ujjain + Omkareshwar package.",
    itinerary: [
      {
        day: "Day 1",
        title: "Ujjain arrival and Mahakaleshwar route",
        description:
          "Pickup, city-based darshan route, and overnight planning with optional hotel support.",
      },
      {
        day: "Day 2",
        title: "Omkareshwar darshan and onward travel",
        description:
          "Early departure toward Omkareshwar, darshan support, and return or onward drop planning.",
      },
    ],
    recommendedFor: ["Devotees seeking both Jyotirlingas", "Couples", "Family groups"],
    badges: ["Popular", "Family Friendly", "Hotel Available", "Food Add-on", "Pilgrimage Special"],
    accent: "Om Namah Shivaya",
    highlightsCovered: ["Mahakaleshwar Temple", "Omkareshwar Jyotirling", "Mamleshwar Temple", "Narmada-side darshan"],
  },
  {
    id: "pkg-ujjain-omkareshwar-nalkheda",
    slug: "2-night-3-day-ujjain-omkareshwar-nalkheda",
    title: "2 Night / 3 Day Ujjain + Omkareshwar + Nalkheda",
    duration: "2 Nights / 3 Days",
    category: "Pilgrimage",
    shortDescription:
      "A powerful Shiva and Shakti circuit combining Mahakaleshwar, Omkareshwar, and Maa Baglamukhi with careful trip pacing.",
    destinations: ["Ujjain", "Omkareshwar", "Nalkheda", "Indore"],
    inclusions: [
      "Private cab across all destinations",
      "Multi-day route support",
      "Flexible rest-stop planning",
      "Support suited for family and elder travelers",
    ],
    exclusions: ["Puja booking charges", "Accommodation unless added", "Personal expenses"],
    addOns: ["Hotel stay", "Meal planning", "Senior-focused pacing adjustments"],
    priceLabel: "Starting from INR 10,400",
    featured: true,
    whatsappMessage:
      "Namaste, I want details for the 2 Night / 3 Day Ujjain + Omkareshwar + Nalkheda package.",
    itinerary: [
      {
        day: "Day 1",
        title: "Ujjain darshan",
        description:
          "Temple visits in Ujjain with smooth local movement and a calm route structure.",
      },
      {
        day: "Day 2",
        title: "Omkareshwar Jyotirling visit",
        description:
          "Journey to Omkareshwar with darshan planning and scenic Narmada-side pauses where possible.",
      },
      {
        day: "Day 3",
        title: "Nalkheda Baglamukhi darshan and return",
        description:
          "Dedicated Shakti-focused temple visit followed by return and onward drop.",
      },
    ],
    recommendedFor: ["Shiva and Shakti devotees", "Senior-friendly groups", "Longer pilgrimages"],
    badges: ["Senior Friendly", "Family Friendly", "Hotel Available", "Food Add-on", "Pilgrimage Special"],
    accent: "Jai Maa Baglamukhi",
    highlightsCovered: ["Mahakaleshwar Temple", "Omkareshwar Jyotirling", "Maa Baglamukhi Temple", "Indore transfer support"],
  },
  {
    id: "pkg-ujjain-maheshwar",
    slug: "ujjain-maheshwar-spiritual-tour",
    title: "Ujjain + Maheshwar Spiritual Tour",
    duration: "2 Days / 1 Night",
    category: "Pilgrimage + Heritage",
    shortDescription:
      "A softer spiritual route that combines temple devotion in Ujjain with the riverside grace and heritage quietness of Maheshwar.",
    destinations: ["Ujjain", "Maheshwar", "Indore"],
    inclusions: [
      "Private cab service",
      "Temple and heritage routing",
      "Comfort-led travel pacing",
      "Basic coordination support",
    ],
    exclusions: ["Fort entry tickets", "Meals unless added", "Personal purchases"],
    addOns: ["Hotel stay", "Sunset stopovers", "Additional heritage exploration"],
    priceLabel: "Starting from INR 8,200",
    featured: false,
    whatsappMessage:
      "Namaste, I want details for the Ujjain + Maheshwar Spiritual Tour package.",
    itinerary: [
      {
        day: "Day 1",
        title: "Ujjain temple route",
        description:
          "Mahakaleshwar-centered city darshan with optional key temple additions.",
      },
      {
        day: "Day 2",
        title: "Maheshwar riverside and heritage movement",
        description:
          "Travel to Maheshwar for spiritual and cultural immersion before return planning.",
      },
    ],
    recommendedFor: ["Families", "Slow travelers", "Devotees interested in scenic heritage"],
    badges: ["Family Friendly", "Hotel Available", "Heritage Tour", "Pilgrimage Special"],
    accent: "Shubha Yatra",
    highlightsCovered: ["Mahakaleshwar Temple", "Maheshwar Ghat", "Ahilya Fort", "Riverside heritage walk"],
  },
  {
    id: "pkg-ujjain-omkareshwar-maheshwar",
    slug: "ujjain-omkareshwar-maheshwar-premium-tour",
    title: "Ujjain + Omkareshwar + Maheshwar Premium Tour",
    duration: "3 Days / 2 Nights",
    category: "Pilgrimage + Heritage",
    shortDescription:
      "A refined circuit balancing Jyotirling darshan with the peaceful riverside mood of Maheshwar.",
    destinations: ["Ujjain", "Omkareshwar", "Maheshwar", "Indore"],
    inclusions: [
      "Dedicated private cab",
      "Multi-day intercity route planning",
      "Comfort-focused temple and heritage movement",
      "Basic travel support coordination",
    ],
    exclusions: ["Temple special entry fees", "Accommodation unless chosen", "Personal expenses"],
    addOns: ["Hotel stay", "Meals", "Indore pickup and drop"],
    priceLabel: "Starting from INR 11,800",
    featured: true,
    whatsappMessage:
      "Namaste, I want details for the Ujjain + Omkareshwar + Maheshwar Premium Tour package.",
    itinerary: [
      {
        day: "Day 1",
        title: "Ujjain darshan",
        description: "Temple-led city route with flexibility for family comfort.",
      },
      {
        day: "Day 2",
        title: "Omkareshwar Jyotirling visit",
        description:
          "Full-day sacred route to Omkareshwar with organized cab movement.",
      },
      {
        day: "Day 3",
        title: "Maheshwar heritage and onward return",
        description:
          "Riverside heritage visit in Maheshwar with return toward Indore or planned drop.",
      },
    ],
    recommendedFor: ["Premium family groups", "Mixed spiritual and scenic travel", "Outstation visitors"],
    badges: ["Popular", "Family Friendly", "Hotel Available", "Food Add-on", "Heritage Tour", "Pilgrimage Special"],
    accent: "Sacred journeys, trusted care",
    highlightsCovered: ["Mahakaleshwar Temple", "Omkareshwar Jyotirling", "Mamleshwar Temple", "Maheshwar riverside heritage"],
  },
  {
    id: "pkg-mandu-maheshwar-ujjain",
    slug: "mandu-maheshwar-ujjain-heritage-spiritual-tour",
    title: "Mandu + Maheshwar + Ujjain Heritage & Spiritual Tour",
    duration: "4 Days / 3 Nights",
    category: "Heritage",
    shortDescription:
      "A broader regional journey for travelers who want darshan depth along with fort architecture, riverside beauty, and cultural discovery.",
    destinations: ["Ujjain", "Maheshwar", "Mandu", "Indore"],
    inclusions: [
      "Private cab across the full circuit",
      "Route support across spiritual and heritage stops",
      "Flexible rest breaks",
      "Trip suited for longer-format leisure travel",
    ],
    exclusions: ["Monument entry tickets", "Hotel costs unless chosen", "Meals unless requested"],
    addOns: ["Extended photography breaks", "Hotel booking", "Meal planning"],
    priceLabel: "Starting from INR 14,600",
    featured: false,
    whatsappMessage:
      "Namaste, I want details for the Mandu + Maheshwar + Ujjain Heritage & Spiritual Tour package.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Ujjain darshan",
        description: "Spiritual entry into the circuit through Ujjain.",
      },
      {
        day: "Day 2",
        title: "Maheshwar day",
        description: "Ghats, temple calm, and cultural ambience by the Narmada.",
      },
      {
        day: "Day 3",
        title: "Mandu heritage visit",
        description: "Fort architecture, scenic viewpoints, and a slower heritage mood.",
      },
      {
        day: "Day 4",
        title: "Return support",
        description: "Departure coordination and onward drop planning.",
      },
    ],
    recommendedFor: ["Heritage lovers", "Extended families", "Travelers wanting a full regional circuit"],
    badges: ["Family Friendly", "Hotel Available", "Food Add-on", "Heritage Tour"],
    accent: "Echoes of stone, paths of devotion",
    highlightsCovered: ["Mahakaleshwar Temple", "Maheshwar Ghat", "Ahilya Fort", "Mandu monuments"],
  },
  {
    id: "pkg-indore-ujjain",
    slug: "indore-to-ujjain-darshan-package",
    title: "Indore to Ujjain Darshan Package",
    duration: "Same Day / Flexible",
    category: "Pilgrimage",
    shortDescription:
      "A practical and premium pickup-drop based package for travelers arriving through Indore and heading to Ujjain for darshan.",
    destinations: ["Indore", "Ujjain"],
    inclusions: [
      "Pickup from airport, station, or hotel",
      "Private transfer to Ujjain",
      "Darshan route support as required",
      "Return or onward drop planning",
    ],
    exclusions: ["Accommodation", "Temple ticketing", "Meals unless chosen"],
    addOns: ["Local Ujjain temple extension", "Hotel stay", "Omkareshwar extension"],
    priceLabel: "Starting from INR 2,800",
    featured: false,
    whatsappMessage:
      "Namaste, I want details for the Indore to Ujjain Darshan Package.",
    itinerary: [
      {
        day: "Trip Window",
        title: "Pickup, darshan transfer, and return support",
        description:
          "Designed for outstation travelers who need a reliable Indore-based gateway service.",
      },
    ],
    recommendedFor: ["Air travelers", "Rail arrivals", "Quick darshan plans"],
    badges: ["Family Friendly", "Pilgrimage Special"],
    accent: "Comfort from arrival",
    highlightsCovered: ["Indore pickup", "Mahakaleshwar Temple", "Optional Kaal Bhairav", "Same-day return support"],
  },
  {
    id: "pkg-custom",
    slug: "custom-spiritual-tour-package",
    title: "Custom Spiritual Tour Package",
    duration: "Flexible",
    category: "Custom",
    shortDescription:
      "A modular yatra design service for travelers who want their own route, pace, hotel style, meal support, and temple priorities.",
    destinations: ["Ujjain", "Omkareshwar", "Nalkheda", "Maheshwar", "Mandu", "Indore"],
    inclusions: [
      "Route planning support",
      "Private cab options",
      "Flexible package structure",
      "WhatsApp-based coordination",
    ],
    exclusions: ["Dynamic costs until final route is confirmed", "Third-party ticket fees"],
    addOns: ["Hotels", "Meals", "Senior support pacing", "Pickup/drop customization"],
    priceLabel: "Tailored on request",
    featured: true,
    whatsappMessage:
      "Namaste, I want to create a Custom Spiritual Tour Package.",
    itinerary: [
      {
        day: "Custom",
        title: "Planned around your group",
        description:
          "The final route is shaped according to your travel dates, darshan priorities, and comfort requirements.",
      },
    ],
    recommendedFor: ["Families", "Senior citizen groups", "Pilgrimage plus heritage travelers"],
    badges: ["Custom", "Family Friendly", "Senior Friendly", "Hotel Available", "Food Add-on"],
    accent: "Yatra with Shraddha",
    highlightsCovered: ["Ujjain", "Omkareshwar", "Nalkheda", "Maheshwar", "Mandu", "Indore"],
  },
];

export const packages: TravelPackage[] = packageSeeds.map((pkg) => ({
  ...pkg,
  pickupSupport:
    "Pickup assistance can be arranged from Indore airport, railway station, hotel, or a route-aligned city point.",
  dropSupport:
    "Drop support can be aligned to your return city, hotel, station, or onward transfer requirement.",
  travelNotes: [
    "Temple timing and crowd conditions can influence the day plan slightly.",
    "Senior citizen pacing and additional rest stops can be requested during planning.",
    "Hotel and food add-ons are best finalized at inquiry stage for accurate route matching.",
  ],
  packageFaqs: [
    {
      question: "Can this package be customized around our arrival time?",
      answer:
        "Yes. The route can be adjusted around arrival city, pickup timing, and darshan priorities before confirmation.",
    },
    {
      question: "Can hotel stay and food be added to this package?",
      answer:
        "Yes. Hotel and food support are available as add-ons for most packages and can be discussed on WhatsApp.",
    },
    {
      question: "Is this package suitable for family and senior citizen travel?",
      answer:
        "Yes. The service can be planned with gentler pacing, rest breaks, and cleaner movement between destinations.",
    },
  ],
  pricingTiers: createPricingTiers(pkg.priceLabel, pkg.category),
}));

export function getPackageBySlug(slug: string) {
  return findByFlexibleSlug(packages, slug);
}

export function getRelatedPackages(currentSlug: string) {
  const current = getPackageBySlug(currentSlug);

  if (!current) {
    return [];
  }

  return packages
    .filter(
      (item) =>
        item.slug !== currentSlug &&
        (item.category === current.category ||
          item.destinations.some((destination) => current.destinations.includes(destination))),
    )
    .slice(0, 3);
}

