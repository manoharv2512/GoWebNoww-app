import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { WhatsApp } from "@mui/icons-material";
import type {
  AboutContent,
  ContactContent,
  FooterContent,
  GalleryContent,
  HeroContent,
  ReviewsContent,
} from "../../../components/common/BusinessPage";
import phoneIcon1 from "../../../assets/common/phoneIcon1.png";
import heroImg from "../../../assets/rukhmani/pexels-gustavo-fring-6050395.jpg";
import tradeLogo from "../../../assets/rukhmani/rukhmaniLogo1.png";
import storyImage from "../../../assets/rukhmani/pexels-rachel-claire-5864245.jpg";
import reviewBackground from "../../../assets/TheSandwichCo/OurFlavors/105C.jpeg";
import googleReviewIcon from "../../../assets/common/googleReview.png";
import menuIcon from "../../../assets/common/Menu.png";
import wifiIcon from "../../../assets/common/wifiIcon.png";
import instagramLogo from "../../../assets/common/Instagram_logo.png";
import collectionA from "../../../assets/rukhmani/1.jpg";
import collectionB from "../../../assets/rukhmani/2.jpg";
import collectionC from "../../../assets/rukhmani/3.jpg";
import collectionD from "../../../assets/rukhmani/4.jpg";
import collectionE from "../../../assets/rukhmani/5.jpg";
import collectionF from "../../../assets/rukhmani/6.jpg";
import collectionG from "../../../assets/rukhmani/1.jpg";
import collectionH from "../../../assets/rukhmani/3.jpg";

export const hero: HeroContent = {
  title: "Rukhmani Clothing Store",
  subtitle: "Premium Fashion Collection",
  description:
    "Discover timeless fashion with modern elegance. Explore our curated collection of ethnic and western wear crafted for every occasion.",
  imageSrc: heroImg, // replace with clothing video later
  mediaFit: "cover",
  rating: 5,
  reviewText: "4.8 · 500+ Happy Customers",
  reviewIcon: googleReviewIcon,

  wifi: {
    ssid: "RukhmaniStore",
    password: "12345678",
  },

  actions: [
    { label: "WiFi", icon: wifiIcon, action: "wifi" },
    {
      label: "View Collection",
      icon: menuIcon,
      href: "https://your-website.com/collection",
    },
    {
      label: "Instagram",
      icon: instagramLogo,
      href: "https://instagram.com/yourstore",
    },
    {
      label: "Google Review",
      icon: googleReviewIcon,
      href: "https://google.com/search?q=Rukhmani+Clothing+Store+Reviews",
    },
    {
      label: "Contact Us",
      icon: phoneIcon1,
      href: "tel:+919999999999",
    },
  ],
};

export const about: AboutContent = {
  background: "linear-gradient(90deg, #ffb7b7, #ebeb1d)",
  logoSrc: tradeLogo,
  logoAlt: "Rukhmani Clothing",

  description:
    "At Rukhmani Clothing Store, we bring you a blend of tradition and modern style.\n\nWe believe fashion is not just clothing — it's an expression of your identity.",

  imageSrc: storyImage, // replace with store/interior/fashion image
  imageAlt: "Rukhmani Store",

  stats: [
    { value: "10K+", label: "Happy Customers" },
    { value: "5K+", label: "Outfits Sold" },
    { value: "4.8★", label: "Customer Rating" },
  ],
};

export const gallery: GalleryContent = {
  background: "white",
  title: "Our Collections",
  description:
    "Explore our latest fashion collections designed for style, comfort, and elegance.",

  cards: [
    {
      title: "Ethnic Wear",
      items: [collectionA, collectionB],
    },
    {
      title: "Western Wear",
      items: [collectionC, collectionD],
    },
    {
      title: "Men's Collection",
      items: [collectionE, collectionF],
    },
    {
      title: "Women's Collection",
      items: [collectionG, collectionH],
    },
    {
      title: "Festive Collection",
      items: [collectionA, collectionD, collectionF],
    },
    {
      title: "Sessional Wear",
      items: [collectionA, collectionB],
    },
  ],
};

export const reviews: ReviewsContent = {
  image: reviewBackground, // replace with fashion bg

  reviews: [
    {
      name: "Priya Sharma",
      text: "Amazing collection! The quality and fitting are perfect. Loved the ethnic wear.",
      rating: 5,
      date: "1 week ago",
    },
    {
      name: "Rahul Verma",
      text: "Great variety and reasonable prices. Highly recommended for festive shopping.",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "Sneha Patil",
      text: "Trendy designs and great customer service. Will definitely visit again.",
      rating: 5,
      date: "3 weeks ago",
    },
  ],
};

export const contact: ContactContent = {
  title: "Visit Our Store",
  description: "Step into style. Visit us or connect with us anytime.",

  items: [
    {
      icon: <LocationOnIcon color="primary" />,
      label: "Address",
      value: "Main Road, Mahal, Nagpur",
      href: "https://www.google.com/maps?q=Rukhmani+Clothing+Store+Nagpur",
    },
    {
      icon: <PhoneIcon color="primary" />,
      label: "Phone",
      value: "+91 9999999999",
      href: "tel:+919999999999",
    },
    {
      icon: <WhatsApp color="primary" />,
      label: "WhatsApp",
      value: "+91 9999999999",
      href: "https://wa.me/919999999999",
    },
    {
      icon: <EmailIcon color="primary" />,
      label: "Email",
      value: "rukhmaniclothing@gmail.com",
      href: "mailto:rukhmaniclothing@gmail.com",
    },
    {
      icon: <AccessTimeIcon color="primary" />,
      label: "Hours",
      value: "Mon-Sun: 10am - 9pm",
    },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps?q=Rukhmani+Clothing+Store+Nagpur&output=embed",
};

export const footer: FooterContent = {
  background: "black",
  color: "rgba(255, 255, 255, 0.7)",
  text: `© ${new Date().getFullYear()} Knectaa. All rights reserved.`,
};
