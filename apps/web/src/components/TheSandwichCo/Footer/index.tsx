import {
  Box,
  Typography,
  Container,
  Stack,
  // Link,
  IconButton,
  Grid,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/X";
import { WhatsApp } from "@mui/icons-material";
import ManoharFooter from "../../ManoharFooter";

// const links = ["About", "Menu", "Services", "Reviews", "Contact"];

const socialLinks = [
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    href: "https://instagram.com/",
  },
  {
    icon: <FacebookIcon />,
    label: "Facebook",
    href: "https://facebook.com/",
  },
  {
    icon: <WhatsApp />,
    label: "Whatsapp",
    href: "https://wa.me/918878811666?text=Hello%20I%20want%20to%20order%20from%20The%20Sandwich%20Co",
  },
  {
    icon: <TwitterIcon />,
    label: "Twitter",
    href: "https://x.com/",
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        py: 2,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} mb={6}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              The Bunzaa! Sandwich Company
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
            >
              Handcrafted artisan sandwiches since 2025. Made with love, served
              with a smile.
            </Typography>
          </Grid>

          {/* Links */}
          {/* <Grid size={{ xs: 12, md: 4 }}>
            <Typography fontWeight="600" mb={2}>
              Quick Links
            </Typography>

            <Stack spacing={1}>
              {links.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.9rem",
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid> */}

          {/* Social */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight="600" mb={2}>
              Follow Us
            </Typography>

            <Stack direction="row" spacing={2}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <ManoharFooter />

        {/* Bottom */}
        {/* <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026 The Bunzaa Sandwich Co. All rights reserved.
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Footer;
