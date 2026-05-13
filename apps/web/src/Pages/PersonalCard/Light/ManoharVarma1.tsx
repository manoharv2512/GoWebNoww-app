import profileImg from "../../../assets/VisitingCard/ManoharVarma.jpg";
import { PersonalCard } from ".";
import { manoharvarma } from "..";

const contact = manoharvarma;
const ManoharVarma1 = () => {
  const fontColorState = "white";

  return <PersonalCard contact={{ ...contact, profileImg }} />;
};

export default ManoharVarma1;
