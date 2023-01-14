import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const defaultFontFamily = ['Courier New', 'Courier', 'monospace'];
const retroFontFamily = ['Advent Pro', ...defaultFontFamily].join();

const fontWeight = 500;

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: defaultFontFamily.join(', '),
    h1: {
      fontFamily: retroFontFamily,
      textTransform: 'uppercase',
      fontWeight,
    },
    h2: {
      fontFamily: retroFontFamily,
      textTransform: 'uppercase',
      fontWeight,
    },
    h5: {
      fontFamily: retroFontFamily,
      textTransform: 'uppercase',
      fontWeight,
    },
    tour: {
      fontFamily: ['Chalkboard SE', 'Comic Neue', 'Comic Sans MS', 'Comic Sans'].join(','),
    },
    message: {
      fontFamily: ['Special Elite', ...defaultFontFamily].join(),
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
