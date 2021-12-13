const gold = {
  light: '#f0da8d',
  main: '#b99541',
  dark: '#977021',
  contrastText: '#0c0c0c',
}
const taupe = {
  light: '#fbf7ea',
  main: '#c8c4b8',
  dark: '#979488',
  contrastText: '#0f0f0f',
}
const buttons = {
  light: '#c8c4b8',
  main: '#979488',
  dark: '#4e4c3f',
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
  buttons,
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
  primary: taupe,
  secondary: gold,
  buttons,
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
