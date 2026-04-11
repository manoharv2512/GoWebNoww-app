import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = ["About", "Menu", "Services", "Reviews", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255,255,255,0.8)",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            The Sandwich Co.
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {links.map((l) => (
              <Button
                key={l}
                href={`#${l.toLowerCase()}`}
                sx={{ color: "#555" }}
              >
                {l}
              </Button>
            ))}
          </Box>

          {/* Order Button */}
          <Button
            variant="contained"
            href="#contact"
            sx={{
              ml: 2,
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            Order Now
          </Button>

          {/* Mobile Menu Button */}
          <IconButton onClick={toggleDrawer} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>

          <List>
            {links.map((l) => (
              <ListItem
                // button
                key={l}
                component="a"
                href={`#${l.toLowerCase()}`}
                onClick={toggleDrawer}
              >
                <ListItemText primary={l} />
              </ListItem>
            ))}
          </List>

          <Button
            fullWidth
            variant="contained"
            href="#contact"
            onClick={toggleDrawer}
          >
            Order Now
          </Button>
        </Box>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
