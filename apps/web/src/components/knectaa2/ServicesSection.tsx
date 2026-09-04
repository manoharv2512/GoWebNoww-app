import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { processSteps, services, testimonials } from "../../Pages/knectaa2/landingData";

export function ServicesSection() {
  return (
    <>
      {/* SERVICES */}
      <Box component="section" id="services" py={96}>
        <Container size="lg">
          <Stack align="left" mb={56}>
            <Text
              c="#0ea5a0"
              tt="uppercase"
              style={{ letterSpacing: "0.14em" }}
            >
              Hamari Services
            </Text>

            <Title order={2} ta="center">
              Ek Dukaan, Poora Digital Package
            </Title>

            <Text ta="center" c="dimmed" maw={640}>
              Chhoti dukaan ho ya bada showroom — Knectaa aapko wo sab deta
              hai jo bade brands ke paas hota hai, aapke budget mein.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {services.map((service) => (
              <Card
                key={service.title}
                padding="xl"
                radius="lg"
                withBorder
                style={{
                  borderStyle: "dashed",
                  borderWidth: 2,
                }}
              >
                <ThemeIcon
                  size={46}
                  radius="md"
                  mb="md"
                  style={{
                    background: "#131a3c",
                    color: "#ffb627",
                  }}
                >
                  {service.icon}
                </ThemeIcon>

                <Badge color="pink" variant="light" mb="md">
                  {service.tag}
                </Badge>

                <Title order={3} fz="xl" mb="sm">
                  {service.title}
                </Title>

                <Text c="dimmed" lh={1.6}>
                  {service.description}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* PROCESS */}
      <Box component="section" id="process" bg="#131a3c" py={96}>
        <Container size="lg">
          <Stack align="center" mb={56}>
            <Text c="#ffb627" tt="uppercase">
              Kaise Kaam Karta Hai
            </Text>

            <Title order={2} ta="center" c="#fff6e8">
              Sirf 4 Steps Mein Digital Dukaan
            </Title>

            <Text ta="center" c="#a6aede">
              Koi lambi process nahi. Baat karo, setup lo, tap karo, grow
              karo.
            </Text>
          </Stack>

          <Grid>
            {processSteps.map((step) => (
              <Grid.Col key={step.number} span={{ base: 12, sm: 6, lg: 3 }}>
                <Stack>
                  <Avatar
                    size={52}
                    radius="xl"
                    color="yellow"
                    variant="filled"
                    c="#131a3c"
                  >
                    {step.number}
                  </Avatar>

                  <Title order={3} fz="xl" c="#fff6e8">
                    {step.title}
                  </Title>

                  <Text c="#a6aede">{step.description}</Text>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      <Box component="section" id="stories" py={96}>
        <Container size="lg">
          <Stack align="center" mb={56}>
            <Text c="#0ea5a0" tt="uppercase">
              Kahaniyan
            </Text>

            <Title order={2} ta="center">
              Dukaandaaron Ki Zubaani
            </Title>

            <Text ta="center" c="dimmed" maw={640}>
              Yeh kuch kaalpanik udaharan hai ki Knectaa jaisi service asal
              mein dukaano ki kaise madad kar sakti hai.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {testimonials.map((testimonial) => (
              <Paper
                key={testimonial.name}
                p="xl"
                radius="lg"
                shadow="md"
                withBorder
              >
                <Text fz={42} fw={700} c="#f2960b">
                  "
                </Text>

                <Text mb="xl" lh={1.7}>
                  {testimonial.quote}
                </Text>

                <Group>
                  <Avatar color="teal">{testimonial.initial}</Avatar>

                  <Box>
                    <Text fw={700}>{testimonial.name}</Text>
                    <Text size="sm" c="dimmed">
                      {testimonial.role}
                    </Text>
                  </Box>
                </Group>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}