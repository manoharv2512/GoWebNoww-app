import { useEffect, useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconBrandRust, IconXMark } from "@tabler/icons-react";
import { languageLabels, useLanguage, type Language } from "../../../localization";

type Props = {
  mobileOpen: boolean;
  onToggle: () => void;
  onStart: () => void;
};

export default function Navbar({ mobileOpen, onToggle, onStart }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { language, strings, setLanguage } = useLanguage();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeAndScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (mobileOpen) onToggle();
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => mobileOpen && onToggle()}>
          <span className="dot" /> Knectaa
        </a>

        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li><a href="#milega" onClick={() => closeAndScroll("milega")}>{strings.navBenefits}</a></li>
          <li><a href="#journey" onClick={() => closeAndScroll("journey")}>{strings.navJourney}</a></li>
          <li><a href="#kahaniya" onClick={() => closeAndScroll("kahaniya")}>{strings.navStories}</a></li>
          {/* <li><a href="#pricing" onClick={() => closeAndScroll("pricing")}>{strings.navPricing}</a></li> */}
          <li className="language-menu">
            <button
              className="language-trigger"
              type="button"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen(open => !open)}
            >
              {strings.language}: {languageLabels[language]}
            </button>
            {languageOpen && (
              <div className="language-options" role="menu" aria-label={strings.selectLanguage}>
                {(Object.keys(languageLabels) as Language[]).map(code => (
                  <button
                    type="button"
                    role="menuitem"
                    className={code === language ? "active" : ""}
                    key={code}
                    onClick={() => {
                      setLanguage(code);
                      setLanguageOpen(false);
                      if (mobileOpen) onToggle();
                    }}
                  >
                    {languageLabels[code]}
                  </button>
                ))}
              </div>
            )}
          </li>
          <li>
            <button className="nav-cta" onClick={() => { onStart(); if (mobileOpen) onToggle(); }}>
              {strings.navStart}
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