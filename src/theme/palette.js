const darkP = {
  light: '#2196f3',
  main: '#1976d2',
  dark: '#0d47a1',
  contrastText: '#ffffff'
}

const darkS = {
  light: '#FFEA41',
  main: '#FFE102',
  dark: '#DBBE01',
  contrastText: '#000000'
}

const lightP = {
  light: '#467de3',
  main: '#377dff',
  dark: '#2f6ad9',
  contrastText: '#FFFFFF'
}
const lightS = {
  light: '#ffb74d',
  main: '#f9b934',
  dark: '#FF9800',
  contrastText: '#000000'
}


export const light = {
  alternate: {
    main: "#f9f9f7",
    dark: "#ebebeb",
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',
  primary: lightP,
  secondary: lightS,
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
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
    red:'#400A18',
  },
  mode: 'dark',
  primary: darkP,// greenMonoForDarkBg,
  secondary:darkS,
  text: {
    primary: '#fff',
    secondary: '#bec7cb',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    default: '#222B45', //#28292B
    paper: '#222B45', //#262223
    level1: '#2D3748',
    level2: '#333',
    footer: "#2D2428",
  },
};
