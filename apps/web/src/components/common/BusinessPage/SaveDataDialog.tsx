import React from "react";
import { Dialog, DialogContent, Stack, Typography, Box } from "@mui/material";
import { Button } from "@mantine/core";
import {
  useGoogleAppsScript,
  type UseGoogleAppsScriptOptions,
} from "./useGoogleAppsScript";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SaveDataDialogProps extends UseGoogleAppsScriptOptions {
  open: boolean;
  onClose: () => void;
  /**
   * Optional extra fields rendered below the standard three (name / phone /
   * pincode). Each entry renders a plain text input whose value is merged into
   * the form payload automatically.
   *
   * @example
   * extraFields={[{ key: "city", placeholder: "City" }]}
   */
  extraFields?: { key: string; placeholder: string }[];
  /** Override the dialog title. Default: "Save Your Info" */
  title?: string;
  /** Override the submit button label. Default: "Register" */
  submitLabel?: string;
  /** Override the success heading. Default: "✅ Registration Successful!" */
  successHeading?: string;
  /** Override the success sub-text. */
  successBody?: string;
}

// ─── Shared input style ───────────────────────────────────────────────────────

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 8,
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Drop-in "Save Data" dialog backed by Google Apps Script.
 *
 * Just pass the customer's `appsScriptUrl` and control `open` / `onClose`.
 * The hook resets automatically when you re-open the dialog.
 *
 * @example
 * <SaveDataDialog
 *   appsScriptUrl="https://script.google.com/..."
 *   open={showDialog}
 *   onClose={() => setShowDialog(false)}
 * />
 */
export function SaveDataDialog({
  appsScriptUrl,
  adminKey,
  businessName,
  open,
  onClose,
  extraFields = [],
  title = "Save Your Info",
  submitLabel = "Register",
  successHeading = "✅ Registration Successful!",
  successBody = "Thanks, we'll be in touch soon.",
}: SaveDataDialogProps) {
  const gas = useGoogleAppsScript({ appsScriptUrl, adminKey, businessName });

  // Reset the form every time the dialog is opened.
  const handleOpen = React.useCallback(() => {
    gas.resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  React.useEffect(() => {
    if (open) handleOpen();
  }, [open, handleOpen]);

  const isDisabled =
    !gas.formData.name ||
    !gas.formData.phoneNo ||
    !gas.formData.pincode ||
    extraFields.some((f) => !gas.formData[f.key]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent sx={{ textAlign: "center", py: 4 }}>
        {gas.saved ? (
          <Stack spacing={2} alignItems="center">
            <Typography variant="h6" color="success.main" fontWeight={700}>
              {successHeading}
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              {successBody}
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={2.5}>
            <Typography variant="h6" fontWeight={700}>
              {title}
            </Typography>

            {/* Name */}
            <input
              placeholder="Full Name"
              value={gas.formData.name}
              onChange={(e) => gas.setField("name", e.target.value)}
              style={{ ...inputBase, border: "1px solid #ccc" }}
            />

            {/* Phone — with duplicate / format validation */}
            <Box style={{ textAlign: "left" }}>
              <input
                placeholder="Phone Number (10 digits)"
                type="tel"
                maxLength={10}
                value={gas.formData.phoneNo}
                onChange={(e) => {
                  gas.setField("phoneNo", e.target.value.replace(/\D/g, ""));
                  gas.clearPhoneError();
                }}
                style={{
                  ...inputBase,
                  border: `1px solid ${gas.phoneError ? "red" : "#ccc"}`,
                }}
              />
              {gas.phoneError && (
                <Typography fontSize={12} color="error" mt={0.5}>
                  {gas.phoneError}
                </Typography>
              )}
            </Box>

            {/* Pincode */}
            <input
              placeholder="Area Pincode"
              type="number"
              value={gas.formData.pincode}
              onChange={(e) => gas.setField("pincode", e.target.value)}
              style={{ ...inputBase, border: "1px solid #ccc" }}
            />

            {/* Any customer-specific extra fields */}
            {extraFields.map((f) => (
              <input
                key={f.key}
                placeholder={f.placeholder}
                value={gas.formData[f.key] ?? ""}
                onChange={(e) => gas.setField(f.key, e.target.value)}
                style={{ ...inputBase, border: "1px solid #ccc" }}
              />
            ))}

            <Button
              fullWidth
              loading={gas.loading}
              disabled={isDisabled}
              onClick={gas.submit}
              style={{
                background: "#228be6",
                color: "#fff",
                borderRadius: 8,
                padding: "10px",
                marginTop: 4,
              }}
            >
              {submitLabel}
            </Button>
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  );
}
