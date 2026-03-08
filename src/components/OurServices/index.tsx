import React from "react";
import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import servicesGirl from "../../assets/servicesGirls.jpg";

const services = [
  "Website Development",
  "Digital Marketing",
  "Advertising & Promotions",
  "E-commerce Setup",
  "Branding & Social Media Growth",
];

const OurServices = () => {
  const theme = useTheme();

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for the list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
      },
    },
  };

  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, md: "80px" },
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        margin: { xs: 2, md: 0 },
      }}
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          height: { xs: "auto", md: "70vh" },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "300px", md: "100%" },
          }}
          component={motion.div}
          variants={imageVariants}
        >
          <Box
            component="img"
            src={servicesGirl}
            alt="services-girls-img"
            sx={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: 4,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.div variants={headingVariants}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                marginBottom: 4,
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              What We Do
            </Typography>

            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{
                color: theme.palette.text.secondary,
                marginBottom: 4,
                fontWeight: 400,
              }}
            >
              We Transform everyday customer interactions into digital growth opportunities
            </Typography>
          </motion.div>

          <List
            sx={{
              width: "100%",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service}
                custom={index}
                variants={listItemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <ListItem
                  sx={{
                    paddingY: 2,
                    borderRadius: 2,
                    marginBottom: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <ListItemIcon>
                    <CheckCircleOutlineIcon
                      color="primary"
                      sx={{
                        fontSize: "28px",
                        marginRight: 2,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          color: theme.palette.text.primary,
                        }}
                      >
                        {service}
                      </Typography>
                    }
                  />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default OurServices;
