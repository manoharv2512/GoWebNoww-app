import {
  Box,
  Stack,
  Text,
  Image,
  Button,
  Group,
  Typography,
  Flex,
} from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconDownload,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { manoharvarma } from "../../userData";

// ── Knectaa logo inline SVG (gold + navy) ────────────────────────────────────
const KnectaaLogo = () => (
  <Group gap={10} align="center" justify="center">
    <svg
      width="40"
      height="40"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="40"
        cy="40"
        r="38"
        stroke="#C9A84C"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M22 28 C22 28 30 40 40 40 C50 40 58 28 58 28"
        stroke="#C9A84C"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 52 C22 52 30 40 40 40 C50 40 58 52 58 52"
        stroke="#C9A84C"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="40" cy="40" r="5" fill="#C9A84C" />
    </svg>
    <Text
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 32,
        fontWeight: 700,
        color: "#c6d2ec",
        letterSpacing: "-0.5px",
      }}
    >
      knectaa
    </Text>
  </Group>
);

// ── Action button ─────────────────────────────────────────────────────────────
interface ActionBtnProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  target?: string;
}

const ActionBtn = ({ href, icon, label, target }: ActionBtnProps) => (
  <Box
    component="a"
    href={href}
    target={target}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      flex: 1,
      padding: "14px 10px",
      borderRadius: 50,
      border: "2px solid #C9A84C",
      background: "transparent",
      color: "#F5ECD7",
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      whiteSpace: "nowrap",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.background = "#C9A84C";
      (e.currentTarget as HTMLElement).style.color = "#0E1C3A";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.background = "transparent";
      (e.currentTarget as HTMLElement).style.color = "#F5ECD7";
    }}
  >
    {icon}
    {label}
  </Box>
);

// ── Main card ─────────────────────────────────────────────────────────────────
interface VisitingCardProps {
  contact: Pick<
    typeof manoharvarma,
    | "name"
    | "profileImg"
    | "bio"
    | "phone"
    | "email"
    | "whatsapp"
    | "instagram"
    | "linkedin"
    | "company"
  >;
}

const KnectaaCard = ({ contact }: VisitingCardProps) => {
  const telHref = `tel:${contact.phone}`;
  const mailHref = `mailto:${contact.email}`;
  const waHref = `https://wa.me/${contact.whatsapp}`;

  const downloadVCard = () => {
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nORG:${contact.company}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`;
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    a.click();
  };

  return (
    <>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');`}</style>

      <Box
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#D4B896",
          padding: 16,
          fontFamily: "'Lato', sans-serif",
        }}
      >
        {/* Card wrapper */}
        <Box
          style={{
            width: "100%",
            maxWidth: 390,
            borderRadius: 40,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            background: "#0E1C3A",
            position: "relative",
          }}
        >
          {/* ── TOP SECTION (beige wave) ── */}
          <Box
            style={{
              position: "relative",
              background: "#E8D5B7",
              paddingBottom: 0,
            }}
          >
            {/* AI chip top-right decoration */}
            {/* <Box
              style={{
                position: "absolute",
                top: 14,
                right: 18,
                background: "rgba(14,28,58,0.08)",
                borderRadius: 10,
                padding: "4px 8px",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6M9 12h6M9 15h4" />
                <path d="M4 9H2M4 12H2M4 15H2M20 9h2M20 12h2M20 15h2M9 4V2M12 4V2M15 4V2M9 20v2M12 20v2M15 20v2" />
              </svg>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#C9A84C",
                  letterSpacing: 1,
                }}
              >
                knectaa
              </Text>
            </Box> */}

            {/* Profile photo with gold ring */}
            <Flex
              direction="column"
              align="center"
              justify="center"
              pt={36}
              pb={0}
              pos="relative"
              style={{ zIndex: 5 }}
            >
              <Box
                style={{
                  width: 118,
                  height: 118,
                  borderRadius: "50%",
                  padding: 4,
                  background:
                    "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #C9A84C 100%)",
                  boxShadow: "0 8px 30px rgba(201,168,76,0.5)",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid #fff",
                  }}
                >
                  <Image
                    src={contact.profileImg}
                    alt={contact.name}
                    width={110}
                    height={110}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Box>
              <Box ta={"center"}>
                <Typography fw={600} fz={25}>
                  {contact.name}
                </Typography>
                <Typography fw={400}>
                  Co-founder & CTO @{contact.company}
                </Typography>
              </Box>
              <Box h={37} w={"100%"} />
            </Flex>

            {/* Wave bottom of beige section */}
            <Box
              style={{
                position: "absolute",
                marginTop: 0,
                zIndex: 2,
                width: "100%",
                top: 194,
                height: "80%",
              }}
            >
              <svg
                viewBox="0 0 390 80"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block", width: "100%" }}
                preserveAspectRatio="none"
              >
                {/* <path d="M0,0 L0,20 Q195,45 390,20 L390,0 Z" fill="#E8D5B7" /> */}
                {/* <path d="M0,0 L0,20 Q195,45 390,20 L390,0 Z" fill="#382302" /> */}
                <path d="M0,40 Q195,90 390,40 L390,80 L0,80 Z" fill="#0E1C3A" />
              </svg>
            </Box>
          </Box>

          {/* ── BOTTOM SECTION (dark navy) ── */}
          <Box
            style={{
              background: "#0E1C3A",
              padding: "24px 24px 36px",
            }}
          >
            <Stack gap="xl" align="center">
              {/* Call + Email row */}
              <Group w="100%" gap={12}>
                <ActionBtn
                  href={telHref}
                  label="Call Me"
                  icon={<IconPhone size={16} />}
                />
                <ActionBtn
                  href={mailHref}
                  label="Email"
                  icon={<IconMail size={16} />}
                />
              </Group>

              {/* WhatsApp + Instagram row */}
              <Group w="100%" gap={12}>
                <ActionBtn
                  href={waHref}
                  label="WhatsApp"
                  target="_blank"
                  icon={<IconBrandWhatsapp size={16} />}
                />
                <ActionBtn
                  href={contact.instagram || "#"}
                  label="Instagram"
                  target="_blank"
                  icon={<IconBrandInstagram size={16} />}
                />
              </Group>

              {/* Save Contact — full gold */}
              <Button
                leftSection={<IconDownload size={16} />}
                onClick={downloadVCard}
                fullWidth
                style={{
                  background:
                    "linear-gradient(90deg, #B8892A 0%, #E8C060 50%, #B8892A 100%)",
                  border: "none",
                  borderRadius: 50,
                  color: "#0E1C3A",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "16px 24px",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
                  height: "auto",
                }}
              >
                Save Contact
              </Button>

              {/* LinkedIn — outline */}
              <Button
                component="a"
                href={contact.linkedin}
                target="_blank"
                leftSection={<IconBrandLinkedin size={18} />}
                fullWidth
                variant="outline"
                style={{
                  borderColor: "#C9A84C",
                  borderRadius: 50,
                  borderWidth: 2,
                  color: "#C9A84C",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "14px 24px",
                  height: "auto",
                  background: "transparent",
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default KnectaaCard;
