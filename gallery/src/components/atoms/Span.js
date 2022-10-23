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
  text-decoration: underline;
  text-decoration-thickness: 5px;
  cursor: pointer;
  font-weight: bold;
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
  text-decoration: none;
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
