import { useEffect, useRef, useState } from "react";
import { Box } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";

type MediaSwitcherProps = {
  items: string[];
};

const MediaSwitcher: React.FC<MediaSwitcherProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = items[index];
  const isVideo = current.endsWith(".mp4");

  // Clear timeout
  const clear = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Handle next
  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  // Image timing (5s)
  useEffect(() => {
    if (paused) return;

    clear();

    if (!isVideo) {
      timeoutRef.current = setTimeout(next, 5000);
    }

    return clear;
  }, [index, paused, isVideo]);

  return (
    <Box
      h={220}
      pos="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {isVideo ? (
            <video
              src={current}
              autoPlay
              muted
              playsInline
              onEnded={!paused ? next : undefined}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <img
              src={current}
              alt="flavor"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}

          <Box
            pos="absolute"
            bottom={0}
            w="100%"
            h="40%"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default MediaSwitcher;
