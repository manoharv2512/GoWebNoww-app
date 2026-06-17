import ScrollRevealSection from "../ScrollRevealSection";
import type { ReviewsContent } from "./types";

const ReviewsSection = ({ id, image, reviews, title }: ReviewsContent) => {
  return (
    <ScrollRevealSection
      id={id}
      image={image}
      reviews={reviews}
      title={title}
    />
  );
};

export default ReviewsSection;
