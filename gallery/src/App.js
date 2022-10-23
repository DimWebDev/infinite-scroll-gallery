import React from "react";

import { createGlobalStyle } from "styled-components";

import { Gallery } from "./components/Gallery";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Gallery />
    </div>
  );
};
