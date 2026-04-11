import ScrollRevealSection from "../../common/ScrollRevealSection";
import med5C from "../../../assets/TheSandwichCo/OurFlavors/105C.jpeg";
const reviews = [
  {
    name: "Lavanya Admane",
    text: "The sandwiches were super fresh and tasty! Loved the quick service and clean packaging. Definitely ordering again.great ho sandwich company team!",
    rating: 5,
    date: "3 months ago",
  },
  {
    name: "Shashank Vishwakarma",
    text: "Very unique taste and love to have it more and more got best thing to try in nagpur on this very first time i and my friend love it so much nice service and polite work place",
    rating: 5,
    date: "3 month ago",
  },
  {
    name: "swati Talreja",
    text: "We tried bunza and London cheese toast both very good fresh and good quality food ...pocket friendly place loved the ambience and best food",
    rating: 5,
    date: "2 months ago",
  },
  {
    name: "Rushikesh Thakur",
    text: "It's awesome test, guys I truly appreciate and recommend this shop best sandwiches test.",
    rating: 5,
    date: "3 week ago",
  },
  {
    name: "Ashu Mittal",
    text: "Very good taste, many varieties of sandwiches, pizza, momos and many more. Would absolutely recommend it.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Ram Dhamdar",
    text: "Great place to have fun with your friends and family in budget",
    rating: 5,
    date: "2 weeks ago",
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
