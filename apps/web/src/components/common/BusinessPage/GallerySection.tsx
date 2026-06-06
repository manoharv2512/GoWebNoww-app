import { Container, Grid, Text, Title } from "@mantine/core";
import MediaSwitcher from "../../TheSandwichCo/MediaSwitcher";
import type { GalleryContent } from "./types";

const GallerySection = ({
  title,
  description,
  cards,
  background,
}: GalleryContent) => {
  return (
    <div style={{ background }}>
      <Container size="md" py={30}>
        <Title ta="center" mb="sm">
          {title}
        </Title>

        {description && (
          <Text ta="center" c="dimmed" mb="xl">
            {description}
          </Text>
        )}

        <Grid gap="md">
          {cards.map((card) => (
            <Grid.Col span={{ base: 6, sm: 6 }} key={card.title}>
              <div style={{ position: "relative" }}>
                <MediaSwitcher items={card.items} />
                <Text
                  fw={700}
                  c="white"
                  bg={"#ffffff65"}
                  size="lg"
                  w={"100%"}
                  truncate="end"
                  pl={4}
                  style={{
                    position: "absolute",
                    bottom: 10,
                    zIndex: 2,
                    textAlign: "left",
                  }}
                >
                  {card.title}
                </Text>
              </div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default GallerySection;
