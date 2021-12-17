const redMono = {
  lightest: '#8A4053',
  light: '#8A4053',
  main: '#73122C',
  dark: '#400A18',
  bright: '#BF1F49',
  darkest: '#400A18',
  contrastText: '#fff',
  seoText: '#ffacc3',
}
const redMonoForDarkBg = {
  lightest: '#8A4053',
  light: '#8A4053',
  main: '#BF5874',
  dark: '#BF1F49',
  bright: '#F47094',
  darkest: '#661027',
  contrastText: '#fff',
  seoText: '#ffacc3',
}
const greenMono = {
  lightest: '#70A6B5',
  light: '#DFEEF2',
  main: '#98A3A6',
  dark: '#6A7173', // text ok on white backgroung
  bright: '#96DEF2',
  contrastText: '#000',
  seoText: '#53595b',
}

export const light = {
  alternate: {
    main: "#f9f9f7",
    dark: "#ebebeb",
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: redMono,
  secondary: greenMono,
  text: {
     primary: "#32332a",
    secondary: "#4F554D",
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level2: '#f5f5f5',
    level1: '#ffffff',
    footer: "#1b1642",
  },
};
const complementaryGreen = {
  light: '#B4BDBF',
  main: '#BFB9B4',
  dark: '#606F73',
  contrastText: '#fff',
}

export const dark = {
  alternate: {
    main: '#333436',
    dark: '#222324',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
    red:'#400A18',
  },
  mode: 'dark',
  primary: greenMono,
  secondary:   redMonoForDarkBg,
  text: {
    primary: '#ffffff',
    secondary: '#e3e3e3',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    default: '#0D0D0D',
    paper: '#262223',
    level1: '#2C1B1D',
    level2: '#19060B',
    footer: "#2D2428",
  },
};
