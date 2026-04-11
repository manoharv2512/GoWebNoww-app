// import Navbar from "@/components/Navbar";
// import Navbar from "../../components/TheSandwichCo/Navbar";
import Hero from "../../components/TheSandwichCo/Hero";
import Services from "../../components/TheSandwichCo/Services";
import Reviews from "../../components/TheSandwichCo/Reviews";
import Contact from "../../components/TheSandwichCo/Contact";
import Footer from "../../components/TheSandwichCo/Footer";
import About from "../../components/TheSandwichCo/About";
// import Menu from "../../components/TheSandwichCo/Menu";
import Gallery from "../../components/TheSandwichCo/Gallery";

const Index = () => (
  <>
    {/* <Navbar /> */}
    <Hero />
    <About />
    <Gallery />
    {/* <Menu /> */}
    <Services />
    <Reviews />
    <Contact />
    <Footer />
  </>
);

export default Index;
