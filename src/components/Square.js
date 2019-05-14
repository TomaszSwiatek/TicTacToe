import React from "react";
import StyledSquare from "../styledComponents/StyledSquare";

function Square(props) {
  return (
    <StyledSquare leftBd topBd className="square" onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}

export default Square;
