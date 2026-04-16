// import Hero from "../../components/TheSandwichCo/Hero";
// import Reviews from "../../components/TheSandwichCo/Reviews";
// import Contact from "../../components/TheSandwichCo/Contact";
// import Footer from "../../components/TheSandwichCo/Footer";
// import About from "../../components/TheSandwichCo/About";
// import OurFlavors from "../../components/TheSandwichCo/OurFlavors";
// import { Box, Stack } from "@mantine/core";
// const Index = () => (
//   <Box style={{ position: "relative" }}>
//     <Stack
//       style={{
//         position: "relative",
//         zIndex: 2,
//         background: "linear-gradient(90deg, #ffca1a, #f5903d)",
//       }}
//     >
//       <Hero />
//       <About />
//       <OurFlavors />
//       <Reviews />
//       <Contact />
//       <Footer />
//     </Stack>
//   </Box>
// );

// export default Index;
import Hero from "../../components/TheSandwichCo/Hero";
import Reviews from "../../components/TheSandwichCo/Reviews";
import Contact from "../../components/TheSandwichCo/Contact";
import Footer from "../../components/TheSandwichCo/Footer";
import About from "../../components/TheSandwichCo/About";
import OurFlavors from "../../components/TheSandwichCo/OurFlavors";
import { Box } from "@mantine/core";

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
    <Footer />
  </>
);

export default Index;
