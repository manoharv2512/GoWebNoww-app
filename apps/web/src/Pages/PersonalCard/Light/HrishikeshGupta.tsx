import {
  Box,
  Stack,
  Text,
  Title,
  Image,
  Button,
  Group,
  Grid,
  ActionIcon,
  Paper,
} from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconMessageCircle,
  IconDownload,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMapPin,
} from "@tabler/icons-react";

import profileImg from "../../../assets/VisitingCard/GuptaJi.jpeg"; // ✅ FIXED

const contact = {
  pre: "Chaitanya",
  name: "Hrishikesh Gupta",
  title: "Founder & CEO",
  company: "Knectaa",
  phone: "+918878811666",
  email: "hrishi.gupta.02@gmail.com",
  whatsapp: "918878811666",
  linkedin: "https://linkedin.com",
  instagram: "https://www.instagram.com/chaitanyaji_?igsh=ZGkyY29jc3Q4NmJt",
};

const HrishikeshGupta = () => {
  // ✅ FIXED: proper links
  const telHref = `tel:${contact.phone}`;
  const mailHref = `mailto:${contact.email}`;
  const waHref = `https://wa.me/${contact.whatsapp}`;

  // ✅ FIXED: correct function
  const downloadVCard = () => {
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.company}
TITLE:${contact.title}
TEL:${contact.phone}
EMAIL:${contact.email}
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    a.click();
  };

  return (
    <Box
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <Paper
        radius="xl"
        shadow="lg"
        p="md"
        style={{ maxWidth: 420, width: "100%" }}
      >
        <Stack gap="lg" align="center">
          {/* Profile */}
          <Box
            style={{
              borderRadius: "50%",
              // display: "flex",
              // justifyItems: "center",
              // alignItems: "center",
              padding: 6,
              position: "relative",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src={profileImg}
              alt={contact.name}
              width={120}
              height={120}
              radius="50%"
            />
          </Box>

          {/* Name */}
          <Stack gap={4} align="center">
            <Title order={2}>{contact.pre}</Title>
            <Title order={2}>{contact.name}</Title>

            <Group gap={4}>
              <IconMapPin size={14} />
              <Text size="xs" c="dimmed">
                Nagpur, IN
              </Text>
            </Group>
          </Stack>

          {/* Title */}
          <Group
            px="md"
            py={6}
            style={{
              boxSizing: "content-box",
              borderRadius: 999,
              boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
            }}
          >
            <Text size="sm" fw={500}>
              {contact.title}
            </Text>
            <Text size="sm" c="dimmed">
              |
            </Text>
            <Text size="sm">{contact.company}</Text>
          </Group>

          {/* Save Contact */}
          <Button
            leftSection={<IconDownload size={14} />}
            onClick={downloadVCard}
            variant="default"
            fullWidth
            style={{
              borderRadius: "16px",
              border: "none",
              // padding: "10px 20px",
              paddingTop: "10px",
              paddingBottom: "10px",
              width: "70%",
              boxSizing: "content-box",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            }}
          >
            Save Contact
          </Button>

          {/* Actions */}
          <Grid w="100%">
            <Grid.Col
              span={4}
              style={{
                border: "none",
                borderRadius: "16px",
                padding: "10px",
                boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
              }}
            >
              <Stack align="center" gap={4}>
                <ActionIcon
                  component="a"
                  href={telHref}
                  size={30}
                  radius="xl"
                  variant="light"
                >
                  <IconPhone size={18} color="green" />
                </ActionIcon>
                <Text size="sm">Call</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col
              span={4}
              style={{
                border: "none",
                borderRadius: "16px",
                padding: "10px",
                boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
              }}
            >
              <Stack align="center" gap={4}>
                <ActionIcon
                  component="a"
                  href={mailHref}
                  size={30}
                  radius="xl"
                  variant="light"
                >
                  <IconMail size={18} />
                </ActionIcon>
                <Text size="sm">Email</Text>
              </Stack>
            </Grid.Col>

            <Grid.Col
              span={4}
              style={{
                border: "none",
                borderRadius: "16px",
                padding: "10px",
                boxShadow: "0 1px 1px rgba(0,0,0,0.15)",
              }}
            >
              <Stack align="center" gap={4}>
                <ActionIcon
                  component="a"
                  href={waHref}
                  target="_blank"
                  size={30}
                  radius="xl"
                  variant="light"
                >
                  <IconMessageCircle size={18} color="green" />
                </ActionIcon>
                <Text size="sm">WhatsApp</Text>
              </Stack>
            </Grid.Col>
          </Grid>

          {/* Social */}
          <Group justify="center">
            <Button
              component="a"
              href={contact.linkedin}
              target="_blank"
              variant="outline"
              radius="xl"
              color="black"
              leftSection={<IconBrandLinkedin size={16} color="blue" />}
            >
              LinkedIn
            </Button>

            <Button
              component="a"
              href={contact.instagram}
              target="_blank"
              variant="outline"
              radius="xl"
              color="black"
              leftSection={<IconBrandInstagram size={16} color="red" />}
            >
              Instagram
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Box>
  );
};

export default HrishikeshGupta;
