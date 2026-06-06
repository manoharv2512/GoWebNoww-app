import { useEffect, useState } from "react";
import { Box, Container, Text, Rating, Flex, ScrollArea } from "@mantine/core";

type Review = {
  name: string;
  text: string;
  rating: number;
  date: string;
};

type Props = {
  image: string;
  reviews: Review[];
  id?: string; // optional (for scroll detection)
};

const ScrollRevealSection: React.FC<Props> = ({
  image,
  reviews,
  id = "reviews-section",
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
            zIndex: -1,
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

      <Text fw={700} c="white" size="lg" fz={22} pl={4}>
        Trusted by Customers
      </Text>

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
