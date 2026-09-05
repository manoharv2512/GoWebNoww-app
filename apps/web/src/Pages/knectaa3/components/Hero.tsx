import { Box, Flex } from "@mantine/core";
import { IconBolt, IconBrandWhatsapp, IconCheck, IconChevronDown, IconCurrencyRupee, IconDots, IconDotsCircleHorizontal, IconPoint, IconStar, IconWifi } from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
type Props = { onStart: () => void };

const businessTypes = [
  ["☕", "Café"], ["💇", "Salon"], ["🛒", "Kirana"], ["👗", "Boutique"],
  ["🏋️", "Gym"], ["🧖", "Spa"], ["🍽️", "Restaurant"], ["🔧", "Repair Shop"],
  ["💍", "Jewellery"], ["🏨", "Hotel"]
];

const phoneStates = [
  <div className="ps ps-website" key="website">
    <div className="ps-browser-bar"><span/><span/><span/></div>
    <div className="ps-hero-mini"><strong>Sunita Chaat Corner</strong><small>Order Now · Menu · Reviews</small></div>
    <div className="ps-line"/><div className="ps-line short"/>
  </div>,
  <div className="ps ps-payment" key="payment">
    <div className="ps-check"><IconCheck/></div>
    <strong>₹250 Paid</strong><small>via UPI · Knectaa Tap</small>
  </div>,
  <div className="ps ps-review" key="review">
    <div className="ps-stars">★★★★★</div>
    <strong>Rate Your Visit</strong><small>Tap to leave a Google review</small>
  </div>,
  <div className="ps ps-whatsapp" key="whatsapp">
    <div className="ps-chat-bubble">Aapka order ready hai! 🎉</div>
    <small>Auto-sent via Knectaa</small>
  </div>
];

export default function Hero({ onStart }: Props) {
  const [phoneIndex, setPhoneIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setPhoneIndex(i => (i + 1) % phoneStates.length),
      3200
    );
    return () => clearInterval(timer);
  }, []);

  const columns = useMemo(
    () =>
      Array.from({ length: 6 }, (_, c) => {
        const offset = c % businessTypes.length;
        const rotated = businessTypes.slice(offset).concat(businessTypes.slice(0, offset));
        return [...rotated, ...rotated];
      }),
    []
  );

  return (
    <section className="hero" id="home">
      <div className="hero-reel" aria-hidden="true">
        {columns.map((items, c) => (
          <div className="reel-col" key={c}>
            <div
              className="reel-track"
              style={{
                animationDuration: `${16 + c * 3}s`,
                animationName: c % 2 === 0 ? "reelScrollUp" : "reelScrollDown"
              }}
            >
              {items.map(([icon, label], i) => (
                <div className="reel-tile" key={`${c}-${i}`}>
                  <div>{icon}</div><span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="hero-scrim" />

      <div className="container hero-grid">
        <Box ta="left">
          <Flex p={8} style={{border: "1px solid white", borderRadius: 8, width: "fit-content", }}>
            <IconPoint size={20} style={{ marginRight: 6, verticalAlign: "middle" }} />
          <span className="tag on-dark">Chhoti Dukaan Ho Ya Bada Brand</span>
          </Flex>
          <h1 className="hero-title">
            <span className="line1">Ek Tap.</span>
            <span className="line2">Poori Dukaan Digital.</span>
          </h1>
          <p className="sub">
            Website, business card, UPI payment, digital khata aur Google reviews — sab kuch ek NFC tap ya QR scan ke peeche. Chhoti dukaan se leke high-end business tak, sabke liye.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onStart}>
              <IconBolt/> Free Demo Lo
            </button>
            <a
              href="https://wa.me/910000000000?text=Hi!%20Mujhe%20Knectaa%20ke%20baare%20mein%20jaanna%20hai."
              target="_blank" rel="noopener noreferrer" className="btn btn-ghost"
            >
              <IconBrandWhatsapp/> WhatsApp Pe Baat Karein
            </a>
          </div>
        </Box>

        <div className="hero-visual">
          <div className="phone-cluster">
            <div className="phone-mockup reveal">
              <div className="phone-frame">
                <div className="phone-notch"/>
                <div className="phone-screen" style={{ opacity: 1 }}>
                  {phoneStates[phoneIndex]}
                </div>
              </div>
              <div className="phone-tap-badge"><span className="mini-ripple"/><IconWifi/></div>
              <div className="phone-dots">
                {phoneStates.map((_, i) => (
                  <span
                    key={i}
                    className={i === phoneIndex ? "active" : ""}
                    onClick={() => setPhoneIndex(i)}
                  />
                ))}
              </div>
            </div>
            <div className="float-chip chip-1"><IconCurrencyRupee/> UPI Live</div>
            <div className="float-chip chip-2"><IconStar/> 4.9★ Rating</div>
            <div className="float-chip chip-3"><IconBrandWhatsapp/> Auto-Reply</div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {[
          ["500+", "Dukaanein Judi"],
          ["2Cr+", "UPI Processed"],
          ["4.9★", "Average Rating"],
          ["10K+", "Reviews Generated"]
        ].map(([num, label]) => (
          <div className="hero-stat" key={label}>
            <span className="stat-num">{num}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>

      <a href="#milega" className="scroll-cue" aria-label="Scroll down">
        <IconChevronDown/>
      </a>
    </section>
  );
}