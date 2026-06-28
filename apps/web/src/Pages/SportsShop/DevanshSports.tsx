import React, { useState, useRef, useEffect } from "react";
import {
  MantineProvider,
  createTheme,
  Box,
  Text,
  Title,
  Button,
  Group,
  Stack,
  SimpleGrid,
  Card,
  Badge,
  rgba,
  Anchor,
  Flex,
} from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconHome,
  IconShirt,
  IconArrowUp,
} from "@tabler/icons-react";
import {
  ReviewsSection,
  type ReviewsContent,
} from "../../components/common/BusinessPage";
import { SaveDataDialog } from "../../components/common/BusinessPage/SaveDataDialog"; // ← NEW
import instagramLogo from "../../assets/common/Instagram_logo.png";
import saveIcon from "../../assets/common/saveIcon.png";
import googleReviewIcon from "../../assets/common/googleReview.png";
import Footer from "../../components/common/Footer";

// ── Apps Script URL for this customer ────────────────────────────────────────
// Change this per-customer; everything else is reusable.
const DEVANSH_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyRi9CWD_I_ulg2ccv_D2CvBmRo4UjYmS-ejXwJoj7hpeIRrSZfMQlvYhyqyq-f7trg/exec";

export const bunzaaReviews: ReviewsContent = {
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCCfH__QklynzYT3AlaisqjkA9GV3kKmE2Ee-loGYMMeMbBMXfD90gYuUk2UoaCfxYis7HcDQI_-XD2g-aSzPG_D4X75U64GMQWnB6fUFaBTzMB-hQXEbfJ6TxbZC0grUzSIwUX93u4DiYyCXIlfns71ciid0MujvOKLzQMFxjrY5BbRou5onGOvIJVWRV_6CgPrdYbL8vE9kFyjeRsz4bYyjeC52rfmPPP8pkTaoWfFQCrLHyWp2f1t1hREJ5SLr9rTLJkaIjNMjPz",
  title: "Athlete Reviews",
  reviews: [
    {
      name: "K. Sharma",
      text: "The compression kits are world-class. Best performance gear I've used in years. Fast delivery to Mumbai too.",
      rating: 5,
      date: "1 week ago",
    },
    {
      name: "Rahul M.",
      text: "Premium quality fabric. The fit is perfect for marathon training. Definitely coming back for the apparel.",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "Sneha V.",
      text: "Excellent customer service and even better equipment. Devansh Sports is now my go-to for fitness gear.",
      rating: 5,
      date: "4 weeks ago",
    },
  ],
};

// ─── Design Tokens ────────────────────────────────────────────────────────────

const LIME = "#c3f400";
const SURFACE = "#121509";
const ON_SURFACE = "#e2e4d0";
const ON_SURFACE_VAR = "#c5c9ad";
const ON_PRIMARY = "#2a3500";
const GLASS = "rgba(26,26,26,0.65)";
const GLASS_BORDER = "1px solid rgba(255,255,255,0.08)";

// ─── Mantine Theme ────────────────────────────────────────────────────────────

const theme = createTheme({
  fontFamily: "'Hanken Grotesk', sans-serif",
  headings: { fontFamily: "'Oswald', sans-serif" },
  primaryColor: "lime",
  colors: {
    lime: [
      "#f6ffc2",
      "#eeff99",
      "#e3ff66",
      "#d5f533",
      LIME,
      "#afd500",
      "#96b800",
      "#7d9b00",
      "#647e00",
      "#4b6200",
    ],
  },
  defaultRadius: "xs",
});

// ─── Shared helpers ───────────────────────────────────────────────────────────

const mono: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const oswald: React.CSSProperties = { fontFamily: "'Oswald', sans-serif" };

interface LabelProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function Label({ children, style }: LabelProps) {
  return (
    <Text
      size="xs"
      fw={500}
      style={{
        ...mono,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

// ─── Shared layout components ────────────────────────────────────────────────

type Section = "home" | "collection";

interface NavBarProps {
  onNav: (section: Section) => void;
}

function NavBar({ onNav }: NavBarProps) {
  const items: { label: string; icon: React.ReactNode; section: Section }[] = [
    { label: "Home", icon: <IconHome size={22} />, section: "home" },
    { label: "Apparel", icon: <IconShirt size={22} />, section: "collection" },
  ];

  return (
    <Box
      component="nav"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 4,
        paddingBottom: 24,
        paddingInline: 16,
        background: rgba(SURFACE, 0.92),
        backdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {items.map(({ label, icon, section }) => (
        <Box
          key={label}
          onClick={() => onNav(section)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            color: ON_SURFACE_VAR,
            opacity: 0.7,
            cursor: "pointer",
            transition: "color 0.15s, opacity 0.15s",
            userSelect: "none",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.color = LIME;
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.color = ON_SURFACE_VAR;
            e.currentTarget.style.opacity = "0.7";
          }}
        >
          {icon}
          <Label>{label}</Label>
        </Box>
      ))}
    </Box>
  );
}

function FooterSection() {
  const footerLinks = [
    {
      label: "Find Us",
      href: "https://maps.app.goo.gl/W8weuYWVv49ap4ns9",
    },
    {
      label: "Phone no.",
      href: "tel:7385623459",
    },
    {
      label: "Whatsapp",
      href: "https://wa.me/918010827353?text=Hi%20Devansh%20Sports,%20I%20am%20interested%20in%20your%20products.",
    },
    {
      label: "Google Location",
      href: "https://maps.app.goo.gl/W8weuYWVv49ap4ns9",
    },
  ];
  return (
    <Box
      component="footer"
      style={{
        marginTop: 40,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 20px 96px",
        background: "#0d0f05",
      }}
    >
      <Stack gap="md">
        <Title
          order={5}
          style={{
            ...oswald,
            fontWeight: 700,
            textTransform: "uppercase",
            color: ON_SURFACE,
            fontSize: 18,
          }}
        >
          DEVANSH SPORTS
        </Title>
        <SimpleGrid cols={1} spacing="md">
          <Flex gap="xs" justify="center" wrap="wrap">
            {footerLinks.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  color: ON_SURFACE_VAR,
                  fontSize: 14,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = LIME)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = ON_SURFACE_VAR)
                }
              >
                {link.label}
              </Anchor>
            ))}
          </Flex>
        </SimpleGrid>
      </Stack>
      <Footer
        bgColorState="black"
        fontColor="rgba(255, 255, 255, 0.7)"
        text={`©️ ${new Date().getFullYear()} Knectaa. All rights reserved.`}
      />
    </Box>
  );
}

// ─── HOME SECTION ─────────────────────────────────────────────────────────────
const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeOFcF8VL3PDdI6VFxG0pCdMNIpP9NYSFjD5HDBHk-Fp4y7H-5rshZmY5zlxHY_NMl1fZUDUhEfOteVl7fUKQDvK32F3PvWq4zDQp1mL_RWed7TIQJ4luSuFIcyjUz5y9qHfPgVjnwiD64xhLu-SHQCyAMsSUN55gfScEyY_Fjz3rrHe4UtrZvNf0gd57cZuLYxD8jXjXfTonRS2LL5X9d7DzGkB8bEtqUkH0xsBm6OUDXQafDFpPJwaZQekuaXcWQ3WMucuybmVV1";

interface HomeSectionProps {
  onExplore: () => void;
}

function HomeSection({ onExplore }: HomeSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // ── NEW: controls Save Data dialog ────────────────────────────────────────
  const [saveDataOpen, setSaveDataOpen] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const h = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", h, { passive: false });
    return () => el.removeEventListener("wheel", h);
  }, []);

  // Quick-link definitions — "Save Data" triggers the dialog via onClick,
  // all others are plain anchor hrefs.
  const quickLinks: {
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
  }[] = [
    {
      icon: <img src={instagramLogo} alt="Instagram" width={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/devansh_sports_01?utm_source=qr&igsh=dG9ndW5uZjhxbTNt",
    },
    {
      icon: <IconBrandWhatsapp size={20} />,
      label: "WhatsApp Community",
      href: "https://chat.whatsapp.com/LpsA0f3FChgK61tC4AvcJJ",
    },
    {
      icon: <img src={saveIcon} alt="Save_Data" width={20} />,
      label: "Save Data",
      // ← no href; onClick opens the dialog instead
      onClick: () => setSaveDataOpen(true),
    },
    {
      icon: <img src={googleReviewIcon} alt="GoogleReview" width={20} />,
      label: "Google Review",
      href: "https://maps.app.goo.gl/W8weuYWVv49ap4ns9",
    },
  ];

  return (
    <Box component="section">
      {/* ── Save Data dialog ── */}
      <SaveDataDialog
        appsScriptUrl={DEVANSH_APPS_SCRIPT_URL}
        open={saveDataOpen}
        onClose={() => setSaveDataOpen(false)}
      />

      <Box
        style={{
          position: "relative",
          width: "100%",
          height: 751,
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <Box style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src={HERO_IMG}
            alt="Elite athlete training"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(0.2) contrast(1.1)",
            }}
          />
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${SURFACE} 0%, transparent 60%)`,
              opacity: 0.9,
            }}
          />
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to right, ${rgba(SURFACE, 0.6)}, transparent)`,
            }}
          />
        </Box>
        <Box
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 20px 64px",
            width: "100%",
            maxWidth: 640,
          }}
        >
          <Title
            order={2}
            style={{
              ...oswald,
              fontSize: "clamp(30px,10vw,52px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              marginBottom: 24,
              color: ON_SURFACE,
            }}
          >
            Devansh Sports
          </Title>
          <Badge
            variant="light"
            style={{
              ...mono,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: 11,
              marginBottom: 16,
              background: rgba(LIME, 0.12),
              color: LIME,
              border: "none",
              borderRadius: 2,
            }}
          >
            New Arrival Season 2026
          </Badge>
          <Title
            order={2}
            style={{
              ...oswald,
              fontSize: "clamp(40px,10vw,52px)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              marginBottom: 24,
              color: ON_SURFACE,
            }}
          >
            Engineered for
            <br />
            <span
              style={{
                color: LIME,
                textShadow: `0 0 15px ${rgba(LIME, 0.45)}`,
              }}
            >
              The Elite
            </span>
          </Title>
          <Text
            style={{
              fontSize: 18,
              lineHeight: "28px",
              color: ON_SURFACE_VAR,
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            🏏⚽🏸🏐 All-in-One Sports Store Sportswear | Accessories | Team
            Kits | Equipment Quality • Performance • Passion
          </Text>
          <Button
            size="lg"
            onClick={onExplore}
            style={{
              background: LIME,
              color: ON_PRIMARY,
              ...oswald,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontSize: 16,
              height: 52,
              paddingInline: 40,
              borderRadius: 2,
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.currentTarget.style.boxShadow = `0 0 22px ${rgba(LIME, 0.4)}`)
            }
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.currentTarget.style.boxShadow = "none")
            }
          >
            Explore Collection
          </Button>
        </Box>
      </Box>

      <Stack gap={40} px={20} py={40}>
        {/* ── Quick links grid — href cards open new tab, onClick card opens dialog */}
        <SimpleGrid cols={2} spacing="md">
          {quickLinks.map(({ icon, label, href, onClick }) => (
            <Card
              key={label}
              component={onClick ? "div" : "a"}
              href={onClick ? undefined : href}
              target={href ? "_blank" : undefined}
              rel={href ? "noopener noreferrer" : undefined}
              onClick={onClick}
              p="md"
              style={{
                background: GLASS,
                backdropFilter: "blur(20px)",
                border: GLASS_BORDER,
                cursor: "pointer",
              }}
            >
              <Stack align="center" gap="sm">
                <Box
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: LIME,
                  }}
                >
                  {icon}
                </Box>
                <Label style={{ color: "white" }}>{label}</Label>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
        <ReviewsSection {...bunzaaReviews} />
      </Stack>
    </Box>
  );
}

// ─── COLLECTION SECTION ───────────────────────────────────────────────────────

interface GalleryItem {
  badge: string;
  badgeLime: boolean;
  title: string;
  sub: string;
  img: string;
}

const galleryItems: GalleryItem[] = [
  {
    badge: "TRENDING",
    badgeLime: true,
    title: "Elite Training Series",
    sub: "Precision engineered for the top 1%.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJKp9piTujszuvxx0Ew4wUX8uQ8Kg0rkxbyMnHcv5TeFp3hwXYRwYoJkUS9MG9VnuZzc1fzCLN7OSpqHUxF2Qw3f1dG59HeXs7AesE7hHO013qXN7XTBXVS6Lb0kYEp87U26ubhFcX3m9kE29gr8uKJMcDzS0i0MMkoQ2coclFHen2sLQd1dG5qFEIXfiAMmIZtB0ElA9QX7KVAlMOwy55koXYjGLK1Y8c7AyNc21O7FEVXtgn-I-r9UQPae0_cspIRJnuYpk9RLhA",
  },
  {
    badge: "TECH FOCUS",
    badgeLime: false,
    title: "Hexa-Breathe Mesh",
    sub: "Zero heat retention. Absolute focus.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7wlKJEH-c2VbghPi1_wIeK0b-nkmlHnsivU5VmvDmt6ZvgoLSk-vWib1vDtJ_eDOMMQX0Ei59YXU8r3bjzsgDAOjuDOKOwM4DoFHAI_ioJydjEholndvdzOnIjeFXmybSDr0eOj3FfsOnpp-VT7TLXd0GKExwHtYGQGRRCQOAarZRi6QF1fyNK0M-zXtFIV4yJ1bkrb8dNzs9P2-wnStTfRnfBizA5TrN3GSuv5ioxjN4TPfOZBXIn7FfOoHkvnj1aEjUwSgWlRhV",
  },
  {
    badge: "NEW ARRIVAL",
    badgeLime: true,
    title: "Midnight Velocity",
    sub: "Unseen speed, visible style.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCfH__QklynzYT3AlaisqjkA9GV3kKmE2Ee-loGYMMeMbBMXfD90gYuUk2UoaCfxYis7HcDQI_-XD2g-aSzPG_D4X75U64GMQWnB6fUFaBTzMB-hQXEbfJ6TxbZC0grUzSIwUX93u4DiYyCXIlfns71ciid0MujvOKLzQMFxjrY5BbRou5onGOvIJVWRV_6CgPrdYbL8vE9kFyjeRsz4bYyjeC52rfmPPP8pkTaoWfFQCrLHyWp2f1t1hREJ5SLr9rTLJkaIjNMjPz",
  },
];

interface ApparelCategory {
  title: string;
  count: string;
  span2: boolean;
  height: number;
  img: string;
}

const apparelCategories: ApparelCategory[] = [
  {
    title: "Top Wear",
    count: "64 ITEMS",
    span2: true,
    height: 256,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Nsj_NVCp_cen_5PUYiMQHleeJD9oRxS1FNZjL3H17_VxO6t8gnMRLeGuaAi7tbdWyjLM2ac8LblOS1NX8kHbMRgJozkspELj2_0NfrTw-eK49o6yE-WKrvfX0OUNwWatDLMK3NZr17Vwn17y-jKUHwyUhZYYpd86TyBio9F50W5TYC2lJ0BAoOIkfSlA1mrHWWqJXzOkkz_smfn-DLWkMXs2JA9aeYcpw6Jo1kAGxOgDFrW1qDPwYmUgc3byx5I2QLpnYAY7uSmB",
  },
  {
    title: "Bottoms",
    count: "42 ITEMS",
    span2: false,
    height: 256,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2h-Q65J0btr0tnKdcu-V3DIeNWq48R8LncYIxJ_r5csMpJ0SB7hmysaXLS9IvNBk63kntWVV7GkVt4M0sw41jN3y0wqSh9tmj9MPAgTwCIP7gClWo1liYGXAwxXlsUPiP3bZoV9Gf5ony9Ef_KSf505mAWjrdkOAg5EGQUBPwxq4SulXQUIb1drX2cDi2nVzHmsnOKQP71y0q1AeoqU38fmYc9jygtk5eiqKzwHQm_X5kiHSiwjfTYTpeLDMlblH73TjYohtxjwZG",
  },
  {
    title: "Inners",
    count: "28 ITEMS",
    span2: false,
    height: 256,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgYm3caj7qNkIDvW5j23qGJ28_u79gNey09MaZI_F4u4gMRypyjYRBc9R4JEKrC2sgU-ZzEx6i4DKT89bS0ukCIEcaPwdYY_OKt1h84COE39QeVMDchq64BvherTDNBCursq2vGjIxmHlJ_Jfww7xHDS7sxVrqLIZMdnDnTZq3opA9Dt-pWv2jcAhNb0xXl6b4Z1vgeUW8KNRQyfPV6ZDRMuoRuThZzkPGHX4fsPHIlWLKqL8kLMEZ72pUC3jw9oE3qPlTh0D1Re0B",
  },
];

const TRACKSUIT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlmB_yyo5nSy7yx_N9e4MFOhXWp-YO2BTjCD6qRtqMdS1SwJ85eyVf46_OshUJmqJ-J-4dTYxoHdyblIg5A1eXe0_PxlTbO-SvmrieWm-76AY4j7mxzPYCksKXtVsqcCPvlELjG4B1rGxD4CwAw1CP5D5-wMT6KCvI_lyJsxn9bghvqu3ya-OCxG5Z3ul6T2cAGMI7pUcuiZjLz2P9FJQIZhu2l2y295SJUduMADKL47WjzEdJ-K202LpdkPAW85UMasy3KSMnKRFd";

function GalleryCard({ badge, badgeLime, title, sub, img }: GalleryItem) {
  const [hovered, setHovered] = useState(false);
  return (
    <Box
      style={{
        flexShrink: 0,
        width: "85vw",
        maxWidth: 480,
        height: 450,
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        scrollSnapAlign: "center",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          borderRadius: 8,
          pointerEvents: "none",
          boxShadow: hovered
            ? `inset 0 0 0 2px ${LIME}, 0 0 32px ${rgba(LIME, 0.25)}`
            : "inset 0 0 0 0px transparent",
          transition: "box-shadow 0.4s ease",
        }}
      />
      <img
        src={img}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: hovered
            ? "grayscale(0) brightness(1.06) saturate(1.1)"
            : "grayscale(0) brightness(1.06) saturate(1.1)",
          transform: hovered ? "scale(1.04)" : "scale(1.08)",
          transition: "filter 0.55s ease, transform 0.65s ease",
        }}
      />
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? `linear-gradient(to top, ${SURFACE} 0%, rgba(0,0,0,0.15) 55%, transparent 100%)`
            : `linear-gradient(to top, ${SURFACE} 0%, transparent 60%)`,
          opacity: hovered ? 0.9 : 0.85,
          transition: "opacity 0.4s ease",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: 20,
          width: "100%",
          zIndex: 10,
        }}
      >
        <Badge
          variant="filled"
          size="xs"
          style={{
            background: badgeLime ? LIME : "rgba(41,43,30,0.9)",
            color: badgeLime ? ON_PRIMARY : LIME,
            border: badgeLime ? "none" : `1px solid ${rgba(LIME, 0.3)}`,
            ...mono,
            letterSpacing: "0.08em",
            marginBottom: 8,
            borderRadius: 999,
            textTransform: "uppercase",
            opacity: hovered ? 1 : 0.75,
            transition: "opacity 0.3s ease",
          }}
        >
          {badge}
        </Badge>
        <Title
          order={3}
          style={{
            ...oswald,
            fontSize: 24,
            textTransform: "uppercase",
            lineHeight: 1.1,
            marginBottom: 4,
            color: hovered ? "#fff" : ON_SURFACE_VAR,
            textShadow: hovered ? `0 0 12px ${rgba(LIME, 0.3)}` : "none",
            transition: "color 0.4s ease, text-shadow 0.4s ease",
          }}
        >
          {title}
        </Title>
        <Text size="sm" c={ON_SURFACE_VAR}>
          {sub}
        </Text>
      </Box>
    </Box>
  );
}

function ApparelCard({ title, span2, height, img }: ApparelCategory) {
  const [hovered, setHovered] = useState(false);
  return (
    <Box
      style={{
        gridColumn: span2 ? "1 / -1" : undefined,
        height,
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        background: GLASS,
        border: GLASS_BORDER,
        backdropFilter: "blur(20px)",
        transform: hovered ? "scale(0.98)" : "scale(1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={img}
        alt={title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hovered ? 1 : 1,
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "opacity 0.4s, transform 0.5s",
        }}
      />
      <Box
        style={{
          position: "absolute",
          inset: 0,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Title
          order={4}
          style={{
            ...oswald,
            fontSize: 22,
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          {title}
        </Title>
      </Box>
    </Box>
  );
}

function CollectionSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    const down = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };
    const up = () => {
      isDragging.current = false;
    };
    const move = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      el.scrollLeft =
        scrollLeftRef.current - (e.pageX - el.offsetLeft - startX.current) * 2;
    };
    el.addEventListener("mousedown", down);
    el.addEventListener("mouseup", up);
    el.addEventListener("mouseleave", up);
    el.addEventListener("mousemove", move);
    return () => {
      el.removeEventListener("mousedown", down);
      el.removeEventListener("mouseup", up);
      el.removeEventListener("mouseleave", up);
      el.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <Box component="section" pt={40}>
      <Box
        px={20}
        mb={32}
        style={{ borderTop: `1px solid ${rgba(LIME, 0.15)}`, paddingTop: 40 }}
      >
        <Label style={{ color: LIME, letterSpacing: "0.12em" }}>
          Digital Arena
        </Label>
        <Title
          order={2}
          style={{
            ...oswald,
            fontSize: 28,
            textTransform: "uppercase",
            marginTop: 4,
            color: ON_SURFACE,
          }}
        >
          The Performance Gallery
        </Title>
      </Box>

      <Box
        ref={galleryRef}
        style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          paddingInline: 20,
          paddingBottom: 16,
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          cursor: "grab",
          userSelect: "none",
        }}
      >
        {galleryItems.map((item) => (
          <GalleryCard key={item.title} {...item} />
        ))}
      </Box>

      <Box component="section" px={20} mt={40} mb={40}>
        <Box mb={16}>
          <Label style={{ color: LIME, letterSpacing: "0.12em" }}>
            Collections
          </Label>
          <Title
            order={2}
            style={{
              ...oswald,
              fontSize: 28,
              textTransform: "uppercase",
              marginTop: 4,
              color: ON_SURFACE,
            }}
          >
            Performance Apparel
          </Title>
        </Box>
        <SimpleGrid cols={2} spacing="sm">
          {apparelCategories.map((cat) => (
            <ApparelCard key={cat.title} {...cat} />
          ))}
          <Box
            style={{
              gridColumn: "1 / -1",
              height: 192,
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              cursor: "pointer",
              background: GLASS,
              border: GLASS_BORDER,
            }}
          >
            <img
              src={TRACKSUIT_IMG}
              alt="Pro Tracksuits"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 1,
                transition: "opacity 0.4s, transform 0.5s",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
                e.currentTarget.style.opacity = "0.6";
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
            <Box
              style={{
                position: "absolute",
                inset: 0,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Group align="center" gap={12} mb={8}>
                <Title
                  order={4}
                  style={{
                    ...oswald,
                    fontSize: 22,
                    textTransform: "uppercase",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Pro Tracksuits
                </Title>
                <Box
                  style={{
                    flex: 1,
                    maxWidth: 100,
                    height: 4,
                    background: "#2D2D2D",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    style={{ height: "100%", width: "75%", background: LIME }}
                  />
                </Box>
              </Group>
              <Group justify="space-between" align="center">
                <Text size="sm" c={ON_SURFACE_VAR}>
                  Full coverage high-octane gear.
                </Text>
              </Group>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

// ─── ACCESSORIES SECTION ──────────────────────────────────────────────────────

interface AccessoryItem {
  tag: string;
  title: string;
  price: string;
  img: string;
}

const accessoryItems: AccessoryItem[] = [
  {
    tag: "TRAINING",
    title: "Carbon Grip Gloves",
    price: "99.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdL9SKTIt0jqzbydLwUlIpKJo4wQi-mA0aKQZmNo1UN2ubz45XE74u8Yvdqgtgdy2nrPY4pVx88rS7JIMD38rGPMOU6LgtUBEiAmXu_pVzewAoJFM6VlH9-Pf1fJxA587PgLG6LOv0PDBsORbE_erYLf-ErqUBorrypZNdjIhZBbeCS6OFvBtvLGvCHixJw_DgU6QhXuoF-c4bfMtdDdMYcviPR3k5nLoY8PMNxCoY8CpH17zh72utohFAMVxva0SIKR6WdsxuE4tC",
  },
  {
    tag: "COMPRESSION",
    title: "Aero-Flow Sleeves",
    price: "99.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz1DXj68aE_cbJxBcIiodsuYOuPwpQ4dMchRXJhTIb6TBtrkAcEJu6-2_Qukb5LA57jTBkS6sjqw5n0bxFV--4QWcQuPwqpoV_08YpHOyGESz4db7vW4dP2khAn2jjeqPpC-iwHwmdXYmveygr03AQ4eBSgQ09qdVjdOGwff28QwFhrfMGoEnmcfhfm1vL2z8PYVqxW1mN-NZf01-9ELsYVBADYmifd_Xt98Imv6Oac5jpghvrltglmEr22gjJatTr6UuGpjV4HDCa",
  },
  {
    tag: "STRENGTH",
    title: "Elite Hand Grips",
    price: "99.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiek0vXRh8EtLfWF3ae9KYed2olZ68z-i7G0bzLF7EQlzcPc_JbxtcpISrRDrJZOJdNuMZcoWYl5Wv8QtglRv1lPW-SN2a81K7-Gx7W36UfB_uAi6loGKuYIfChKj3VSDqKDnGJQ64-l42fJ6aqc3xAn5H2d8M7Ktd4Xyzttd9cWfM2aZs7K7JPlQq0Zilj4I_nfiSZF-vlYuir2EZVebWZ937roZ6b_lWdKjE-rlJkMScrTI7ObjVEshecBRPiJqc74SU7bjhhXPc",
  },
  {
    tag: "SPEED",
    title: "Velocity Speed Rope",
    price: "99.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbxWoZ1XjOvQ3ys5_8Haf6jjgHfh06AyDq7BZt0RnG0IYTneMItGE4rGRVuLfEvWVrSvYyMTfk8Q2WvtemOg8lO2aC6MLT3XPHMFMG17MFOA5aZW9UAWYnT9vH6b0WmeP2225nc30O7d99B_ZY744PeCaFNKrbf5qth_dn7NGwcUDsQdzZc5pM_88Fy8CWEHrm9zP24IK6EIrbEf0zQfvccUDEY_Ii0lps1oWEfBMB3SJp5EQllcK0IpsFDLiAZ_06PcOVTM5CsNOg",
  },
  {
    tag: "OUTDOOR",
    title: "Lite-Force Coat",
    price: "99.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq0au8EsTL0EZM1JiW3MRI05SFpPce0YK29c7kygT0u9SnKAZLErp1oF8J35t90vi_zEDw1x5HICOJm970Quwz8VU9VLOmwta7N2MV7iCjgKl81xr4xbvlNL-Jz_RwcC3xtMsKFLrHncg2lZaGue2kGQ9ER135_fkI85mJM0v9lndCxeYzhFEjbOeDlakcg6QH8HThscw4gFk7XeqxEvi7eF1Hm8ckPnWLpTqJIKpa9d1FQihyTCN35tEBCUjxy12sLoUbD2j8mq-F",
  },
  {
    tag: "VISION",
    title: "Sonic Vision Shades",
    price: "99.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCtsjrOxmH64aGkc1VCBzQFucSyQTaCDMoz93onftiENiaVzlUvxT8JHrNSpyso8MV00_WWGHImogI4g_l-kcULHgLtRUgQNZS1aoGE62L1_uk8f6GmIR5uISGzmnk62_2zyFzAYBzdSMTQQiMXcEjWR9aaaTgH18JaeCG6yVhNjn6sH-Qy6d7fco4m05hu6vOPJ0qWFHs4p3bLqkRQmq93-P5AAsv4oe5-h6ZW2WPuiv3kpus8assat7slpISUOb6Rj_SPbmFrz_",
  },
  {
    tag: "AQUATIC",
    title: "Hydro-Peak Goggles",
    price: "99.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOXzwPcOX3C8te9uNUJ0Y7gxaIWWDZDvFv4PQO1YytZI_Z5bqqNdxlObAo29tCSRIszk7blkbKiMIIIq8LozoJ-LOrAN04uUhvIshfzaMX4ShaQshsKD70l1s7gWFD4UQ5AR2VGCCo8tBq1PIaWyFa4ATtSGSqC3lCQT3dbi7QZd_J2kcMIrKlwLLIn2qRdQ3oYhSifO3I39S0d3dhvQo1gMZR4MOU2swe_fQ1Cv9J-HapE3FHwaOGzwRdQgd0b7dvyakRjIGq4Kda",
  },
  {
    tag: "AQUATIC",
    title: "Pro-Glide Swim Cap",
    price: "99.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKIc2o9kuhSU6WHgiDkQc7EUA4m91zI2uJ2_3LppMEszSB251seQVGPe1xQlf5PMXBE0CbNQCV2-1aQjHGFCVi3KdYpB7uKqO_5bdfP9jJBLKl5yTaOJna74pjPfRcfhu8fFa51mfUMaFD59YlKZ76tfJ9SslHQoMJpJ1KzIvs2mqbC4yHmbeSonCzuYdRCniziOnAJQwgdsde0QrJDvd_QNlxFkCyZ8eb5KpQibP5cEiuPtoFEf-VZNkFaU89WhvuUq8QbpGwXsZa",
  },
];

const STOCK_FILLED = 4;
const STOCK_TOTAL = 7;

function AccessoryCard({ tag, title, img }: AccessoryItem) {
  return (
    <Box
      style={{
        position: "relative",
        background: GLASS,
        backdropFilter: "blur(20px)",
        border: GLASS_BORDER,
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) =>
        (e.currentTarget.style.transform = "scale(0.98)")
      }
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <Box
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          zIndex: 10,
          background: LIME,
          color: ON_PRIMARY,
          ...mono,
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "2px 6px",
          borderRadius: 0,
        }}
      >
        {tag}
      </Box>
      <Box
        style={{
          aspectRatio: "4/5",
          overflow: "hidden",
          background: "#1a1a1a",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.8,
            transition: "opacity 0.4s, transform 0.6s",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
            e.currentTarget.style.opacity = "0.8";
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </Box>
      <Box style={{ padding: "12px 14px 14px" }}>
        <Title
          order={5}
          style={{
            ...oswald,
            fontSize: 16,
            textTransform: "uppercase",
            color: ON_SURFACE,
            marginBottom: 8,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Title>
      </Box>
    </Box>
  );
}

function AccessoriesSection() {
  return (
    <Box px={20} pt={40} style={{ maxWidth: 800, margin: "0 auto" }}>
      <Box
        mb={32}
        style={{ borderTop: `1px solid ${rgba(LIME, 0.15)}`, paddingTop: 40 }}
      >
        <Title
          order={2}
          style={{
            ...oswald,
            fontSize: "clamp(24px, 6vw, 32px)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            color: ON_SURFACE,
            marginBottom: 8,
          }}
        >
          Premium Sports Accessories
        </Title>
        <Text
          style={{
            color: ON_SURFACE_VAR,
            opacity: 0.8,
            maxWidth: 420,
            lineHeight: "24px",
          }}
        >
          Engineered for elite performance. High-tech tools for every training
          modality.
        </Text>
      </Box>
      <SimpleGrid cols={2} spacing="md" mb={40}>
        {accessoryItems.map((item) => (
          <AccessoryCard key={item.title} {...item} />
        ))}
      </SimpleGrid>
      <Box
        style={{
          background: GLASS,
          backdropFilter: "blur(20px)",
          border: "1px dashed rgba(195,244,0,0.25)",
          borderRadius: 4,
          padding: 16,
          marginBottom: 40,
        }}
      >
        <Label style={{ color: LIME, marginBottom: 8 }}>
          Live Inventory Rating
        </Label>
        <Group gap={4} mb={8}>
          {Array.from({ length: STOCK_TOTAL }).map((_, i) => (
            <Box
              key={i}
              style={{
                flex: 1,
                height: 12,
                borderRadius: 2,
                background: i < STOCK_FILLED ? LIME : rgba(LIME, 0.15),
              }}
            />
          ))}
        </Group>
        <Label style={{ color: ON_SURFACE_VAR, opacity: 0.8 }}>
          High Demand: 40% Stock Remaining
        </Label>
      </Box>
    </Box>
  );
}

// ─── App Shell ────────────────────────────────────────────────────────────────

function DevanshSApp() {
  const homeRef = useRef<HTMLDivElement>(null);
  const collectionRef = useRef<HTMLDivElement>(null);

  const scrollTo = (section: Section) => {
    const targets: Record<Section, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      collection: collectionRef,
    };
    const ref = targets[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      style={{
        background: "#131313",
        color: ON_SURFACE,
        minHeight: "100dvh",
        overflowX: "hidden",
        fontFamily: "'Hanken Grotesk', sans-serif",
      }}
    >
      <Box component="main" pt={64}>
        <Box ref={homeRef}>
          <HomeSection onExplore={() => scrollTo("collection")} />
        </Box>
        <Box ref={collectionRef}>
          <CollectionSection />
        </Box>
        <AccessoriesSection />
        <FooterSection />
      </Box>

      <Box
        onClick={handleScrollTop}
        style={{
          position: "fixed",
          bottom: 96,
          right: 20,
          zIndex: 40,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: LIME,
          color: ON_PRIMARY,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: `0 4px 20px ${rgba(LIME, 0.3)}`,
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) =>
          (e.currentTarget.style.transform = "scale(1.1)")
        }
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
        aria-label="Scroll to top"
      >
        <IconArrowUp size={20} />
      </Box>

      <NavBar onNav={scrollTo} />
    </Box>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <DevanshSApp />
    </MantineProvider>
  );
}
