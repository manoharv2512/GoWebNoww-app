export type Language = "en" | "hi" | "he" | "gu";

export type TranslationStrings = Record<string, string> & {
  hello: string;
  language: string;
  selectLanguage: string;
  welcome: string;
};
