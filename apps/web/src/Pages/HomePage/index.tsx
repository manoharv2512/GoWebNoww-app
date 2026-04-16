import React from "react";
import OurServices from "../../components/OurServices";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/Footer";
import Hero from "../../components/Knectaa/Hero";
import { Flex } from "@mantine/core";
import FAQ from "../../components/Knectaa/FAQ";

const HomePage: React.FC = () => {
  return (
    <Flex direction="column" gap={40}>
      <Hero />
      <OurServices />
      <div id="contact">
        <GetInTouch />
      </div>

      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </Flex>
  );
};

export default HomePage;
