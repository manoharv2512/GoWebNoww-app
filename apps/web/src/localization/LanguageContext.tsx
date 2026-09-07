import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";
import { translations } from "./locales";
import type { Language, TranslationStrings } from "./types";

const STORAGE_KEY = "gowebnow-language";

export type LanguageContextValue = {
  language: Language;
  strings: TranslationStrings;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (savedLanguage && savedLanguage in translations) {
    return savedLanguage as Language;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("gu")) return "gu";
  if (browserLanguage.startsWith("hi")) return "hi";
  if (browserLanguage.startsWith("he")) return "he";
  return "en";
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language === "he" ? "en" : language;
  }, [language]);

  const value = useMemo(
    () => ({ language, strings: translations[language], setLanguage }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
