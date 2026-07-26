import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  Clock,
  Flame,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import "./BurgharLovable.css";
import { useNavigate } from "react-router-dom";

import heroPizza from "../../../assets/burghar/hero-pizza.png";
import woodFire from "../../../assets/burghar/wood-fire.jpg";
import veggies from "../../../assets/burghar/veggies.png";
import shakes from "../../../assets/burghar/shakes.jpg";
import g2 from "../../../assets/burghar/gallery-2.jpg";
import g3 from "../../../assets/burghar/gallery-3.jpg";
import g4 from "../../../assets/burghar/gallery-4.jpg";
import g5 from "../../../assets/burghar/gallery-5.jpg";
import logo from "../../../assets/burghar/logo.png";
import { IconRubberStamp } from "@tabler/icons-react";

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */
interface MenuItem {
  name: string;
  desc: string;
  tag?: string;
  src?: string;
}

const menu: MenuItem[] = [
  {
    name: "GOURMET VEGETABLE PIZZA",
    desc: "Freshly baked multigrain base topped with our in-house pizza sauce, jalapeño, paprika, brocolli, cherry tomatoes",
    tag: "Bestseller",
    src: "https://lh3.googleusercontent.com/d/1dwULd1P-klr1mKFERNM4t-BEC-yCuCfm",
  },
  {
    name: "PANEER MAKHANI PIZZA",
    desc: "Freshly baked multigrain base topped with our in-house makhani sauce, onion, cottage cheese, two types of cheese topped with fresh basil.",
    tag: "Spicy",
    src: "https://lh3.googleusercontent.com/d/1fSeUmpzksvSAZ3oBshn76P1njPdF8HFI",
  },
  {
    name: "PERI PERI PANEER PIZZA",
    desc: "Freshly baked multigrain base topped with our in-house peri peri sauce, onion, bell pepper, cottage cheese, cheese topped with fresh basil.",
    tag: "Bestseller",
    src: "https://lh3.googleusercontent.com/d/1vO_-v5Ngh3pvPJdFaSwDPb8ANDanyQlB",
  },
  {
    name: "Corn & Cheese Overload",
    desc: "Sweet corn, three-cheese blend, oregano — melt-in-mouth crust.",
    tag: "Bestseller",
    src: "https://lh3.googleusercontent.com/d/1fSeUmpzksvSAZ3oBshn76P1njPdF8HFI",
  },
];

interface GalleryItem {
  src: string;
  title: string;
}

const gallery: GalleryItem[] = [
  {
    src: "https://lh3.googleusercontent.com/d/1JcY_xJ3ymbbpZ6N2D0i8Y9sYmDIEdhjQ",
    title: "Shahi Mango Shake",
  },
  { src: g5, title: "Margherita Multigrain" },
  { src: g2, title: "Straight From The Oven" },
  { src: g3, title: "Choco Brownie Blast" },
  { src: g4, title: "Strawberry Smoothie" },
  {
    src: "https://lh3.googleusercontent.com/d/1dwULd1P-klr1mKFERNM4t-BEC-yCuCfm",
    title: "Mango Tropic",
  },
  { src: shakes, title: "Shake Lineup" },
  { src: heroPizza, title: "Fully Loaded" },
];

/* -------------------------------------------------------------------------- */
/* Sub-components                                                             */
/* -------------------------------------------------------------------------- */
function Embers() {
  const embers = Array.from({ length: 18 });
  return (
    <Box
      pos="absolute"
      inset={0}
      style={{ pointerEvents: "none", overflow: "hidden" }}
    >
      {embers.map((_, i) => {
        const left = (i * 53) % 100;
        const delay = (i * 0.4) % 6;
        const dx = ((i % 5) - 2) * 30;
        const size = 4 + (i % 4) * 2;
        return (
          <Box
            key={i}
            className="ember-particle anim-ember-rise"
            pos="absolute"
            bottom={0}
            w={size}
            h={size}
            bdrs="50%"
            left={`${left}%`}
            style={{
              animationDelay: `${delay}s`,
              ["--dx" as string]: `${dx}px`,
            }}
          />
        );
      })}
    </Box>
  );
}

function Hero() {
  return (
    <Box
      component="section"
      pos="relative"
      mih="100vh"
      style={{ overflow: "hidden" }}
    >
      <Box pos="absolute" inset={0}>
        <Box
          component="img"
          src={woodFire}
          alt=""
          pos="absolute"
          inset={0}
          w="100%"
          h="100%"
          opacity={0.4}
          style={{ objectFit: "cover" }}
        />
        <Box
          pos="absolute"
          inset={0}
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklch, var(--ds-background) 60%, transparent) 0%, color-mix(in oklch, var(--ds-background) 40%, transparent) 40%, var(--ds-background) 100%)",
          }}
        />
      </Box>
      <Embers />

      <Group
        justify="space-between"
        pos="relative"
        style={{ zIndex: 20 }}
        p="lg"
        wrap="nowrap"
      >
        <Group gap={8}>
          <Box w={28} h={28} pos="relative">
            <Box
              component="img"
              src={logo}
              w={"100%"}
              alt="Downtown Smoothie Logo"
            />
          </Box>
          <Text fz="xl" lts="0.15em">
            DOWNTOWN SMOOTHIE
          </Text>
        </Group>
        <Group gap={32} visibleFrom="md">
          <Anchor
            href="#menu"
            className="nav-link"
            size="sm"
            fw={500}
            tt="uppercase"
            lts="0.15em"
          >
            Menu
          </Anchor>
          <Anchor
            href="#gallery"
            className="nav-link"
            size="sm"
            fw={500}
            tt="uppercase"
            lts="0.15em"
          >
            Gallery
          </Anchor>
          <Anchor
            href="#visit"
            className="nav-link"
            size="sm"
            fw={500}
            tt="uppercase"
            lts="0.15em"
          >
            Visit
          </Anchor>
        </Group>
      </Group>

      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        pos="relative"
        style={{ zIndex: 10, maxWidth: "80rem" }}
        mx="auto"
        px="lg"
        pt={{ base: 32, md: 64 }}
        pb={80}
      >
        <Stack
          className="anim-fade-in-up"
          gap="md"
          pos={"relative"}
          style={{ zIndex: 10 }}
        >
          <Badge
            variant="outline"
            radius="xl"
            size="lg"
            color="var(--ds-basil)"
            leftSection={<Leaf size={12} />}
            style={{
              width: "fit-content",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            100% Pure Vegetarian
          </Badge>
          <Text component="span" fz="3rem" fw={700} ta={"left"} lh={"2.5rem"}>
            THE NO GUILT
            <br /> <span className="gradient-text">MULTIGRAIN</span> <br />{" "}
            PIZZA &amp; SHAKES
          </Text>

          <Text size="lg" c="dimmed" maw={420}>
            Hand-crafted multigrain crusts, loaded with exotic vegetables and{" "}
            <Text component="span" fw={600} c="var(--ds-flame)">
              extra cheese hidden beneath
            </Text>{" "}
            <Text component="span" fw={700} size="xl">
              — Gluten free Pizza.
            </Text>
          </Text>

          <Group gap="md" mt="sm">
            <Button
              component="a"
              href="#menu"
              size="lg"
              radius="xl"
              c="white"
              fw={700}
              tt="uppercase"
              bg="var(--ds-gradient-fire)"
            >
              See The Menu
            </Button>
            {/* <Button
              component="a"
              href="https://www.instagram.com/downtownsmoothey?igsh=NXlueHI1Z2t5cjhx"
              size="lg"
              radius="xl"
              c="white"
              fw={700}
              tt="uppercase"
              bg="linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)"
            >
              Instagram
            </Button>
            <Button
              component="a"
              href="https://maps.app.goo.gl/BMbJj4QL569pKnzQ6"
              size="lg"
              radius="xl"
              c="white"
              fw={700}
              tt="uppercase"
              bg="linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)"
            >
              Rate Us On Google
            </Button> */}
            <Button
              component="a"
              href="https://wa.me/918793370701?text=Hello%20I%20want%20to%20place%20an%20order"
              size="lg"
              radius="xl"
              c="white"
              fw={700}
              tt="uppercase"
              bg="var(--ds-gradient-fire)"
              target="_blank"
            >
              Order Now
            </Button>
          </Group>
        </Stack>

        <Box
          className="anim-spin-slow"
          pos="absolute"
          top={"330px"}
          left={"65px"}
          opacity={0.8}
        >
          <Box className="anim-float-slow" pos="relative">
            <Box
              component="img"
              src={heroPizza}
              alt="Loaded multigrain pizza"
              w={{ base: 340, md: 520 }}
              h={{ base: 340, md: 520 }}
              pos="relative"
              style={{
                zIndex: 10,
                filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.35))",
              }}
            />
          </Box>
        </Box>

        <Box
          pos="absolute"
          inset={0}
          visibleFrom="md"
          display="flex"
          style={{
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <Box
              key={deg}
              pos="absolute"
              className={i % 2 === 0 ? "anim-veg-orbit-1" : "anim-veg-orbit-2"}
              style={{ animationDelay: `${-i * 3}s` }}
            >
              <Box
                component="img"
                src={veggies}
                alt=""
                className="veggie-clip"
                w={64}
                h={64}
                bdrs="50%"
                style={{
                  objectFit: "cover",
                  boxShadow: "var(--ds-shadow-glow)",
                }}
              />
            </Box>
          ))}
        </Box>
      </SimpleGrid>

      <Box
        pos="relative"
        style={{ zIndex: 10, overflow: "hidden", backdropFilter: "blur(8px)" }}
        py="xs"
        bg="oklch(0.12 0.02 40 / 0.6)"
        bd="1px solid color-mix(in oklch, var(--ds-ember) 30%, transparent)"
      >
        <Group
          className="marquee-track"
          gap={48}
          wrap="nowrap"
          c="var(--ds-ember)"
          style={{ whiteSpace: "nowrap" }}
          fz="xl"
          tt="uppercase"
          lts="0.15em"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Group key={i} gap={48} wrap="nowrap">
              <Text fz="inherit">
                🔥 Glutten Free • 🌾 Multigrain • 🧀 Extra Cheese Beneath • 🥬
                Exotic Veggies • 🥤 Thick Shakes •
              </Text>
            </Group>
          ))}
        </Group>
      </Box>
    </Box>
  );
}

function Social() {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      py={40}
      pos="relative"
      style={{ overflow: "hidden" }}
    >
      <Container size="lg" ta="center">
        <Title order={2} size="h1">
          JOIN THE{" "}
          <Text component="span" fz="inherit" className="gradient-text">
            FIRE
          </Text>
        </Title>
        <Text c="dimmed" mt="xs">
          Follow us for daily specials &amp; tag us in your pizza moments.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mt={40}>
          <Anchor
            onClick={() => navigate("/downtown-smoothie/lp")}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            underline="never"
            pos="relative"
            p="lg"
            bdrs="lg"
            ta={"left"}
            bg="linear-gradient(45deg, rgba(254,218,117,0.6), rgba(250,126,30,0.6), rgba(214,41,118,0.6), rgba(150,47,191,0.6), rgba(79,91,213,0.6))"
            bd="1px solid var(--ds-border)"
            style={{ overflow: "hidden", display: "block" }}
          >
            <IconRubberStamp
              color="var(--ds-cheese)"
              size={40}
              style={{ marginBottom: 12 }}
            />
            <Title order={3} size="h2" c={"white"}>
              LOYALITY PROGRAM
            </Title>
            <Text size="sm" c="dimmed" mt={4}>
              Collect 9 stamps & get 10th order free
            </Text>
            <Text mt="md" fw={600} tt="uppercase" c="white" lts="0.15em">
              Join Now →
            </Text>
          </Anchor>
          <Anchor
            href="https://www.instagram.com/downtownsmoothey?igsh=NXlueHI1Z2t5cjhx"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            underline="never"
            pos="relative"
            p="lg"
            bdrs="lg"
            ta={"left"}
            bg="linear-gradient(45deg, rgba(254,218,117,0.6), rgba(250,126,30,0.6), rgba(214,41,118,0.6), rgba(150,47,191,0.6), rgba(79,91,213,0.6))"
            bd="1px solid var(--ds-border)"
            style={{ overflow: "hidden", display: "block" }}
          >
            <Instagram
              color="var(--ds-ember)"
              size={40}
              style={{ marginBottom: 12 }}
            />
            <Title order={3} size="h2" c={"white"}>
              FOLLOW ON INSTAGRAM
            </Title>
            <Text size="sm" c="dimmed" mt={4}>
              @downtownsmoothie — behind the oven, daily.
            </Text>
            <Text mt="md" fw={600} tt="uppercase" c="white" lts="0.15em">
              Follow →
            </Text>
          </Anchor>

          <Anchor
            href="https://maps.app.goo.gl/BMbJj4QL569pKnzQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            underline="never"
            pos="relative"
            p="lg"
            bdrs="lg"
            ta={"left"}
            bg="linear-gradient(90deg, rgba(66,133,244,0.6), rgba(234,67,53,0.6), rgba(251,188,5,0.6), rgba(52,168,83,0.6))"
            bd="1px solid var(--ds-border)"
            style={{ overflow: "hidden", display: "block" }}
          >
            <Group gap={4} mb={12}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  color="var(--ds-cheese)"
                  fill="var(--ds-cheese)"
                  size={28}
                />
              ))}
            </Group>
            <Title order={3} size="h2" c={"white"}>
              LEAVE A GOOGLE REVIEW
            </Title>
            <Text size="sm" c="dimmed" mt={4}>
              Loved your pizza? Tell the world in one click.
            </Text>
            <Text mt="md" fw={600} tt="uppercase" c="white" lts="0.15em">
              Review Us →
            </Text>
          </Anchor>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Menu() {
  return (
    <Box component="section" id="menu" py={40} pos="relative">
      <Container size="xl">
        <Stack align="center" gap={4} mb={56} ta="center">
          <Text size="sm" tt="uppercase" c="var(--ds-ember)" lts="0.4em">
            The Menu
          </Text>
          <Title order={2} size="h1">
            PIZZA{" "}
            <Text component="span" fz="inherit" className="gradient-text">
              &amp;
            </Text>{" "}
            SHAKES
          </Title>
          <Box
            pos="relative"
            style={{
              zIndex: 10,
              overflow: "hidden",
              backdropFilter: "blur(8px)",
            }}
            py="xs"
            bg="oklch(0.12 0.02 40 / 0.6)"
            bd="1px solid color-mix(in oklch, var(--ds-ember) 30%, transparent)"
          >
            <Group
              className="marquee-track"
              gap={48}
              wrap="nowrap"
              c="var(--ds-ember)"
              style={{ whiteSpace: "nowrap" }}
              fz="xl"
              tt="uppercase"
              lts="0.15em"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <Group key={i} gap={48} wrap="nowrap">
                  <Text fz="inherit">
                    🍕 10% Discount on PIZZA 🍕 5% Discount on MANGO SHAKE 🥭
                  </Text>
                </Group>
              ))}
            </Group>
          </Box>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
          {menu.map((item) => (
            <Box
              key={item.name}
              className="menu-card"
              pos="relative"
              p="lg"
              bdrs="lg"
              bg="var(--ds-card)"
              bd="1px solid var(--ds-border)"
              style={{ overflow: "hidden" }}
            >
              {item.src && (
                <Box
                  component="img"
                  src={item.src}
                  alt=""
                  pos="absolute"
                  inset={0}
                  w="100%"
                  h="100%"
                  opacity={0.3}
                  style={{ objectFit: "cover", zIndex: 0 }}
                />
              )}
              <Box pos="relative" style={{ zIndex: 1 }}>
                {item.tag && (
                  <Badge
                    pos="absolute"
                    right={16}
                    top={16}
                    color="var(--ds-ember)"
                    variant="light"
                    size="xs"
                  >
                    {item.tag}
                  </Badge>
                )}
                <Flame
                  color="var(--ds-ember)"
                  size={24}
                  style={{ marginBottom: 12 }}
                />
                <Title order={3} size="h3">
                  {item.name}
                </Title>
                <Text size="sm" c="dimmed" mt={8}>
                  {item.desc}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Gallery() {
  return (
    <Box component="section" id="gallery" py={40} pos="relative">
      <Container size="xl">
        <Stack align="center" gap={4} mb={56} ta="center">
          <Text size="sm" tt="uppercase" c="var(--ds-cheese)" lts="0.4em">
            Digital Gallery
          </Text>
          <Title order={2} size="h1">
            MORE{" "}
            <Text component="span" fz="inherit" className="gradient-text">
              DELICIOUS
            </Text>{" "}
            MOMENTS
          </Title>
        </Stack>

        <SimpleGrid cols={2} style={{ gridAutoRows: 220 }} spacing="md">
          {gallery.map((g, i) => (
            <Box
              key={i}
              className="gallery-tile"
              pos="relative"
              bdrs="lg"
              bd="1px solid var(--ds-border)"
              style={{
                overflow: "hidden",
                gridRow: i === 0 || i === 4 ? "span 2" : undefined,
              }}
            >
              <Box
                component="img"
                src={g.src}
                alt={g.title}
                loading="lazy"
                w="100%"
                h="100%"
                style={{ objectFit: "cover" }}
              />
              <Box
                pos="absolute"
                inset={0}
                opacity={0.7}
                style={{
                  background:
                    "linear-gradient(to top, black, rgb(0 0 0 / 0.3), transparent)",
                }}
              />
              <Box pos="absolute" bottom={16} left={16} right={16}>
                <Text fz="xl" lts="0.1em">
                  {g.title.toUpperCase()}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Visit() {
  return (
    <Box component="section" id="visit" py={40} pos="relative">
      <Container size="lg">
        <Box
          className="wood-texture"
          pos="relative"
          p="xl"
          bdrs="xl"
          bd="1px solid color-mix(in oklch, var(--ds-ember) 30%, transparent)"
          style={{ overflow: "hidden", boxShadow: "var(--ds-shadow-ember)" }}
        >
          <Box
            pos="absolute"
            right={-80}
            top={-80}
            w={240}
            h={240}
            bdrs="50%"
            bg="var(--ds-gradient-ember)"
            style={{ filter: "blur(48px)" }}
          />
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={40} pos="relative">
            <div>
              <MapPin
                color="var(--ds-ember)"
                size={32}
                style={{ marginBottom: 12 }}
              />
              <Title order={3} size="h2">
                FIND US
              </Title>
              <Text c="dimmed" mt={8}>
                Downtown Smoothie
                <br />
                Walker Rd, Badkas Chowk, Mahal, <br /> Nagpur, Maharashtra
                440032
              </Text>
            </div>
            <div>
              <Clock
                color="var(--ds-ember)"
                size={32}
                style={{ marginBottom: 12 }}
              />
              <Title order={3} size="h2">
                HOURS
              </Title>
              <Text c="dimmed" mt={8}>
                Mon – Sun
                <br />
                01:00 PM – 11:59 PM
              </Text>
            </div>
            <div>
              <Phone
                color="var(--ds-ember)"
                size={32}
                style={{ marginBottom: 12 }}
              />
              <Title order={3} size="h2">
                ORDER
              </Title>
              <Text c="dimmed" mt={8}>
                Call to reserve or order pickup
                <br />
                +91 8793370701
              </Text>
            </div>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      py={40}
      bd="1px solid var(--ds-border)"
      style={{ borderLeft: "none", borderRight: "none", borderBottom: "none" }}
    >
      <Container size="xl">
        <Group justify="space-between">
          <Group gap={8}>
            <Flame
              className="anim-flame-flicker"
              color="var(--ds-ember)"
              size={20}
            />
            <Text lts="0.15em">DOWNTOWN SMOOTHIE</Text>
          </Group>
          <Text size="xs" tt="uppercase" c="dimmed" lts="0.15em">
            Wood-Fired · Pure Vegetarian · Made with 🔥
          </Text>
        </Group>
      </Container>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */
export function DowntownSmoothie() {
  return (
    <Box component="main" className="burghar-page">
      <Hero />
      <Social />
      <Menu />
      <Gallery />
      <Visit />
      <Footer />
    </Box>
  );
}

export default DowntownSmoothie;
