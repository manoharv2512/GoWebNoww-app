import { motion } from "framer-motion";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import type { ContactContent } from "./types";

const ContactSection = ({
  id = "contact",
  title,
  description,
  items,
  mapEmbedUrl,
  mapTitle = "Location",
  background = "white",
}: ContactContent) => {
  return (
    <Box id={id} sx={{ py: 4, px: 2, background }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight="bold" mb={2}>
              {title}
            </Typography>
            {description && (
              <Typography color="text.secondary">{description}</Typography>
            )}
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: mapEmbedUrl ? 6 : 12 }}>
            <Stack spacing={4}>
              {items.map((item) => (
                <Box
                  key={item.label}
                  display="flex"
                  gap={2}
                  alignItems="flex-start"
                  component={item.href ? "a" : "div"}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: item.href ? "pointer" : "default",
                    "&:hover": {
                      transform: item.href ? "translateY(-2px)" : "none",
                    },
                  }}
                >
                  {item.icon && (
                    <Paper
                      elevation={0}
                      sx={{
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 3,
                        backgroundColor: "rgba(25,118,210,0.1)",
                      }}
                    >
                      {item.icon}
                    </Paper>
                  )}

                  <Box textAlign={"left"}>
                    <Typography fontWeight="600">{item.label}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ whiteSpace: "pre-line" }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {mapEmbedUrl && (
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  height: "350px",
                  boxShadow: 3,
                }}
              >
                <iframe
                  title={mapTitle}
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
