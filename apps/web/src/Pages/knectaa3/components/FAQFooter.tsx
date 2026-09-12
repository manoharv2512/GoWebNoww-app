import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconLocation,
  IconMail,
  IconPhone,
  IconPlus,
} from "@tabler/icons-react";
import { useState } from "react";
import { useLanguage } from "../../../localization";
import { Stack } from "@mantine/core";

type Props = {
  onStart: () => void;
  newsletterDone: boolean;
  onSubscribe: (email: string) => boolean;
};

const faqs = [
  [
    "Kya smartphone chahiye?",
    "Setup aur dashboard ke liye ek chahiye. Customer sirf apna phone tap ya QR scan karega — unhe kuch download karne ki zaroorat nahi.",
  ],
  [
    "Agar meri dukaan mein GST nahi hai toh?",
    "Koi baat nahi — mini-website, NFC card, QR codes aur WhatsApp automation sab bina GST ke kaam karte hain. UPI setup RBI/NPCI ke standard process se hota hai, hamari team aapko guide karegi.",
  ],
  [
    "NFC card kis phone mein chalega?",
    "Zyadatar NFC-enabled Android phones aur iPhone (XS aur usse naye) mein chalta hai — bina app ke, tap karte hi browser khud khul jaata hai.",
  ],
  [
    "Setup mein kitna time lagta hai?",
    "Mini-website aur QR codes usi din live ho sakte hain. NFC card aur standee 3-5 business days mein deliver ho jaate hain.",
  ],
  [
    "Kya mera customer data safe hai?",
    "Bilkul — aapke leads aur khata records sirf aapke dashboard mein dikhte hain, kabhi share ya sell nahi kiye jaate.",
  ],
  [
    "Kya Hindi ya regional language mein mil sakta hai?",
    "Aapki mini-website aur WhatsApp automation messages Hindi, English, ya aapki pasandeeda regional language mein set ho sakte hain.",
  ],
];

export default function FAQFooter({
  onStart,
  newsletterDone,
  onSubscribe,
}: Props) {
  const { strings } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubscribe(email)) setEmail("");
  };

  return (
    <>
      <section className="section on-paper-dim" id="faq">
        <div className="container">
          <div className="section-head reveal-3d">
            <span className="tag">{strings.faqTag}</span>
            <h2>{strings.faqTitle}</h2>
          </div>
          <div className="faq-wrap reveal-3d">
            {faqs.map(([q, a], i) => (
              <div className={`faq-item ${open === i ? "open" : ""}`} key={q}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {q}
                  <IconPlus />
                </button>
                <div className="faq-a">
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-indigo final-cta" id="get-started">
        <div className="container">
          <h2>{strings.readyTitle}</h2>
          <p>{strings.readyDescription}</p>
          <div className="hero-ctas" style={{ justifyContent: "center" }}>
            <button className="btn btn-primary" onClick={onStart}>
              <span>⚡</span> {strings.freeDemo}
            </button>
            <a
              href="https://wa.me/910000000000?text=Hi!%20Mujhe%20Knectaa%20ke%20baare%20mein%20jaanna%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <IconBrandWhatsapp /> {strings.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <footer className="on-indigo" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Stack align="center">
                <h3 style={{ fontSize: "1.4rem", color: "#fff" }}>Knectaa</h3>
                <p>{strings.footerDescription}</p>
              </Stack>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <IconBrandInstagram />
                </a>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <IconBrandWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin />
                </a>
                <a href="#" aria-label="Facebook">
                  <IconBrandFacebook />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>{strings.platform}</h4>
              <ul>
                <li>
                  <a href="#milega">Kya Milega</a>
                </li>
                <li>
                  <a href="#journey">Package Journey</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{strings.contact}</h4>
              <ul>
                <li>
                  <IconLocation /> Nagpur, Maharashtra{" "}
                </li>
                <li>
                  <IconPhone /> +91 9225193354
                </li>
                <li>
                  <IconMail /> getinfoknectaa@gmail.com
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{strings.stayInLoop}</h4>
              <p style={{ fontSize: ".85rem", opacity: 0.7 }}>
                {strings.updates}
              </p>
              {!newsletterDone ? (
                <form className="newsletter-form" onSubmit={submit}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    type="email"
                    placeholder={strings.emailPlaceholder}
                    required
                  />
                  <button type="submit" aria-label="Subscribe">
                    <IconBrandTelegram />
                  </button>
                </form>
              ) : (
                <p className="newsletter-success">✓ {strings.subscribed}</p>
              )}
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Knectaa. {strings.allRights}</span>
            <span>Chhoti dukaan se high-end business tak.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
