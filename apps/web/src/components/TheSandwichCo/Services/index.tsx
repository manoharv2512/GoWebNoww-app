import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const services = [
  {
    icon: <RestaurantIcon />,
    title: "Dine In",
    desc: "Enjoy your sandwich in our cozy, warm space with free Wi-Fi.",
  },
  {
    icon: <LocalShippingIcon />,
    title: "Delivery",
    desc: "Fast delivery within 5 miles via DoorDash, UberEats & in-house.",
  },
  {
    icon: <GroupsIcon />,
    title: "Catering",
    desc: "Corporate events, parties & weddings — custom platters available.",
  },
  {
    icon: <EventAvailableIcon />,
    title: "Pre-Order",
    desc: "Skip the queue! Order online and pick up at your chosen time.",
  },
];

const Services = () => {
  return (
    <Box id="services" sx={{ py: 10, px: 2 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight="bold" mb={2}>
              Our Services
            </Typography>
            <Typography color="text.secondary">
              More than just a sandwich shop.
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((s, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={s.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: 4,
                    boxShadow: 3,
                    transition: "all 0.3s ease",
                    cursor: "pointer",

                    // 🔥 Hover Effect (like your Tailwind)
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "#fff",
                      transform: "translateY(-5px)",
                    },

                    // change inner text color on hover
                    "&:hover .service-text": {
                      color: "#fff",
                    },
                  }}
                >
                  <CardContent>
                    {/* Icon */}
                    <Box
                      sx={{
                        fontSize: 40,
                        mb: 2,
                        color: "primary.main",
                      }}
                      className="service-text"
                    >
                      {s.icon}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      mb={1}
                      className="service-text"
                    >
                      {s.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="service-text"
                    >
                      {s.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
