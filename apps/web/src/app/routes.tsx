import HomePage from "../Pages/HomePage";
import TheSandwichCo from "../Pages/TheSandwichCo";
import AdminLeads from "../Pages/AdminLeads";

export const navItems = [{ label: "Home", path: "/" }];

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/bunzaa", element: <TheSandwichCo /> },
  { path: "/admin/leads", element: <AdminLeads /> },
];
