import {
  IconChevronLeft,
  IconChevronRight,
  IconPlayCard,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../../../localization";

const stories = [
  [
    "Sunita Devi",
    "Sunita Chaat Corner",
    "0:32",
    "linear-gradient(160deg,#0F1D35,#C1272D)",
  ],
  [
    "Farhan Sheikh",
    "Sheikh Kirana Store",
    "0:41",
    "linear-gradient(160deg,#182B4D,#F5A623)",
  ],
  [
    "Priya Deshmukh",
    "Glow Salon",
    "0:38",
    "linear-gradient(160deg,#C1272D,#0F1D35)",
  ],
  [
    "Ananya Kapoor",
    "Ananya Boutique",
    "0:29",
    "linear-gradient(160deg,#2E4571,#FFC85C)",
  ],
  [
    "Vikram Mehta",
    "The Copper Bowl",
    "0:47",
    "linear-gradient(160deg,#0F1D35,#2E4571)",
  ],
  [
    "Meera Nair",
    "Serene Spa & Wellness",
    "0:35",
    "linear-gradient(160deg,#F5A623,#C1272D)",
  ],
] as const;

function VideoThumb({
  story,
}: {
  story: (typeof stories)[number];
}) {
  return (
    <div
      className="video-thumb"
      style={{
        background: story[3],
      }}
    >
      <span className="video-duration">
        {story[2]}
      </span>

      <button
        className="play-btn"
        onClick={(e) => {
          e.stopPropagation();
          alert(
            "🎥 Sample clip — real customer videos coming soon"
          );
        }}
        aria-label="Play"
      >
        <IconPlayCard />
      </button>

      <div className="video-caption">
        <strong>{story[0]}</strong>
        <span>{story[1]}</span>
      </div>
    </div>
  );
}

export default function Stories() {
  const { strings } = useLanguage();

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRotation((r) => r + 0.48);
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="section on-indigo"
      id="kahaniya"
    >
      <div className="container">
        <div className="section-head reveal-3d">
          <span className="tag on-dark">
            {strings.storiesTag}
          </span>

          <h2 style={{ color: "#fff" }}>
            {strings.storiesTitle}
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,.7)",
            }}
          >
            {strings.storiesDescription}
          </p>
        </div>
      </div>

      <div className="orbit-wrap">
        <div
          className="orbit-ring-3d"
          style={{
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {stories.map((story, i) => (
            <div
              className="orbit-card-3d"
              style={{
                transform: `rotateY(${i * 60}deg) translateZ(380px)`,
              }}
              key={story[0]}
            >
              <VideoThumb story={story} />
            </div>
          ))}
        </div>

        <button
          className="orbit-arrow prev"
          onClick={() => setRotation((r) => r + 60)}
          aria-label="Previous story"
        >
          <IconChevronLeft />
        </button>

        <button
          className="orbit-arrow next"
          onClick={() => setRotation((r) => r - 60)}
          aria-label="Next story"
        >
          <IconChevronRight />
        </button>
      </div>

      <div className="container">
        <div className="orbit-scroll">
          {stories.map((story) => (
            <VideoThumb
              story={story}
              key={story[0]}
            />
          ))}
        </div>

        <p className="kahaniya-hint">
          {strings.storyHint}
        </p>
      </div>
    </section>
  );
}