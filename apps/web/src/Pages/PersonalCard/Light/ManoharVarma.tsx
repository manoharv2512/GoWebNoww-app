import {
  Box,
  Stack,
  Text,
  Title,
  Image,
  Button,
  Group,
  SimpleGrid,
  Paper,
  Divider,
  List,
  ThemeIcon,
} from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconMessageCircle,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconUserPlus,
  IconCheck,
} from "@tabler/icons-react";

import profileImg from "../../../assets/VisitingCard/ManoharVarma.jpg";

const contact = {
  name: "MANOHAR VARMA",
  location: "Nagpur, IN",
  title: "Co-Founder & CTO",
  company: "Knectaa",
  phone: "+919075172459",
  email: "varmamanohar1998@gmail.com",
  whatsapp: "919075172459",
  linkedin: "https://www.linkedin.com/in/manoharv2512/",
  instagram: "https://www.instagram.com/its_manoharr",
  bio: "Passionate technologist driving innovation for the future of connected services.",
  services: [
    "Full-Stack Development",
    "Technology Strategy",
    "Team Leadership",
  ],
};

const ManoharVarma = () => {
  const downloadVCard = () => {
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.name}\nORG:${contact.company}\nTITLE:${contact.title}\nTEL:${contact.phone}\nEMAIL:${contact.email}\nEND:VCARD`;
    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.name.replace(/\s/g, "_")}.vcf`;
    a.click();
  };

  const fontColorState = "white";

  return (
    <Box mah="95vh" px="md" pt={10}>
      <Paper
        radius="lg"
        shadow="md"
        withBorder
        px="xl"
        py="md"
        mx="auto"
        //   background: "linear-gradient(90deg, #ffb7b7, #ebeb1d)",
        style={{
          maxWidth: 450,
          background: "linear-gradient( to bottom, #ffffff 12%, #213547 28%)",
        }}
      >
        <Stack gap="lg">
          {/* Profile Section */}
          <Stack align="center" gap="xs">
            <Box
              style={{
                borderRadius: "50%",
                padding: "4px",
                background: "linear-gradient(135deg, #e7f5ff 0%, #ffffff 100%)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src={profileImg}
                alt={contact.name}
                w={140}
                h={140}
                radius="100%"
              />
            </Box>

            <Stack gap={0} align="center">
              <Group gap={8} align="baseline">
                <Title
                  order={2}
                  fz={24}
                  fw={800}
                  c={fontColorState}
                  style={{ letterSpacing: "0.5px" }}
                >
                  {contact.name}
                </Title>
                <Text fz="sm" c="dimmed">
                  {contact.location}
                </Text>
              </Group>
              <Text fz="lg" fw={500} c="dark.1">
                {contact.title} |{" "}
                <span style={{ color: "#228be6" }}>{contact.company}</span>
              </Text>
            </Stack>
          </Stack>

          {/* Primary CTA */}
          <Button
            leftSection={<IconUserPlus size={20} />}
            onClick={downloadVCard}
            size="lg"
            radius="md"
            fullWidth
            color="blue.8"
            variant="filled"
            ff="heading"
            style={{ boxShadow: "0 4px 12px rgba(34, 139, 230, 0.25)" }}
          >
            SAVE CONTACT
          </Button>

          {/* Unified Communication Grid */}
          <SimpleGrid cols={2} spacing="md">
            <Button
              component="a"
              href={`tel:${contact.phone}`}
              variant="outline"
              color="gray.2"
              justify="start"
              radius="md"
              h={50}
              leftSection={<IconPhone size={22} color="#40c057" />}
            >
              <Text c="dark.1" fw={600} fz="sm">
                CALL
              </Text>
            </Button>

            <Button
              component="a"
              href={`mailto:${contact.email}`}
              variant="outline"
              color="gray.2"
              justify="start"
              radius="md"
              h={50}
              leftSection={<IconMail size={22} color="#228be6" />}
            >
              <Text c="dark.1" fw={600} fz="sm">
                EMAIL
              </Text>
            </Button>

            <Button
              component="a"
              href={contact.linkedin}
              target="_blank"
              variant="outline"
              color="gray.2"
              justify="start"
              radius="md"
              h={50}
              leftSection={<IconBrandLinkedin size={22} color="#0077b5" />}
            >
              <Text c="dark.1" fw={600} fz="sm">
                LINKEDIN
              </Text>
            </Button>

            <Button
              component="a"
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              variant="outline"
              color="gray.2"
              justify="start"
              radius="md"
              h={50}
              leftSection={<IconMessageCircle size={22} color="#25d366" />}
            >
              <Text c="dark.1" fw={600} fz="sm">
                WHATSAPP
              </Text>
            </Button>
          </SimpleGrid>

          {/* Professional Context */}
          <Stack gap="md">
            {/* <Text fz="sm" lh={1.6} c="dark.4" fw={450}>
              {contact.bio}
            </Text> */}

            <Divider />

            <Box>
              <Text
                fz="xs"
                fw={800}
                c="dimmed"
                mb="xs"
                style={{ letterSpacing: "1px" }}
              >
                KEY SERVICES
              </Text>
              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="blue" size={18} radius="xl">
                    <IconCheck size={12} stroke={3} />
                  </ThemeIcon>
                }
              >
                {contact.services.map((service, index) => (
                  <List.Item key={index} fw={500} c="dark.1">
                    {service}
                  </List.Item>
                ))}
              </List>
            </Box>
          </Stack>

          {/* Secondary Social */}
          <Button
            component="a"
            href={contact.instagram}
            target="_blank"
            variant="outline"
            color="gray.3"
            fullWidth
            radius="md"
            h={50}
            leftSection={<IconBrandInstagram size={22} color="#e4405f" />}
          >
            <Text c="dark.1" fw={600} fz="sm">
              INSTAGRAM
            </Text>
          </Button>
        </Stack>
      </Paper>

      <Text ta="center" mt="xl" c="dimmed" fz="xs">
        Designed by Knectaa
      </Text>
    </Box>
  );
};

export default ManoharVarma;
