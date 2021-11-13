const grey = {
  light: '#ebefef',
  main: '#b9bdbd',
  dark: '#898d8d',
  contrastText: '#000',
}
const blue = {
  light: '#b4bbc8',
  main: '#848b97',
  dark: '#050d18',
  contrastText: '#fff',
}
export const light = {
  alternate: {
    light: "#f7f9fc",
    main: "#f5f5f6",
    dark: "#eeeeef",
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  secondary:blue,
  primary: grey,
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
  secondary:blue,
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
