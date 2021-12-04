const green = {
  light: '#959b9b',
  main: '#435849',
  dark: '#37383a',
  contrastText: '#fff',
}
const lightPink = {
  light: '#f8f8f8',
  main: '#fabfb9',
  dark: '#959b9b',
  contrastText: '#000',
}
const pink = {
  light: '#fabfb9',
  main: '#c68f89',
  dark: '#94615c',
  contrastText: '#000',
}
const grey = {
  light: '#f8f8f8',
  main: '#959b9b',
  dark: '#676d6d',
  contrastText: '#fff',
}

export const light = {
  alternate: {
    main: "#f7f7f7",
    dark: "#ededed",
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: green,
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


export const dark = {
  alternate: {
    main: '#37383a',
    dark: '#212122',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },

  mode: 'dark',
  primary: pink,
  secondary: grey,

  text: {
    primary: '#ffffff',
    secondary: '#e3e3e3',
  },

  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#3a383d',
    default: '#111214', //#040405
    level1: '#020205', //#222B45
    level2: '#111214', //#040405
    footer: "#18181f",
  },
};

