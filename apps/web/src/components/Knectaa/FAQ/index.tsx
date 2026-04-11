import { Container, Title, Text, Stack, Box } from "@mantine/core";

const faqs = [
  {
    question: "How does NFC work?",
    answer:
      "Place your phone near the NFC standee to quickly access the utility page.",
  },
  {
    question: "What links are included?",
    answer:
      "The page shows Google, Instagram, Wifi and other business links for easy and quick response.",
  },
  {
    question: "How secure is the feedback process?",
    answer:
      "Feedback is directed through secure custom subdomains, keeping data safe and private.",
  },
];

const FAQ = () => {
  return (
    <Box p={2} maw={1200} mx="auto" my={0}>
      <Container size="md">
        {/* Heading */}
        <Title order={2} mb="lg">
          FAQs
        </Title>

        {/* FAQ List */}
        <Stack gap="lg">
          {faqs.map((faq, index) => (
            <Box key={index}>
              <Text fw={600} mb={5}>
                {faq.question}
              </Text>
              <Text c="dimmed" size="sm" style={{ lineHeight: 1.6 }}>
                {faq.answer}
              </Text>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default FAQ;
