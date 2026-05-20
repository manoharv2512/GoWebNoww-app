// const DevanshSports = () => {
//   return (
//     <ComingSoon
//       brandName="Devansh Sports"
//       description="Exclusive sports equipment and apparel available at Devansh Sports. Visit our Instagram page for more details and updates on the launch."
//       backgroundImage={bgImage}
//       primaryButtonText="Visit Instagram"
//       primaryButtonLink="https://www.instagram.com/devansh_sports_01?utm_source=qr&igsh=dG9ndW5uZjhxbTNt"
//     />
//   );
// };

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
