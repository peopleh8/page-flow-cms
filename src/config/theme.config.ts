import { createTheme, type PaletteMode } from '@mui/material/styles'
import type { ThemeMode } from '../types/commont.types'
import { FONT_FAMILY } from '../constants/theme.const'

export const themeConfig = {
  light: {
    palette: {
      mode: 'light' as PaletteMode,

      common: {
        black: '#000',
        white: '#fff',
      },

      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
      },

      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
        contrastText: '#fff',
      },

      error: {
        main: '#c20a0a',
        light: '#ef5350',
        dark: '#c62828',
        contrastText: '#fff',
      },

      warning: {
        main: '#ed6c02',
        light: '#ff9800',
        dark: '#e65100',
        contrastText: '#fff',
      },

      info: {
        main: '#0288d1',
        light: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff',
      },

      success: {
        main: '#2e7d32',
        light: '#4caf50',
        dark: '#1b5e20',
        contrastText: '#fff',
      },

      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'hsl(220, 20%, 35%)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },

      divider: 'rgba(0, 0, 0, 0.12)',

      background: {
        default: 'rgba(255, 255, 255, 1)',
        paper: 'hsl(220, 35%, 97%)',
      },

      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08,
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
  },

  dark: {
    palette: {
      mode: 'dark' as PaletteMode,

      common: {
        black: '#000',
        white: '#fff',
      },

      primary: {
        main: '#90caf9',
        light: '#e3f2fd',
        dark: '#42a5f5',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },

      secondary: {
        main: '#fff',
        light: '#fff',
        dark: '#fff',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },

      error: {
        main: '#c20a0a',
        light: '#e57373',
        dark: '#d32f2f',
        contrastText: '#fff',
      },

      warning: {
        main: '#ffa726',
        light: '#ffb74d',
        dark: '#f57c00',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },

      info: {
        main: '#29b6f6',
        light: '#4fc3f7',
        dark: '#0288d1',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },

      success: {
        main: '#66bb6a',
        light: '#81c784',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },

      text: {
        primary: '#fff',
        secondary: 'hsl(220, 20%, 65%)',
        disabled: 'rgba(255, 255, 255, 0.5)',
      },

      divider: 'rgba(255, 255, 255, 0.12)',

      background: {
        default: 'rgba(5, 7, 10, 1)',
        paper: 'hsl(220, 30%, 7%)',
      },

      action: {
        active: '#fff',
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.16)',
        selectedOpacity: 0.16,
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(255, 255, 255, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    },
  },
} as const

export const getTheme = (mode: ThemeMode) =>
  createTheme({
    ...themeConfig[mode],

    typography: {
      fontFamily: FONT_FAMILY,

      h1: {
        fontFamily: FONT_FAMILY,
        fontWeight: 500,
        fontSize: '2rem',
        lineHeight: 1.25,
      },

      h2: {
        fontFamily: FONT_FAMILY,
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: 1.25,
      },

      h3: {
        fontFamily: FONT_FAMILY,
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.5,
      },

      h4: {
        fontFamily: FONT_FAMILY,
        fontWeight: 500,
        fontSize: '1.125rem',
        lineHeight: 1.5,
      },

      h5: {
        fontFamily: FONT_FAMILY,
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },

      body1: {
        fontFamily: FONT_FAMILY,
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },

      body2: {
        fontFamily: FONT_FAMILY,
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
      },

      button: {
        fontFamily: FONT_FAMILY,
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.5,
        textTransform: 'none',
      },

      caption: {
        fontFamily: FONT_FAMILY,
        fontWeight: 700,
        fontSize: '0.75rem',
        lineHeight: 1.5,
      },
    },

    spacing: 8,

    shape: {
      borderRadius: 8,
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 991,
        lg: 1440,
        xl: 1920,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          html: {
            colorScheme: theme.palette.mode,
          },

          body: {
            colorScheme: theme.palette.mode,
          },
        }),
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  })
