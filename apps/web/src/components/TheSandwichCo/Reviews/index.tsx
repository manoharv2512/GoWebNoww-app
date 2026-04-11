import ScrollRevealSection from "../../common/ScrollRevealSection";
import med5C from "../../../assets/TheSandwichCo/OurFlavors/105C.jpeg";
const reviews = [
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
