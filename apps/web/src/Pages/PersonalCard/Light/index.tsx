import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCheck,
  IconChevronRight,
  IconCircleCheckFilled,
  IconMail,
  IconMapPin,
  IconMessageCircle,
  IconPhone,
  IconSparkles,
  IconUserPlus,
} from "@tabler/icons-react";

import bgImg from "../../../assets/VisitingCard/theme/3.jpeg";

export interface PersonalCardData {
  name: string;
  location: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  instagram: string;
  services: string[];
  profileImg: string;
}

interface Props {
  contact: PersonalCardData;
}

const glassCard = {
  background: "rgba(255,255,255,0.28)",
  backdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.45)",
  boxShadow: "0 8px 32px rgba(31,38,135,0.08)",
};

export const PersonalCard = ({ contact }: Props) => {
  const downloadVCard = () => {
    const vCard = `BEGIN:VCARD
        VERSION:3.0
        FN:${contact.name}
        ORG:${contact.company}
        TITLE:${contact.title}
        TEL:${contact.phone}
        EMAIL:${contact.email}
        END:VCARD`;

    const blob = new Blob([vCard], {
      type: "text/vcard",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.name}.vcf`;
    a.click();
  };

  return (
    <Flex justify="center" align="center" mih="80vh" bg="#f5f7fb" p="md">
      <Paper
        radius={40}
        p={18}
        maw={500}
        w="100%"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid rgba(255,255,255,0.45)",
          boxShadow: "0 15px 50px rgba(0,0,0,0.12)",
        }}
      >
        {/* Top Blur */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.38), rgba(255,255,255,0.18))",
            backdropFilter: "blur(6px)",
          }}
        />

        <Stack
          gap={14}
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* PROFILE */}
          <Stack align="center" gap={14} pos="relative">
            <Box
              style={{
                padding: 5,
                borderRadius: "100%",
                background: "linear-gradient(135deg,#ffffff,#dbeafe,#fbcfe8)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            >
              <Avatar src={contact.profileImg} size={140} radius="100%" />
            </Box>

            {/* LOCATION */}
            <Paper
              pos="absolute"
              right={0}
              top={120}
              radius="xl"
              px="sm"
              py={4}
              style={glassCard}
            >
              <Group gap={6}>
                <IconMapPin size={14} color="#334155" />

                <Text fw={500} fz="sm" c="#334155">
                  {contact.location}
                </Text>
              </Group>
            </Paper>

            {/* NAME */}
            <Group gap={8}>
              <Title
                order={1}
                fw={900}
                c="#0f172a"
                fz={24}
                style={{
                  lineHeight: 1,
                  textAlign: "center",
                }}
              >
                {contact.name}
              </Title>

              <IconCircleCheckFilled size={24} color="#2563eb" fill="#2563eb" />
            </Group>

            {/* TITLE */}
            <Text
              ta="center"
              fw={800}
              c="#0f172a"
              style={{
                fontSize: "18px",
              }}
            >
              {contact.title} |{" "}
              <span
                style={{
                  color: "#2563eb",
                }}
              >
                {contact.company}
              </span>
            </Text>

            {/* DIVIDER */}
            <Group w="100%" align="center" gap="xs">
              <Divider
                style={{
                  flex: 1,
                }}
                color="rgba(37,99,235,0.2)"
              />

              <IconSparkles size={18} color="#93c5fd" />

              <Divider
                style={{
                  flex: 1,
                }}
                color="rgba(37,99,235,0.2)"
              />
            </Group>
          </Stack>

          {/* SAVE BUTTON */}
          <Button
            h={46}
            radius="xl"
            fullWidth
            onClick={downloadVCard}
            leftSection={<IconUserPlus size={24} />}
            style={{
              background: "linear-gradient(90deg,#2563eb,#8b5cf6)",
              fontSize: "16px",
              fontWeight: 600,
              boxShadow: "0 15px 30px rgba(59,130,246,0.35)",
            }}
          >
            SAVE CONTACT
          </Button>

          {/* CONTACT GRID */}
          <SimpleGrid cols={2} spacing="sm">
            {[
              {
                icon: <IconPhone size={20} color="#22c55e" />,
                title: "CALL",
                value: contact.phone,
                href: `tel:${contact.phone}`,
              },
              {
                icon: <IconMail size={20} color="#2563eb" />,
                title: "EMAIL",
                value: contact.email,
                href: `mailto:${contact.email}`,
              },
              {
                icon: <IconBrandLinkedin size={20} color="#0077b5" />,
                title: "LINKEDIN",
                value: "manoharv2512",
                href: contact.linkedin,
              },
              {
                icon: <IconMessageCircle size={20} color="#22c55e" />,
                title: "WHATSAPP",
                value: contact.phone,
                href: `https://wa.me/${contact.whatsapp}`,
              },
            ].map((item, index) => (
              <Paper
                key={index}
                component="a"
                href={item.href}
                radius="xl"
                p="6px"
                style={{
                  ...glassCard,
                  textDecoration: "none",
                }}
              >
                <Group
                  justify="start"
                  gap={8}
                  align="center"
                  w={"100%"}
                  wrap="nowrap"
                >
                  <Box
                    w={36}
                    h={36}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxSizing: "border-box",
                      borderRadius: "100%",
                      background: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Text
                      fw={600}
                      c="#0f172a"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </Text>

                    {/* <Text
                      c="#334155"
                      fw={500}
                      style={{
                        wordBreak: "break-word",
                        fontSize: "12px",
                      }}
                    >
                      {item.value}
                    </Text> */}
                  </Box>
                </Group>
              </Paper>
            ))}
          </SimpleGrid>

          {/* SERVICES */}
          <Stack gap="md">
            <Group gap="sm">
              <ThemeIcon
                size={28}
                radius="lg"
                variant="gradient"
                gradient={{
                  from: "#6366f1",
                  to: "#a855f7",
                }}
              >
                <IconSparkles size={16} />
              </ThemeIcon>

              <Text
                fw={900}
                c="#6366f1"
                style={{
                  fontSize: "20px",
                }}
              >
                KEY SERVICES
              </Text>

              <Divider
                style={{
                  flex: 1,
                }}
                color="rgba(99,102,241,0.25)"
              />
            </Group>

            <List
              spacing="sm"
              icon={
                <ThemeIcon radius="100%" color="blue" size={20}>
                  <IconCheck size={14} stroke={3} />
                </ThemeIcon>
              }
            >
              {contact.services.map((service, index) => (
                <List.Item key={index}>
                  <Text
                    fw={700}
                    c="#0f172a"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {service}
                  </Text>
                </List.Item>
              ))}
            </List>
          </Stack>

          {/* INSTAGRAM */}
          <Paper
            component="a"
            href={contact.instagram}
            radius="xl"
            p="lg"
            style={{
              ...glassCard,
              textDecoration: "none",
            }}
          >
            <Group justify="space-between">
              <Group>
                <Box
                  w={36}
                  h={36}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    borderRadius: "100%",
                    background:
                      "linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)",
                  }}
                >
                  <IconBrandInstagram size={24} color="white" />
                </Box>

                <Box>
                  <Text
                    fw={600}
                    c="#64748b"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    FOLLOW ON INSTAGRAM
                  </Text>

                  <Text
                    fw={900}
                    style={{
                      fontSize: "14px",
                      background: "linear-gradient(90deg,#ec4899,#9333ea)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    @its_manoharr
                  </Text>
                </Box>
              </Group>

              <IconChevronRight size={34} color="#94a3b8" />
            </Group>
          </Paper>
        </Stack>
      </Paper>
    </Flex>
  );
};
