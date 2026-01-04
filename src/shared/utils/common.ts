import { ENV } from 'config'

export const vibrate = (pattern: number | number[] = 20) => {
  navigator.vibrate(pattern)
}

export const getAssetUrl = (path: string | undefined) => {
  return `${ENV.API_URL}/${path}`
}

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    return false
  }
}

export const resolveCssVar = (value: string, element: HTMLElement = document.documentElement) => {
  const match = value.match(/(--[^)]+)/)
  if (!match) return value

  const varName = match[1]
  return getComputedStyle(element).getPropertyValue(varName).trim()
}

export const combineFields = <T extends object>(obj: T | undefined, fields: (keyof T)[]): string => {
  if (!obj) return ''

  return fields
    .map((key) => obj[key])
    .filter(Boolean)
    .map((v) => String(v).trim())
    .join(' ')
    .trim()
}

export const calculateProgress = (current: number, total: number): number => {
  if (total === 0) return 0
  return +Math.min((current / total) * 100, 100).toFixed(2)
}
