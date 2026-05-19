import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import BuildPicker from "./pages/BuildPicker";
import { initAnalytics } from "./lib/analytics";

initAnalytics();

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#d4af37" },
    background: { default: "#0f0e0c", paper: "#1a1815" },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
