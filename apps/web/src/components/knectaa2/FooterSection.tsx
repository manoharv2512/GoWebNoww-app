import {
  ActionIcon,
  Box,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import styles from "./HeroSection.module.css";

export function FooterSection() {
  return (
    <>
      {/* CTA */}
      <Box
        component="section"
        id="contact"
        py={100}
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,182,39,.15), transparent 40%),
            #131a3c
          `,
        }}
      >
        <Container size="sm">
          <Stack align="center">
            {/* QR Mock */}
            <SimpleGrid
              cols={5}
              spacing={4}
              p="md"
              w={150}
              h={150}
              bg="#fff6e8"
              style={{
                borderRadius: 20,
                boxShadow: "0 20px 50px rgba(0,0,0,.4)",
              }}
            >
              {Array.from({ length: 25 }).map((_, index) => (
                <Box
                  key={index}
                  style={{
                    background:
                      index % 3 === 0
                        ? "transparent"
                        : index % 7 === 0
                          ? "#f2960b"
                          : "#131a3c",
                    borderRadius: 2,
                  }}
                />
              ))}
            </SimpleGrid>

            <Title order={2} ta="center" c="#fff6e8">
              Apni Dukaan Ko <span style={{ color: "#ffb627" }}>Digital</span>{" "}
              Banao — Aaj Hi
            </Title>

            <Text ta="center" c="#a6aede" maw={520}>
              Ek chhoti si baat-cheet se shuru karo. Free demo book karo aur
              dekho aapki dukaan digital duniya mein kaisi dikhegi.
            </Text>

            <Group justify="center">
              <Button
                component="a"
                href="https://wa.me/919225193354"
                target="_blank"
                color="yellow"
                c="#131a3c"
                radius="xl"
                size="lg"
              >
                WhatsApp Pe Baat Karo
              </Button>

              <Button
                component="a"
                href="#top"
                variant="outline"
                color="gray"
                radius="xl"
                size="lg"
              >
                Free Demo Book Karo
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box component="footer" bg="#0c1230" c="#a6aede" py={56}>
        <Container size="lg" ta={"left"}>
          <Grid mb={44}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Text
                component="a"
                href="#top"
                fw={800}
                fz={28}
                style={{
                  color: "#fff6e8",
                  textDecoration: "none",
                }}
              >
                knect<span style={{ color: "#ffb627" }}>aa</span>
              </Text>

              <Text mt="md" maw={280} color="white">
                Local dukaano ke liye digital pehchaan — NFC card, standee, QR
                aur poora online prachaar, ek hi jagah par.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 3 }}>
              <Title order={4} c="#fff6e8" mb="md">
                Services
              </Title>

              <Stack gap="xs">
                {[
                  "Digital Presence",
                  "NFC Business Card",
                  "Smart Standee",
                  "Super QR",
                ].map((item) => (
                  <Text
                    key={item}
                    component="a"
                    href="#services"
                    c="white"
                    style={{
                      opacity: "0.7",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </Text>
                ))}
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Title order={4} c="#fff6e8" mb="md">
                Contact
              </Title>

              <Stack gap="xs">
                <Text color="white">getinfoknectaa@gmail.com</Text>
                <Text color="white">+91 9225193354</Text>
                <Text color="white">Nagpur, Maharashtra</Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <Box pt="lg" style={{ borderTop: "1px solid rgba(255,246,232,.1)" }}>
            <Group justify="space-between">
              <Text size="sm" color="white">
                © 2026 Knectaa. Sab rights reserved.
              </Text>

              <Text size="sm" color="white" style={{ fontFamily: "monospace" }}>
                MADE FOR LOCAL DUKAANDAAR ❤
              </Text>
            </Group>
          </Box>
        </Container>
      </Box>

      {/* FLOATING WHATSAPP */}
      <ActionIcon
        component="a"
        href="https://wa.me/919225193354"
        target="_blank"
        size={58}
        radius="xl"
        pos="fixed"
        bottom={24}
        right={24}
        className={styles.whatsappButton}
        style={{
          zIndex: 200,
          background: "#25D366",
        }}
      >
        <Text fz={30}>💬</Text>
      </ActionIcon>
    </>
  );
}
