import React from "react";
import styled from "styled-components";
import posed from "react-pose";

//Here are assigned properties to animation states. Popmotion library which i used itself sets the rest of the properties, such as the length of the animation or its type
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
  font-weight: ${({ theme }) => theme.font.bold};
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
