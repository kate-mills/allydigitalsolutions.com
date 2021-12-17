const redMono = {
  lightest: '#8A4053',
  light: '#8A4053',
  main: '#73122C',
  //dark: '#400A18',
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
  //dark: '#BF1F49',
  bright: '#F47094',
  dark: '#661027',
  contrastText: '#fff',
  seoText: '#ffacc3',
}
const greenMono = {
  lightest: '#70A6B5',
  light: '#DFEEF2',
  main: '#AAB6BA',
  dark: '#6A7173', // text ok on white backgroung
  bright: '#96DEF2',
  contrastText: 'rgba(0, 0, 0, .8)',
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
     primary: "#354051",
    secondary: "#253746",
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
    secondary: '#bcc5c9',
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
