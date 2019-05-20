import React, { Component } from "react";
import Square from "./Square";
import StyledButton from "../styledComponents/StyledButton.js";
import StyledStatus from "../styledComponents/StyledStatus.js";

import Squares from "./Squares";
//main board class
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      xWon: 0,
      oWon: 0,
      status: "",
      endStatus: ""
    };
  }

  handleClick(value) {
    const squares = this.state.squares.slice(); //slice kopiuje tablice troche jak map.
    if (this.calculateWinner(squares) || squares[value]) {
      return;
    }
    squares[value] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext //if true the fill square with X
    });

    const winner = this.calculateWinner(this.state.squares);

    if (winner) {
      this.state.status = "Winner: " + winner;
      if (winner === "X") {
        this.updateScore(this.state.xWon);
        // this.setState( prevState => ({xWon: prevState.xWon++});
        console.log("this time won:" + winner);
      } else if (winner === "O") {
        this.updateScore(this.state.oWon);
        console.log("this time won:" + winner);
      } else {
        this.state.endStatus = "Draw. start the game again.";
      }
    } else {
      this.state.status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
  }

  drawSquare(value) {
    return (
      <Square
        value={this.state.squares[value]}
        onClick={() => {
          this.handleClick(value);
        }}
      />
    );
  }
  updateScore(player) {
    this.setState({ player: this.state.player + 1 });
  }
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  handlePlayAgain = () => {
    this.setState({
      squares: Array(9).fill(null)
    });
  };
  render() {
    return (
      <div>
        <StyledButton onClick={this.handlePlayAgain}>Play again</StyledButton>
        {/* <StyledStatus>{status}</StyledStatus> */}

        <div className="board-row">
          {this.drawSquare(0)}
          {this.drawSquare(1)}
          {this.drawSquare(2)}
        </div>
        <div className="board-row">
          {this.drawSquare(3)}
          {this.drawSquare(4)}
          {this.drawSquare(5)}
        </div>
        <div className="board-row">
          {this.drawSquare(6)}
          {this.drawSquare(7)}
          {this.drawSquare(8)}
        </div>
        {/* <Squares
          squares={this.state.squares[value]}
          onClick={() => {
            this.handleClick(value);
          }}
        /> */}
      </div>
    );
  }
}

export default Board;
