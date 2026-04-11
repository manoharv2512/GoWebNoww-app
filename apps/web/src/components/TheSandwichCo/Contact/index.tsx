import { motion } from "framer-motion";
import { Box, Typography, Container, Stack, Paper, Grid } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

const contactData = [
  {
    icon: <LocationOnIcon color="primary" />,
    label: "Address",
    value: "Shop no.1, Natraj Tower, Zenda Chowk, Mahal Nagpur",
  },
  {
    icon: <PhoneIcon color="primary" />,
    label: "Phone",
    value: "+91 8878811666",
  },
  {
    icon: <EmailIcon color="primary" />,
    label: "Email",
    value: "hello@thesandwichco.com",
  },
  {
    icon: <AccessTimeIcon color="primary" />,
    label: "Hours",
    value: "Mon–Fri: 7am – 8pm\nSat–Sun: 8am – 6pm",
  },
];

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 10, px: 2 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight="bold" mb={2}>
              Find Us
            </Typography>
            <Typography color="text.secondary">
              Visit us or get in touch — we'd love to hear from you.
            </Typography>
          </Box>
        </motion.div>

        {/* Content */}
        <Grid container spacing={6}>
          {/* Left Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              {contactData.map((item) => (
                <Box
                  key={item.label}
                  display="flex"
                  gap={2}
                  alignItems="flex-start"
                >
                  {/* Icon Box */}
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

                  {/* Text */}
                  <Box>
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

          {/* Right Map */}
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
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.2798569739866!2d79.10995847388!3d21.14394548381505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c70078b3e8df%3A0x5c9281e5bd87bbbe!2sSandwich%20Company%20Uniqueness!5e1!3m2!1sen!2sin!4v1774373739242!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.2798569739866!2d79.10995847388!3d21.14394548381505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c70078b3e8df%3A0x5c9281e5bd87bbbe!2sSandwich%20Company%20Uniqueness!5e1!3m2!1sen!2sin!4v1774373739242!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
