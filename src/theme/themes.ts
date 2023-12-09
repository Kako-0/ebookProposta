import {
  createTheme,
  darken,
  lighten,
  responsiveFontSizes,
} from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    themeMode: "default" | "contrast";
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    themeMode: "default" | "contrast";
  }
}

const primaryColor = { main: "#00505E", light: "#CEEFF3", dark: "#04353A" };
const secondaryColor = "#554111";

export const defaultTheme = responsiveFontSizes(
  createTheme({
    themeMode: "default",
    palette: {
      primary: {
        main: primaryColor.main,
        light: primaryColor.light,
        dark: primaryColor.dark,
      },
      secondary: {
        main: secondaryColor,
        light: lighten(secondaryColor, 0.8),
        dark: darken(secondaryColor, 0.4),
      },
      text: {
        primary: "#3C3C3C",
        secondary: "#E5E5E5",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      background: { default: "#dddddd", paper: "#ffffff" },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    themeMode: "contrast",
    palette: {
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#fff",
      },
      text: {
        disabled: "rgba(255, 255, 255, 0.5)",
        primary: "#fff",
        secondary: "#B2BAC2",
      },
      background: { default: "#3C3C3C", paper: "#000" },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
  })
);
