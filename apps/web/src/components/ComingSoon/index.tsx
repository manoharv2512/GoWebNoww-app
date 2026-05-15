import { Button, Container, Overlay, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

type ComingSoonProps = {
  brandName: string;
  description?: string;
  backgroundImage?: string;
  launchText?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
};

const ComingSoon = ({
  brandName,
  description = "We're working hard to bring something amazing for you. Stay tuned for the grand launch.",
  backgroundImage,
  launchText = "Coming Soon",
  primaryButtonText = "Notify Me",
  primaryButtonLink,
}: ComingSoonProps) => {
  return (
    <Container
      fluid
      p={0}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(135deg, #111 0%, #1f1f1f 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <Overlay color="#000" opacity={0.65} zIndex={1} blur={2} />

      {/* Content */}
      <Stack
        justify="center"
        align="center"
        gap="lg"
        style={{
          minHeight: "100vh",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            fw={700}
            tt="uppercase"
            size="sm"
            c="yellow"
            style={{
              letterSpacing: "4px",
            }}
          >
            {launchText}
          </Text>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Title
            order={1}
            c="white"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            {brandName}
          </Title>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Text c="gray.3" maw={700} size="lg" lh={1.8}>
            {description}
          </Text>
        </motion.div>

        {/* CTA Button */}
        {primaryButtonLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              radius="xl"
              variant="white"
              component="a"
              href={primaryButtonLink}
              target="_blank"
              styles={{
                root: {
                  fontWeight: 700,
                  paddingInline: 30,
                },
              }}
            >
              {primaryButtonText}
            </Button>
          </motion.div>
        )}
      </Stack>
    </Container>
  );
};

export default ComingSoon;
