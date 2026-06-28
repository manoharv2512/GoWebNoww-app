import { useEffect, useState } from "react";
import { Box, Container, Text, Rating, Flex, ScrollArea } from "@mantine/core";

import { type ReviewsContent } from "../../../components/common/BusinessPage/types";
import googleReviewIcon from "../../../assets/common/googleReview.png";

const ScrollRevealSection: React.FC<ReviewsContent> = ({
  image,
  reviews,
  id = "reviews-section",
  title = "Customer Reviews",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      setVisible(rect.top < window.innerHeight && rect.bottom > 0);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [id]);

  return (
    <Box
      id={id}
      style={{
        position: "relative",
        height: "80vh", // 🔥 more space for scroll effect
      }}
    >
      {/* 🔥 Fixed Background Image */}
      {visible && (
        <img
          src={image}
          alt="background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      )}

      {/* 🔥 Dark Overlay */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />
      <Flex align="center" justify={"center"} gap="md">
        <img src={googleReviewIcon} alt="Google Reviews" width={24} />
        <Text fw={700} c="white" size="lg" fz={22} pl={4}>
          {title}
        </Text>
      </Flex>

      {/* 🔥 Reviews Content */}
      <ScrollArea h="70vh">
        <Box
          style={{
            position: "relative",
            zIndex: 20,
            paddingTop: "40px",
          }}
        >
          <Container size="md">
            <Flex direction="column" gap="md">
              {reviews.map((review, index) => (
                <Box
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    padding: "16px",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Rating value={review.rating} readOnly color="yellow" />

                  <Text c="white" fw={600} mt={5}>
                    {review.name}
                  </Text>

                  <Text c="white" size="sm" mt={4}>
                    {review.text}
                  </Text>

                  <Text c="gray.4" size="xs" mt={6}>
                    {review.date}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Container>
        </Box>
      </ScrollArea>
    </Box>
  );
};

export default ScrollRevealSection;
