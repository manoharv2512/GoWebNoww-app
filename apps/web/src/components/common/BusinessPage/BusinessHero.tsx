import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import { Box, Stack, Typography } from "@mui/material";
import { Button, Flex } from "@mantine/core";
import { SaveDataDialog } from "./SaveDataDialog";
import { WifiDialog } from "./WifiDialog";
import type { HeroContent } from "./types";

// ─── Types ────────────────────────────────────────────────────────────────────

type BusinessHeroProps = HeroContent;

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Full-bleed hero with video/image background, star rating, CTA buttons,
 * WiFi QR dialog, and Save Data form — all driven by props.
 *
 * The Apps Script URL is supplied via `saveDataAppsScriptUrl` so each
 * customer gets their own sheet without touching this component.
 *
 * @example
 * <BusinessHero
 *   title="My Restaurant"
 *   description="Best food in town"
 *   imageSrc="/hero.jpg"
 *   actions={[{ label: "Menu", href: "/menu" }]}
 *   saveDataAppsScriptUrl="https://script.google.com/..."
 * />
 */
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
  saveDataAppsScriptUrl,
  saveDataAdminKey,
  saveDataBusinessName,
  height = "90vh",
  minHeight = "600px",
  mediaFit = "cover",
  overlay = "rgba(0, 0, 0, 0.65)",
}: BusinessHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // ── Dialog visibility ──────────────────────────────────────────────────────
  const [openWifi, setOpenWifi] = useState(false);
  const [openSaveData, setOpenSaveData] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  // ── Action dispatcher ──────────────────────────────────────────────────────
  const handleAction = (action: { action?: string; href?: string }) => {
    if (action.action === "wifi" && wifi) {
      setOpenWifi(true);
      return;
    }
    if (action.action === "saveData") {
      setOpenSaveData(true);
      return;
    }
    if (action.href) {
      window.open(action.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Box sx={{ position: "relative", height, minHeight, overflow: "hidden" }}>
      {/* ── WiFi dialog ──────────────────────────────────────────────────── */}
      {wifi && (
        <WifiDialog
          open={openWifi}
          onClose={() => setOpenWifi(false)}
          wifi={wifi}
        />
      )}

      {/* ── Save Data dialog ──────────────────────────────────────────────── */}
      {saveDataAppsScriptUrl && (
        <SaveDataDialog
          appsScriptUrl={saveDataAppsScriptUrl}
          adminKey={saveDataAdminKey}
          businessName={saveDataBusinessName}
          open={openSaveData}
          onClose={() => setOpenSaveData(false)}
        />
      )}

      {/* ── Background media ─────────────────────────────────────────────── */}
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

      {/* ── Foreground content ───────────────────────────────────────────── */}
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
              {Array.from({ length: rating }).map((_, i) => (
                <StarIcon key={i} sx={{ color: "#fab005" }} />
              ))}
              <Typography sx={{ color: "#fff" }}>{reviewText}</Typography>
            </Stack>
          )}

          {/* Primary actions */}
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
                onClick={() => handleAction(action)}
                style={{ background: "transparent", border: "1px solid #fff" }}
              >
                {action.label}
              </Button>
            ))}

            {/* Secondary actions */}
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
                    onClick={() => handleAction(action)}
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
