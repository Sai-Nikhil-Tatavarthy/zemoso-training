import { createTheme, Theme } from "@mui/material/styles";

export const myTheme: Theme = createTheme({
  palette: {
    primary: {
      // shades of purple
      light: "#393552",
      main: "#B4A9FF",
      dark: "#6C5DD3",
    },
    secondary: {
      //shades of black
      light: "#28272B",
      main: "#201F24",
      dark: "#040407",
    },
    info: {
      light: "#E8E7F0",
      main: "#A5A5A6",
    },
    success: {
      light: "#2D2D30",
      main: "#A5A5A6",
    },
  },
  typography: {
    fontFamily: "Gilroy",
    /* body 1 */
    body1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "25px",
    },

    /* body 2 */
    body2: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "18px",
    },

    /* title */
    h1: {
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "45px",
      letterSpacing: "-0.015em",
    },

    /* heading 2 */
    h2: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "29px",
      letterSpacing: "-0.005em",
    },

    /* heading 3 */
    h3: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "30px",
    },

    /* caption */
    caption: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "21px",
      letterSpacing: "0.02em",
    },

    /* button 1 */
    button: {
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: "19px",
      textTransform: "none",
      letterSpacing: "1px",
    },

    /* button 2 */
    h5: {
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: "14px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          "@font-face": {
            fontFamily: "Gilroy",
            src: `url('../../assets/Gilroy-Regular.woff') format('woff')`,
          },
        },
      },
    },
  },
});

export default myTheme;
