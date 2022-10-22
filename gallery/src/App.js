import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import { UnsplashImg } from "./components/UnsplashImg";
import { Heading } from "./components/Heading";
import { LoaderIcon } from "./components/LoaderIcon";

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

const ImageContainer = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

export const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const apiAccessKey = "8ba9419ea39ca005dcc9102772f5aa00";
    axios
      .get(`${apiRoot}/photos/random?client_id=${apiAccessKey}&count=1`)
      .then((res) => setImages([...images, ...res.data]));
  }, []);

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <LoaderIcon />
      <ImageContainer>
        {images.map((image) => (
          <UnsplashImg url={image.urls.thumb} key={image.id} />
        ))}
      </ImageContainer>
    </div>
  );
};
