import { Container, Title, Text, Grid } from "@mantine/core";
import MediaSwitcher from "../MediaSwitcher";

// IMPORT assets properly
import med1 from "../../../assets/TheSandwichCo/OurFlavors/101.mp4";
import med2 from "../../../assets/TheSandwichCo/OurFlavors/102.jpeg";
import med3 from "../../../assets/TheSandwichCo/OurFlavors/103.jpeg";
import med4 from "../../../assets/TheSandwichCo/OurFlavors/104.mp4";
import med5 from "../../../assets/TheSandwichCo/OurFlavors/105.mp4";
import med6 from "../../../assets/TheSandwichCo/OurFlavors/106.mp4";

import med1A from "../../../assets/TheSandwichCo/OurFlavors/101A.jpeg";
import med2A from "../../../assets/TheSandwichCo/OurFlavors/102A.jpeg";
import med3A from "../../../assets/TheSandwichCo/OurFlavors/103A.png";
import med4A from "../../../assets/TheSandwichCo/OurFlavors/104A.jpeg";
import med5A from "../../../assets/TheSandwichCo/OurFlavors/105A.jpeg";
import med6A from "../../../assets/TheSandwichCo/OurFlavors/106A.jpeg";

import med1B from "../../../assets/TheSandwichCo/OurFlavors/101B.jpeg";
import med2B from "../../../assets/TheSandwichCo/OurFlavors/102B.jpeg";
import med3B from "../../../assets/TheSandwichCo/OurFlavors/103B.jpeg";
import med4B from "../../../assets/TheSandwichCo/OurFlavors/104B.jpeg";
import med5B from "../../../assets/TheSandwichCo/OurFlavors/105B.jpeg";
import med6B from "../../../assets/TheSandwichCo/OurFlavors/106B.jpeg";

import med1C from "../../../assets/TheSandwichCo/OurFlavors/101C.jpeg";
import med2C from "../../../assets/TheSandwichCo/OurFlavors/102C.jpeg";
import med3C from "../../../assets/TheSandwichCo/OurFlavors/103C.mp4";
import med4C from "../../../assets/TheSandwichCo/OurFlavors/104C.jpeg";
import med5C from "../../../assets/TheSandwichCo/OurFlavors/105C.jpeg";
import med6C from "../../../assets/TheSandwichCo/OurFlavors/106C.mp4";
const OurFlavors = () => {
  const galleryData = [
    [med1, med1A, med1B, med1C],
    [med2, med2A, med2B, med2C],
    [med3, med3A, med3B, med3C],
    [med4, med4A, med4B, med4C],
    [med5, med5A, med5B, med5C],
    [med6, med6A, med6B, med6C],
  ];

  // const Bunzaa = [med6, med4C, med6D] //1
  // const Sandwich = [med1A, med6A, med2C, med4D] // 2
  // const Burger = [med2A, med4A, med3B, med5D] //3
  // const Beverages = [med3A, med2D] //5
  // const Maggi = [med5A, med2B]
  // const pizza = [med3D]

  return (
    <Container size="md" py={30}>
      <Title ta="center" mb="sm">
        Our Flavors
      </Title>

      <Text ta="center" c="dimmed" mb="xl">
        A gallery of hand-crafted dishes celebrating bold flavors and artistic
        presentation.
      </Text>

      <Grid gap="md">
        {galleryData.map((items, index) => (
          <Grid.Col span={{ base: 6, sm: 6 }} key={index}>
            <MediaSwitcher items={items} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default OurFlavors;
