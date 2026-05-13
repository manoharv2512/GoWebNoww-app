import HomePage from "../Pages/HomePage";
import HrishikeshGuptaD from "../Pages/PersonalCard/Dark/HrishikeshGuptaD";
import HrishikeshGupta from "../Pages/PersonalCard/Light/HrishikeshGupta";
import ManoharVarma from "../Pages/PersonalCard/Light/ManoharVarma";
import RushikeshDurugkar from "../Pages/PersonalCard/Light/RushikeshDurugkar";
import Bunzaa from "../Pages/Cafe/Bunzaa";
import Rukhmani from "../Pages/Fashion/Rukhmani";
import ManoharVarma1 from "../Pages/PersonalCard/Light/ManoharVarma1";
import KanchanMedicos from "../Pages/Pharmacy/KanchanMedicos";
import DevanshSports from "../Pages/SportsShop/DevanshSports";
import Frutoss from "../Pages/Cafe/Frutoss";

export const navItems = [{ label: "Home", path: "/" }];

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/bunzaa", element: <Bunzaa /> },
  { path: "/A0001", element: <RushikeshDurugkar /> },
  { path: "/A0002", element: <HrishikeshGuptaD /> },
  { path: "/A0003", element: <HrishikeshGupta /> },
  { path: "/personal-invite/A0000", element: <ManoharVarma /> },
  { path: "/personal-invite/A0004", element: <ManoharVarma1 /> },
  { path: "/rukhmani", element: <Rukhmani /> },
  { path: "/kanchan-medicos", element: <KanchanMedicos /> },
  { path: "/devansh-sports", element: <DevanshSports /> },
  { path: "/frutoss", element: <Frutoss /> },
];
