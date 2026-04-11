import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const socialLinks = [
  { icon: <Facebook />, url: "#" },
  { icon: <Twitter />, url: "#" },
  { icon: <Instagram />, url: "#" },
  { icon: <LinkedIn />, url: "#" },
  { icon: <YouTube />, url: "#" },
];

const Footer: React.FC = () => {
  const theme = useTheme();
  // const currentYear = new Date().getFullYear();

  return (
    <Box
      component={motion.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      sx={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        color: "#fff",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                Knectaa
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                We transform everyday customer interactions into digital growth
                opportunities.
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                  >
                    <IconButton
                      component={Link}
                      href={link.url}
                      target="_blank"
                      sx={{
                        color: "#fff",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LocationOn sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="body2">
                  Shop no. 130/131, Center Court TRP Mall, The Retail Park
                  Ahmedabad - 380058.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Phone sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="body2">+91 8878811666</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="body2">
                  getinfo.knectaa@gmail.com
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Newsletter */}
          <Grid size={{ xs: 12, md: 3 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.primary.main,
                }}
              >
                Newsletter
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Subscribe to our newsletter for the latest updates.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Your email address"
                  size="small"
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <IconButton
                  sx={{
                    ml: 1,
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          {/* © {currentYear} Knectaa. All rights reserved. */}
          Designed and Developed by Manohar
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
