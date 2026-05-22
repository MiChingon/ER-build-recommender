import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import BuildPicker from "./pages/BuildPicker";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#d4af37" },
    background: { default: "#0f0e0c", paper: "#1a1815" },
  },
  components: {
    // Touch devices have no hover, so tooltips would only fire on long-press
    // with MUI's default 700ms delay — feels unresponsive. Drop the delay
    // to near-zero and hold the tooltip open for 5 seconds so users actually
    // have time to read it.
    MuiTooltip: {
      defaultProps: {
        enterTouchDelay: 50,
        leaveTouchDelay: 5000,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<BuildPicker />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
