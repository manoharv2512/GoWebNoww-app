import { motion } from "framer-motion";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import shopImg from "../../../assets/TheSandwichCo/OurStoryImg.png";
import trade from "../../../assets/TheSandwichCo/BunzaaTrade.png";
const stats = [
  { num: "20K+", label: "Sandwiches Served" },
  { num: "13K+", label: "View on Google" },
  { num: "200+", label: "5 Stars on Google" },
];

const About = () => {
  return (
    <Box id="about" sx={{ px: 2, py: 6, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Content Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={trade} width="100%" />
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
                        bgcolor: "white",
                        textAlign: "center",
                        py: 2,
                        borderRadius: 3,
                        border: "1px solid black",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="#2b8109"
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
