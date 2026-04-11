import { motion } from "framer-motion";
import { Box, Typography, Button, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import heroVideo from "../../../assets/TheSandwichCo/HeroBgVideo.mp4";

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
      <Box
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Text */}
          <Typography
            variant="subtitle2"
            sx={{
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            {/* Est. 2025 · Artisan Sandwiches */}
            100% Veg
          </Typography>

          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            The Bunzaa Sandwich Company
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
            }}
          >
            Handcrafted sandwiches made with locally sourced ingredients and
            baked-fresh-daily bread.
          </Typography>

          {/* Stars */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
            mb={4}
          >
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} sx={{ color: "#fff" }} />
            ))}
            <Typography sx={{ color: "rgba(255,255,255,0.8)", ml: 1 }}>
              4.9 · 193+ Reviews
            </Typography>
          </Stack>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              href="https://digitalmenu.applova.io/webstore/BIZ_14751b0sdfb/menu?session=1774241149519#CAT_640b67fke09"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: "bold",
              }}
            >
              View Menu
            </Button>

            <Button
              variant="outlined"
              href="https://www.instagram.com/sandwich_company_uniquness_?igsh=MXYxZTViOWJ2enZ3Zg%3D%3D"
              sx={{
                px: 4,
                py: 1.5,
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#fff",
                },
              }}
            >
              Instagram
            </Button>
            <Button
              variant="outlined"
              href="https://www.google.com/search?sca_esv=37e421cff93e3de4&sxsrf=ANbL-n7JyIeMqjZWdJ-x3E3n6ZrBirTn9g:1774269817224&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOR9-Ht-Xau0yzj6nkzhzwMsERgNIW3uUtHKMe0ZB3pEnsoJg0GxhSp6FPIKN5O6ENmZ4I84hvZRuEwQ7U6VNEziIRnv6PV5UFQjyoJoAwSvxnOJFSg%3D%3D&q=Sandwich+Company+Uniqueness+Reviews&sa=X&ved=2ahUKEwiZz8ORhraTAxVZ-DgGHVZUGMEQ0bkNegQINhAF&biw=1280&bih=593&dpr=1.5"
              sx={{
                px: 4,
                py: 1.5,
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "#fff",
                },
              }}
            >
              Google Review
            </Button>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
