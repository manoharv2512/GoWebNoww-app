import "./App.css";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { appRoutes, navItems } from "./app/routes";
import { Text } from "@mantine/core";

const App = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname.includes("/vc") || location.pathname === "/";

  return (
    <Box textAlign="center">
      {!hideNavbar && <Navbar navItems={navItems} />}

      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>

      {location.pathname.includes("/vc") && (
        <Text c="#cfcccc">Powered by Knectaa</Text>
      )}
    </Box>
  );
};

export default App;
