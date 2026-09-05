import { useEffect, useState } from "react";
import { Modal, TextInput, Select, Button, ActionIcon } from "@mantine/core";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainSections from "./components/MainSections";
import StoriesPricing from "./components/StoriesPricing";
import FAQFooter from "./components/FAQFooter";
import { IconX } from "@tabler/icons-react";
import "./style.css";

export default function Knectaa3() {
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
      showToast("Sabhi fields bharna zaroori hai");
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
          ts: Date.now()
        })
      );
    } catch {}

    setModalOpen(false);
    const waMsg = encodeURIComponent(
      `Hi! Main ${business} (${type}) chalata/chalati hoon aur Knectaa ka free demo chahiye. Mera naam ${name} hai.`
    );
    window.open(
      `https://wa.me/910000000000?text=${waMsg}`,
      "_blank",
      "noopener,noreferrer"
    );
    setName("");
    setBusiness("");
    setPhone("");
    setType(null);
  };

  const subscribe = (email: string) => {
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email");
      return false;
    }
    try {
      localStorage.setItem(
        `lead:newsletter:${Date.now()}`,
        JSON.stringify({ email, type: "newsletter", ts: Date.now() })
      );
    } catch {}
    setNewsletterDone(true);
    return true;
  };

  return (
    <>
      {preloader && (
        <div id="preloader">
          <div className="stamp-mark"><span>KNECTAA</span></div>
        </div>
      )}

      <Navbar
        mobileOpen={mobileNav}
        onToggle={() => setMobileNav(v => !v)}
        onStart={() => setModalOpen(true)}
      />

      <Hero onStart={() => setModalOpen(true)} />

      <MainSections />

      <StoriesPricing onStart={() => setModalOpen(true)} />

      <FAQFooter
        onStart={() => setModalOpen(true)}
        newsletterDone={newsletterDone}
        onSubscribe={subscribe}
      />

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        centered
        withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.65, blur: 5 }}
        classNames={{ content: "knectaa-modal-content", body: "knectaa-modal-body" }}
      >
        <ActionIcon
          className="modal-close"
          onClick={() => setModalOpen(false)}
          aria-label="Close"
        >
          <IconX />
        </ActionIcon>

        <div className="modal-demo-content">
          <span className="tag" style={{ display: "block", textAlign: "center", marginBottom: 6 }}>
            Free Demo
          </span>
          <h3>Apni Dukaan Set Up Karein</h3>
          <form onSubmit={submitDemo}>
            <TextInput
              value={name}
              onChange={e => setName(e.currentTarget.value)}
              placeholder="Aapka naam"
              required
              mb={12}
            />
            <TextInput
              value={business}
              onChange={e => setBusiness(e.currentTarget.value)}
              placeholder="Business ka naam"
              required
              mb={12}
            />
            <TextInput
              value={phone}
              onChange={e => setPhone(e.currentTarget.value)}
              placeholder="WhatsApp number"
              required
              mb={12}
            />
            <Select
              value={type}
              onChange={setType}
              placeholder="Business ka type chunein"
              data={[
                "Restaurant / Café",
                "Salon / Spa",
                "Retail / Kirana Store",
                "Services (repair, tailoring, etc.)",
                "Other"
              ]}
              required
              mb={12}
            />
            <Button type="submit" fullWidth className="btn btn-primary mantine-reset">
              Free Demo Lo
            </Button>
          </form>
        </div>
      </Modal>

      {toast && <div className="toast show">{toast}</div>}
    </>
  );
}