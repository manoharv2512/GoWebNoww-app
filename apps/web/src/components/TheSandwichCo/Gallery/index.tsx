import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Container } from "@mui/material";

import sandwichesImg from "../../../assets/TheSandwichCo/sandwiches.jpeg";
import pizzaSlice from "../../../assets/TheSandwichCo/Pizza_Slice.mp4";

const items = [
  { type: "video", src: pizzaSlice },
  { type: "image", src: sandwichesImg },
  { type: "video", src: pizzaSlice },
  { type: "image", src: sandwichesImg },
  { type: "video", src: pizzaSlice },
  { type: "image", src: sandwichesImg },
];

// 🔥 reusable hook with dynamic speed
const useAutoScroll = (direction: "left" | "right", speed: number) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let frame: number;

    const scroll = () => {
      if (container) {
        if (direction === "left") {
          container.scrollLeft += speed;
          if (
            container.scrollLeft >=
            container.scrollWidth - container.clientWidth
          ) {
            container.scrollLeft = 0;
          }
        } else {
          container.scrollLeft -= speed;
          if (container.scrollLeft <= 0) {
            container.scrollLeft =
              container.scrollWidth - container.clientWidth;
          }
        }
      }

      frame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(frame);
  }, [direction, speed]);

  return ref;
};

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  // 🔥 speed control
  const baseSpeed = 0.6;
  const slowSpeed = baseSpeed * 0.5;

  const currentSpeed = isHovered ? slowSpeed : baseSpeed;

  const topRef = useAutoScroll("left", currentSpeed);
  const bottomRef = useAutoScroll("right", currentSpeed);

  const renderItems = () =>
    items.concat(items).map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        style={{
          minWidth: "320px",
          height: "240px",
          borderRadius: "16px",
          overflow: "hidden",
          flexShrink: 0,
          cursor: "pointer",
        }}
      >
        {item.type === "image" ? (
          <Box
            component="img"
            src={item.src}
            alt={`gallery-${i}`}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Box
            component="video"
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </motion.div>
    ));

  return (
    <Box id="gallery" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" mb={2}>
            Our Gallery
          </Typography>
          <Typography color="text.secondary">
            A glimpse of our delicious creations 🍔
          </Typography>
        </Box>

        {/* TOP ROW */}
        <Box
          ref={topRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{ display: "flex", gap: 2, overflow: "hidden", mb: 3 }}
        >
          {renderItems()}
        </Box>

        {/* BOTTOM ROW */}
        <Box
          ref={bottomRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{ display: "flex", gap: 2, overflow: "hidden" }}
        >
          {renderItems()}
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
