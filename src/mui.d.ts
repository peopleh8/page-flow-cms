import { AppTokens } from './types/commont.types'
import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    custom: AppTokens
  }

  interface ThemeOptions {
    custom?: AppTokens
  }
}
