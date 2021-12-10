import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import styled from "styled-components"
import GlobalStyles from "./components/styles/Global";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewsFeed from "./components/NewsFeed";

const BodyWrapper = styled.main`
display: flex;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BodyWrapper>
        <GlobalStyles />
        <NavBar />
        <Home />
        <NewsFeed />
      </BodyWrapper>
    </ThemeProvider>
  );
}

export default App;