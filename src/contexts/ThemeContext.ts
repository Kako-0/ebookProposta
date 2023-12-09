import { createContext } from "react";

interface ThemeContextValue {
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<"default" | "contrast">>;
  isContrast: boolean;
}

const ThemeContextState = {
  themeMode: "default",
  setThemeMode: () => {},
  isContrast: false,
};

const ThemeContext = createContext<ThemeContextValue>(ThemeContextState);

export default ThemeContext;
