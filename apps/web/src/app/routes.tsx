import HomePage from "../Pages/HomePage";
import HrishikeshGuptaD from "../Pages/PersonalCard/Dark/HrishikeshGuptaD";
import HrishikeshGupta from "../Pages/PersonalCard/Light/HrishikeshGupta";
import ManoharVarma from "../Pages/PersonalCard/Light/ManoharVarma";
import RushikeshDurugkar from "../Pages/PersonalCard/Light/RushikeshDurugkar";
import Bunzaa from "../Pages/Cafe/Bunzaa";
import Rukhmani from "../Pages/Fashion/Rukhmani";
import KanchanMedicos from "../Pages/Pharmacy/KanchanMedicos";
import DevanshSports from "../Pages/SportsShop/DevanshSports";
import Frutoss from "../Pages/Cafe/Frutoss";
import { ManoharVarma1 } from "../Pages/PersonalCard/Light/ManoharVarma1";
import { RushikeshDurugkar1 } from "../Pages/PersonalCard/Light/RushikeshDurugkar1";
import ManoharVarma2 from "../Pages/PersonalCard/Light/ManoharVarma2";
import AdminLeads from "../Pages/AdminLeads";

export const navItems = [{ label: "Home", path: "/" }];

export const appRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/bunzaa", element: <Bunzaa /> },
  { path: "/rukhmani", element: <Rukhmani /> },
  { path: "/kanchan-medicos", element: <KanchanMedicos /> },
  { path: "/devansh-sports", element: <DevanshSports /> },
  { path: "/frutoss", element: <Frutoss /> },
  { path: "/vc/rushikesh", element: <RushikeshDurugkar /> },
  { path: "/vc/hrishikesh", element: <HrishikeshGuptaD /> },
  { path: "/vc/hrishikesh1", element: <HrishikeshGupta /> },
  { path: "/vc/manohar", element: <ManoharVarma /> },
  { path: "/vc/manohar1", element: <ManoharVarma1 /> },
  { path: "/vc/rushikesh1", element: <RushikeshDurugkar1 /> },
  { path: "/vc/manohar2", element: <ManoharVarma2 /> },
  { path: "/admin/leads", element: <AdminLeads /> },
];
