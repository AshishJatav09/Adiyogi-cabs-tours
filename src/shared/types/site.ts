export type PackageCategory =
  | "Pilgrimage"
  | "Pilgrimage + Heritage"
  | "Heritage"
  | "Custom";

export type DestinationGroup =
  | "Pilgrimage Destinations"
  | "Heritage & Riverside Experiences"
  | "Travel Gateway";

export type PackageBadge =
  | "Popular"
  | "Family Friendly"
  | "Senior Friendly"
  | "Hotel Available"
  | "Food Add-on"
  | "Heritage Tour"
  | "Pilgrimage Special"
  | "Custom";

export type TravelPackage = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  category: PackageCategory;
  shortDescription: string;
  destinations: string[];
  inclusions: string[];
  exclusions: string[];
  addOns: string[];
  priceLabel: string;
  featured: boolean;
  whatsappMessage: string;
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
  recommendedFor: string[];
  badges: PackageBadge[];
  accent: string;
  pickupSupport: string;
  dropSupport: string;
  travelNotes: string[];
  packageFaqs: FaqItem[];
  highlightsCovered: string[];
  pricingTiers: PackagePricingTier[];
};

export type PackagePricingTier = {
  label: string;
  price: string;
  bestFor: string;
  features: string[];
};

export type DestinationInfoBlock = {
  label: string;
  title: string;
  body: string;
};

export type DestinationArticleSection = {
  title: string;
  body: string;
};

export type Destination = {
  slug: string;
  name: string;
  category: DestinationGroup;
  accent: string;
  image?: string;
  overview: string;
  significance: string;
  shortHistory: string;
  whatToExpect: string;
  whyInPackageEcosystem: string;
  travelUsefulness: string;
  highlights: string[];
  storyIntro: string;
  articleSections: DestinationArticleSection[];
  interestingFacts: string[];
  infoBlocks: DestinationInfoBlock[];
  bestTimeToVisit: string;
  howToReach: {
    byAir: string;
    byTrain: string;
    byRoad: string;
  };
  travelTimes: {
    from: string;
    duration: string;
  }[];
  nearbyAttractions: string[];
  darshanTips: string[];
};

export type Testimonial = {
  name: string;
  city: string;
  quote: string;
  trip: string;
  rating: number;
  videoPlaceholder?: string;
  sourceLabel?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category:
    | "Cars"
    | "Darshan Moments"
    | "Customer Journeys"
    | "Hotels"
    | "Temple Views"
    | "Heritage Tours";
  description: string;
  gradient: string;
  image?: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  accent: string;
};

export type BookingStep = {
  step: string;
  title: string;
  description: string;
};

export type PujaService = {
  slug: string;
  title: string;
  accent: string;
  shortDescription: string;
  priceLabel: string;
  duration: string;
  idealFor: string[];
  inclusions: string[];
  overview: string;
};

export type GuideSection = {
  title: string;
  body: string;
};

export type GuideArticleContent = {
  intro: string;
  sections: GuideSection[];
  highlights: string[];
  ctaTitle: string;
  ctaBody: string;
};

export type InquiryFormValues = {
  inquiryType: string;
  fullName: string;
  phoneNumber: string;
  travelDate: string;
  pickupLocation: string;
  travelers: string;
  packageSelection: string;
  hotelRequired: string;
  foodRequired: string;
  preferredDestinations: string[];
  message: string;
};

export type InquiryFormErrors = Partial<Record<keyof InquiryFormValues, string>>;

export type InquiryRecord = InquiryFormValues & {
  id: string;
  createdAt: string;
  source: "website-contact-form";
};
