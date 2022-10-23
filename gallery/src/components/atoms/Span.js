import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  visibility: visible;
  margin-top: 5px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  width: 200px;
  height: 300px;
  position: relative;
  top: 200px;
  left: 50px;

  border-bottom: solid 5px white;
  cursor: pointer;
  font-weight: bold;
  @media (max-width: 480px) {
    left: 150px;
  }
`;

const FavouriteSpan = styled(StyledSpan)`
  border: solid 1px white;
  text-decoration: none;
  top: 230px;
  border-radius: 40px;
  font-weight: normal;
  padding: 20px;
`;
const DescriptionSpan = styled(StyledSpan)`
  border: none;
  color: white;
  font-style: italic;
  font-weight: normal;
`;

export const Span = ({ text, type }) => {
  const SpanType =
    type === "fav"
      ? FavouriteSpan
      : type === "description"
      ? DescriptionSpan
      : StyledSpan;
  return (
    <>
      <SpanType>{text}</SpanType>
    </>
  );
};
