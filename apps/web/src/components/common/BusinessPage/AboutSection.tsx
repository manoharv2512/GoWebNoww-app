import { motion } from "framer-motion";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import type { AboutContent } from "./types";

const AboutSection = ({
  id = "about",
  logoSrc,
  logoAlt,
  title,
  description,
  stats = [],
  imageSrc,
  imageAlt,
  background,
}: AboutContent) => {
  return (
    <Box id={id} sx={{ px: 2, py: 2, position: "relative", background }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {logoSrc && (
                <Box
                  component="img"
                  src={logoSrc}
                  alt={logoAlt ?? ""}
                  width="100%"
                />
              )}
              {title && (
                <Typography variant="h3" fontWeight={700} mb={2}>
                  {title}
                </Typography>
              )}
              <Typography
                color="text.secondary"
                fontSize="1.1rem"
                fontWeight={600}
                lineHeight={1.7}
                mb={4}
                sx={{ whiteSpace: "pre-line" }}
              >
                {description}
              </Typography>

              {stats.length > 0 && (
                <Grid container spacing={2}>
                  {stats.map((stat) => (
                    <Grid size={{ xs: 4 }} key={stat.label}>
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
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )}
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt={imageAlt}
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

export default AboutSection;
