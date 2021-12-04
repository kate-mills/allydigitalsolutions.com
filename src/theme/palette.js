const lightGreen = {
  light: '#959b9b',
  main: '#435849', //#abb5ab
  dark: '#37383a', //#8f988f
  contrastText: '#fff',
}
const lightPink = {
  light: '#f8f8f8', //#f6d9c7
  main: '#fabfb9', //#c3a896
  dark: '#959b9b', //#927968
  contrastText: '#000',
}

/*const darkPink = {
  light: '#ffeacf',
  main: '#e7c5a9',
  dark: '#b4957a',
  contrastText: '#000',
}
const darkGreen = {
  light: '#6e8575',
  main: '#435849', //#abb5ab
  dark: '#37383a', //#8f988f
  contrastText: '#fff',
}*/

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
  primary: lightPink,
  secondary: lightGreen,

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

