const cosmoYellow = {
  light: "#ffffce",
  main: "#e9cd9d",
  dark: "#b69c6e",
  contrastText: "#000000",
}
const cosmoGold = {
  light: "#ddb38d",
  main: "#aa835f",
  dark: "#795635",
  contrastText: "#000406",
}
const cosmoSilver = {
  light: "#ede9e7",
  main: "#bbb7b5",
  dark: "#8b8785",
  contrastText: "#000000",
}
const cosmoBlue = {
  light: "#5093cc",
  main: "#06669b",
  dark: "#003c6c",
  contrastText: "#ffffff",
}
const cosmoOrange = {
  light: "#ffaa70",
  main: "#EE7943",
  dark: "#b64a16",
  contrastText: "#000000",
}
export const light = {
  alternate: {
    main: "#f9f9f7",
    dark: "#ebebeb",
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  common: {
    black: "#000",
    white: "#fff",
    silver: "#bbb7b5",
    gold: '#AA835F',
    yellow: '#E9CD9D',
    blue: '#06669B',
    orange: '#EE7943',
  },
  mode: "light",
  primary: cosmoBlue,
  secondary: cosmoSilver,
  text: {
     primary: "#34170B",
    secondary: "#603e32",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#ffffff",
    default: "#ffffff",
    level2: "#f5f5f5",
    level1: "#ffffff",
    footer: "#1b1642",
  },
};

export const dark = {
  alternate: {
    main: "#1a2138",
    dark: "#151a30",
  },
  cardShadow: "rgba(0, 0, 0, .11)",
  common: {
    black: "#000",
    white: "#fff",
    silver: "#bbb7b5",
    gold: '#AA835F',
    yellow: '#E9CD9D',
    blue: '#06669B',
    orange: '#EE7943',
  },
  mode: "dark",
  primary: cosmoYellow,
  secondary:cosmoGold,
  text: {
    primary: "#fff",
    secondary: "#bec7cb",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    default: "#222B45",
    paper: "#222B45",
    level1: "#2D3748",
    level2: "#333",
    footer: "#2D2428",
  },
};
