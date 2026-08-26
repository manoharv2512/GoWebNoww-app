import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Navbar } from "../../components/knectaa2/Navbar";
import { HeroSection } from "../../components/knectaa2/HeroSection";
import { ServicesSection } from "../../components/knectaa2/ServicesSection";
import { FooterSection } from "../../components/knectaa2/FooterSection";

// import { Navbar } from "./components/Navbar";
// import { HeroSection } from "./components/HeroSection";
// import { ServicesSection } from "./components/ServicesSection";
// import { FooterSection } from "./components/FooterSection";

export default function Knectaa2() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "yellow",
        fontFamily: "Hind, sans-serif",
        headings: {
          fontFamily: "'Baloo 2', sans-serif",
        },
      }}
    >
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
      </main>

      <FooterSection />
    </MantineProvider>
  );
}