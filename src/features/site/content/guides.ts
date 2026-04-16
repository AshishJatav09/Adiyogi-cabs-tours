import type { GuideArticleContent } from "@/shared/types/site";
import { findByFlexibleSlug } from "./slug-match";

export type GuideArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Temple Guide" | "Travel Guide" | "Seasonal Tips" | "Pilgrimage Planning";
  accent: string;
  seoKeyword: string;
  readTime: string;
  content: GuideArticleContent;
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "mahakaleshwar-guide",
    title: "Mahakaleshwar Guide",
    excerpt:
      "Understand darshan flow, key temple moments, and how to plan a calmer Mahakaleshwar visit with practical local support.",
    category: "Temple Guide",
    accent: "Har Har Mahadev",
    seoKeyword: "Mahakal darshan cab service",
    readTime: "6 min read",
    content: {
      intro:
        "Mahakaleshwar is the spiritual heart of Ujjain and often the main reason devotees travel here. A better visit usually comes from calmer timing, practical route planning, and realistic expectations around temple flow.",
      sections: [
        {
          title: "Why Mahakaleshwar matters",
          body:
            "As one of the twelve Jyotirlingas, Mahakaleshwar carries deep devotional importance for Shiva devotees. For many families, this stop is not just sightseeing but the emotional center of the entire journey.",
        },
        {
          title: "How to plan your darshan day",
          body:
            "Arriving with enough buffer, keeping local transfers organized, and planning nearby temples together helps the day feel less rushed. It is especially useful for elders and outstation travelers.",
        },
        {
          title: "Useful route pairing",
          body:
            "Mahakaleshwar pairs naturally with Kaal Bhairav, Harsiddhi, Ram Ghat, and in extended itineraries with Omkareshwar. This makes Ujjain ideal as both a one-day darshan city and a base for larger spiritual circuits.",
        },
      ],
      highlights: [
        "Best suited for early-start pilgrimage plans",
        "Works well with airport pickup from Indore",
        "Ideal anchor for 1-day and 2-day spiritual packages",
      ],
      ctaTitle: "Need a smoother Mahakal darshan plan?",
      ctaBody:
        "Use WhatsApp to discuss travel timing, family support, nearby temples, and custom route planning.",
    },
  },
  {
    slug: "omkareshwar-significance",
    title: "Omkareshwar Significance",
    excerpt:
      "See how Omkareshwar adds depth, river-side calm, and Jyotirlinga significance to a stronger spiritual itinerary.",
    category: "Temple Guide",
    accent: "Om Namah Shivaya",
    seoKeyword: "Omkareshwar tour package",
    readTime: "5 min read",
    content: {
      intro:
        "Omkareshwar is often chosen by devotees who want their journey to feel more complete than a city-only darshan. The destination combines sacred importance with a slower, more meditative atmosphere.",
      sections: [
        {
          title: "Spiritual significance",
          body:
            "As a Jyotirlinga destination, Omkareshwar holds deep value for Shiva devotees. The Narmada-side setting also gives the visit a quieter devotional character.",
        },
        {
          title: "Why it works so well with Ujjain",
          body:
            "Many pilgrims prefer to combine Mahakaleshwar and Omkareshwar in one trip. Together they create a stronger Shiva-focused route with practical multi-day pacing.",
        },
        {
          title: "Who benefits most from this route",
          body:
            "Families, couples, and outstation devotees usually find this route rewarding because it balances sacred intensity with scenic calm and manageable intercity movement.",
        },
      ],
      highlights: [
        "Best for 2-day and 3-day itineraries",
        "Adds river-side stillness to the route",
        "Pairs well with Maheshwar for premium circuits",
      ],
      ctaTitle: "Planning Ujjain plus Omkareshwar together?",
      ctaBody:
        "Ask for a route plan with pickup, stay, darshan order, and family pacing support.",
    },
  },
  {
    slug: "nalkheda-baglamukhi-darshan-guide",
    title: "Nalkheda Baglamukhi Darshan Guide",
    excerpt:
      "A practical guide for devotees adding Maa Baglamukhi to a Shiva-led circuit across Ujjain and Omkareshwar.",
    category: "Temple Guide",
    accent: "Jai Maa Baglamukhi",
    seoKeyword: "Nalkheda darshan package",
    readTime: "5 min read",
    content: {
      intro:
        "Nalkheda brings a focused Shakti dimension to the route. It is usually chosen by devotees with prayer-led intentions who want a more complete spiritual circuit.",
      sections: [
        {
          title: "Temple intent and devotional mood",
          body:
            "Unlike broader sightseeing routes, Nalkheda is more purpose-driven. Travelers usually come here with a specific sankalp or devotional intention.",
        },
        {
          title: "Best way to include it",
          body:
            "Nalkheda is usually best as part of a two-night or three-night private circuit. That allows the rest of the route to stay calm instead of turning into a rushed stop.",
        },
        {
          title: "Comfort planning matters",
          body:
            "Because this route is often chosen by families and spiritually focused groups, sensible pacing, meal planning, and intercity coordination make a visible difference.",
        },
      ],
      highlights: [
        "Complements a Shiva + Shakti route",
        "Best added in private cab itineraries",
        "Useful for sankalp-led travel planning",
      ],
      ctaTitle: "Want to include Nalkheda in your yatra?",
      ctaBody:
        "Get help combining Nalkheda with Ujjain, Omkareshwar, and practical stay support.",
    },
  },
  {
    slug: "ujjain-temple-circuit-guide",
    title: "Ujjain Temple Circuit Guide",
    excerpt:
      "A clearer way to think about Mahakal, Kaal Bhairav, Harsiddhi, Ram Ghat, and the wider Ujjain temple experience.",
    category: "Pilgrimage Planning",
    accent: "Shubha Yatra",
    seoKeyword: "Ujjain darshan package",
    readTime: "7 min read",
    content: {
      intro:
        "For many devotees, Ujjain is not a single-temple stop. A stronger plan looks at how Mahakaleshwar connects with other sacred sites and how the day should be paced.",
      sections: [
        {
          title: "Core temples in the route",
          body:
            "Mahakaleshwar is the anchor, but Kaal Bhairav, Harsiddhi, and Ram Ghat create a fuller spiritual arc for the day.",
        },
        {
          title: "Why route order matters",
          body:
            "The right order can reduce wasted movement, improve comfort, and make the city circuit feel calmer and more devotional.",
        },
        {
          title: "Who should choose a one-day vs overnight plan",
          body:
            "A one-day circuit works for quick darshan, but overnight plans are often better for families, elders, and devotees wanting more breathing room.",
        },
      ],
      highlights: [
        "Strong for first-time pilgrims",
        "Useful for family and senior-friendly planning",
        "Can be paired with Indore arrival support",
      ],
      ctaTitle: "Need a full Ujjain circuit instead of just one temple stop?",
      ctaBody:
        "Ask for a route covering key temples, local movement, and comfortable darshan pacing.",
    },
  },
  {
    slug: "maheshwar-travel-guide",
    title: "Maheshwar Travel Guide",
    excerpt:
      "Explore why Maheshwar adds riverside grace, heritage calm, and a premium rhythm to multi-day spiritual travel.",
    category: "Travel Guide",
    accent: "Narmade Har",
    seoKeyword: "Maheshwar tour package",
    readTime: "5 min read",
    content: {
      intro:
        "Maheshwar brings a different emotional texture to the route. It adds fort views, Narmada calm, and a refined heritage feeling that balances heavier darshan segments.",
      sections: [
        {
          title: "Why Maheshwar elevates the route",
          body:
            "Adding Maheshwar helps the journey feel more premium and layered rather than being only temple-to-temple movement.",
        },
        {
          title: "Best for which travelers",
          body:
            "Families, couples, and travelers wanting a mix of devotion and scenic pauses often appreciate Maheshwar the most.",
        },
        {
          title: "How it fits multi-day plans",
          body:
            "Maheshwar usually works best with Omkareshwar, Mandu, or Indore when the goal is a more balanced and memorable regional itinerary.",
        },
      ],
      highlights: [
        "Adds premium heritage value",
        "Great for riverside evenings",
        "Ideal in extended family itineraries",
      ],
      ctaTitle: "Thinking beyond temple-only travel?",
      ctaBody:
        "Plan a circuit that blends darshan, heritage, and quieter scenic experiences.",
    },
  },
  {
    slug: "mandu-heritage-guide",
    title: "Mandu Heritage Guide",
    excerpt:
      "See how Mandu brings atmosphere, architecture, and a dramatic heritage layer to a spiritual-plus-cultural journey.",
    category: "Travel Guide",
    accent: "Echoes of Stone",
    seoKeyword: "Mandu heritage tour",
    readTime: "6 min read",
    content: {
      intro:
        "Mandu expands the trip beyond temple focus. Its architecture, views, and slower sightseeing mood make it a strong extension for premium family travel.",
      sections: [
        {
          title: "What makes Mandu memorable",
          body:
            "Mandu is known for fort architecture, open views, and a strong sense of history. It changes the emotional pace of the itinerary in a good way.",
        },
        {
          title: "When to include it",
          body:
            "It works best when travelers have enough time for a broader regional circuit and want more than a devotional-only package.",
        },
        {
          title: "Why families like it",
          body:
            "Because the route includes open landscapes and heritage exploration, Mandu often appeals to mixed-age groups and custom trips.",
        },
      ],
      highlights: [
        "Best for extended heritage routes",
        "Pairs well with Maheshwar and Indore",
        "Adds scenic depth to the itinerary",
      ],
      ctaTitle: "Want a more complete heritage-spiritual circuit?",
      ctaBody:
        "Ask for a Mandu-inclusive itinerary with pacing, sightseeing support, and custom route planning.",
    },
  },
  {
    slug: "best-time-to-visit-ujjain-and-omkareshwar",
    title: "Best Time to Visit Ujjain and Omkareshwar",
    excerpt:
      "Seasonal guidance for choosing better weather, crowd comfort, and smoother darshan planning across both Jyotirlinga destinations.",
    category: "Seasonal Tips",
    accent: "Sacred journeys, trusted care",
    seoKeyword: "Ujjain Omkareshwar taxi package",
    readTime: "4 min read",
    content: {
      intro:
        "The best travel window depends on whether you care most about weather comfort, festive energy, or manageable movement for family members and elders.",
      sections: [
        {
          title: "Comfort-focused travel seasons",
          body:
            "Cooler months are usually easier for intercity travel, darshan waiting time, and multi-stop journeys.",
        },
        {
          title: "Festival periods",
          body:
            "Festival and special spiritual dates can feel deeply rewarding, but they also require stronger planning for crowd movement and timing.",
        },
        {
          title: "Who should prioritize lighter seasons",
          body:
            "Senior citizens, children, and first-time pilgrims usually benefit from calmer travel windows with less environmental strain.",
        },
      ],
      highlights: [
        "Cooler months are easier for families",
        "Festive dates need earlier planning",
        "Multi-city trips benefit from lighter traffic windows",
      ],
      ctaTitle: "Need help choosing the right travel window?",
      ctaBody:
        "Share your month, darshan priority, and traveler mix to get a better route suggestion.",
    },
  },
  {
    slug: "travel-tips-for-spiritual-tours",
    title: "Travel Tips for Spiritual Tours",
    excerpt:
      "Useful preparation ideas for devotees, elders, families, and outstation travelers planning a spiritual route in Madhya Pradesh.",
    category: "Pilgrimage Planning",
    accent: "Shraddha and comfort",
    seoKeyword: "Indore to Ujjain cab package",
    readTime: "6 min read",
    content: {
      intro:
        "Spiritual tours go much more smoothly when transport timing, rest breaks, temple expectations, and basic family needs are considered in advance.",
      sections: [
        {
          title: "Start with travel realism",
          body:
            "A good route is not about maximum stops. It is about how peacefully the group can move, rest, and stay aligned with temple priorities.",
        },
        {
          title: "Family and elder comfort",
          body:
            "Planning water, rest gaps, hotel convenience, and manageable darshan pacing can make the whole experience feel much more dignified and calm.",
        },
        {
          title: "Use direct coordination",
          body:
            "Quick WhatsApp coordination helps finalize practical things faster, especially when plans need hotel, meal, or intercity pickup support.",
        },
      ],
      highlights: [
        "Less rushing leads to a better spiritual experience",
        "Comfort planning matters as much as route planning",
        "Direct support reduces confusion for outstation travelers",
      ],
      ctaTitle: "Need a custom spiritual route instead of a fixed itinerary?",
      ctaBody:
        "Get help planning pickup, darshan order, stay support, and family pacing around your priorities.",
    },
  },
];

export function getGuideBySlug(slug: string) {
  return findByFlexibleSlug(guideArticles, slug);
}
