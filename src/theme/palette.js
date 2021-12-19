const apricot  = {
  red: '#AA1B36',
  light: '#DFAF99',
  dark: '#7D5D50',
  darker: '#B98E79',
}
const redMono = {
  lightest: '#e15360',
  light: '#a51a35',
  main: '#AA1B36',
  dark: '#89182C',
  bright: '#e15360',
  darkest: '#400A18',
  contrastText: '#fff',
  seoText: '#661B23',
}
const redMonoForDarkBg = {
  lightest: '#ecbea8',
  light: '#b98e79',
  main: '#89182c',
  darkest: '#400A18',
  bright: '#F47094',
  dark: '#560001',
  contrastText: '#fff',
  seoText: '#B98E79', //#ffacc3
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
