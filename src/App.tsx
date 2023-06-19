import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import Cards from "./components/Card";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Cards />} />
      </Routes>
    </ThemeProvider>
  );
}
