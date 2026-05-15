import "./App.css";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { appRoutes, navItems } from "./app/routes";

const App = () => {
  const location = useLocation();

  // Check if current path includes "/personal-invite"
  const hideNavbar = location.pathname.includes("/personal-invite");
  return (
    <Box>
      {!hideNavbar && <Navbar navItems={navItems} />}
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Box>
  );
};

export default App;
