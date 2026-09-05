import { useEffect, useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconBrandRust, IconXMark } from "@tabler/icons-react";

type Props = {
  mobileOpen: boolean;
  onToggle: () => void;
  onStart: () => void;
};

export default function Navbar({ mobileOpen, onToggle, onStart }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeAndScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onToggle();
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => mobileOpen && onToggle()}>
          <span className="dot" /> Knectaa
        </a>

        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li><a href="#milega" onClick={() => closeAndScroll("milega")}>Kya Milega</a></li>
          <li><a href="#journey" onClick={() => closeAndScroll("journey")}>Package Journey</a></li>
          <li><a href="#kahaniya" onClick={() => closeAndScroll("kahaniya")}>Kahaniya</a></li>
          <li><a href="#pricing" onClick={() => closeAndScroll("pricing")}>Pricing</a></li>
          <li>
            <button className="nav-cta" onClick={() => { onStart(); if (mobileOpen) onToggle(); }}>
              Free Mein Shuru Karein
            </button>
          </li>
        </ul>

        <ActionIcon
          variant="subtle"
          className="nav-toggle"
          onClick={onToggle}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <IconXMark /> : <IconBrandRust />}
        </ActionIcon>
      </div>
    </nav>
  );
}