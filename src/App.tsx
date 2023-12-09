import { useMemo, useState } from "react";
import { Container, CssBaseline, ThemeProvider, Box } from "@mui/material";
import { HashRouter } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext";
import RefContext from "./contexts/ReferenceContext";
import { darkTheme, defaultTheme } from "./theme/themes";

import "./appStyles.css";
import Router from "./routes/routes";
import Header from "./components/Header";

type ThemeType = "contrast" | "default";

function App() {
  const [reference, setReference] = useState(0);
  const [themeMode, setThemeMode] = useState<ThemeType>("default");
  const isContrast = themeMode === "contrast";

  const themeMemo = useMemo(
    () => ({ themeMode, setThemeMode, isContrast }),
    [themeMode, setThemeMode, isContrast]
  );
  const referenceMemo = useMemo(
    () => ({ reference, setReference }),
    [reference, setReference]
  );

  return (
    <ThemeContext.Provider value={themeMemo}>
      <ThemeProvider theme={isContrast ? darkTheme : defaultTheme}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters id="main">
          <RefContext.Provider value={referenceMemo}>
            <HashRouter>
              <Header />
              <Box className="ebook-Container">
                <Router />
              </Box>
            </HashRouter>
          </RefContext.Provider>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
