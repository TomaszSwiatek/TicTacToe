import React from "react";
import styled from "styled-components";

const StyledSquare = styled.button`
  box-sizing: border-box;
  /* padding: 2rem 2rem; */
  width: 2rem;
  height: 2rem;
  margin: 0.1rem;
  padding: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  transition: background 0.4s ease;

  :hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

function Square(props) {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
}

export default Square;
