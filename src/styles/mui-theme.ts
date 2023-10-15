import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  typography: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontWeightRegular: 400, // Default is 400 (normal)
    fontWeightMedium: 500, // Default is 500 (medium)
    fontWeightBold: 700, // Default is 600 (bold)
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 'bold',
        },
      },
    },
  },
  palette: {
    common: {
      black: '#08090A',
      white: '#F4F7F5',
    },
    primary: {
      dark: '#222823',
      main: '#575A5E',
      light: '#A7A2A9',
    },
  },
});

export default muiTheme;
