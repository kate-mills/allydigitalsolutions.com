const gold = {
  light: '#f0da8d',
  main: '#b99541',
  dark: '#977021',
  contrastText: '#0c0c0c',
}

// Another passable light option #CFCABE
const taupeForDarkBG = {
  light: '#fbf7ea',
  main: '#A6A298',
  dark: '#979488',
  contrastText: 'rgba(0, 0, 0 ,.8)',
}

const taupe = {
  light: '#a6a49a',
  main: '#78756c',
  dark: '#4b4941',
  contrastText: '#fff',
}

export const light = {
  alternate: {
    main: "#f9f9f7",
    dark: "#ebebeb",
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: taupe,
  secondary: gold,
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
  primary: taupeForDarkBG,
  secondary: gold,
  text: {
    primary: '#ffffff',
    secondary: '#e3e3e3',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#3a383d',
    default: '#111214',
    level1: '#020205',
    level2: '#111214',
    footer: "#18181f",
  },
};
