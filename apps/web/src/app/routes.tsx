import HomePage from "../Pages/HomePage";
import TheSandwichCo from "../Pages/TheSandwichCo";

export const navItems = [{ label: "Home", path: "/" }];

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/bunzaa", element: <TheSandwichCo /> },
];
