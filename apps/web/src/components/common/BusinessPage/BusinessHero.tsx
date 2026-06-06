import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import { Box, Dialog, DialogContent, Stack, Typography } from "@mui/material";
import { Button, Flex } from "@mantine/core";
import { QRCodeSVG as QrCode } from "qrcode.react";
import type { HeroContent } from "./types";

type BusinessHeroProps = HeroContent;

const BusinessHero = ({
  title,
  subtitle,
  description,
  videoSrc,
  imageSrc,
  rating = 5,
  reviewText,
  reviewIcon,
  actions,
  secondaryAction,
  wifi,
  height = "90vh",
  minHeight = "600px",
  mediaFit = "cover",
  overlay = "rgba(0, 0, 0, 0.65)",
}: BusinessHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [openWifi, setOpenWifi] = useState(false);
  const [openSaveData, setOpenSaveData] = useState(false);
  const [saveForm, setSaveForm] = useState({
    name: "",
    email: "",
    pincode: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const wifiValue = wifi
    ? `WIFI:T:${wifi.security ?? "WPA"};S:${wifi.ssid};P:${wifi.password};;`
    : "";

  return (
    <Box sx={{ position: "relative", height, minHeight, overflow: "hidden" }}>
      {wifi && (
        <Dialog open={openWifi} onClose={() => setOpenWifi(false)}>
          <DialogContent sx={{ textAlign: "center" }}>
            <Typography mb={2}>Scan to connect WiFi</Typography>
            <QrCode value={wifiValue} size={200} />
            <Typography mt={2} fontSize={14}>
              SSID: {wifi.ssid}
              <br />
              Password: {wifi.password}
            </Typography>
          </DialogContent>
        </Dialog>
      )}
      {/* Save Data Dialog */}
      <Dialog
        open={openSaveData}
        onClose={() => setOpenSaveData(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ textAlign: "center", py: 4 }}>
          {saved ? (
            <Stack spacing={2} alignItems="center">
              <Typography variant="h6" color="success.main" fontWeight={700}>
                ✅ Data Saved!
              </Typography>
              <Typography fontSize={14} color="text.secondary">
                Thanks, we'll be in touch soon.
              </Typography>
            </Stack>
          ) : (
            <Stack spacing={2.5}>
              <Typography variant="h6" fontWeight={700}>
                Save Your Info
              </Typography>

              <input
                placeholder="Full Name"
                value={saveForm.name}
                onChange={(e) =>
                  setSaveForm((p) => ({ ...p, name: e.target.value }))
                }
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />

              <input
                placeholder="Email Address"
                type="email"
                value={saveForm.email}
                onChange={(e) =>
                  setSaveForm((p) => ({ ...p, email: e.target.value }))
                }
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />

              <input
                placeholder="Area Pincode"
                type="number"
                value={saveForm.pincode}
                onChange={(e) =>
                  setSaveForm((p) => ({ ...p, pincode: e.target.value }))
                }
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />

              <Button
                fullWidth
                disabled={
                  !saveForm.name || !saveForm.email || !saveForm.pincode
                }
                onClick={() => {
                  // 👉 plug in your API call here if needed
                  console.log("Saved:", saveForm);
                  setSaved(true);
                }}
                style={{
                  background: "#228be6",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "10px",
                  marginTop: 4,
                }}
              >
                Save
              </Button>
            </Stack>
          )}
        </DialogContent>
      </Dialog>

      {videoSrc ? (
        <Box
          component="video"
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: mediaFit,
          }}
        />
      ) : (
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: mediaFit,
          }}
        />
      )}

      <Box sx={{ position: "absolute", inset: 0, background: overlay }} />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
            {title}
          </Typography>

          {subtitle && (
            <Box
              sx={{
                mt: 1,
                mb: 4,
                px: 1.5,
                py: 0.5,
                backgroundColor: "green",
                borderRadius: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontSize: "8px",
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          )}

          <Typography
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: "600px",
              mx: "auto",
              mb: 4,
            }}
          >
            {description}
          </Typography>

          {reviewText && (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              mb={3}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {reviewIcon && <img src={reviewIcon} width={20} alt="" />}
              {Array.from({ length: rating }).map((_, index) => (
                <StarIcon key={index} sx={{ color: "#fab005" }} />
              ))}
              <Typography sx={{ color: "#fff" }}>{reviewText}</Typography>
            </Stack>
          )}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            useFlexGap
            sx={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {actions.map((action) => (
              <Button
                key={action.label}
                leftSection={
                  action.icon ? (
                    typeof action.icon === "string" ? (
                      <img src={action.icon} width={20} alt="" />
                    ) : (
                      action.icon
                    )
                  ) : null
                }
                onClick={() => {
                  if (action.action === "wifi" && wifi) {
                    setOpenWifi(true);
                    return;
                  }

                  if (action.action === "saveData") {
                    setSaved(false);
                    setSaveForm({ name: "", email: "", pincode: "" });
                    setOpenSaveData(true);
                    return;
                  }

                  if (action.href) {
                    window.open(action.href, "_blank", "noopener,noreferrer");
                  }
                }}
                style={{
                  background: "transparent",
                  border: "1px solid #fff",
                }}
              >
                {action.label}
              </Button>
            ))}
            {secondaryAction && (
              <Flex gap={4}>
                {secondaryAction.map((action) => (
                  <Button
                    key={action.label}
                    leftSection={
                      action.icon ? (
                        typeof action.icon === "string" ? (
                          <img src={action.icon} width={20} alt="" />
                        ) : (
                          action.icon
                        )
                      ) : null
                    }
                    onClick={() => {
                      if (action.action === "wifi" && wifi) {
                        setOpenWifi(true);
                        return;
                      }

                      if (action.href) {
                        window.open(
                          action.href,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }
                    }}
                    style={{
                      background: "transparent",
                      border: "1px solid #fff",
                    }}
                  >
                    {action.label}
                  </Button>
                ))}
              </Flex>
            )}
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
};

export default BusinessHero;
