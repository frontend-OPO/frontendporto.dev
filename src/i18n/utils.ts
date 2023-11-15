import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const lang = url.searchParams.get("lang");
  if (lang && lang in ui) {
    return lang as keyof typeof ui;
  }
}

export function useTranslations(lang?: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return lang ? ui[lang][key] : ui[defaultLang][key];
  };
}
