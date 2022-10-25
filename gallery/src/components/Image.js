import React from "react";
import styled from "styled-components";
import { Span } from "./Span";

const ImageContainer = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  @media (max-width: 480px) {
    width: 100%;
    grid-template-columns: repeat(1fr);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 480px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ImageText = styled.div`
  box-sizing: border-box;
  span {
    visibility: hidden;
  }
  &:hover span {
    visibility: visible;
  }
`;

export const Image = ({ images }) => {
  return (
    <>
      <ImageContainer>
        {images.map((image) => (
          <>
            <ImageText>
              <Span text={image.user.username} />
              <br />
              <br />
              <Span text="Description of Img" type="description" />
              <br />
              <br />
              <Span text="Favourite" type="fav" />
              <StyledImg src={image.urls.thumb} key={image.id} />
            </ImageText>
          </>
        ))}
        );
      </ImageContainer>
    </>
  );
};
