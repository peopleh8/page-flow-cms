import { useEffect, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { getTheme } from './config/theme.config'
import Router from './router/Router'
import type { ThemePreference } from './types/commont.types'
import { resolveThemeMode } from './utils/theme-mode'
import { THEME_STORAGE_KEY } from './constants/theme.const'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/600.css'
import '@fontsource/roboto/700.css'
import 'flag-icons/css/flag-icons.min.css'

export default function App() {
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => {
    return (localStorage.getItem(THEME_STORAGE_KEY) as ThemePreference) || 'system'
  })

  const [systemMode, setSystemMode] = useState(() => resolveThemeMode('system'))

  const mode = themePreference === 'system' ? systemMode : themePreference

  const theme = useMemo(() => getTheme(mode), [mode])

  const changeThemePreference = (preference: ThemePreference) => {
    setThemePreference(preference)
    localStorage.setItem(THEME_STORAGE_KEY, preference)
  }

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      setSystemMode(media.matches ? 'dark' : 'light')
    }

    handleChange()

    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <Router />
      </LocalizationProvider>
    </ThemeProvider>
  )
}
