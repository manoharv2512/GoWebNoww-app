import ScrollRevealSection from "../../common/ScrollRevealSection";
import med5C from "../../../assets/TheSandwichCo/OurFlavors/105C.jpeg";
const reviews = [
  {
    name: "Reema juneja Sapra",
    text: "Just tried the Bunzaa and Peri Peri Paneer sandwich and I loved it! The taste, the spice level, everything was on point. Bunzaa is definitely the best. Looking forward to trying more from your menu!",
    rating: 5,
    date: "1 week ago",
  },
  {
    name: "Samiksha Pande",
    text: "Fresh, hygiene and taste as a Food Safety Auditor I recommend this Sandwich Company very delicious food you Serve. Go for it Guys.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "NIKHIL DEKATE",
    text: "This is honestly one of the best sandwiches I've had! The bread was perfectly fresh and soft, lightly toasted to give a gentle crunch. The filling was packed with fresh ingredients, layered beautifully with just the right amount of sauces.",
    rating: 5,
    date: "4 weeks ago",
  },
  {
    name: "Anshul Jain",
    text: "I tried the recommended Bunza, and it was absolutely delicious. The bread was perfectly crispy and evenly cooked, while the stuffing was rich and satisfying. I'll definitely be going back to try more of their recommendations.",
    rating: 5,
    date: "34 weeks ago",
  },
  {
    name: "Anil Kumar",
    text: "Yah ke sandwiches kaafi ache hai staff bhahut shaant sabhaav ke hai hygenic b hai taste kaafi ache hai Yaha aaiye aur taste kijiye",
    rating: 5,
    date: "38 weeks ago",
  },
  {
    name: "Lavanya Admane",
    text: "The sandwiches were super fresh and tasty! Loved the quick service and clea n packaging. Definitely ordering again.great ho sandwich company team!",
    rating: 5,
    date: "8 weeks ago",
  },
  {
    name: "Shashank Vishwakarma",
    text: "Very unique taste and love to have it more and more got best thing to try in nagpur on this very first time i and my friend love it so much nice service and polite work place",
    rating: 5,
    date: "10 weeks ago",
  },
];

const Reviews = () => {
  return (
    <>
      <ScrollRevealSection image={med5C} reviews={reviews} />
    </>
  );
};

export default Reviews;
