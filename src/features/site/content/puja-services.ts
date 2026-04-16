import type { PujaService } from "@/shared/types/site";
import { findByFlexibleSlug } from "./slug-match";

export const pujaServices: PujaService[] = [
  {
    slug: "kaal-sarp-dosh-puja",
    title: "Kaal Sarp Dosh Puja",
    accent: "Dosha Nivaran",
    shortDescription:
      "A guided puja support flow for devotees seeking relief from Kaal Sarp dosh with organized samagri, pandit coordination, and temple-side support.",
    priceLabel: "Starts from INR 5,100",
    duration: "Half Day",
    idealFor: ["Dosha nivaran seekers", "Family puja planning", "Outstation devotees"],
    inclusions: ["Verified pandit coordination", "Basic samagri support", "Guidance on timing and process"],
    overview:
      "Designed to make the puja journey calmer and more trustworthy for devotees coming specifically for remedies and spiritually important rituals.",
  },
  {
    slug: "mangal-dosh-puja",
    title: "Mangal Dosh Puja",
    accent: "Graha Shanti",
    shortDescription:
      "A structured puja support option for devotees seeking Mangal dosh shanti with practical guidance, booking clarity, and temple-side coordination.",
    priceLabel: "Starts from INR 5,100",
    duration: "Half Day",
    idealFor: ["Marriage-related remedies", "Astrology-led puja planning", "Couple or family bookings"],
    inclusions: ["Pandit coordination", "Puja process guidance", "Temple visit support"],
    overview:
      "Useful for devotees who want a clearer, more organized path for remedy-focused puja without confusion around basic arrangements.",
  },
  {
    slug: "rudrabhishek-puja",
    title: "Rudrabhishek Puja",
    accent: "Shiva Aradhana",
    shortDescription:
      "A premium Shiva puja support experience centered around devotion, clean coordination, and peaceful ritual timing.",
    priceLabel: "Starts from INR 11,000",
    duration: "Half Day",
    idealFor: ["Mahadev devotees", "Special family rituals", "Festival or sankalp bookings"],
    inclusions: ["Pandit booking support", "Samagri assistance", "Comfort-first scheduling support"],
    overview:
      "Built for devotees who want Rudrabhishek performed with more peace, better preparation, and clearer ritual assistance.",
  },
  {
    slug: "mahamrityunjay-jaap",
    title: "Mahamrityunjay Jaap",
    accent: "Healing Prayer",
    shortDescription:
      "Jaap support for devotees seeking spiritual strength, healing prayers, and organized assistance for a serious sankalp-led ritual.",
    priceLabel: "Starts from INR 51,000",
    duration: "Custom Duration",
    idealFor: ["Healing sankalp", "Family prayer support", "Long-format ritual planning"],
    inclusions: ["Jaap coordination", "Pandit arrangements", "Advance planning assistance"],
    overview:
      "Suitable for devotees who want a more formal spiritual support process around Mahamrityunjay jaap arrangements.",
  },
  {
    slug: "pitra-dosh-puja",
    title: "Pitra Dosh Puja",
    accent: "Shraddha Ritual",
    shortDescription:
      "A respectful puja arrangement flow for devotees seeking rituals related to ancestral peace and remedy-focused worship.",
    priceLabel: "Starts from INR 5,100",
    duration: "Half Day",
    idealFor: ["Ancestral rituals", "Family bookings", "Remedy-focused spiritual visits"],
    inclusions: ["Temple-side process help", "Pandit assistance", "Basic scheduling support"],
    overview:
      "This service helps devotees navigate a spiritually sensitive puja with better clarity and calmer support.",
  },
];

export function getPujaServiceBySlug(slug: string) {
  return findByFlexibleSlug(pujaServices, slug);
}
