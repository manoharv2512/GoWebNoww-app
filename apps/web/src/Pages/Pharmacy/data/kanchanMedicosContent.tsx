import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { WhatsApp } from "@mui/icons-material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import type {
  AboutContent,
  ContactContent,
  FooterContent,
  GalleryContent,
  HeroContent,
  ReviewsContent,
} from "../../../components/common/BusinessPage";

import heroImage from "../../../assets/KanchanMedicos/KanchanMedicos.jpg";
import storeLogo from "../../../assets/KanchanMedicos/KanchanMedicos.jpg";
import aboutImage from "../../../assets/KanchanMedicos/KanchanMedicos.jpg";
import reviewBackground from "../../../assets/KanchanMedicos/KanchanMedicos.jpg";

import googleReviewIcon from "../../../assets/common/googleReview.png";
import wifiIcon from "../../../assets/common/wifiIcon.png";
import instagramLogo from "../../../assets/common/Instagram_logo.png";

import medicinesA from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import medicinesB from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import medicinesC from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";

import wellnessA from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import wellnessB from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";

import babyCareA from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import babyCareB from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";

import healthcareA from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import healthcareB from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";

export const kanchanHero: HeroContent = {
  title: "Kanchan Medicos",
  subtitle: "Your Trusted Medical Store",
  description:
    "Providing genuine medicines, healthcare essentials, and wellness products with care and reliability.",

  imageSrc: heroImage,
  mediaFit: "cover",

  rating: 5,
  reviewText: "4.9 - Trusted by Hundreds",
  reviewIcon: googleReviewIcon,
  wifi: {
    ssid: "SandwichCo",
    password: "12345678",
  },
  actions: [
    { label: "WiFi", icon: wifiIcon, action: "wifi" },
    {
      label: "Call Now",
      icon: <PhoneIcon color="primary" />,
      href: "tel:+919876543210",
    },
    {
      label: "WhatsApp",
      icon: <WhatsApp color="primary" />,
      href: "https://wa.me/919876543210?text=Hello%20Kanchan%20Medicos",
    },
    {
      label: "Location",
      icon: <LocationOnIcon color="primary" />,
      href: "https://www.google.com/maps?q=Kanchan+Medicos+Nagpur",
    },
  ],

  secondaryAction: [
    {
      label: "Google Reviews",
      icon: googleReviewIcon,
      href: "https://www.google.com/",
    },
    {
      label: "Instagram",
      icon: instagramLogo,
      href: "https://www.instagram.com/",
    },
  ],
};

export const kanchanAbout: AboutContent = {
  background: "linear-gradient(90deg, #0f9b8e, #38ef7d)",

  logoSrc: storeLogo,
  logoAlt: "Kanchan Medicos",

  description:
    "At Kanchan Medicos, we are committed to your health and wellness.\nWe provide authentic medicines, healthcare essentials, and trusted medical guidance.\nServing our community with care, reliability, and quick service every day.",

  imageSrc: aboutImage,
  imageAlt: "Kanchan Medicos Store",

  stats: [
    { value: "10K+", label: "Customers Served" },
    { value: "5K+", label: "Prescriptions Delivered" },
    { value: "100%", label: "Genuine Medicines" },
  ],
};

export const kanchanGallery: GalleryContent = {
  background: "white",

  title: "Healthcare Essentials",

  description:
    "Explore our wide range of medicines, wellness products, and healthcare essentials.",

  cards: [
    {
      title: "Medicines",
      items: [medicinesA, medicinesB, medicinesC],
    },
    {
      title: "Wellness",
      items: [wellnessA, wellnessB],
    },
    {
      title: "Baby Care",
      items: [babyCareA, babyCareB],
    },
    {
      title: "Healthcare Products",
      items: [healthcareA, healthcareB],
    },
  ],
};

export const kanchanReviews: ReviewsContent = {
  image: reviewBackground,

  reviews: [
    {
      name: "Rahul Sharma",
      text: "Very reliable medical store. Genuine medicines and polite staff.",
      rating: 5,
      date: "1 week ago",
    },
    {
      name: "Priya Deshmukh",
      text: "Quick service and all medicines were available at reasonable prices.",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "Amit Verma",
      text: "Helpful staff and clean store. Highly recommended for healthcare needs.",
      rating: 5,
      date: "3 weeks ago",
    },
    {
      name: "Sneha Patil",
      text: "They guide properly about medicines and provide excellent support.",
      rating: 5,
      date: "1 month ago",
    },
  ],
};

export const kanchanContact: ContactContent = {
  title: "Contact Us",

  description:
    "Visit Kanchan Medicos for trusted healthcare products and medical assistance.",

  items: [
    {
      icon: <LocationOnIcon color="primary" />,
      label: "Address",
      value: "Nagpur, Maharashtra",
      href: "https://www.google.com/maps?q=Kanchan+Medicos+Nagpur",
    },
    {
      icon: <PhoneIcon color="primary" />,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210",
    },
    {
      icon: <MedicalServicesIcon color="primary" />,
      label: "Services",
      value: "Prescription Medicines & Healthcare Products",
    },
    {
      icon: <VaccinesIcon color="primary" />,
      label: "Speciality",
      value: "Wellness, OTC & Daily Care Essentials",
    },
    {
      icon: <EmailIcon color="primary" />,
      label: "Email",
      value: "kanchanmedicos@gmail.com",
      href: "mailto:kanchanmedicos@gmail.com",
    },
    {
      icon: <AccessTimeIcon color="primary" />,
      label: "Hours",
      value: "Mon-Sun: 8am - 10pm",
    },
  ],

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=",
};

export const kanchanFooter: FooterContent = {
  background: "black",

  color: "rgba(255, 255, 255, 0.7)",

  text: `©️ ${new Date().getFullYear()} Knectaa. All rights reserved.`,
};
