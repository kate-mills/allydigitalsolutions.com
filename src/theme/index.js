import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

import {ally, socialMedia} from './slogans';


const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: 'lato, sans-serif',
        cursive: {
          fontFamily: 'calliope-mvb, sans-serif',
          fontSize: '1.1em',
          fontWeight: 400,
          lineHeight: '1.1em',
        },
        h4:{
          fontWeight: 600,
          fontSize: '2.1rem',
        },
        seoH5: {
          lineHeight: 1.6,
          fontSize: '1.25rem',
          fontWeight: 500,
        },
        button: {
          textTransform: 'capitalize',
          fontWeight: 'regular',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 500,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      themeToggler,
      ally,
      socialMedia,
    }),
  );

export default getTheme;
