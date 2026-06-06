import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { WhatsApp } from "@mui/icons-material";

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

import sportswearA from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import sportswearB from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import sportswearC from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";

import accessoriesA from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import accessoriesB from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";

import shoesA from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import shoesB from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";

import fitnessA from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";
import fitnessB from "../../../assets/KanchanMedicos/Gallery/KanchanMedicos.jpg";

export const hero: HeroContent = {
  title: "Devansh Sports",
  subtitle: "Sportswear & Accessories",

  description:
    "Your one-stop destination for premium sportswear, footwear, gym essentials, and sports accessories for every athlete and fitness enthusiast.",

  imageSrc: heroImage,
  mediaFit: "cover",

  rating: 5,
  reviewText: "4.9 - Loved by Sports Enthusiasts",
  reviewIcon: googleReviewIcon,

  wifi: {
    ssid: "DevanshSports",
    password: "12345678",
  },

  actions: [
    { label: "WiFi", icon: wifiIcon, action: "wifi" },

    {
      label: "Call Now",
      icon: <PhoneIcon color="primary" />,
      href: "tel:+917385623459",
    },

    {
      label: "WhatsApp",
      icon: <WhatsApp color="primary" />,
      href: "https://wa.me/918010827353?text=Hello%20Devansh%20Sports",
    },

    {
      label: "Location",
      icon: <LocationOnIcon color="primary" />,
      href: "https://www.google.com/maps?q=Devansh+Sports+Nagpur",
    },
  ],

  secondaryAction: [
    {
      label: "Google Reviews",
      icon: googleReviewIcon,
      href: "https://maps.app.goo.gl/2stVstrMJDD6uGBCA?g_st=ac",
    },

    {
      label: "Instagram",
      icon: instagramLogo,
      href: "https://www.instagram.com/devansh_sports_01?utm_source=qr&igsh=dG9ndW5uZjhxbTNt",
    },
  ],
};

export const about: AboutContent = {
  background: "linear-gradient(90deg, #1e3c72, #2a5298)",

  logoSrc: storeLogo,
  logoAlt: "Devansh Sports",

  description:
    "At Devansh Sports, we believe sports inspire confidence, discipline, and strength.\nWe provide premium-quality sportswear, fitness accessories, and athletic essentials for every age group.\nFrom gym training to professional sports, we help you perform your best with style and comfort.",

  imageSrc: aboutImage,
  imageAlt: "Devansh Sports Store",

  stats: [
    { value: "5K+", label: "Happy Customers" },
    { value: "2K+", label: "Sports Products" },
    { value: "100%", label: "Premium Quality" },
  ],
};

export const gallery: GalleryContent = {
  background: "white",

  title: "Our Sports Collection",

  description:
    "Explore premium sportswear, footwear, fitness gear, and accessories designed for performance and comfort.",

  cards: [
    {
      title: "Sports Shoes",
      items: [shoesA, shoesB],
    },

    {
      title: "Fitness Gear",
      items: [fitnessA, fitnessB],
    },
    {
      title: "Sportswear",
      items: [sportswearA, sportswearB, sportswearC],
    },

    {
      title: "Accessories",
      items: [accessoriesA, accessoriesB],
    },

    {
      title: "Sports Shoes",
      items: [shoesA, shoesB],
    },

    {
      title: "Fitness Gear",
      items: [fitnessA, fitnessB],
    },
  ],
};

export const reviews: ReviewsContent = {
  image: reviewBackground,

  reviews: [
    {
      name: "Rahul Sharma",
      text: "Amazing collection of sportswear and accessories. Quality is excellent.",
      rating: 5,
      date: "1 week ago",
    },

    {
      name: "Sneha Patil",
      text: "Best place for gym and fitness products. Staff is very helpful.",
      rating: 5,
      date: "2 weeks ago",
    },

    {
      name: "Aman Verma",
      text: "Bought sports shoes from here and the comfort is outstanding.",
      rating: 5,
      date: "3 weeks ago",
    },

    {
      name: "Priya Deshmukh",
      text: "Trendy collection and affordable pricing. Highly recommended.",
      rating: 5,
      date: "1 month ago",
    },
  ],
};

export const contact: ContactContent = {
  title: "Contact Us",

  description:
    "Visit Devansh Sports for premium sportswear, accessories, and fitness essentials.",

  items: [
    {
      icon: <LocationOnIcon color="primary" />,
      label: "Address",
      value: "Nagpur, Maharashtra",
      href: "https://www.google.com/maps?q=Devansh+Sports+Nagpur",
    },

    {
      icon: <PhoneIcon color="primary" />,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210",
    },

    {
      icon: <SportsSoccerIcon color="primary" />,
      label: "Products",
      value: "Sportswear, Shoes & Accessories",
    },

    {
      icon: <FitnessCenterIcon color="primary" />,
      label: "Speciality",
      value: "Gym, Fitness & Athletic Essentials",
    },

    {
      icon: <EmailIcon color="primary" />,
      label: "Email",
      value: "devanshsports@gmail.com",
      href: "mailto:devanshsports@gmail.com",
    },

    {
      icon: <AccessTimeIcon color="primary" />,
      label: "Hours",
      value: "Mon-Sun: 10am - 9pm",
    },
  ],

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=",
};

export const footer: FooterContent = {
  background: "black",

  color: "rgba(255, 255, 255, 0.7)",

  text: `©️ ${new Date().getFullYear()} Knectaa. All rights reserved.`,
};
