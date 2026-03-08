import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Button, Typography, Container } from "@mui/material";
import CustomCursor from "../../components/CustomCursor";
import developerImage from "../../assets/developer.jpg";
import OurServices from "../../components/OurServices";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/Footer";

const HomePage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#3f51b5",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence>
      <Box
        component={motion.div}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        sx={{
          height: "100vh",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
          color: "#fff",
          overflow: "hidden",
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        <CustomCursor />
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 10,
            gap: 4,
          }}
        >
          {/* Text Content */}
          <Box sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
            <Typography
              variant="h3"
              component={motion.h1}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              sx={{ fontWeight: "bold", marginBottom: 4 }}
            >
              {/* Welcome to GoWebNow */}
              Grow Your Business Online with GoWebNoww
            </Typography>
            <Typography
              variant="body2"
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              sx={{ marginBottom: 6 }}
            >
              {/* Discover amazing features with smooth transitions. */}
              {/* Take Your Business Online. Grow Without Limits. */}
              We help local businesses & enterprises build their digital
              presence, attract customers, and increase revenue.
            </Typography>
            <Box sx={{ display: "flex", gap:"10px" }}>
              <Button
                variant="contained"
                component={motion.button}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                  padding: "12px 30px",
                  fontSize: "1rem",
                  backgroundColor: "#2196f3",
                }}
              >
                Get Free Consultation
              </Button>
              <Button
                variant="contained"
                component={motion.button}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                  padding: "12px 30px",
                  fontSize: "1rem",
                  backgroundColor: "#2196f3",
                }}
              >
                View Our Services
              </Button>
            </Box>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "300px", md: "500px" },
            }}
          >
            <Box
              component="img"
              src={developerImage}
              alt="Developer"
              sx={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                objectFit: "contain",
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>
        </Container>
      </Box>
      <Box sx={{mt:"80px",}}>
      <OurServices />
      </Box>
      <Box sx={{mt:"80px",}}>
      <GetInTouch />
      </Box>
      <Box sx={{mt:"80px",}}>
      <Footer />
      </Box>
    </AnimatePresence>
  );
};

export default HomePage;
