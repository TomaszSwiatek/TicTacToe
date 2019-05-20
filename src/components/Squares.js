import React, { Component } from "react";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
`;

const StyledSquare = styled.span`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

class Squares extends Component {
  // drawSquare(value) {
  //   return (
  //     <Square
  //       value={this.state.squares[value]}
  //       onClick={() => {
  //         this.handleClick(value);
  //       }}
  //     />
  //   );
  // }

  render() {
    const { squares } = this.props;
    const squareList = squares.map((square, index) => (
      <StyledSquare onClick={this.props.onClick}>{square}</StyledSquare>
    ));
    return <StyledBoard className="square-list">{squareList}</StyledBoard>;
  }
}

export default Squares;
