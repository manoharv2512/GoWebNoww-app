import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Typography,
  Box,
  Container,
} from "@mui/material";
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
  return (
    <Box sx={{ background: "#f9fafb" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // 🔥 responsive
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* LEFT CONTENT */}
          <Box flex={1}>
            <Box flex={1} justifyItems="center">
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ fontSize: { xs: "36px", md: "36px" } }}
                gutterBottom
              >
                Our Services
              </Typography>

              <Typography color="text.secondary" mb={3}>
                We transform everyday customer interactions into powerful
                digital growth opportunities.
              </Typography>
            </Box>

            {/* Services List */}
            <List>
              {services.map((service, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={service} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* RIGHT IMAGE */}
          <Box flex={1}>
            <Box
              component="img"
              src={servicesGirl}
              alt="services"
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;
