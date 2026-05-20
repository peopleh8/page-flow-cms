import type { tokens } from '../config/theme.config'

export type ThemeMode = 'light' | 'dark'
export type ThemePreference = 'light' | 'dark' | 'system'
export type AppTokens = typeof tokens

export interface RouteProps {
  isAuth: boolean | null
}
