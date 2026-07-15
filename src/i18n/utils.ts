import { ui, defaultLang } from './ui'

export type Locale = keyof typeof ui

export const locales = Object.keys(ui) as Locale[]

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Locale
  return defaultLang
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}
