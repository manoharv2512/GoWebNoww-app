import { useEffect, useRef } from "react";
import webmSrc from "./EventOne.webm";
import mp4Src from "./WhatsApp Video 2026-09-05 at 4.46.40 PM.mp4"; // iOS Safari cannot play .webm — an .mp4 (H.264) fallback is required

// Simple full-screen looping video page for mobile.
// No buttons, no navigation, no controls — just the video, playing on load.
export default function LoopVideoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Belt-and-suspenders: some browsers only honor the muted DOM
    // property (not the JSX attribute) when deciding whether to
    // allow autoplay. Missing this is the #1 reason autoplay silently
    // fails on mobile.
    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay can still be blocked until a user gesture; resume on first touch.
          const resume = () => {
            v.muted = true;
            v.play();
            window.removeEventListener("touchstart", resume);
          };
          window.addEventListener("touchstart", resume, { once: true });
        });
      }
    };

    // If metadata/data is already loaded (fast cache), play immediately;
    // otherwise wait for the video to actually be ready.
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener("loadeddata", tryPlay, { once: true });
    }

    // iOS sometimes pauses playback when the app/tab regains focus
    // after being backgrounded — resume it when that happens.
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        v.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
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
        autoPlay
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      >
        {/* List mp4 first: it has the widest support (iOS Safari, older Android). */}
        <source src={mp4Src} type="video/mp4" />
        <source src={webmSrc} type="video/webm" />
      </video>
    </div>
  );
}