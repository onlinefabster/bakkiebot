import { createTheme } from '@mui/material/styles'

/**
 * BakkieBot visual identity — from the color-style guide
 * (src/assets/color-style-guide.md). Deep navy is the dominant
 * "ink" color; pastels are used as accents per concept.
 */
export const palette = {
  ink: '#08285F',
  inkDark: '#071B46',
  blue: '#8FC7F5',
  blueLight: '#E8F3FC',
  green: '#8CCB9A',
  greenLight: '#EAF6ED',
  yellow: '#FFC94D',
  yellowLight: '#FFF6D9',
  coral: '#F28C8C',
  coralLight: '#FDEAEA',
  purple: '#A99BE8',
  purpleLight: '#F1EEFC',
  coffee: '#A96B32',
  background: '#FCFCFA',
  robotGrey: '#D9E1EA',
} as const

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: palette.ink, contrastText: '#FFFFFF' },
    secondary: { main: palette.blue },
    background: { default: palette.background, paper: '#FFFFFF' },
    text: { primary: palette.ink, secondary: palette.inkDark },
    warning: { main: palette.yellow },
  },
  typography: {
    fontFamily: "'Inter', 'Nunito Sans', 'DM Sans', system-ui, sans-serif",
    h1: {
      fontFamily: "'Caveat', 'Patrick Hand', 'Kalam', cursive",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Caveat', 'Patrick Hand', 'Kalam', cursive",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Caveat', 'Patrick Hand', 'Kalam', cursive",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Caveat', 'Patrick Hand', 'Kalam', cursive",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999, // fully rounded, playful
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          boxShadow: 'none',
          border: `1px solid ${palette.blueLight}`,
        },
      },
    },
  },
})

export default theme