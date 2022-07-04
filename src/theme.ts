import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { m } from 'framer-motion';

declare module '@mui/material/styles' {
  interface Theme {
    shopCommons: {
      [property: string]: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    shopCommons: {
      [property: string]: string;
    };
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    shop: Palette['primary'];
  }

  interface PaletteOptions {
    shop: PaletteOptions['primary'];
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      light: '#ff6200',
    },
    secondary: {
      main: '#3AB0B4',
      dark: '#2F4F4F',
      light: '#3AB0B430',
      contrastText: 'white',
    },
    error: {
      main: red.A400,
    },
    shop: {
      main: '#3AB0B4',
      light: '#3f6d68fa',
    },
  },
  spacing: 8,
  typography: {
    fontFamily: ['Quicksand', 'Roboto', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.375rem',
    },
    h4: {
      fontSize: '1.125rem',
    },
    h5: {
      textAlign: 'center',
      fontWeight: 600,
    },
    h6: {
      textAlign: 'center',
      color: '#3f6d68fa',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.75rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  shopCommons: {
    headerFontSize: '1.375rem',
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',

          background: 'white',
          boxShadow: '0 2px 7px 2px rgb(0 192 170 / 20%)',
          '&:hover': {
            cursor: 'inherit',

            '& .MuiTypography-body2': {
              display: 'block',
              textAlign: 'center',
              width: '100%',
            },
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '8px',
          height: 'auto',
          background: '#3AB0B4',
          color: 'white',
          '& .subheader': {
            background: '#71ced2',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily: ['Quicksand', 'Roboto', 'Arial', 'sans-serif'].join(','),
        fontSize: 14,
        a: {
          cursor: 'pointer !important',
          textDecoration: 'none',
          '&:hover': {
            color: '#3AB0B4',
          },
        },
      },
    },
  },
});

export default theme;
