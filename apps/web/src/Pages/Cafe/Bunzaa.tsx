import {
  AboutSection,
  BusinessHero,
  ContactSection,
  GallerySection,
  ReviewsSection,
} from "../../components/common/BusinessPage";
import Footer from "../../components/common/Footer";
import {
  bunzaaAbout,
  bunzaaContact,
  bunzaaFooter,
  bunzaaGallery,
  bunzaaHero,
  bunzaaReviews,
} from "./data/bunzaaContent";

const Bunzaa = () => (
  <>
    <BusinessHero {...bunzaaHero} />
    <AboutSection {...bunzaaAbout} />
    <GallerySection {...bunzaaGallery} />
    <ReviewsSection {...bunzaaReviews} />
    <ContactSection {...bunzaaContact} />
    <Footer
      bgColorState={bunzaaFooter.background}
      fontColor={bunzaaFooter.color}
      text={bunzaaFooter.text}
    />
  </>
);

export default Bunzaa;
