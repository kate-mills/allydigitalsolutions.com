const grey = {
  light: '#ebefef',
  main: '#b9bdbd',
  dark: '#898d8d',
  contrastText: '#000',
}
const gold = {
  light: '#ccb161',
  main: '#998234',
  dark: '#685602',
  contrastText: '#000',
}
export const light = {
  alternate: {
    light: "#f7f9fc",
    main: "#f5f5f6",
    dark: "#eeeeef",
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  secondary:gold,
  //{ light: '#ffeedd', main: '#d6bcab', dark: '#a48c7c', contrastText: '#000000' },
  primary: grey,
  //{ light: '#8c8c8d', main: '#bcbcbd', dark: '#5f5f60', contrastText: 'rgba(0, 0, 0, 0.87)', },
  text: {
     primary: "#2b2526",
    secondary: "#544d4e",
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
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark',
  primary: grey,
  //{ light: '#f1f1f1', main: '#bdbdbd', dark: '#8e8e8e', contrastText: '#000', },
  secondary:gold,
  //{ light: '#ffeedd', main: '#d6bcab', dark: '#a48c7c', contrastText: '#000',},
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
    level2: '#333',
    level1: '#2D3748',
    footer: "#18181f",
  },
};
