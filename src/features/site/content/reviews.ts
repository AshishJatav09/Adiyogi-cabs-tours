export type ReviewStory = {
  name: string;
  city: string;
  route: string;
  title: string;
  body: string;
  rating: number;
  travelerType: string;
};

export const reviewStories: ReviewStory[] = [
  {
    name: "Kanakalakshimi A.",
    city: "Malaysia",
    route: "Ujjain + Omkareshwar family pilgrimage",
    title: "Calm support from arrival to darshan",
    body:
      "The planning felt smooth from Indore pickup to temple movement. The route stayed comfortable for our family, and the overall coordination felt dependable rather than rushed.",
    rating: 5,
    travelerType: "Family Pilgrimage",
  },
  {
    name: "Arun B.",
    city: "Delhi NCR",
    route: "Mahakal + Omkareshwar spiritual circuit",
    title: "Well-paced darshan without confusion",
    body:
      "Vehicle timing, stay support, and temple sequencing were explained clearly. It felt more like a guided yatra with local care than a simple taxi booking.",
    rating: 5,
    travelerType: "Couple & Parents",
  },
  {
    name: "Vipin L.",
    city: "Indore",
    route: "Custom Ujjain family tour",
    title: "Easy WhatsApp planning and honest guidance",
    body:
      "It was easy to change hotel and route preferences over WhatsApp. The communication stayed clear, and the whole trip felt organized for elders as well.",
    rating: 5,
    travelerType: "Custom Family Route",
  },
  {
    name: "Meena R.",
    city: "Ahmedabad",
    route: "Nalkheda + Ujjain sankalp journey",
    title: "A better fit for devotional travel",
    body:
      "We wanted a prayer-led trip with less noise and better pacing. The support around meals, stops, and destination order made the journey feel more respectful.",
    rating: 5,
    travelerType: "Devotional Yatra",
  },
  {
    name: "Sandeep T.",
    city: "Pune",
    route: "Maheshwar + Mandu heritage extension",
    title: "Premium feel beyond basic transport",
    body:
      "The route felt polished and comfortable, especially on the longer travel day. It worked well for a mixed family group that wanted darshan plus scenic heritage stops.",
    rating: 5,
    travelerType: "Heritage + Spiritual Tour",
  },
  {
    name: "Ritu S.",
    city: "Bhopal",
    route: "Mahakal darshan with hotel assistance",
    title: "Good for elders and first-time pilgrims",
    body:
      "The practical guidance mattered a lot for our parents. We got clear help on timing, stay readiness, and how to keep the temple day manageable.",
    rating: 5,
    travelerType: "Senior-Friendly Planning",
  },
];
