import { Box, Button, Stack } from "@mui/material";
import { Text } from "@mantine/core";
import { motion } from "framer-motion";
import heroImg from "../../../assets/VisitingCard/GuptaJi.jpeg";

const HrishikeshGuptaD = () => {
  // 🔥 Real actions instead of scroll
  const actions = {
    instagram: () =>
      window.open(
        "https://www.instagram.com/chaitanyaji_?igsh=ZGkyY29jc3Q4NmJt",
        "_blank",
      ),
    whatsapp: () => window.open("https://wa.me/918878811666", "_blank"),
    call: () => (window.location.href = "tel:+918878811666"),
    saveContact: () => {
      const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Chaitanya Hrishikesh Gupta
ORG:Knectaa
TITLE:CEO
TEL:+918878811666
END:VCARD`;
      const blob = new Blob([vCard], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "contact.vcf";
      a.click();
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        background: "linear-gradient(90deg, #510400, #D2042D, #58181F)",

        // linear-gradient(90deg, #510400, #D2042D, #58181F);
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          padding: "30px 20px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
        }}
      >
        <Stack gap={1} alignItems="center">
          {/* Profile Image */}
          <Box
            component="img"
            src={heroImg}
            alt="profile"
            sx={{
              width: 250,
              height: 250,
              borderRadius: "10%",
              objectFit: "cover",
              border: "3px solid #F7E78A",
              boxShadow: "0 0 25px rgba(255,255,255,0.2)",
            }}
          />

          <Box>
            {/* Name */}
            <Text fw={700} size="xl" c="white">
              Chaitanya
            </Text>

            <Text
              style={{
                fontSize: "clamp(14px, 2.5vw, 16px)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Hrishikesh Manoj Kumar Gupta
            </Text>
          </Box>

          <Text
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Nagpur, India
          </Text>

          <Text
            style={{
              fontSize: "14px",
              color: "#00e5ff",
              fontWeight: 500,
            }}
          >
            Founder @ Knectaa & The Bunzaa! Sandwich Company
          </Text>

          {/* Buttons */}
          <Stack width="100%" mt={2} gap={1.5}>
            <Button
              variant="outlined"
              onClick={actions.instagram}
              sx={{
                borderRadius: "12px",
                color: "#fff",
                borderColor: "#F7E78A",
              }}
            >
              Instagram
            </Button>

            <Button
              variant="outlined"
              onClick={actions.whatsapp}
              sx={{
                borderRadius: "12px",
                color: "#fff",
                borderColor: "#F7E78A",
              }}
            >
              WhatsApp
            </Button>

            <Button
              variant="outlined"
              onClick={actions.saveContact}
              sx={{
                borderRadius: "12px",
                color: "#fff",
                borderColor: "#F7E78A",
              }}
            >
              Save Contact
            </Button>

            <Button
              variant="outlined"
              onClick={actions.call}
              sx={{
                borderRadius: "12px",
                color: "#fff",
                borderColor: "#F7E78A",
              }}
            >
              Call Me
            </Button>
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default HrishikeshGuptaD;
