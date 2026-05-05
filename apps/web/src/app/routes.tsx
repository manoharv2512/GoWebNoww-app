import HomePage from "../Pages/HomePage";
import HrishikeshGuptaD from "../Pages/PersonalCard/Dark/HrishikeshGuptaD";
import HrishikeshGupta from "../Pages/PersonalCard/Light/HrishikeshGupta";
import ManoharVarma from "../Pages/PersonalCard/Light/ManoharVarma";
import RushikeshDurugkar from "../Pages/PersonalCard/Light/RushikeshDurugkar";
import Bunzaa from "../Pages/Cafe/Bunzaa";
import Rukhmani from "../Pages/Fashion/Rukhmani";

export const navItems = [{ label: "Home", path: "/" }];

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/bunzaa", element: <Bunzaa /> },
  { path: "/A0001", element: <RushikeshDurugkar /> },
  { path: "/A0002", element: <HrishikeshGuptaD /> },
  { path: "/A0003", element: <HrishikeshGupta /> },
  { path: "/personal-invite/A0000", element: <ManoharVarma /> },
  { path: "/rukhmani", element: <Rukhmani /> },
];
