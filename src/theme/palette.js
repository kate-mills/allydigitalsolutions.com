const vogue = {
    blue: '#06669B',
    orange: '#EE7943',
    dark: "#34170B",
    yellow: '#E9CD9D',
    gold: '#AA835F',
    silver: "#BBB7B5",
}
const vogueYellow = {
  light: "#ffffce",
  main: vogue.yellow,
  dark: "#b69c6e",
  contrastText: "#000000",
}
const vogueSilver = {
  light: "#ede9e7",
  main: vogue.silver,
  dark: "#8b8785",
  contrastText: "#000000",
}
const vogueBlue = {
  light: "#5093cc",
  main: vogue.blue,
  dark: "#003c6c",
  contrastText: "#ffffff",
}

export const light = {
  alternate: {
    main: "#F9F9F7",
    dark: "#EBEBEB",
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  common: {
    black: "#160000",
    white: "#fff",
    ...vogue,
  },
  mode: "light",
  primary: vogueBlue,
  secondary: vogueSilver,
  text: {
    primary: vogue.dark,
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
    main: "#1A2138",
    dark: "#151A30",
  },
  cardShadow: "rgba(0, 0, 0, .11)",
  common: {
    black: "#000",
    white: "#fff",
    ...vogue,
  },
  mode: "dark",
  primary: vogueYellow,
  secondary: vogueSilver,
  text: {
    primary: "#fff",
    secondary: "#BEC7CB",
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

/*
  const vogueOrange = {
  light: "#ffaa70",
  main: vogue.orange,
  dark: "#b64a16",
  contrastText: "#000000",
}
const vogueGold = {
  light: "#ddb38d",
  main: vogue.gold,
  dark: "#795635",
  contrastText: "#000406",
}
*/

