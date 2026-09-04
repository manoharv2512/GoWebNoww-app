import {
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import styles from "./HeroSection.module.css";

function TapVisual() {
  return (
    <Box className={styles.tapStage}>
      <div className={styles.ripple} />
      <div className={`${styles.ripple} ${styles.ripple2}`} />
      <div className={`${styles.ripple} ${styles.ripple3}`} />

      <Box className={styles.phone}>
        <div className={styles.phoneNotch} />

        <div className={styles.phoneScreen}>
          <div className={styles.phoneGlow} />
        </div>
      </Box>

      <Box className={styles.tapCard} p="lg">
        <Stack justify="space-between" h="100%">
          <Group justify="space-between">
            <Text fw={800} fz="lg">
              knectaa
            </Text>

            <Text fz={24}>📶</Text>
          </Group>

          <Text
            fz={11}
            fw={600}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            R****** KIRANA STORE
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export function HeroSection() {
  const marqueeItems = [
    "डिजिटल पहचान · Digital Presence",
    "स्मार्ट विज़िटिंग कार्ड · NFC Card",
    "स्मार्ट स्टैंडी · Tap Display",
    "सुपर QR · All-in-One QR",
    "डिजिटल ग्राहक डायरी · Smart CRM",
    "ऑनलाइन प्रचार · Social Marketing",
  ];

  return (
    <>
      <Box
        component="header"
        id="top"
        py={{ base: 60, md: 80 }}
        className={styles.hero}
      >
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48}>
            <Stack justify="center">
              <Text
                component="span"
                w="fit-content"
                px="md"
                py={6}
                ta={"left"}
                fz={18}
                style={{
                  border: "1px solid rgba(255,182,39,.4)",
                  borderRadius: 100,
                  color: "#ffb627",
                  fontFamily: "'JetBrains Mono', monospace",
                  boxShadow: "0 0 20px rgba(255,182,39,.08)",
                }}
              >
                ● Local dukaano ke liye digital saathi
              </Text>

              <Title
                order={1}
                fz={{ base: 36, md: 64 }}
                style={{
                  textAlign: "left",
                  color: "#fff6e8",
                  fontFamily: "'Baloo 2', sans-serif",
                  lineHeight: 1.05,
                }}
              >
                Aapki Dukaan Ab Sirf{" "}
                <span style={{ color: "#ffb627" }}>Ek Tap</span> Door Hai
              </Title>

              <Text c="#a6aede" fz="lg" maw={520} lh={1.6} ta={"left"}>
                Knectaa ke saath apni dukaan ko digital banao — NFC card se
                lekar Instagram tak, sab kuch ek jagah.
              </Text>

              <Group>
                <Button
                  component="a"
                  href="https://wa.me/919225193354"
                  color="yellow"
                  radius="xl"
                  size="lg"
                  c="#131a3c"
                  className={styles.primaryButton}
                >
                  Free Demo Book Karo →
                </Button>

                <Button
                  component="a"
                  href="#services"
                  variant="outline"
                  color="gray"
                  radius="xl"
                  size="lg"
                  className={styles.secondaryButton}
                >
                  Kya Milega Dekho
                </Button>
              </Group>

              <Group mt="lg" gap="xl" wrap="wrap">
                <Box className={styles.stat}>
                  <Text
                    fw={700}
                    fz={24}
                    c="#fff6e8"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    500+
                  </Text>

                  <Text size="sm" c="#a6aede">
                    Dukaanein digital hui
                  </Text>
                </Box>

                <Box className={styles.stat}>
                  <Text
                    fw={700}
                    fz={24}
                    c="#fff6e8"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    48 hrs
                  </Text>

                  <Text size="sm" c="#a6aede">
                    Mein setup ready
                  </Text>
                </Box>

                <Box className={styles.stat}>
                  <Text
                    fw={700}
                    fz={24}
                    c="#fff6e8"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    0
                  </Text>

                  <Text size="sm" c="#a6aede">
                    App download zaroori
                  </Text>
                </Box>
              </Group>
            </Stack>

            <TapVisual />
          </SimpleGrid>
        </Container>
      </Box>

      {/* <Box className={styles.marquee}>
        <Box className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <Text key={`${item}-${index}`} className={styles.marqueeItem}>
              {item} ✦
            </Text>
          ))}
        </Box>
      </Box> */}
      <Box className={styles.marqueeWrapper}>
  <Stack gap={10}>
    {/* Right → Left */}
    <Box className={styles.marquee}>
      <Box className={styles.marqueeTrackLeft}>
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <Text
            key={`left-${item}-${index}`}
            className={styles.marqueeItem}
          >
            {item} ✦
          </Text>
        ))}
      </Box>
    </Box>

    {/* Left → Right */}
    <Box className={styles.marquee}>
      <Box className={styles.marqueeTrackRight}>
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <Text
            key={`right-${item}-${index}`}
            className={styles.marqueeItem}
          >
            ✦ {item}
          </Text>
        ))}
      </Box>
    </Box>
  </Stack>
</Box>
    </>
  );
}
