import { motion } from "framer-motion";
import { Box, Typography, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Button, Flex } from "@mantine/core";
import heroVideo from "../../../assets/TheSandwichCo/HeroBgVideo.mp4";
import { useEffect, useRef } from "react";
import logo from "../../../assets/common/Instagram_logo.png";
import googleReviewIcon from "../../../assets/common/googleReview.png";
import menuIcon from "../../../assets/common/Menu.png";
import SwiggyLogo from "../../../assets/common/SwiggyLogo.png";
import ZomatoLogo from "../../../assets/common/ZomatoLogo.png";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

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
        ref={videoRef}
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
          objectFit: "none",
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
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            The Bunzaa! Sandwich Company
          </Typography>
          {/* Top Text */}

          <Box
            sx={{
              padding: "4px",
              backgroundColor: "green",
              width: "100px",
              borderRadius: "4px",
              marginBottom: 4,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontSize: "8px",
              }}
            >
              {/* Est. 2025 · Artisan Sandwiches */}
              100% Veg
            </Typography>
          </Box>

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
            {/* Handcrafted sandwiches made with fresh and high quality ingredients.
            Zero Comptomised to satisfy every creving. */}
            Handcrafted sandwiches made with fresh, quality ingredients —
            uncompromised to satisfy every craving
          </Typography>

          {/* Stars */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
            mb={4}
          >
            <img src={googleReviewIcon} width={24} />
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} sx={{ color: "#fab005" }} />
            ))}
            <Typography sx={{ color: "rgba(255,255,255,0.8)", ml: 1 }}>
              4.9 · 200+ Reviews
            </Typography>
          </Stack>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            {/* <Button
              variant="contained"
              leftSection={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fefefe"
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-80h-40v-80h40v-120h-40v-80h40v-120h-40v-80h40v-80q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640H240v80h40v80h-40v120h40v80h-40v120h40v80h-40v80Zm0 0v-640 640Zm140-120h60v-160q26-7 43-28.5t17-48.5v-163h-40v151h-30v-151h-40v151h-30v-151h-40v163q0 27 17 48.5t43 28.5v160Zm220 0h60v-400q-50 0-85 35t-35 85v120h60v160Z" />
                </svg>
              }
              onClick={() => {
                window.location.href =
                  "https://digitalmenu.applova.io/webstore/BIZ_14751b0sdfb/menu?session=1774241149519#CAT_640b67fke09";
              }}
              style={{
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                backgroundColor: "#38a650",
                fontFamily: "cursive",
              }}
            >
              View Menu
            </Button> */}
            <Button
              variant="contained"
              leftSection={<img src={menuIcon} width={24} />}
              onClick={() => {
                window.location.href =
                  "https://digitalmenu.applova.io/webstore/BIZ_14751b0sdfb/menu?session=1774241149519#CAT_640b67fke09";
              }}
              style={{
                alignItems: "flex-start",
                px: 4,
                py: 1.5,
                // color: "#fff",
                borderColor: "#fff",
                fontFamily: "cursive",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#fff",
                },
              }}
            >
              Menu
            </Button>

            <Button
              variant="contained"
              leftSection={<img src={logo} width={24} />}
              onClick={() => {
                window.location.href =
                  "https://www.instagram.com/sandwich_company_uniquness_?igsh=MXYxZTViOWJ2enZ3Zg%3D%3D";
              }}
              style={{
                px: 4,
                py: 1.5,
                // color: "#fff",
                borderColor: "#fff",
                fontFamily: "cursive",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#fff",
                },
              }}
            >
              Instagram
            </Button>

            <Button
              variant="contained"
              leftSection={<img src={googleReviewIcon} width={24} />}
              onClick={() => {
                window.location.href =
                  "https://www.google.com/search?sca_esv=37e421cff93e3de4&sxsrf=ANbL-n7JyIeMqjZWdJ-x3E3n6ZrBirTn9g:1774269817224&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOR9-Ht-Xau0yzj6nkzhzwMsERgNIW3uUtHKMe0ZB3pEnsoJg0GxhSp6FPIKN5O6ENmZ4I84hvZRuEwQ7U6VNEziIRnv6PV5UFQjyoJoAwSvxnOJFSg%3D%3D&q=Sandwich+Company+Uniqueness+Reviews&sa=X&ved=2ahUKEwiZz8ORhraTAxVZ-DgGHVZUGMEQ0bkNegQINhAF&biw=1280&bih=593&dpr=1.5";
              }}
              style={{
                px: 4,
                py: 1.5,
                // color: "#fff",
                borderColor: "#fff",
                fontFamily: "cursive",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#fff",
                },
              }}
            >
              Google Review
            </Button>

            {/* Swiggy/Zomato */}
            <Flex>
              <Button
                variant="contained"
                leftSection={<img src={SwiggyLogo} width={20} />}
                onClick={() => {
                  window.location.href =
                    "https://www.swiggy.com/menu/1158776?source=sharing";
                }}
                style={{
                  alignItems: "flex-start",
                  px: 4,
                  py: 1.5,
                  // color: "#fff",
                  borderColor: "#fff",
                  fontFamily: "cursive",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#fff",
                  },
                }}
              >
                Swiggy
              </Button>
              <Button
                variant="contained"
                leftSection={<img src={ZomatoLogo} width={24} />}
                onClick={() => {
                  window.location.href =
                    "https://zomato.onelink.me/xqzv/9958lh7j";
                }}
                style={{
                  alignItems: "flex-start",
                  px: 4,
                  py: 1.5,
                  // color: "#fff",
                  borderColor: "#fff",
                  fontFamily: "cursive",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#fff",
                  },
                }}
              >
                Zomato
              </Button>
            </Flex>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
