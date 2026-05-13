import ComingSoon from "../../components/ComingSoon";
import bgImage from "../../assets/common/comingSoon.jpeg";

const Frutoss = () => {
  return (
    <ComingSoon
      brandName="Frutoss"
      description="Fresh and delicious fruits available at Frutoss. Visit our Instagram page for more details and updates on the launch."
      backgroundImage={bgImage}
      primaryButtonText="Visit Instagram"
      primaryButtonLink="https://www.instagram.com/"
    />
  );
};

export default Frutoss;
