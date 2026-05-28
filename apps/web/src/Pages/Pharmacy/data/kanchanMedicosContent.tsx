import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { WhatsApp } from "@mui/icons-material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import type {
  AboutContent,
  ContactContent,
  FooterContent,
  GalleryContent,
  HeroContent,
  ReviewsContent,
} from "../../../components/common/BusinessPage";

import heroImage from "../../../assets/KanchanMedicos/KanchanMedicos.jpg";
import storeLogo from "../../../assets/KanchanMedicos/newLogo.png";
import aboutImage from "../../../assets/KanchanMedicos/storeLogo.jpeg";
import reviewBackground from "../../../assets/KanchanMedicos/KanchanMedicos.jpg";

import googleReviewIcon from "../../../assets/common/googleReview.png";
import wifiIcon from "../../../assets/common/wifiIcon.png";
import instagramLogo from "../../../assets/common/Instagram_logo.png";

import medicinesA from "../../../assets/KanchanMedicos/Gallery/AllopathicMedicines/Allopathic-Medicines.jpg";
import medicinesB from "../../../assets/KanchanMedicos/Gallery/AllopathicMedicines/Indian_medical_shop_interior_202605241905.jpeg";
import medicinesC from "../../../assets/KanchanMedicos/Gallery/AllopathicMedicines/Kanchan medicos.jpg";
import medicinesD from "../../../assets/KanchanMedicos/Gallery/AllopathicMedicines/allopathic-medicines.png";

import wellnessA from "../../../assets/KanchanMedicos/Gallery/BabyCare Products/30ml-babycare-pediatric-drops-250x250.png";
import wellnessB from "../../../assets/KanchanMedicos/Gallery/BabyCare Products/Gentle-Baby-Wash.png";
import wellnessC from "../../../assets/KanchanMedicos/Gallery/BabyCare Products/baby-care-product-tc8kp16-250.png";

import babyCareA from "../../../assets/KanchanMedicos/Gallery/MedicalDevices/Single-use-medical-devices-1024x682.jpg";
import babyCareB from "../../../assets/KanchanMedicos/Gallery/MedicalDevices/at-home-medical-equipment-and-devices.png";

import healthcareA from "../../../assets/KanchanMedicos/Gallery/AyurvedicProducts/1-500x500.png";
import healthcareB from "../../../assets/KanchanMedicos/Gallery/AyurvedicProducts/ashwagandha-capsules-500mg-herbal-health-supplement-for-physical-mental-strength-2284656.png";
import healthcareC from "../../../assets/KanchanMedicos/Gallery/AyurvedicProducts/ayurvedic-herbal-oil-manufacturer.png";

import personalA from "../../../assets/KanchanMedicos/Gallery/PersonalCare/1300x533-01_600x.png";
import personalB from "../../../assets/KanchanMedicos/Gallery/PersonalCare/51L4g3PLcSL.jpg";
import personalC from "../../../assets/KanchanMedicos/Gallery/PersonalCare/Immune_Health_Collection_CropClose.png";

import vitaminA from "../../../assets/KanchanMedicos/Gallery/Vitamins/40227469_2-nature-life-nutrition-whole-food-multivitamin-dietary-supplement-capsules-for-women-builds-immunity.png";
import vitaminB from "../../../assets/KanchanMedicos/Gallery/Vitamins/vitamins-dietary-supplements.png";

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
      title: "Allopathic Medicines",
      items: [medicinesA, medicinesB, medicinesC, medicinesD],
    },
    {
      title: "BabyCare Products",
      items: [wellnessA, wellnessB, wellnessC],
    },
    {
      title: "Medical Devices",
      items: [babyCareA, babyCareB],
    },
    {
      title: "Ayurvedic Products",
      items: [healthcareA, healthcareB, healthcareC],
    },
    {
      title: "Personal Care Products",
      items: [personalA, personalB, personalC],
    },
    {
      title: "Vitamins Supplements",
      items: [vitaminA, vitaminB],
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
      value: "Pardi, Nagpur, Maharashtra",
      href: "https://www.google.com/maps/place/Kanchan+medicos/@21.1558009,79.1664658,660m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bd4c7c09f758243:0x10342b6209d45ebc!8m2!3d21.1558009!4d79.1664658!16s%2Fg%2F11yv_2jwdv!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
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

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.0498622673254!2d79.1664658!3d21.1558009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7c09f758243%3A0x10342b6209d45ebc!2sKanchan%20medicos!5e1!3m2!1sen!2sin!4v1779806009504!5m2!1sen!2sin",
};

export const kanchanFooter: FooterContent = {
  background: "black",

  color: "rgba(255, 255, 255, 0.7)",

  text: `©️ ${new Date().getFullYear()} Knectaa. All rights reserved.`,
};
