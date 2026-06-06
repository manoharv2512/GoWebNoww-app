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
  Divider,
} from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconMessageCircle,
  IconDownload,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMapPin,
  IconSparkles,
} from "@tabler/icons-react";
import bgImg from "../../../../assets/VisitingCard/theme/3.jpeg";
import type { IPersonProfile } from "../../userData";

interface StandardCardProps {
  contact: IPersonProfile;
}

export const StandardCard = ({ contact }: StandardCardProps) => {
  const telHref = `tel:${contact.phone}`;
  const mailHref = `mailto:${contact.email}`;
  const waHref = `https://wa.me/${contact.whatsapp}`;

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
        px="md"
        py="lg"
        w="100%"
        maw={420}
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
        <Stack gap="lg" align="center">
          {/* Profile */}
          <Box
            style={{
              borderRadius: "10%",
              padding: 6,
              position: "relative",
              boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src={contact.profileImg}
              alt={contact.name}
              width={150}
              height={150}
              radius="10%"
            />
          </Box>

          {/* Name */}
          <Stack gap={4} align="center">
            {contact.pre && <Title order={2}>{contact.pre}</Title>}

            <Title order={2}>{contact.name}</Title>

            <Group gap={4}>
              <IconMapPin size={14} />
              <Text size="xs" c="dimmed">
                {contact.location}
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
              backgroundColor: "rgba(255,255,255,0.3)",
              boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
              //   boxShadow: "0 15px 50px rgba(0,0,0,0.12)",
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
              paddingTop: "10px",
              paddingBottom: "10px",
              width: "70%",
              fontSize: "16px",
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
