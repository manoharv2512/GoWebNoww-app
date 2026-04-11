import { motion } from "framer-motion";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";

import shopImg from "../../../assets/TheSandwichCo/OurStoryImg.png";

const stats = [
  { num: "1+", label: "Years Serving" },
  { num: "10K+", label: "Sandwiches Sold" },
  { num: "4.9★", label: "Avg Rating" },
];

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, px: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Content Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h3" fontWeight="bold" mb={3}>
                Our Story
              </Typography>

              <Typography
                color="text.secondary"
                fontSize="1.1rem"
                lineHeight={1.7}
                mb={2}
              >
                Founded in 2025, The Bunzaa Sandwich Company started as a small
                corner deli with a big dream — to serve the most honest,
                flavourful sandwiches in town using ingredients you can trust.
              </Typography>

              <Typography
                color="text.secondary"
                fontSize="1.1rem"
                lineHeight={1.7}
                mb={4}
              >
                {`Know for uniqueness >>
🧀Crunchy. Juicy. Fresh 
Loaded with your love ❤️Where every sandwich is crafted to perfection.
Fresh, tasty & made to satisfy every craving.`}
              </Typography>

              {/* Stats */}
              <Grid container spacing={2}>
                {stats.map((s) => (
                  <Grid size={{ xs: 4 }} key={s.label}>
                    <Paper
                      elevation={3}
                      sx={{
                        textAlign: "center",
                        py: 2,
                        borderRadius: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="primary"
                      >
                        {s.num}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {s.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
          {/* Image Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                component="img"
                src={shopImg}
                alt="Shop Interior"
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: 4,
                  boxShadow: 3,
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
