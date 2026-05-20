import {
  AboutSection,
  BusinessHero,
  ContactSection,
  GallerySection,
  ReviewsSection,
} from "../../components/common/BusinessPage";
import Footer from "../../components/common/Footer";

import {
  kanchanHero,
  kanchanAbout,
  kanchanGallery,
  kanchanReviews,
  kanchanContact,
  kanchanFooter,
} from "./data/kanchanMedicosContent";

const KanchanMedicos = () => {
  return (
    <>
      <BusinessHero {...kanchanHero} />
      <AboutSection {...kanchanAbout} />
      <GallerySection {...kanchanGallery} />
      <ReviewsSection {...kanchanReviews} />
      <ContactSection {...kanchanContact} />
      <Footer
        bgColorState={kanchanFooter.background}
        fontColor={kanchanFooter.color}
        text={kanchanFooter.text}
      />
    </>
  );
};

export default KanchanMedicos;
