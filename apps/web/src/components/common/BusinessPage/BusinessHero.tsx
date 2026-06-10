import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import { Box, Dialog, DialogContent, Stack, Typography } from "@mui/material";
import { Button, Flex } from "@mantine/core";
import { QRCodeSVG as QrCode } from "qrcode.react";
import type { HeroContent } from "./types";

type BusinessHeroProps = HeroContent;

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyRi9CWD_I_ulg2ccv_D2CvBmRo4UjYmS-ejXwJoj7hpeIRrSZfMQlvYhyqyq-f7trg/exec";

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
    phoneNo: "",
    pincode: "",
  });
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(""); // ← new

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const wifiValue = wifi
    ? `WIFI:T:${wifi.security ?? "WPA"};S:${wifi.ssid};P:${wifi.password};;`
    : "";

  const checkPhoneExists = (phone: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const callbackName = `cb_${Date.now()}`;
      const script = document.createElement("script");

      (window as any)[callbackName] = (data: { exists: boolean }) => {
        resolve(data.exists);
        delete (window as any)[callbackName];
        document.body.removeChild(script);
      };

      script.src = `${APPS_SCRIPT_URL}?phone=${phone}&callback=${callbackName}`;
      script.onerror = () => {
        resolve(false); // if error, allow proceed
        delete (window as any)[callbackName];
        document.body.removeChild(script);
      };

      document.body.appendChild(script);
    });
  };

  const handleSave = async () => {
    if (!/^[0-9]{10}$/.test(saveForm.phoneNo)) {
      setPhoneError("Enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    setPhoneError("");

    try {
      const exists = await checkPhoneExists(saveForm.phoneNo);

      if (exists) {
        setPhoneError("This number is already registered ❌");
        return;
      }

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveForm),
      });

      setSaved(true);
    } catch {
      alert("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: "relative", height, minHeight, overflow: "hidden" }}>
      {/* WiFi Dialog */}
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
                ✅ Registration Successful!
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

              {/* Name */}
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

              {/* Phone — with validation */}
              <Box style={{ textAlign: "left" }}>
                <input
                  placeholder="Phone Number (10 digits)"
                  type="tel"
                  maxLength={10}
                  value={saveForm.phoneNo}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, ""); // numbers only
                    setSaveForm((p) => ({ ...p, phoneNo: val }));
                    setPhoneError(""); // clear error on type
                  }}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px solid ${phoneError ? "red" : "#ccc"}`,
                    fontSize: 14,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                {phoneError && (
                  <Typography fontSize={12} color="error" mt={0.5}>
                    {phoneError}
                  </Typography>
                )}
              </Box>

              {/* Pincode */}
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
                loading={loading}
                disabled={
                  !saveForm.name || !saveForm.phoneNo || !saveForm.pincode
                }
                onClick={handleSave}
                style={{
                  background: "#228be6",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "10px",
                  marginTop: 4,
                }}
              >
                Register
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
                    setPhoneError(""); // ← reset error on open
                    setSaveForm({ name: "", phoneNo: "", pincode: "" });
                    setOpenSaveData(true);
                    return;
                  }
                  if (action.href) {
                    window.open(action.href, "_blank", "noopener,noreferrer");
                  }
                }}
                style={{ background: "transparent", border: "1px solid #fff" }}
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
