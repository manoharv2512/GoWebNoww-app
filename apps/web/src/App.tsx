import "./App.css";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { appRoutes, navItems } from "./app/routes";

const App = () => {
  return (
    <Box>
      <Navbar navItems={navItems} />
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Box>
  );
};

export default App;
