const lightMint = {
  light: '#dde7dd',
  main: '#abb5ab',
  dark: '#8f988f',
  contrastText: '#000',
}
const lightApricot = {
  light: '#f6d9c7',
  main: '#c3a896',
  dark: '#927968',
  contrastText: '#000',
}

const darkApricot = {
  light: '#ffeedd',
  main: '#C3A896',
  dark: '#a78c7c',
  contrastText: '#000',
}
const darkMint = {
  light: '#f4ffee',
  main: '#cde0c8',
  dark: '#9cae97',
  contrastText: '#000',
}


export const light = {
  alternate: {
    main: "#f7f7f7", //#f7faff
    dark: "#ededed", //#edf1f7
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: lightMint,
  secondary: lightApricot,
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
    main: '#121212', //#1a2121 #1a2138
    dark: '#0E0E0E', //#1a2121#151a30
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: 'ffffff',
  },

  mode: 'dark',
  primary: darkApricot,
  secondary: darkMint,

  text: {
    primary: '#ffffff',
    secondary: '#b5b8b7',
  },

  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#333330',
    default: '#0B0B0B', //#222B45
    level1: '#333', //#222B45
    level2: '#423E35',
    footer: "#18181f",
  },
};

