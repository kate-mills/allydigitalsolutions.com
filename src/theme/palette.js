const redMono = {
  lightest: '#8A4053',
  light: '#8A4053',
  main: '#73122C',
  dark: '#661027',
  bright: '#BF1F49',
  darkest: '#400A18',
  contrastText: '#fff',
  seoText: '#734e58',
}
const redMonoForDarkBg = {
  lightest: '#8A4053',
  light: '#8A4053',
  main: '#BF5874',
  darkest: '#400A18',
  bright: '#F47094',
  dark: '#661027',
  contrastText: '#fff',
  seoText: '#ffacc3',
}
const greenMono = {
  lightest: '#e5f7ff',
  light: '#566678',
  main: '#2C3C4C',
  dark: '#031624',
  bright: '#9BA4A8',
  contrastText: 'rgba(225, 225, 225, .9)',
  seoText: '#53595b',
}
const greenMonoForDarkBg = {
  lightest: '#70A6B5',
  light: '#DFEEF2',
  main: '#98A3A6',
  dark: '#B2B6BD',
  bright: '#96DEF2',
  contrastText: 'rgba(0, 0, 0, .8)',
  seoText: '#DAE9EF',
}

export const light = {
  alternate: {
    main: "#f9f9f7",
    dark: "#ebebeb",
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: greenMono,
  secondary: redMono,
  text: {
     primary: "#031624",
    secondary: "#53595b",
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

export const dark = {
  alternate: {
    main: '#253746',
    dark: '#354051',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
    red:'#400A18',
  },
  mode: 'dark',
  primary: greenMonoForDarkBg,
  secondary:   redMonoForDarkBg,
  text: {
    primary: '#fff',
    secondary: '#bec7cb',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    default: '#28292B',
    paper: '#18181A', //#262223
    level1: '#2C1B1D',
    level2: '#19060B',
    footer: "#2D2428",
  },
};
