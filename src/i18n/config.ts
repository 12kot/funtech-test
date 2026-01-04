import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import intervalPlural from 'i18next-intervalplural-postprocessor'
import LanguageDetector from 'i18next-browser-languagedetector/cjs'

import { en } from '.'

const namespaces = Object.keys(en) as Array<keyof typeof en>

export const avaliableLanguages = ['en'] as const
export type LanguageKeys = (typeof avaliableLanguages)[number]

export const defaultLanguage = 'en'
export const resources = {
  en,
} as const

i18n
  .use(intervalPlural)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    compatibilityJSON: 'v4',
    resources,
    ns: namespaces,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    defaultNS: 'common',
    fallbackLng: defaultLanguage,
  })

i18n.languages = avaliableLanguages

export default i18n
