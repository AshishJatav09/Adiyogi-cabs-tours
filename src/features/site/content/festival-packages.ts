import { findByFlexibleSlug } from "./slug-match";

export type FestivalPackage = {
  slug: string;
  festival: string;
  title: string;
  excerpt: string;
  duration: string;
  idealFor: string;
  highlights: string[];
  includes: string[];
  note: string;
};

export const festivalPackages: FestivalPackage[] = [
  {
    slug: "mahashivratri-ujjain-darshan",
    festival: "Mahashivratri Special",
    title: "Mahashivratri Ujjain Darshan Package",
    excerpt:
      "A crowd-aware Mahakal-focused route with pickup planning, temple-day timing support, and calm movement for families and devotees.",
    duration: "1 Night / 2 Day",
    idealFor: "Mahakal devotees, families, outstation pilgrims",
    highlights: [
      "Mahakaleshwar-focused darshan planning",
      "Early-movement support around high-footfall temple hours",
      "Optional Indore pickup and hotel coordination",
    ],
    includes: [
      "Private cab planning",
      "Temple-day route guidance",
      "Optional stay support",
      "WhatsApp coordination before arrival",
    ],
    note:
      "Festival dates need earlier planning because darshan flow, traffic, and stay availability shift quickly.",
  },
  {
    slug: "sawan-somvar-ujjain-omkareshwar",
    festival: "Shravan / Sawan",
    title: "Sawan Somvar Ujjain + Omkareshwar Route",
    excerpt:
      "A Shiva-led multi-city route built for devotees who want both Mahakal and Omkareshwar during the sacred Sawan period.",
    duration: "2 Night / 3 Day",
    idealFor: "Shiva devotees, couples, family yatras",
    highlights: [
      "Combines both Jyotirlinga destinations in one route",
      "Designed for manageable travel between darshan days",
      "Works well with premium cab and hotel support",
    ],
    includes: [
      "Private intercity cab",
      "Stay and meal preference coordination",
      "Flexible pickup from Indore or Ujjain",
      "Senior-friendly pacing support",
    ],
    note:
      "Sawan dates can be spiritually rewarding but benefit from route realism and softer pacing for elders.",
  },
  {
    slug: "navratri-baglamukhi-nalkheda-yatra",
    festival: "Navratri Shakti Yatra",
    title: "Navratri Baglamukhi Nalkheda Yatra",
    excerpt:
      "A focused Shakti route for devotees planning Maa Baglamukhi darshan with stronger coordination around stay, meals, and prayer-led travel intent.",
    duration: "2 Night / 3 Day",
    idealFor: "Shakti devotees, sankalp-led travel, private family groups",
    highlights: [
      "Nalkheda-centered devotional planning",
      "Can be paired with Ujjain and Omkareshwar",
      "Suitable for private cab-based pilgrimage routes",
    ],
    includes: [
      "Private cab movement",
      "Hotel assistance",
      "Prayer-led route guidance",
      "WhatsApp-first coordination",
    ],
    note:
      "This route works best when the journey is kept devotional and not overloaded with too many additional stops.",
  },
  {
    slug: "bhasma-aarti-ujjain-support",
    festival: "Bhasma Aarti Planning",
    title: "Bhasma Aarti Support for Ujjain Visits",
    excerpt:
      "A planning-first route for devotees who need better timing, city movement, and practical support around an early-start Mahakal visit.",
    duration: "Same Day / 1 Night",
    idealFor: "Early-start darshan plans, couples, first-time pilgrims",
    highlights: [
      "Useful for timing-sensitive temple mornings",
      "Ideal with hotel stay close to route flow",
      "Works well with airport or railway arrival support",
    ],
    includes: [
      "Arrival support planning",
      "Temple-day local movement",
      "Stay coordination option",
      "WhatsApp timing discussion",
    ],
    note:
      "This page is intentionally positioned as planning support and does not claim official booking authority where separate temple rules apply.",
  },
];

export function getFestivalPackageBySlug(slug: string) {
  return findByFlexibleSlug(festivalPackages, slug);
}
