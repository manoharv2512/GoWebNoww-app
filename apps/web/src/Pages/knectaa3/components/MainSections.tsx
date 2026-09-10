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
import { useLanguage } from "../../../localization";
import type { TranslationStrings } from "../../../localization";

type TranslationStringKeys = Exclude<keyof TranslationStrings, 'kaiseKamKartaHai'>;

const milega1: [string, TranslationStringKeys, TranslationStringKeys][] = [
  ["📈", "reviews", "reviewRequests"], ["📲", "digitalLoyalityCard", "digitalLoyalityCard"], ["💬", "whatsappAutomation", "whatsappAutomation"], ["💳", "payment", "upiTap"], ["📓", "ledger", "ledger"], ["🌐", "website", "website"], ["🔁", "followUps", "followUps"], ["⭐", "rating", "reviewManagement"], ["📊", "smartCrm", "smartCrm"]
];
const milega2: [string, TranslationStringKeys, TranslationStringKeys][] = [
  ["🏪", "miniWebsite", "miniWebsite"], ["📲", "nfcCard", "nfcCard"], ["🎯", "leadCapture", "leadCapture"], ["💰", "upiPayments", "upiPayments"], ["📸", "amplification", "amplification"], ["📲", "digitalLoyalityCard", "digitalLoyalityCard"], ["🏷️", "qrCodes", "qrCodes"], ["🤝", "trustedNetwork", "trustedNetwork"], ["⚡", "fastOnboarding", "fastOnboarding"]
];

function Marquee({ items, strings, reverse = false }: { items: [string, TranslationStringKeys, TranslationStringKeys][]; strings: TranslationStrings; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {doubled.map(([icon, titleKey, descKey], i) => (
          <div className="milega-card" key={`${titleKey}-${i}`}>
            <div className="milega-brand"><span className="dot"/>KNECTAA</div>
            <div className="milega-icon">{icon}</div>
            <h4>{strings[titleKey]}</h4><p>{strings[descKey]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps: [React.ElementType, keyof TranslationStrings["kaiseKamKartaHai"], keyof TranslationStrings["kaiseKamKartaHai"]][] = [
  [IconAlignBoxTopCenter, "step1Title", "step1Description"], [IconHandClick, "step2Title", "step2Description"], [IconDatabase, "step3Title", "step3Description"], [IconMessage2, "step4Title", "step4Description"]
];

// Journey steps now use the already-imported Tabler icons instead of
// FontAwesome icons that were never imported (this was causing a
// "not defined" error at build/runtime).
const journeySteps: [React.ElementType, TranslationStringKeys][] = [
  [IconDeviceMobile, "tapScan"], [IconWorld, "websiteLive"], [IconCurrencyRupee, "upiPayment"], [IconStar, "reviewRequest"], [IconBrandWhatsapp, "whatsappFollowup"], [IconRefresh, "repeatCustomer"]
];

export default function MainSections() {
  const { strings } = useLanguage();
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
            <span className="tag">{strings.benefitsTag}</span>
            <h2>{strings.benefitsTitle}</h2>
            <p>{strings.benefitsDescription}</p>
          </div>
        </div>
        <Marquee items={milega1} strings={strings}/>
        <Marquee items={milega2} strings={strings} reverse/>
      </section>

      <section className="section on-paper-dim" id="kaise">
        <div className="container">
          <div className="section-head reveal-3d">
            <span className="tag">{strings.howTag}</span>
            <h2>{strings.kaiseKamKartaHai.sectionTitle}</h2>
          </div>
          <div className="zigzag-wrap">
            {steps.map(([Icon, titleKey, descKey], i) => (
              <div
                className={`zigzag-step reveal-3d ${
                  i % 2 ? "reverse" : ""
                }`}
                key={titleKey as string}
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

                  <h4>{strings.kaiseKamKartaHai[titleKey as keyof typeof strings.kaiseKamKartaHai]}</h4>

                  <p>{strings.kaiseKamKartaHai[descKey as keyof typeof strings.kaiseKamKartaHai]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-paper" id="journey">
        <div className="container">
          <div className="section-head reveal-3d">
            <span className="tag">{strings.journeyTag}</span>
            <h2>{strings.journeyTitle}</h2>
            <p>{strings.journeyDescription}</p>
          </div>

          <div className="journey-flow reveal-3d" ref={journeyRef}>
            <div className={`journey-line ${animateJourney ? "animate" : ""}`}/>
            {journeySteps.map(([Icon, labelKey]) => (
              <div className="journey-node" key={labelKey}>
                <div className="journey-icon"><Icon size={28} stroke={1.8} /></div>
                <span>{strings[labelKey]}</span>
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