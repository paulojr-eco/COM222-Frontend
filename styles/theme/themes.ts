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
    text: {
      primary: "#FFFFFF",
    },
    background: {
      default: "#636185",
      paper: "#35344F",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "1.5rem",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
};

export default darkTheme;
