const lightGreen = {
  light: '#dde7dd',
  main: '#abb5ab',
  dark: '#8f988f',
  contrastText: '#000',
}
const lightPink = {
  light: '#f6d9c7',
  main: '#c3a896',
  dark: '#927968',
  contrastText: '#000',
}

export const light = {
  alternate: {
    main: "#f7f7f7",
    dark: "#ededed",
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: lightGreen,
  secondary: lightPink,
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

const darkPink = {
  light: '#ffeacf',
  main: '#e7c5a9',
  dark: '#b4957a',
  contrastText: '#000',
}
const darkGreen = {
  light: '#f4ffee',
  main: '#cde0c8',
  dark: '#9cae97',
  contrastText: '#000',
}

export const dark = {
  alternate: {
    main: '#202021',
    dark: '#212122',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },

  mode: 'dark',
  primary: darkPink,
  secondary: darkGreen,

  text: {
    primary: '#ffffff',
    secondary: '#e3e3e3',
  },

  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#4C4C4C',
    default: '#040405', //#222B45
    level1: '#020205', //#222B45
    level2: '#040405',
    footer: "#18181f",
  },
};

