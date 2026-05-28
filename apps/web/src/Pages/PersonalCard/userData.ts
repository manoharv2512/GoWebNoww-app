import manohar from "../../assets/VisitingCard/ManoharVarma.jpg";
import hrishikesh from "../../assets/VisitingCard/ChaitanyaHrishiGupta.jpeg";
import rushikesh from "../../assets/VisitingCard/RishikeshDurugkar.jpeg";

export interface IPersonProfile {
  pre?: string;
  name: string;
  location: string;
  title: string;
  company: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  linkedin?: string;
  instagram?: string;
  bio?: string;
  services?: string[];
  profileImg: string;
}

export const manoharvarma: IPersonProfile = {
  name: "MANOHAR VARMA",
  location: "Nagpur, IN",
  title: "Co-Founder & CTO",
  company: "Knectaa",
  phone: "+919075172459",
  email: "varmamanohar1998@gmail.com",
  whatsapp: "919075172459",
  linkedin: "https://www.linkedin.com/in/manoharv2512/",
  instagram: "https://www.instagram.com/its_manoharr",
  bio: "Passionate technologist driving innovation for the future of connected services.",
  services: [
    "Full-Stack Development",
    "Technology Strategy",
    "Team Leadership",
  ],
  profileImg: manohar,
};

export const rushikeshDurugkar: IPersonProfile = {
  name: "Rushikesh Durugkar",
  location: "Nagpur, IN",
  title: "Co-Founder & CPO",
  company: "Knectaa",
  phone: "+918237328402",
  email: "rushikeshdurugkar28@gmail.com",
  whatsapp: "918237328402",
  linkedin: "https://www.linkedin.com/in/rushiikesh-durugkar-32ba0a236/",
  instagram: "https://www.instagram.com/r_u_s_h_i_e/",
  bio: "Passionate technologist driving innovation for the future of connected services.",
  services: [
    "Full-Stack Development",
    "Technology Strategy",
    "Team Leadership",
  ],
  profileImg: rushikesh,
};

export const hrishikeshGupta: IPersonProfile  = {
  name: "Chaitanya Hrishikesh Gupta",
  location: "Nagpur, IN",
  title: "Founder & CEO",
  company: "Knectaa",
  phone: "+918878811666",
  email: "hrishi.gupta.02@gmail.com",
  whatsapp: "918878811666",
  linkedin: "https://www.linkedin.com/in/",
  instagram: "https://www.instagram.com/chaitanyaji_?igsh=ZGkyY29jc3Q4NmJt",
  bio: "Passionate technologist driving innovation for the future of connected services.",
  services: [
    "Full-Stack Development",
    "Technology Strategy",
    "Team Leadership",
  ],
  profileImg: hrishikesh,
};