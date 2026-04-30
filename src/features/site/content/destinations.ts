import { packages } from "./packages";
import { findByFlexibleSlug } from "./slug-match";

import type { Destination } from "@/shared/types/site";

export const destinations: Destination[] = [
  {
    slug: "ujjain",
    name: "Ujjain",
    category: "Pilgrimage Destinations",
    accent: "Mahakal Ki Nagari",
    image: "/images/destinations/ujjain-mahakal.jpg",
    overview:
      "Ujjain is the spiritual anchor of the Adiyogi route network and the most important darshan destination in the package ecosystem.",
    significance:
      "Home to Shri Mahakaleshwar Jyotirling, Ujjain carries profound devotional weight for Shiva devotees and remains one of India’s most sacred temple cities.",
    shortHistory:
      "Historically known as Avantika, Ujjain has long been associated with ancient learning, temple traditions, Kumbh significance, and deep Shaiva heritage.",
    whatToExpect:
      "Travelers can expect temple-centered movement, sacred city energy, ghat-side moments, and multiple devotional stops beyond the main Jyotirling darshan.",
    whyInPackageEcosystem:
      "It is the core starting point for many pilgrimage packages and often combines naturally with Omkareshwar, Nalkheda, and Indore-based arrival support.",
    travelUsefulness:
      "Ujjain works well for one-day darshan plans, overnight pilgrimage circuits, and multi-destination spiritual itineraries.",
    highlights: ["Mahakaleshwar Jyotirling", "Mahakal Corridor", "Kaal Bhairav", "Ram Ghat"],
    storyIntro:
      "Ujjain feels ancient in a way that many temple cities do not. It is one of the old names that keeps returning in Indian memory as Avantika, as a Kumbh city on the Shipra, and as the home of Mahakaleshwar, where devotion, time, ritual, and mythology all seem to stand in the same place together.",
    articleSections: [
      {
        title: "Why Ujjain stays in memory",
        body:
          "What attracts most visitors first is Mahakal, but the city quickly becomes more than a single-temple stop. The riverfront, the Bhairav tradition, the evening atmosphere around the older shrines, and the sense that the city has been sacred for centuries make Ujjain feel lived-in, not staged.",
      },
      {
        title: "A city with a very old name and identity",
        body:
          "Historical references to Ujjain go back to its older identity as Avantika or Ujjayini, a major centre on the Malwa plateau. It has long been connected with religious learning, astronomy, trade routes, and the wider cultural memory of central India, which is one reason the city carries so much weight beyond tourism alone.",
      },
      {
        title: "What makes the darshan circuit richer here",
        body:
          "A satisfying Ujjain visit usually works as a circuit, not a single queue. Mahakaleshwar, Kaal Bhairav, Harsiddhi, Ram Ghat, and the wider temple belt together create the emotional shape of the day. That is why route order and pacing matter so much for families and first-time pilgrims.",
      },
    ],
    interestingFacts: [
      "Ujjain is one of the four cities associated with the Kumbh tradition.",
      "The city was historically known as Avantika or Ujjayini.",
      "Mahakaleshwar is revered as one of the twelve Jyotirlingas.",
    ],
    bestTimeToVisit:
      "October to March is the easiest season for calm darshan and full temple circuits. Shravan, Mahashivratri, and special festive dates are spiritually powerful but much busier.",
    howToReach: {
      byAir:
        "The nearest major airport is Indore Airport. Most outstation pilgrims arrive in Indore and continue to Ujjain by private cab.",
      byTrain:
        "Ujjain Junction is well connected for pilgrims arriving from major cities across India.",
      byRoad:
        "Ujjain is comfortably accessible by road from Indore and also links well to Omkareshwar, Nalkheda, Maheshwar, and Mandu circuits.",
    },
    travelTimes: [
      { from: "Indore Airport", duration: "1.5 to 2 hours" },
      { from: "Omkareshwar", duration: "4 to 4.5 hours" },
      { from: "Nalkheda", duration: "3 to 3.5 hours" },
    ],
    nearbyAttractions: ["Mahakal Corridor", "Kaal Bhairav Temple", "Harsiddhi Temple", "Ram Ghat"],
    darshanTips: [
      "Start early if Mahakaleshwar darshan is the main priority.",
      "Keep extra time for crowd-led movement on festival and Monday dates.",
      "Private cab planning helps combine multiple temples without fatigue.",
    ],
    infoBlocks: [
      {
        label: "Temple Focus",
        title: "Mahakaleshwar Jyotirling",
        body:
          "The most powerful draw for many travelers, Mahakaleshwar is central to the devotional identity of the brand’s pilgrimage packages.",
      },
      {
        label: "Circuit Value",
        title: "Ujjain temple circuit",
        body:
          "Beyond the main temple, the city supports a fuller sacred route with important shrines and riverfront experiences.",
      },
    ],
  },
  {
    slug: "omkareshwar",
    name: "Omkareshwar",
    category: "Pilgrimage Destinations",
    accent: "Omkar Parvat",
    image: "/images/destinations/omkareshwar.jpg",
    overview:
      "Omkareshwar adds spiritual depth and natural serenity to the package mix, making it ideal for travelers seeking a fuller Jyotirling journey.",
    significance:
      "As one of the sacred Jyotirlingas of Lord Shiva, Omkareshwar holds strong devotional value and offers a more meditative atmosphere than a city-based temple circuit.",
    shortHistory:
      "The region’s sacred identity is tied to the island form of the Narmada landscape and centuries of temple worship and pilgrimage tradition.",
    whatToExpect:
      "Visitors can expect riverside movement, temple darshan, slower pacing, and a devotional environment shaped by the Narmada.",
    whyInPackageEcosystem:
      "It pairs naturally with Ujjain for a stronger Shiva-focused itinerary and also extends well into Maheshwar for more scenic multi-day travel.",
    travelUsefulness:
      "Omkareshwar is ideal for two-day and three-day circuits where travelers want spiritual richness without excessive destination hopping.",
    highlights: ["Omkareshwar Jyotirling", "Mamleshwar", "Narmada-side views", "Calm sacred pacing"],
    storyIntro:
      "Omkareshwar has a different mood from Ujjain. Where Ujjain feels intense and urban-sacred, Omkareshwar feels slower and more meditative, shaped by the Narmada, the island setting, and the feeling that pilgrimage here should be walked through rather than rushed through.",
    articleSections: [
      {
        title: "Why devotees find Omkareshwar deeply calming",
        body:
          "The pull of Omkareshwar is not only the Jyotirlinga itself but the environment around it. Bridges, ghats, the river, temple bells, and the island setting create a devotional pace that naturally slows people down.",
      },
      {
        title: "The sacred geography of the place",
        body:
          "Omkareshwar is closely tied to the Narmada and to the religious importance of the island and surrounding temple complex. The pairing of Omkareshwar and Mamleshwar also gives the destination a layered sacred identity that visitors often remember long after the trip ends.",
      },
      {
        title: "Why it works so well in multi-day routes",
        body:
          "This destination is often most rewarding when paired with Ujjain or Maheshwar. It gives a Shiva-led journey more breathing room, more natural beauty, and a more reflective tone than a city-only circuit.",
      },
    ],
    interestingFacts: [
      "Omkareshwar is one of the twelve Jyotirlinga pilgrimage centres.",
      "The destination is shaped by the Narmada and its island-temple setting.",
      "Mamleshwar is an important companion shrine in the wider darshan experience.",
    ],
    bestTimeToVisit:
      "October to March is best for a calmer temple and riverside experience. Monsoon makes the route beautiful, but travel planning should be more careful.",
    howToReach: {
      byAir:
        "Most devotees reach Omkareshwar through Indore Airport and continue by private cab.",
      byTrain:
        "Travelers usually rely on Indore rail access first, then complete the onward road journey to Omkareshwar.",
      byRoad:
        "Omkareshwar is a comfortable road extension from Ujjain, Indore, and Maheshwar in private itinerary planning.",
    },
    travelTimes: [
      { from: "Indore", duration: "2.5 to 3 hours" },
      { from: "Ujjain", duration: "4 to 4.5 hours" },
      { from: "Maheshwar", duration: "2 hours" },
    ],
    nearbyAttractions: ["Mamleshwar Temple", "Narmada Ghats", "Om-shaped island views", "Bridge crossing darshan route"],
    darshanTips: [
      "Early departure from Ujjain or Indore keeps the route more peaceful.",
      "Allow slower pacing if elders are traveling because temple access includes walking.",
      "Pairing with Maheshwar works well for a richer two-day or three-day circuit.",
    ],
    infoBlocks: [
      {
        label: "Temple Focus",
        title: "Omkareshwar Jyotirling",
        body:
          "This sacred stop deepens the pilgrimage journey and often becomes one of the most memorable spiritual segments in the circuit.",
      },
    ],
  },
  {
    slug: "nalkheda",
    name: "Nalkheda",
    category: "Pilgrimage Destinations",
    accent: "Shakti Peeth Grace",
    image: "/images/destinations/nalkheda.webp",
    overview:
      "Nalkheda brings a focused Shakti dimension to the travel portfolio and appeals to devotees seeking a more intentional prayer-led route.",
    significance:
      "Known for Maa Baglamukhi worship, Nalkheda is spiritually important for travelers drawn to divine protection, prayer focus, and Shakti-centered devotion.",
    shortHistory:
      "The temple’s devotional reputation has made Nalkheda a sought-after stop for spiritually motivated visitors from multiple regions.",
    whatToExpect:
      "The experience is less about broad sightseeing and more about temple purpose, devotional intention, and a respectful route structure.",
    whyInPackageEcosystem:
      "It complements Ujjain and Omkareshwar by adding a powerful Shakti stop to a Shiva-led pilgrimage route.",
    travelUsefulness:
      "Nalkheda is best included in multi-day private cab plans where travelers want a complete spiritual circuit rather than a rushed stop.",
    highlights: ["Baglamukhi Temple", "Prayer-oriented travel", "Focused darshan experience"],
    storyIntro:
      "Nalkheda is the kind of place people usually choose with intention. Travelers do not come here only because it is on the way; they come because Maa Baglamukhi has a strong devotional association with sankalp, protection, and prayer-focused visits, which gives the destination a more purposeful energy.",
    articleSections: [
      {
        title: "Why Nalkheda feels different from a sightseeing stop",
        body:
          "The journey to Nalkheda is usually more inward and prayer-led than visual. Families and devotees often visit with a clear spiritual reason, which makes the atmosphere feel more focused and less casual than broader tourist circuits.",
      },
      {
        title: "The temple and its devotional reputation",
        body:
          "The Baglamukhi temple at Nalkheda is widely regarded as an important Shakti centre, and much of the destination's identity comes from that devotional reputation. The temple's riverbank setting and siddha-peeth association make it especially meaningful for visitors seeking a spiritually serious route.",
      },
      {
        title: "How to make the route feel meaningful",
        body:
          "Nalkheda works best when it is not squeezed into a hurried day. Pairing it with Ujjain and Omkareshwar over two or three days gives the journey enough calm for darshan, meals, rest, and the mental space that prayer-led travel often needs.",
      },
    ],
    interestingFacts: [
      "Nalkheda's Baglamukhi temple stands near the Lakhundar River.",
      "The site is popularly regarded as a siddha peeth by devotees.",
      "It is often added to a Shiva-plus-Shakti pilgrimage circuit with Ujjain and Omkareshwar.",
    ],
    bestTimeToVisit:
      "October to March is generally comfortable for private travel. Navratri and prayer-led special dates can bring stronger devotional rush.",
    howToReach: {
      byAir:
        "Most travelers access Nalkheda through Indore Airport and continue by private route planning.",
      byTrain:
        "Rail travelers usually reach a major city first and then continue to Nalkheda by road.",
      byRoad:
        "Nalkheda is best approached as part of a multi-day Ujjain and Omkareshwar circuit rather than a rushed same-day stop.",
    },
    travelTimes: [
      { from: "Ujjain", duration: "3 to 3.5 hours" },
      { from: "Indore", duration: "4 to 4.5 hours" },
      { from: "Omkareshwar", duration: "4.5 to 5 hours" },
    ],
    nearbyAttractions: ["Maa Baglamukhi Temple", "Prayer-focused temple surroundings", "Regional Shakti route connections"],
    darshanTips: [
      "This destination works best for pilgrims with a specific sankalp or prayer purpose.",
      "Avoid overpacking the day so the darshan stays calm and meaningful.",
      "It combines most naturally with Ujjain and Omkareshwar in a 2-night or 3-night route.",
    ],
    infoBlocks: [
      {
        label: "Temple Focus",
        title: "Nalkheda Baglamukhi",
        body:
          "This destination adds spiritual intensity and is particularly meaningful for devotees with prayer-specific intentions.",
      },
    ],
  },
  {
    slug: "maheshwar",
    name: "Maheshwar",
    category: "Heritage & Riverside Experiences",
    accent: "Narmade Har",
    image: "/images/destinations/maheshwar.jpg",
    overview:
      "Maheshwar introduces riverside grace, heritage quietness, and cultural refinement into the overall travel experience.",
    significance:
      "It carries both spiritual calm and historical richness, making it valuable for travelers who want devotion without limiting the trip to temple movement alone.",
    shortHistory:
      "Associated with Ahilyabai Holkar’s legacy, Maheshwar stands out for its fort, ghats, weaving tradition, and regal riverside identity.",
    whatToExpect:
      "Travelers can expect scenic pauses, temple ambience, fort views, and a slower rhythm that balances intense pilgrimage segments.",
    whyInPackageEcosystem:
      "Maheshwar makes the brand feel more like a premium spiritual travel company rather than a city taxi operator, because it broadens the emotional tone of the trip.",
    travelUsefulness:
      "It works especially well in mixed pilgrimage-and-heritage packages and for families who prefer a more relaxed multi-day itinerary.",
    highlights: ["Ahilya Fort", "Narmada Ghat", "Temple ambience", "Riverside heritage"],
    storyIntro:
      "Maheshwar attracts travelers for a quieter reason: it is graceful. The riverfront, the fort complex, the temple skyline, and the memory of Ahilyabai Holkar give the town a refined presence that feels devotional, historic, and deeply atmospheric all at once.",
    articleSections: [
      {
        title: "Why Maheshwar feels elegant rather than hurried",
        body:
          "The first impression here is usually the Narmada. Stone ghats, fort walls, temple silhouettes, and evening light combine to create a mood that makes people slow down naturally. That is why Maheshwar often becomes the softest, most reflective part of a longer route.",
      },
      {
        title: "The Ahilyabai Holkar legacy",
        body:
          "Maheshwar is inseparable from Ahilyabai Holkar, who made it a royal seat and is remembered for governance, temple patronage, and public works. Her legacy still shapes how the town is experienced today, from the fort area to the sacred and civic character of the riverfront.",
      },
      {
        title: "More than a fort town",
        body:
          "Maheshwar is also known for its weaving tradition and Maheshwari textiles, which gives the town a cultural identity beyond monuments alone. That mix of devotion, craft, and scenery is exactly what makes it so effective in premium multi-day itineraries.",
      },
    ],
    interestingFacts: [
      "Maheshwar was closely associated with Ahilyabai Holkar's rule.",
      "The town is well known for Maheshwari handloom weaving.",
      "Its riverfront ghats are a major part of the destination's charm.",
    ],
    bestTimeToVisit:
      "October to March is ideal for riverside comfort, fort visits, and slower heritage exploration.",
    howToReach: {
      byAir:
        "Indore Airport is the most practical air gateway before continuing to Maheshwar by road.",
      byTrain:
        "Most travelers use Indore rail access and then complete the final road journey.",
      byRoad:
        "Maheshwar fits well into Ujjain, Omkareshwar, and Mandu heritage-spiritual routes.",
    },
    travelTimes: [
      { from: "Indore", duration: "2 to 2.5 hours" },
      { from: "Omkareshwar", duration: "2 hours" },
      { from: "Mandu", duration: "2.5 to 3 hours" },
    ],
    nearbyAttractions: ["Ahilya Fort", "Narmada Ghat", "Maheshwar temples", "Handloom and heritage market"],
    darshanTips: [
      "Sunset timing makes the riverside experience more memorable.",
      "A relaxed stop here balances intense temple-focused routes nicely.",
      "Combine with Omkareshwar for a stronger Shiva-plus-riverside circuit.",
    ],
    infoBlocks: [
      {
        label: "Experience",
        title: "Maheshwar heritage and spiritual value",
        body:
          "Maheshwar is where quiet devotion, architecture, and the Narmada landscape come together in a memorable travel segment.",
      },
    ],
  },
  {
    slug: "mandu",
    name: "Mandu",
    category: "Heritage & Riverside Experiences",
    accent: "Heritage in the Hills",
    image: "/images/destinations/mandu.jpg",
    overview:
      "Mandu gives the brand a strong heritage extension and elevates the journey into a fuller regional travel experience.",
    significance:
      "Its significance is cultural and historical rather than temple-centric, which makes it valuable for travelers who want a broader sense of place.",
    shortHistory:
      "Mandu is known for its layered architectural history, stone structures, scenic plateaus, and legends of royal romance and power.",
    whatToExpect:
      "Visitors can expect wide views, dramatic built heritage, and a relaxed sightseeing mood that contrasts nicely with temple-heavy segments.",
    whyInPackageEcosystem:
      "Including Mandu helps distinguish Adiyogi Cabs & Tours from ordinary darshan-only operators by offering premium heritage extensions.",
    travelUsefulness:
      "Mandu fits best into extended tours, family trips, and custom heritage-spiritual packages.",
    highlights: ["Jahaz Mahal", "Rani Roopmati Pavilion", "Scenic fort views", "Regional heritage depth"],
    storyIntro:
      "Mandu is where the route suddenly becomes cinematic. Fort walls, palace ruins, pavilions, lakes, and long views give it a completely different emotional texture from temple towns, which is why families often remember it as the most atmospheric part of the trip.",
    articleSections: [
      {
        title: "Why Mandu feels dramatic at first sight",
        body:
          "Mandu sits across a plateau landscape that gives its palaces and pavilions unusual visual impact. It does not feel crowded into the present; it feels spread across stone, wind, and distance, which is part of what makes it memorable.",
      },
      {
        title: "A place layered with political and romantic memory",
        body:
          "Mandu's history includes fortification, dynastic power, Indo-Islamic architecture, and the famous cultural memory of Baz Bahadur and Rani Roopmati. Visitors are often drawn not only by monuments like Jahaz Mahal but by the legends that help the place stay alive in imagination.",
      },
      {
        title: "Why it belongs in a premium route",
        body:
          "If a journey is only temple-to-temple, it can feel rushed. Mandu changes that rhythm by adding wonder, open landscapes, and slower exploration, which is why it works best in custom heritage-spiritual packages rather than same-day planning.",
      },
    ],
    interestingFacts: [
      "Mandu is ringed by an extensive fortified wall with multiple gateways.",
      "Jahaz Mahal is one of its most recognized palace structures.",
      "The legends of Baz Bahadur and Rani Roopmati remain central to its appeal.",
    ],
    bestTimeToVisit:
      "October to February is best for open-air heritage exploration and long scenic stops.",
    howToReach: {
      byAir:
        "Indore Airport is the easiest access point before entering Mandu by road.",
      byTrain:
        "Rail travelers typically arrive in Indore first and continue onward with private transport.",
      byRoad:
        "Mandu is best included as part of Maheshwar and Ujjain heritage-spiritual combinations.",
    },
    travelTimes: [
      { from: "Indore", duration: "2.5 to 3 hours" },
      { from: "Maheshwar", duration: "2.5 to 3 hours" },
      { from: "Ujjain", duration: "5 to 6 hours" },
    ],
    nearbyAttractions: ["Jahaz Mahal", "Rani Roopmati Pavilion", "Baz Bahadur Palace", "Scenic hilltop views"],
    darshanTips: [
      "Keep half-day to full-day time for Mandu because the route is not temple-speed sightseeing.",
      "This destination is stronger as a heritage extension, not a rushed add-on.",
      "Good weather improves the full visual impact of the monuments and viewpoints.",
    ],
    infoBlocks: [
      {
        label: "Experience",
        title: "Mandu heritage experience",
        body:
          "Mandu adds atmosphere, architecture, and visual drama that enrich the wider itinerary beyond spiritual destinations.",
      },
    ],
  },
  {
    slug: "indore",
    name: "Indore",
    category: "Travel Gateway",
    accent: "Comfortable Transit Hub",
    image: "/images/destinations/indore.jpg",
    overview:
      "Indore is the practical gateway that makes the full route system easier for outstation travelers to access.",
    significance:
      "Its importance lies in travel logistics, pickup and drop efficiency, and its role as a dependable hub for multi-city movement.",
    shortHistory:
      "Indore has developed into the region’s strongest modern urban access point, making it highly useful for pilgrimage and heritage routing.",
    whatToExpect:
      "Travelers can expect airport pickups, hotel coordination, transfer support, and seamless movement into the main darshan circuit.",
    whyInPackageEcosystem:
      "Indore strengthens the service brand because many pilgrims first need reliable arrival support before the spiritual journey even begins.",
    travelUsefulness:
      "It is ideal for airport, railway, hotel, pickup, drop, and travel-hub support across every major package combination.",
    highlights: ["Airport pickups", "Railway transfers", "Hotel support", "Gateway routing"],
    storyIntro:
      "Indore usually enters the story as a practical city, but that is exactly why it matters. For many outstation families, the emotional quality of the whole trip depends on how smoothly arrival, hotel check-in, luggage handling, and the first road transfer are managed here.",
    articleSections: [
      {
        title: "Why Indore matters even when it is not the main destination",
        body:
          "Most long-distance travelers meet the route through Indore first. If the pickup is smooth, the hotel is well placed, and onward movement is planned properly, the rest of the spiritual circuit immediately feels calmer.",
      },
      {
        title: "The city's historical depth",
        body:
          "Indore grew under the Holkars and still carries that memory in places like Rajwada and Lal Bagh Palace. Even though it now functions as a modern urban hub, its history links it directly to the wider Malwa region that also shaped Maheshwar and surrounding routes.",
      },
      {
        title: "A better gateway than a rushed transit point",
        body:
          "When used well, Indore is not just a transfer stop. It becomes the base that allows airport arrival, restful overnight stays, and cleaner departure timing toward Ujjain, Omkareshwar, Maheshwar, or Mandu, which is especially valuable for families and senior travelers.",
      },
    ],
    interestingFacts: [
      "Indore's historic Rajwada is tied to the Holkar dynasty.",
      "Lal Bagh Palace reflects the city's royal and architectural legacy.",
      "For many pilgrims, Indore is the main air and rail gateway into the wider circuit.",
    ],
    bestTimeToVisit:
      "Indore is a year-round gateway, but October to March is easiest for full route planning across multiple destinations.",
    howToReach: {
      byAir:
        "Indore Airport is the main entry point for many outstation travelers heading toward Ujjain, Omkareshwar, and nearby circuits.",
      byTrain:
        "Indore Junction is a practical railway arrival point for pilgrims and family groups.",
      byRoad:
        "The city works as the strongest pickup and drop hub for premium cab-based spiritual packages.",
    },
    travelTimes: [
      { from: "Ujjain", duration: "1.5 to 2 hours" },
      { from: "Omkareshwar", duration: "2.5 to 3 hours" },
      { from: "Maheshwar", duration: "2 to 2.5 hours" },
    ],
    nearbyAttractions: ["Airport zone hotels", "Railway transfers", "Pickup-friendly hotel clusters", "Intercity route departures"],
    darshanTips: [
      "Use Indore as the arrival and departure base for multi-city yatra planning.",
      "Airport and hotel pickup coordination reduces friction for outstation pilgrims.",
      "Pairing Indore with same-day Ujjain darshan is one of the most practical route formats.",
    ],
    infoBlocks: [
      {
        label: "Travel Utility",
        title: "Indore as a travel hub",
        body:
          "Indore helps the brand serve outstation guests with confidence by providing a reliable entry and exit point for the entire circuit.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string) {
  return findByFlexibleSlug(destinations, slug);
}

export function getDestinationByName(name: string) {
  const normalized = name.toLowerCase();

  return destinations.find((item) => item.name.toLowerCase() === normalized);
}

export function getRelatedPackagesForDestination(destinationName: string, limit = 3) {
  const normalized = destinationName.toLowerCase();

  return packages
    .filter((pkg) =>
      pkg.destinations.some((destination) =>
        destination.toLowerCase().includes(normalized),
      ),
    )
    .slice(0, limit);
}

