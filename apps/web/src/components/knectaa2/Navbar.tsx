import { useState } from "react";
import {
  Box,
  Burger,
  Button,
  Container,
  Group,
  Stack,
  Text,
} from "@mantine/core";

const links = [
  { label: "Kya Milega", href: "#services" },
  { label: "Kaise Kaam Karta Hai", href: "#process" },
  { label: "Kahaniyan", href: "#stories" },
];

export function Navbar() {
  const [opened, setOpened] = useState(false);

  const handleClick = () => setOpened(false);

  return (
    <Box
      component="nav"
      pos="sticky"
      top={0}
      style={{
        zIndex: 100,
        background: "rgba(19,26,60,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,182,39,0.18)",
      }}
    >
      <Container size="lg" py="md">
        <Group justify="space-between">
          <Text
            component="a"
            href="#top"
            fw={800}
            fz={28}
            style={{
              color: "#fff6e8",
              textDecoration: "none",
              fontFamily: "'Baloo 2', sans-serif",
            }}
          >
            knect<span style={{ color: "#ffb627" }}>aa</span>
          </Text>

          <Group visibleFrom="sm" gap="xl">
            {links.map((link) => (
              <Text
                key={link.href}
                component="a"
                href={link.href}
                c="#a6aede"
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </Text>
            ))}

            <Button
              component="a"
              href="#contact"
              radius="xl"
              color="yellow"
              c="#131a3c"
            >
              Free Demo
            </Button>
          </Group>

          <Burger
            hiddenFrom="sm"
            opened={opened}
            onClick={() => setOpened((value) => !value)}
            color="#fff6e8"
          />
        </Group>

        {opened && (
          <Stack hiddenFrom="sm" mt="md" gap="xs">
            {links.map((link) => (
              <Button
                key={link.href}
                component="a"
                href={link.href}
                variant="subtle"
                color="gray"
                justify="flex-start"
                onClick={handleClick}
              >
                {link.label}
              </Button>
            ))}

            <Button
              component="a"
              href="#contact"
              color="yellow"
              onClick={handleClick}
            >
              Free Demo
            </Button>
          </Stack>
        )}
      </Container>
    </Box>
  );
}