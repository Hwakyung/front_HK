import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Routes from "../Router/Routes";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
