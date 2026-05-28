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
import heroVideo from "../../../assets/TheSandwichCo/HeroBgVideo.mp4";
import tradeLogo from "../../../assets/TheSandwichCo/BunzaaTrade.png";
import storyImage from "../../../assets/TheSandwichCo/OurStoryImg.png";
import reviewBackground from "../../../assets/TheSandwichCo/OurFlavors/105C.jpeg";
import googleReviewIcon from "../../../assets/common/googleReview.png";
import menuIcon from "../../../assets/common/Menu.png";
import swiggyLogo from "../../../assets/common/SwiggyLogo.png";
import zomatoLogo from "../../../assets/common/ZomatoLogo.png";
import wifiIcon from "../../../assets/common/wifiIcon.png";
import instagramLogo from "../../../assets/common/Instagram_logo.png";

import bunzaaVideo from "../../../assets/TheSandwichCo/OurFlavors/106.mp4";
import bunzaaA from "../../../assets/TheSandwichCo/OurFlavors/104C.jpeg";
import bunzaaB from "../../../assets/TheSandwichCo/OurFlavors/101B.jpeg";
import bunzaaC from "../../../assets/TheSandwichCo/OurFlavors/101C.jpeg";

import sandwichA from "../../../assets/TheSandwichCo/OurFlavors/101A.jpeg";
import sandwichB from "../../../assets/TheSandwichCo/OurFlavors/106A.jpeg";
import sandwichC from "../../../assets/TheSandwichCo/OurFlavors/102C.jpeg";
import sandwichD from "../../../assets/TheSandwichCo/OurFlavors/sandwich1.jpeg";
import sandwichE from "../../../assets/TheSandwichCo/OurFlavors/sandwich2.jpeg";

import burgerA from "../../../assets/TheSandwichCo/OurFlavors/102A.jpeg";
import burgerB from "../../../assets/TheSandwichCo/OurFlavors/104A.jpeg";
import burgerC from "../../../assets/TheSandwichCo/OurFlavors/103B.jpeg";
import burgerD from "../../../assets/TheSandwichCo/OurFlavors/burger.jpeg";

import pizzaA from "../../../assets/TheSandwichCo/OurFlavors/pizza1.jpeg";
import pizzaB from "../../../assets/TheSandwichCo/OurFlavors/pizza2.png";
import pizzaC from "../../../assets/TheSandwichCo/OurFlavors/pizza3.jpeg";
import pizzaD from "../../../assets/TheSandwichCo/OurFlavors/pizza4.jpeg";

import maggiA from "../../../assets/TheSandwichCo/OurFlavors/105A.jpeg";
import maggiB from "../../../assets/TheSandwichCo/OurFlavors/102B.jpeg";
import momoA from "../../../assets/TheSandwichCo/OurFlavors/momo.jpeg";
import momoB from "../../../assets/TheSandwichCo/OurFlavors/momo1.jpeg";
import momoC from "../../../assets/TheSandwichCo/OurFlavors/momo2.jpeg";
import momoD from "../../../assets/TheSandwichCo/OurFlavors/momos.jpeg";
import maggie from "../../../assets/TheSandwichCo/OurFlavors/maggie.jpeg";

import beverageA from "../../../assets/TheSandwichCo/OurFlavors/103A.png";
import beverageB from "../../../assets/TheSandwichCo/OurFlavors/Beverages.jpeg";

export const bunzaaHero: HeroContent = {
  title: "Sandwich Company",
  subtitle: "100% Veg",
  description: "Handcrafted sandwiches made with fresh, quality ingredients.",
  videoSrc: heroVideo,
  mediaFit: "none",
  rating: 5,
  reviewText: "4.9 - 200+ Reviews",
  reviewIcon: googleReviewIcon,
  wifi: {
    ssid: "SandwichCompany",
    password: "12345678",
  },
  actions: [
    { label: "WiFi", icon: wifiIcon, action: "wifi" },
    {
      label: "Menu",
      icon: menuIcon,
      href: "https://digitalmenu.applova.io/webstore/BIZ_14751b0sdfb/menu?session=1774241149519#CAT_640b67fke09",
    },
    {
      label: "Instagram",
      icon: instagramLogo,
      href: "https://www.instagram.com/sandwich_company_uniquness_?igsh=MXYxZTViOWJ2enZ3Zg%3D%3D",
    },
    {
      label: "Google Review",
      icon: googleReviewIcon,
      href: "https://www.google.com/search?sca_esv=37e421cff93e3de4&sxsrf=ANbL-n7JyIeMqjZWdJ-x3E3n6ZrBirTn9g:1774269817224&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOR9-Ht-Xau0yzj6nkzhzwMsERgNIW3uUtHKMe0ZB3pEnsoJg0GxhSp6FPIKN5O6ENmZ4I84hvZRuEwQ7U6VNEziIRnv6PV5UFQjyoJoAwSvxnOJFSg%3D%3D&q=Sandwich+Company+Uniqueness+Reviews&sa=X&ved=2ahUKEwiZz8ORhraTAxVZ-DgGHVZUGMEQ0bkNegQINhAF&biw=1280&bih=593&dpr=1.5",
    },
  ],
  secondaryAction: [
    {
      label: "Swiggy",
      icon: swiggyLogo,
      href: "https://www.swiggy.com/menu/1158776?source=sharing",
    },
    {
      label: "Zomato",
      icon: zomatoLogo,
      href: "https://zomato.onelink.me/xqzv/9958lh7j",
    },
  ],
};

export const bunzaaAbout: AboutContent = {
  background: "linear-gradient(90deg, #ffca1a, #f5903d)",
  logoSrc: tradeLogo,
  logoAlt: "SandwichLogo",
  description:
    "Known for uniqueness.\nCrunchy. Juicy. Fresh.\nLoaded with your love, where every sandwich is crafted to perfection.\nFresh, tasty, and made to satisfy every craving.",
  imageSrc: storyImage,
  imageAlt: "shop story",
  stats: [
    { value: "20K+", label: "Sandwiches Served" },
    { value: "13K+", label: "Views on Google" },
    { value: "200+", label: "5 Stars on Google" },
  ],
};

export const bunzaaGallery: GalleryContent = {
  background: "white",
  title: "Our Flavors",
  description:
    "A gallery of hand-crafted dishes celebrating bold flavors and artistic presentation.",
  cards: [
    { title: "Bunzaa", items: [bunzaaVideo, bunzaaA, bunzaaB, bunzaaC] },
    {
      title: "Sandwich",
      items: [sandwichA, sandwichB, sandwichC, sandwichD, sandwichE],
    },
    { title: "Burger", items: [burgerA, burgerB, burgerC, burgerD] },
    { title: "Pizza", items: [pizzaA, pizzaB, pizzaC, pizzaD] },
    {
      title: "Maggi",
      items: [maggiA, maggiB, momoA, momoB, momoC, momoD, maggie],
    },
    { title: "Beverages", items: [beverageA, beverageB] },
  ],
};

export const bunzaaReviews: ReviewsContent = {
  image: reviewBackground,
  reviews: [
    {
      name: "Reema Juneja Sapra",
      text: "Just tried the Bunzaa and Peri Peri Paneer sandwich and I loved it. The taste, the spice level, everything was on point.",
      rating: 5,
      date: "1 week ago",
    },
    {
      name: "Samiksha Pande",
      text: "Fresh, hygienic, and delicious food. I recommend this Sandwich Company.",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "Nikhil Dekate",
      text: "One of the best sandwiches I have had. Fresh bread, gentle crunch, and filling packed with fresh ingredients.",
      rating: 5,
      date: "4 weeks ago",
    },
    {
      name: "Anshul Jain",
      text: "The recommended Bunzaa was absolutely delicious. Crispy bread and rich, satisfying stuffing.",
      rating: 5,
      date: "34 weeks ago",
    },
    {
      name: "Lavanya Admane",
      text: "The sandwiches were super fresh and tasty. Loved the quick service and clean packaging.",
      rating: 5,
      date: "8 weeks ago",
    },
  ],
};

export const bunzaaContact: ContactContent = {
  title: "Find Us",
  description: "Visit us or get in touch. We would love to hear from you.",
  items: [
    {
      icon: <LocationOnIcon color="primary" />,
      label: "Address",
      value: "Shop no.1, Natraj Tower, Zenda Chowk, Mahal Nagpur",
      href: "https://www.google.com/maps?q=Sandwich+Company+Uniqueness+Nagpur",
    },
    {
      icon: <PhoneIcon color="primary" />,
      label: "Phone",
      value: "+91 8878811666",
      href: "tel:+918878811666",
    },
    {
      icon: <WhatsApp color="primary" />,
      label: "Whatsapp",
      value: "+91 8878811666",
      href: "https://wa.me/918878811666?text=Hello%20I%20want%20to%20order%20from%20The%20Sandwich%20Co",
    },
    {
      icon: <EmailIcon color="primary" />,
      label: "Email",
      value: "sandwichcompanyuniqueness@gmail.com",
      href: "mailto:sandwichcompanyuniqueness@gmail.com",
    },
    {
      icon: <AccessTimeIcon color="primary" />,
      label: "Hours",
      value: "Mon-Sun: 12pm - 10:30pm",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.2798569739866!2d79.10995847388!3d21.14394548381505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c70078b3e8df%3A0x5c9281e5bd87bbbe!2sSandwich%20Company%20Uniqueness!5e1!3m2!1sen!2sin!4v1774373739242!5m2!1sen!2sin",
};

export const bunzaaFooter: FooterContent = {
  background: "black",
  color: "rgba(255, 255, 255, 0.7)",
  text: `© ${new Date().getFullYear()} Knectaa. All rights reserved.`,
};
