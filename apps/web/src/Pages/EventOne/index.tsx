import { useEffect, useRef } from "react";
import temp from "./EventOne.webm";

// Simple full-screen looping video page for mobile.
// No buttons, no navigation, no controls — just the video, playing on load.
export default function LoopVideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Some mobile browsers need an explicit play() call after mount,
    // even with autoPlay set, especially right after a route change.
    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay can be blocked until a user gesture; retry on first touch.
        const resume = () => {
          v.play();
          window.removeEventListener("touchstart", resume);
        };
        window.addEventListener("touchstart", resume, { once: true });
      });
    };
    tryPlay();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        maxWidth: 480,
        margin: "0 auto",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src={temp}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}