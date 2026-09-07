import en from "./en";
import gu from "./gu";
import he from "./he";
import hi from "./hi";
import type { Language, TranslationStrings } from "./types";

export const languageLabels: Record<Language, string> = {
  en: "English",
  hi: "हिन्दी",
  he: "Hinglish",
  gu: "ગુજરાતી"
};

export const translations: Record<Language, TranslationStrings> = { en, hi, he, gu };
