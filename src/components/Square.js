import React from "react";
import styled from "styled-components";
import posed from "react-pose";

const PosedStyledSquare = styled(
  posed.button({
    firstState: { scale: 0.01 },
    secondState: { scale: 1 }
  })
)`
  box-sizing: border-box;
  /* padding: 2rem 2rem; */
  width: 3rem;
  height: 3rem;
  padding: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  transition: background 0.4s ease;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.neutral};
  font-size: 1.3em;

  :hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

function Square(props) {
  return (
    <PosedStyledSquare pose={props.pose} onClick={props.onClick}>
      {props.value}
    </PosedStyledSquare>
  );
}

export default Square;
