import { createTheme, type PaletteMode } from '@mui/material/styles'
import type { ThemeMode } from '../types/commont.types'
import { hsl } from '../utils/hsl'
import { FONT_FAMILY } from '../constants/theme.const'

const primaryTokens = {
  50: '190 90% 97%',
  100: '208 90% 88%',
  200: '211 90% 78%',
  300: '214 90% 65%',
  400: '218 90% 41%',
  500: '210 90% 26%',
  600: '215 90% 22%',
  700: '240 90% 17%',
  800: '250 90% 14%',
  900: '270 90% 12%',
}

const greyTokens = {
  50: '213 30% 96%',
  100: '213 22% 91%',
  200: '213 18% 89%',
  300: '213 18% 81%',
  400: '213 13% 71%',
  500: '213 12% 64%',
  600: '213 15% 47%',
  700: '213 11% 31%',
  800: '213 12% 22%',
  900: '213 11% 11%',
}

export const tokens = {
  colors: {
    primary: primaryTokens,
    grey: greyTokens,
  },

  font: {
    soft: hsl(greyTokens[800]),
    hard: hsl(greyTokens[900]),
    onDark: '#fff',
    interactive: hsl(primaryTokens[500]),
    placeholder: hsl(greyTokens[600]),
  },

  bg: {
    default: '#fff',
    soft: hsl(greyTokens[50], 0.9),
    hard: hsl(greyTokens[100], 0.8),
    highlight: hsl(primaryTokens[600]),
    overlay: 'hsl(0deg 0 0 / 0.3)',

    button: hsl(primaryTokens[500]),
    buttonHover: hsl(primaryTokens[700]),
    buttonActive: hsl(primaryTokens[800]),
    buttonDisabled: hsl(greyTokens[100], 0.5),

    inputBase: hsl(greyTokens[50], 0.5),
    inputHover: hsl(greyTokens[50]),
    inputActive: hsl(greyTokens[200]),
    inputDisabled: hsl(greyTokens[100]),

    switchTrack: hsl(greyTokens[300], 0.6),
    selectOption: hsl(primaryTokens[100], 0.8),
  },

  border: {
    solidButton: `1px solid ${hsl(primaryTokens[500])}`,
    default: `1px solid ${hsl(greyTokens[300])}`,
    soft: `1px solid ${hsl(greyTokens[300], 0.8)}`,
    hard: `1px solid ${hsl(greyTokens[500])}`,
    interactive: `1px solid ${hsl(primaryTokens[400])}`,
    transparent: '1px solid hsl(0deg 0 0 / 0)',
    activeSwitch: `1px solid ${hsl(primaryTokens[100])}`,
  },

  shadow: {
    elevation1: '0px 1px 2px 0px hsl(0deg 0 0 / 0.15)',
    elevation2: `0px 2px 4px 0px ${hsl(greyTokens[700], 0.2)}`,
    elevation3: `0px 4px 16px -4px ${hsl(greyTokens[700], 0.2)}, 0px 1px 2px -1px ${hsl(greyTokens[700], 0.1)}`,
    elevation4: '0px 8px 32px -4px hsl(0deg 0 0 / 0.25), 0px 1px 2px -1px hsl(0deg 0 0 / 0.15)',

    interactiveButton: `0 -2px 0.5px 0 ${hsl(primaryTokens[700], 0.4)} inset, 0 2px 0.5px 0 ${hsl(primaryTokens[400], 0.6)} inset, 0 1px 0.5px 0 ${hsl(primaryTokens[900], 0.3)}`,
    outlinedButton: `0 -2px 0.5px 0 ${hsl(greyTokens[100], 0.5)} inset, 0 1px 0.5px 0 ${hsl(greyTokens[500], 0.2)}`,
    input: `0px 1px 2px ${hsl(primaryTokens[300], 0.2)}`,
    switchTrack: '0px 1px 1px 0px hsl(0deg 0 0 / 0.05) inset',
    switchThumb: '0px 1px 2px 0px hsl(0deg 0 0 / 0.3)',
    focusVisible: `0 0 0 4px ${hsl(primaryTokens[300], 0.5)}`,
  },

  radius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '999px',
  },
} as const

export type AppTokens = typeof tokens

const muiGrey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
}

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
        main: '#d32f2f',
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

      grey: muiGrey,

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
        main: '#f44336',
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

      grey: muiGrey,

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
        fontWeight: 300,
        fontSize: '1.125rem',
        lineHeight: 1.5,
      },

      h5: {
        fontFamily: FONT_FAMILY,
        fontWeight: 700,
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
    },

    custom: tokens,
  })
