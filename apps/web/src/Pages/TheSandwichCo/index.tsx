import Hero from "../../components/TheSandwichCo/Hero";
import Reviews from "../../components/TheSandwichCo/Reviews";
import Contact from "../../components/TheSandwichCo/Contact";
import About from "../../components/TheSandwichCo/About";
import OurFlavors from "../../components/TheSandwichCo/OurFlavors";
import { Box } from "@mantine/core";
// import ManoharFooter from "../../components/ManoharFooter";
import Footer from "../../components/common/Footer";

const Index = () => (
  <>
    <Hero />
    <Box
      style={{
        background: "linear-gradient(90deg, #ffca1a, #f5903d)",
      }}
    >
      <About />
    </Box>
    <Box
      style={{
        background: "white",
      }}
    >
      <OurFlavors />
    </Box>
    <Reviews />
    <Contact />
    {/* <Footer /> */}
    {/* <ManoharFooter bgColorState="black" /> */}
    <Footer bgColorState="black" />
  </>
);

export default Index;
