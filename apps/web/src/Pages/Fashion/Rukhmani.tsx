import {
  AboutSection,
  BusinessHero,
  ContactSection,
  GallerySection,
  ReviewsSection,
} from "../../components/common/BusinessPage";
import Footer from "../../components/common/Footer";
import {
  about,
  contact,
  footer,
  gallery,
  hero,
  reviews,
} from "./data/rukhmaniContent";

const Rukhmani = () => (
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

export default Rukhmani;
