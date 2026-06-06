import KnectaaCard from "./CardDesigns/GoldenCard";
import { manoharvarma } from "../userData";

const {
  name,
  profileImg,
  bio,
  phone,
  email,
  whatsapp,
  instagram,
  linkedin,
  company,
} = manoharvarma;

const ManoharVarma2 = () => (
  <KnectaaCard
    contact={{
      name,
      profileImg,
      bio,
      phone,
      email,
      whatsapp,
      instagram,
      linkedin,
      company,
    }}
  />
);

export default ManoharVarma2;
