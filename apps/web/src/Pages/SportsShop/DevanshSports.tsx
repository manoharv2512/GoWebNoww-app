import {
  AboutSection,
  BusinessHero,
  ContactSection,
  GallerySection,
  ReviewsSection,
} from "../../components/common/BusinessPage";
import Footer from "../../components/common/Footer";

import {
  hero,
  about,
  gallery,
  reviews,
  contact,
  footer,
} from "./data/devanshSportsContent";

const DevanshSports = () => {
  return (
    <>
      <BusinessHero {...hero} />
      <AboutSection {...about} />
      <GallerySection {...gallery} />
      <ReviewsSection {...reviews} />
      <ContactSection {...contact} />
      <Footer
        bgColorState={footer.background}
        fontColor={footer.color}
        text={footer.text}
      />
    </>
  );
};

export default DevanshSports;
