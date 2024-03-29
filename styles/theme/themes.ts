import { ThemeOptions } from "@mui/material/styles";
import "typeface-poppins";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#6776ED",
    },
    secondary: {
      main: "#738ADB",
    },
    success: {
      main: "#34C38F",
    },
    error: {
      main: "#FF3B3B",
    },
    background: {
      default: "#636185",
      paper: "#35344F",
    },
    common: {
      black: "#1C1C27",
      white: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "1.5rem",
    },
    h2: {
      fontSize: "1.3rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.1rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '*::-webkit-scrollbar': {
            width: '0.5em',
          },
          '*::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#888',
          },
        },
      },
    },
  },
};

export default darkTheme;
