import type { ThemeMode, ThemePreference } from '../types/commont.types'

export const getSystemThemeMode = (): ThemeMode => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}

export const resolveThemeMode = (preference: ThemePreference): ThemeMode => {
  if (preference === 'system') {
    return getSystemThemeMode()
  }

  return preference
}
