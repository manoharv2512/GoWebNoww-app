import { Dialog, DialogContent, Typography } from "@mui/material";
import { QRCodeSVG as QrCode } from "qrcode.react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WifiConfig {
  ssid: string;
  password: string;
  /** Default: "WPA" */
  security?: "WPA" | "WEP" | "nopass";
}

export interface WifiDialogProps {
  open: boolean;
  onClose: () => void;
  wifi: WifiConfig;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Shows a scannable QR code that connects the user's phone to a WiFi network.
 *
 * @example
 * <WifiDialog
 *   open={showWifi}
 *   onClose={() => setShowWifi(false)}
 *   wifi={{ ssid: "ShopGuest", password: "welcome123" }}
 * />
 */
export function WifiDialog({ open, onClose, wifi }: WifiDialogProps) {
  const wifiValue = `WIFI:T:${wifi.security ?? "WPA"};S:${wifi.ssid};P:${wifi.password};;`;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ textAlign: "center" }}>
        <Typography mb={2}>Scan to connect to WiFi</Typography>
        <QrCode value={wifiValue} size={200} />
        <Typography mt={2} fontSize={14}>
          SSID: <strong>{wifi.ssid}</strong>
          <br />
          Password: <strong>{wifi.password}</strong>
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
