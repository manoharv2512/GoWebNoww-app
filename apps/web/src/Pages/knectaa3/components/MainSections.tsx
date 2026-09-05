import {
  IconAlignBoxTopCenter,
  IconDatabase,
  IconHandClick,
  IconMessage2,
  IconDeviceMobile,
  IconWorld,
  IconCurrencyRupee,
  IconStar,
  IconBrandWhatsapp,
  IconRefresh,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const milega1 = [
  ["📈", "+150% Reviews", "Google Review Auto-Requests"],
  ["💬", "Reply Kabhi Miss Nahi", "WhatsApp Automation"],
  ["💳", "2 Second Payment", "UPI Tap-to-Pay"],
  ["📓", "Udhaar? Sab Digital", "Khata Ledger"],
  ["🌐", "24 Ghante Mein Live", "Apni Website"],
  ["🔁", "Customer Wapas Aata Hai", "Auto Follow-ups"],
  ["⭐", "4.9★ Rating Banaye", "Review Management"],
  ["📊", "Har Lead Track Ho", "Smart CRM"]
];
const milega2 = [
  ["🏪", "Chhoti Dukaan, Bada Presence", "Mini-Website"],
  ["📲", "Ek Tap Mein Sab Kuch", "NFC Business Card"],
  ["🎯", "Naye Customers Roz", "Lead Capture"],
  ["💰", "Cash Nahi, Sirf Tap", "UPI Payments"],
  ["📸", "Social Media Apne Aap", "Amplification"],
  ["🏷️", "QR Scan, Order Ready", "Dynamic QR Codes"],
  ["🤝", "500+ Dukaanein Judi", "Trusted Network"],
  ["⚡", "Same Day Setup", "Fast Onboarding"]
];

function Marquee({ items, reverse = false }: { items: string[][]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {doubled.map(([icon, title, desc], i) => (
          <div className="milega-card" key={`${title}-${i}`}>
            <div className="milega-brand"><span className="dot"/>KNECTAA</div>
            <div className="milega-icon">{icon}</div>
            <h4>{title}</h4><p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  [IconAlignBoxTopCenter, "Apna Kit Mangwao", "NFC card, standee ya QR code order karo — dashboard usi din ban jaata hai."],
  [IconHandClick, "Customer Tap Ya Scan Kare", "Ek tap mein unke saamne aapki website, menu, ya payment page khul jaata hai."],
  [IconDatabase, "Data Apne Aap Save", "Har customer ka naam, number aur zaroorat seedha aapke CRM mein chala jaata hai."],
  [IconMessage2, "Follow-Up Hum Karenge", "WhatsApp reminder aur Google review request apne aap chala jaata hai — aapko yaad rakhne ki zaroorat nahi."]
];

// Journey steps now use the already-imported Tabler icons instead of
// FontAwesome icons that were never imported (this was causing a
// "not defined" error at build/runtime).
const journeySteps: [React.ElementType, string][] = [
  [IconDeviceMobile, "Tap / Scan"],
  [IconWorld, "Website Live"],
  [IconCurrencyRupee, "UPI Payment"],
  [IconStar, "Review Request"],
  [IconBrandWhatsapp, "WhatsApp Follow-up"],
  [IconRefresh, "Repeat Customer"]
];

export default function MainSections() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const [animateJourney, setAnimateJourney] = useState(false);

  useEffect(() => {
    const el = journeyRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setAnimateJourney(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="section on-paper" id="milega">
        <div className="container">
          <div className="section-head reveal-3d">
            <span className="tag">Kya Milega</span>
            <h2>Aapko Milega Yeh Sab</h2>
            <p>Ek platform, poora fayda. Yeh rahi jhalak.</p>
          </div>
        </div>
        <Marquee items={milega1}/>
        <Marquee items={milega2} reverse/>
      </section>

      <section className="section on-paper-dim" id="kaise">
        <div className="container">
          <div className="section-head reveal-3d">
            <span className="tag">Kaise Kaam Karta Hai</span>
            <h2>Sirf 4 Steps Mein Shuru</h2>
          </div>
          <div className="zigzag-wrap">
            {steps.map(([Icon, title, desc], i) => (
              <div
                className={`zigzag-step reveal-3d ${
                  i % 2 ? "reverse" : ""
                }`}
                key={title as string}
              >
                <div className="zigzag-visual">
                  <div className="zigzag-icon">
                    <Icon size={42} stroke={1.8} />
                  </div>
                </div>

                <div className="zigzag-text">
                  <span className="step-num">
                    STEP 0{i + 1}
                  </span>

                  <h4>{title as string}</h4>

                  <p>{desc as string}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-paper" id="journey">
        <div className="container">
          <div className="section-head reveal-3d">
            <span className="tag">Package Journey</span>
            <h2>Poora Flow, Ek Nazar Mein</h2>
            <p>Ek tap poore customer journey mein kaise badalta hai — aur kaunsa plan kahan tak le jaata hai.</p>
          </div>

          <div className="journey-flow reveal-3d" ref={journeyRef}>
            <div className={`journey-line ${animateJourney ? "animate" : ""}`}/>
            {journeySteps.map(([Icon, label]) => (
              <div className="journey-node" key={label}>
                <div className="journey-icon"><Icon size={28} stroke={1.8} /></div>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="journey-coverage reveal-3d">
            {[
              ["Silver", "silver", "33%"],
              ["Gold", "gold", "66%"],
              ["Platinum", "platinum", "100%"]
            ].map(([label, cls, fill]) => (
              <div className="coverage-row" key={label}>
                <span className={`coverage-label ${cls}`}>{label}</span>
                <div className="coverage-bar">
                  <div
                    className={`coverage-fill ${cls}-fill ${animateJourney ? "animate" : ""}`}
                    style={{ "--fill": fill } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="biz-ticker" aria-hidden="true">
        <div className="biz-ticker-track">
          {["☕ Cafés","💇 Salons","🛒 Kiranas","👗 Boutiques","🏋️ Gyms","🧖 Spas","🍽️ Restaurants","🔧 Repair Shops","💍 Jewellerys","🏨 Hotels",
            "☕ Cafés","💇 Salons","🛒 Kiranas","👗 Boutiques","🏋️ Gyms","🧖 Spas","🍽️ Restaurants","🔧 Repair Shops","💍 Jewellerys","🏨 Hotels"
          ].map((x, i) => <span key={i}>{x}</span>)}
        </div>
      </div>
    </>
  );
}