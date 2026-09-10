import {
  IconCheck,
  IconRotate,
} from "@tabler/icons-react";
import { useState } from "react";
import { useLanguage } from "../../../localization";

type Props = {
  onStart: () => void;
};

const plans = [
  {
    name: "Silver",
    tagline: "Online pehchaan banayein",
    monthly: 999,
    annual: 799,
    features: [
      "Digital presence mini-website",
      "1 dynamic QR code",
      "Auto Google review requests",
      "Basic lead capture",
    ],
  },
  {
    name: "Gold",
    tagline: "Pehchaan bhi, payment bhi",
    monthly: 2499,
    annual: 1999,
    featured: true,
    features: [
      "Everything in Silver",
      "Premium NFC business card",
      "WhatsApp business automation",
      "Smart lead capture & CRM",
      "UPI tap-to-pay via NFC card",
    ],
  },
  {
    name: "Platinum",
    tagline: "Poora shop OS",
    monthly: 4999,
    annual: 3999,
    features: [
      "Everything in Gold",
      "Smart NFC standee & tap display",
      "Digital khata (udhar ledger)",
      "Social media marketing",
      "Priority support",
    ],
  },
];

export default function Pricing({ onStart }: Props) {
  const { strings } = useLanguage();

  const [annual, setAnnual] = useState(false);

  const [flipped, setFlipped] = useState<
    Record<string, boolean>
  >({});

  return (
    <section
      className="section on-paper"
      id="pricing"
    >
      <div className="container">
        <div className="section-head reveal-3d">
          <span className="tag">
            {strings.pricingTag}
          </span>

          <h2>{strings.pricingTitle}</h2>

          <p>
            {strings.pricingDescription}
          </p>
        </div>

        <div className="pricing-toggle">
          <span>{strings.monthly}</span>

          <button
            className={`toggle-switch ${
              annual ? "active" : ""
            }`}
            onClick={() =>
              setAnnual((value) => !value)
            }
            role="switch"
            aria-checked={annual}
          >
            <span className="toggle-knob" />
          </button>

          <span>
            {strings.annual}{" "}
            <span className="save-tag">
              {strings.save20}
            </span>
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => {
            const isFlipped =
              !!flipped[plan.name];

            const price = annual
              ? plan.annual
              : plan.monthly;

            return (
              <div
                className={`flip-card ${
                  plan.featured ? "featured" : ""
                } reveal-3d`}
                key={plan.name}
              >
                <div
                  className={`flip-inner ${
                    isFlipped ? "flipped" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="flip-front">
                    {plan.featured && (
                      <span className="price-badge">
                        {strings.mostPopular}
                      </span>
                    )}

                    <h3>{plan.name}</h3>

                    <p className="price-tagline">
                      {plan.tagline}
                    </p>

                    <div className="price-amount">
                      <span className="price-num">
                        ₹
                        {price.toLocaleString(
                          "en-IN"
                        )}
                      </span>

                      <span className="price-period">
                        /month
                      </span>
                    </div>

                    <p className="price-billed">
                      {annual
                        ? strings.billedAnnually
                        : "\u00A0"}
                    </p>

                    <button
                      className="flip-trigger"
                      onClick={() =>
                        setFlipped((current) => ({
                          ...current,
                          [plan.name]: true,
                        }))
                      }
                    >
                      {strings.seeBenefits}

                      <IconRotate />
                    </button>
                  </div>

                  {/* BACK */}
                  <div className="flip-back">
                    <h4>
                      {plan.name}{" "}
                      {strings.planBenefits}
                    </h4>

                    <ul className="price-features">
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <IconCheck />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`btn ${
                        plan.featured
                          ? "btn-primary"
                          : "btn-outline"
                      } btn-block`}
                      onClick={onStart}
                    >
                      {plan.name}{" "}
                      {strings.choosePlan}
                    </button>

                    <button
                      className="flip-trigger flip-back-btn"
                      onClick={() =>
                        setFlipped((current) => ({
                          ...current,
                          [plan.name]: false,
                        }))
                      }
                    >
                      ← {strings.back}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}