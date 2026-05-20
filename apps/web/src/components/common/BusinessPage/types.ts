import type { ReactNode } from "react";

export type HeroAction = {
  label: string;
  icon?: string | ReactNode;
  href?: string;
  action?: "wifi";
};

export type WifiConfig = {
  ssid: string;
  password: string;
  security?: "WPA" | "WEP" | "nopass";
};

export type HeroContent = {
  title: string;
  subtitle?: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
  rating?: number;
  reviewText?: string;
  reviewIcon?: string;
  actions: HeroAction[];
  secondaryAction?: HeroAction[];
  wifi?: WifiConfig;
  height?: string;
  minHeight?: string;
  mediaFit?: "cover" | "contain" | "fill" | "none";
  overlay?: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type AboutContent = {
  id?: string;
  logoSrc?: string;
  logoAlt?: string;
  title?: string;
  description: string;
  stats?: StatItem[];
  imageSrc: string;
  imageAlt: string;
  background?: string;
};

export type GalleryCard = {
  title: string;
  items: string[];
};

export type GalleryContent = {
  title: string;
  description?: string;
  cards: GalleryCard[];
  background?: string;
};

export type ReviewItem = {
  name: string;
  text: string;
  rating: number;
  date: string;
};

export type ReviewsContent = {
  id?: string;
  image: string;
  reviews: ReviewItem[];
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon?: ReactNode;
};

export type ContactContent = {
  id?: string;
  title: string;
  description?: string;
  items: ContactItem[];
  mapEmbedUrl?: string;
  mapTitle?: string;
  background?: string;
};

export type FooterContent = {
  background?: string;
  color?: string;
  text?: string;
};
