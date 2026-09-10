import { useEffect, useState } from "react";
import {
  Modal,
  TextInput,
  Select,
  Button,
  Flex,
} from "@mantine/core";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainSections from "./components/MainSections";
// import StoriesPricing from "./components/StoriesPricing";
import FAQFooter from "./components/FAQFooter";
import { useLanguage } from "../../localization";
import "./style.css";
import Stories from "./components/Stories";
// import Pricing from "./components/Pricing";

export default function Knectaa3() {
  const { strings } = useLanguage();
  const [preloader, setPreloader] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);

  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setPreloader(false), 1200);
    const fallback = window.setTimeout(() => setPreloader(false), 2600);
    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 3000);
  };

  const submitDemo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, "");
    if (!name.trim() || !business.trim() || cleanPhone.length < 10 || !type) {
      showToast(strings.invalidFields);
      return;
    }

    try {
      localStorage.setItem(
        `lead:${Date.now()}`,
        JSON.stringify({
          name: name.trim(),
          business: business.trim(),
          phone: cleanPhone,
          type,
          source: "get-started-modal",
          ts: Date.now(),
        }),
      );
    } catch {}

    setModalOpen(false);
    const waMsg = encodeURIComponent(
      `Hi! Main ${business} (${type}) chalata/chalati hoon aur Knectaa ka free demo chahiye. Mera naam ${name} hai.`,
    );
    window.open(
      `https://wa.me/910000000000?text=${waMsg}`,
      "_blank",
      "noopener,noreferrer",
    );
    setName("");
    setBusiness("");
    setPhone("");
    setType(null);
  };

  const subscribe = (email: string) => {
    if (!email || !email.includes("@")) {
      showToast(strings.invalidEmail);
      return false;
    }
    try {
      localStorage.setItem(
        `lead:newsletter:${Date.now()}`,
        JSON.stringify({ email, type: "newsletter", ts: Date.now() }),
      );
    } catch {}
    setNewsletterDone(true);
    return true;
  };

  return (
    <>
      {preloader && (
        <div id="preloader">
          <div className="stamp-mark">
            <span>KNECTAA</span>
          </div>
        </div>
      )}

      <Navbar
        mobileOpen={mobileNav}
        onToggle={() => setMobileNav((v) => !v)}
        onStart={() => setModalOpen(true)}
      />

      <Hero onStart={() => setModalOpen(true)} />

      <MainSections />

      {/* <StoriesPricing onStart={() => setModalOpen(true)} /> */}
      <Stories />
      {/* <Pricing onStart={() => setModalOpen(true)} /> */}

      <FAQFooter
        onStart={() => setModalOpen(true)}
        newsletterDone={newsletterDone}
        onSubscribe={subscribe}
      />

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        centered
        withCloseButton={true}
        overlayProps={{ backgroundOpacity: 0.65, blur: 5 }}
        size="lg"
        title={<Flex ta="center">{strings.modalTitle}</Flex>}
      >
        <div className="modal-demo-content">
          <span
            className="tag"
            style={{ display: "block", textAlign: "center", marginBottom: 6 }}
          >
            {strings.modalTag}
          </span>
          <form onSubmit={submitDemo}>
            <TextInput
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder={strings.namePlaceholder}
              required
              mb={12}
            />
            <TextInput
              value={business}
              onChange={(e) => setBusiness(e.currentTarget.value)}
              placeholder={strings.businessPlaceholder}
              required
              mb={12}
            />
            <TextInput
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
              placeholder={strings.phonePlaceholder}
              required
              mb={12}
            />
            <Select
              value={type}
              onChange={setType}
              placeholder={strings.typePlaceholder}
              data={[
                "Restaurant / Café",
                "Salon / Spa",
                "Retail / Kirana Store",
                "Services (repair, tailoring, etc.)",
                "Other",
              ]}
              required
              mb={12}
            />
            <Button type="submit" fullWidth style={{ height: 44 }}>
              {strings.freeDemo}
            </Button>
          </form>
        </div>
      </Modal>

      {toast && <div className="toast show">{toast}</div>}
    </>
  );
}
