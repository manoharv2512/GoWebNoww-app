import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SaveFormData {
  name: string;
  phoneNo: string;
  pincode: string;
  [key: string]: string;
}

export interface UseGoogleAppsScriptOptions {
  appsScriptUrl: string;
  adminKey?: string;
  businessName?: string;
}

export interface UseGoogleAppsScriptReturn {
  formData: SaveFormData;
  setField: (field: keyof SaveFormData, value: string) => void;
  resetForm: () => void;
  submit: () => Promise<void>;
  saved: boolean;
  loading: boolean;
  phoneError: string;
  clearPhoneError: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const EMPTY_FORM: SaveFormData = {
  name: "",
  phoneNo: "",
  pincode: "",
};

function checkPhoneExists(
  appsScriptUrl: string,
  phone: string,
  adminKey?: string,
): Promise<boolean> {
  return new Promise((resolve) => {
    const callbackName = `appsScriptCb_${Date.now()}`;

    const script = document.createElement("script");

    const win = window as unknown as Record<
      string,
      ((data: { exists: boolean }) => void) | unknown
    >;

    win[callbackName] = (data: { exists: boolean }) => {
      resolve(data.exists);

      delete win[callbackName];

      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };

    const query = new URLSearchParams({
      phone,
      callback: callbackName,
    });

    if (adminKey) {
      query.set("adminKey", adminKey);
    }

    script.src = `${appsScriptUrl}?${query.toString()}`;

    script.onerror = () => {
      resolve(false);

      delete win[callbackName];

      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };

    document.body.appendChild(script);
  });
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useGoogleAppsScript({
  appsScriptUrl,
  adminKey,
  businessName,
}: UseGoogleAppsScriptOptions): UseGoogleAppsScriptReturn {
  const [formData, setFormData] = useState<SaveFormData>({
    ...EMPTY_FORM,
  });

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const setField = (field: keyof SaveFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...EMPTY_FORM });
    setSaved(false);
    setPhoneError("");
  };

  const clearPhoneError = () => {
    setPhoneError("");
  };

  const submit = async () => {
    if (!/^[0-9]{10}$/.test(formData.phoneNo)) {
      setPhoneError("Enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    setPhoneError("");

    try {
      const exists = await checkPhoneExists(
        appsScriptUrl,
        formData.phoneNo,
        adminKey,
      );

      if (exists) {
        setPhoneError("This number is already registered ❌");
        return;
      }

      const payload = {
        ...formData,
        ...(adminKey ? { adminKey } : {}),
        ...(businessName ? { businessName } : {}),
      };

      await fetch(appsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(
          Object.entries(payload).reduce<Record<string, string>>(
            (acc, [key, value]) => {
              acc[key] = String(value ?? "");
              return acc;
            },
            {},
          ),
        ),
      });

      setSaved(true);
    } catch (error) {
      console.error(error);
      alert("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setField,
    resetForm,
    submit,
    saved,
    loading,
    phoneError,
    clearPhoneError,
  };
}
