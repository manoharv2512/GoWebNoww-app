import { Box, Button, Stack } from "@mui/material";
import { Text } from "@mantine/core";
import heroImg from "../../../assets/Knectaa/KnectaaHeroBg.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "80vh", sm: "85vh", md: "90vh" },
        minHeight: { xs: "500px", md: "600px" },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={heroImg}
        alt="Hero bg"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* Background Video */}
      {/* <Box
        component="video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      /> */}

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(35, 35, 35, 0.6), rgba(36, 36, 36, 0.6))",
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
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Stack gap={2} alignItems="center">
          {/* Heading */}
          <Box width="80%">
            <Text
              style={{
                fontSize: "clamp(27px, 4vw, 40px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.3,
              }}
            >
              Transform your physical space into a Digital Powerhouse.
            </Text>
          </Box>

          {/* Subtext */}
          <Text
            style={{
              fontStyle: "italic",
              fontSize: "clamp(20px, 2.5vw, 18px)",
              color: "#ddd",
              maxWidth: "700px",
            }}
          >
            One Tap. Multiple Actions. Zero Hassle, and Infinite Possibilities.
          </Text>

          {/* Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
            <Button
              variant="contained"
              size="large"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Start
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                width: { xs: "100%", sm: "auto" },
                color: "#fff",
                borderColor: "#fff",
              }}
            >
              Learn
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
