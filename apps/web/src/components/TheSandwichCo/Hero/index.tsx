import { Box, Button } from "@mui/material";
import { Flex, Text } from "@mantine/core";
import heroImg from "../../../assets/TheSandwichCo/hero-sandwich.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "90vh",
        minHeight: "600px",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={heroImg}
        alt="Artisan sandwich"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Text>Transform your physical space into a Digital Powerhouse.</Text>
        <Text>
          One Tap. Multiple Actions. Zero Hassle, and Infinite Possibilities.
        </Text>
        <Flex>
          <Button>Start</Button>
          <Button>Learn</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
