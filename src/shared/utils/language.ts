import { IApiLanguageCodes } from 'shared/features/profile'

type I18nLanguage = 'kz' | 'ru'

const I18N_TO_API_MAP: Record<I18nLanguage, IApiLanguageCodes> = {
  kz: 'kk',
  ru: 'ru',
}

const API_TO_I18N_MAP: Record<IApiLanguageCodes, I18nLanguage> = {
  kk: 'kz',
  ru: 'ru',
}

export const mapI18nToApiLanguage = (lang: I18nLanguage): IApiLanguageCodes => {
  if (!lang || !(lang in I18N_TO_API_MAP)) return 'ru'
  return I18N_TO_API_MAP[lang]
}
export const mapApiToI18nLanguage = (lang: IApiLanguageCodes): I18nLanguage => {
  if (!lang || !(lang in API_TO_I18N_MAP)) return 'ru'
  return API_TO_I18N_MAP[lang]
}
