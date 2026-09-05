import { IconCheck, IconChevronLeft, IconChevronRight, IconPlayCard, IconRotate } from "@tabler/icons-react";
import { useEffect, useState } from "react";

type Props = { onStart: () => void };

const stories = [
  ["Sunita Devi","Sunita Chaat Corner","0:32","linear-gradient(160deg,#0F1D35,#C1272D)"],
  ["Farhan Sheikh","Sheikh Kirana Store","0:41","linear-gradient(160deg,#182B4D,#F5A623)"],
  ["Priya Deshmukh","Glow Salon","0:38","linear-gradient(160deg,#C1272D,#0F1D35)"],
  ["Ananya Kapoor","Ananya Boutique","0:29","linear-gradient(160deg,#2E4571,#FFC85C)"],
  ["Vikram Mehta","The Copper Bowl","0:47","linear-gradient(160deg,#0F1D35,#2E4571)"],
  ["Meera Nair","Serene Spa & Wellness","0:35","linear-gradient(160deg,#F5A623,#C1272D)"]
];

const plans = [
  {
    name:"Silver", tagline:"Online pehchaan banayein", monthly:999, annual:799,
    features:["Digital presence mini-website","1 dynamic QR code","Auto Google review requests","Basic lead capture"]
  },
  {
    name:"Gold", tagline:"Pehchaan bhi, payment bhi", monthly:2499, annual:1999,
    featured:true,
    features:["Everything in Silver","Premium NFC business card","WhatsApp business automation","Smart lead capture & CRM","UPI tap-to-pay via NFC card"]
  },
  {
    name:"Platinum", tagline:"Poora shop OS", monthly:4999, annual:3999,
    features:["Everything in Gold","Smart NFC standee & tap display","Digital khata (udhar ledger)","Social media marketing","Priority support"]
  }
];

function VideoThumb({ story }: { story: typeof stories[number] }) {
  return (
    <div className="video-thumb" style={{ background: story[3] }}>
      <span className="video-duration">{story[2]}</span>
      <button className="play-btn" onClick={(e) => { e.stopPropagation(); alert("🎥 Sample clip — real customer videos coming soon"); }} aria-label="Play">
        <IconPlayCard />
      </button>
      <div className="video-caption"><strong>{story[0]}</strong><span>{story[1]}</span></div>
    </div>
  );
}

export default function StoriesPricing({ onStart }: Props) {
  const [rotation, setRotation] = useState(0);
  const [annual, setAnnual] = useState(false);
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = window.setInterval(() => setRotation(r => r + 0.48), 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="section on-indigo" id="kahaniya">
        <div className="container">
          <div className="section-head reveal-3d">
            <span className="tag on-dark">Kahaniya</span>
            <h2 style={{ color:"#fff" }}>Chhoti Dukaan Se High-End Tak</h2>
            <p style={{ color:"rgba(255,255,255,.7)" }}>Asli dukaandaar, apni zubaani.</p>
          </div>
        </div>

        <div className="orbit-wrap">
          <div className="orbit-ring-3d" style={{ transform:`rotateY(${rotation}deg)` }}>
            {stories.map((story, i) => (
              <div className="orbit-card-3d" style={{ transform:`rotateY(${i * 60}deg) translateZ(380px)` }} key={story[0]}>
                <VideoThumb story={story}/>
              </div>
            ))}
          </div>
          <button className="orbit-arrow prev" onClick={() => setRotation(r => r + 60)} aria-label="Previous story"><IconChevronLeft /></button>
          <button className="orbit-arrow next" onClick={() => setRotation(r => r - 60)} aria-label="Next story"><IconChevronRight /></button>
        </div>

        <div className="container">
          <div className="orbit-scroll">
            {stories.map(s => <VideoThumb story={s} key={s[0]}/>)}
          </div>
          <p className="kahaniya-hint">Hover to pause · tap ▶ for a sample clip</p>
        </div>
      </section>

      <section className="section on-paper" id="pricing">
        <div className="container">
          <div className="section-head reveal-3d">
            <span className="tag">Pricing</span>
            <h2>Apna Plan Chuno</h2>
            <p>Yeh illustrative pricing hai — final package aapke business type ke hisaab se customise hota hai. Card flip karke poori list dekhein.</p>
          </div>

          <div className="pricing-toggle">
            <span>Monthly</span>
            <button
              className={`toggle-switch ${annual ? "active" : ""}`}
              onClick={() => setAnnual(v => !v)}
              role="switch"
              aria-checked={annual}
            ><span className="toggle-knob"/></button>
            <span>Annual <span className="save-tag">Save 20%</span></span>
          </div>

          <div className="pricing-grid">
            {plans.map(plan => {
              const isFlipped = !!flipped[plan.name];
              const price = annual ? plan.annual : plan.monthly;
              return (
                <div className={`flip-card ${plan.featured ? "featured" : ""} reveal-3d`} key={plan.name}>
                  <div className={`flip-inner ${isFlipped ? "flipped" : ""}`}>
                    <div className="flip-front">
                      {plan.featured && <span className="price-badge">Most Popular</span>}
                      <h3>{plan.name}</h3>
                      <p className="price-tagline">{plan.tagline}</p>
                      <div className="price-amount"><span className="price-num">₹{price.toLocaleString("en-IN")}</span><span className="price-period">/month</span></div>
                      <p className="price-billed">{annual ? "billed annually" : "\u00A0"}</p>
                      <button className="flip-trigger" onClick={() => setFlipped(f => ({...f, [plan.name]: true}))}>
                        Dekhiye Kya Milega <IconRotate />
                      </button>
                    </div>
                    <div className="flip-back">
                      <h4>{plan.name} Mein Kya Milega</h4>
                      <ul className="price-features">
                        {plan.features.map(f => <li key={f}><IconCheck /> {f}</li>)}
                      </ul>
                      <button className={`btn ${plan.featured ? "btn-primary" : "btn-outline"} btn-block`} onClick={onStart}>{plan.name} Chunein</button>
                      <button className="flip-trigger flip-back-btn" onClick={() => setFlipped(f => ({...f, [plan.name]: false}))}>← Wapas</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}