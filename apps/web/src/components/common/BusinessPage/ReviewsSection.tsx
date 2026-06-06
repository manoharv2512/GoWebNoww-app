import { Text } from "@mantine/core";
import ScrollRevealSection from "../ScrollRevealSection";
import type { ReviewsContent } from "./types";

const ReviewsSection = ({ id, image, reviews }: ReviewsContent) => {
  return <ScrollRevealSection id={id} image={image} reviews={reviews} />;
};

export default ReviewsSection;
