import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

declare module "@mui/material/styles" {
  interface Theme {
    shopCommons: {
      [property: string]: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    shopCommons: {
      [property: string]: string
    }
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    shop: Palette["primary"]
  }

  interface PaletteOptions {
    shop: PaletteOptions["primary"]
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#3AB0B4",
      dark: "#2F4F4F",
      light: "#3AB0B430",
      contrastText: "white",
    },
    error: {
      main: red.A400,
    },
    shop: {
      main: "#3AB0B4",
      light: "#3f6d68fa",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: ["Quicksand", "Roboto", "Arial", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontSize: "22px",
    },
    body1: {
      fontSize: "12px",
    },
    body2: {
      fontSize: "14px",
    },
  },
  shopCommons: {
    headerFontSize: "22px",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      fontFamily: ["Quicksand", "Roboto", "Arial", "sans-serif"].join(","),
      fontSize: 14,
      `,
    },
  },
})

export default theme
