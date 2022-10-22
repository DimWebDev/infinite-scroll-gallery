import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UnsplashImg = ({ url, key }) => {
  return <StyledImg src={url} key={key} alt="image" />;
};
