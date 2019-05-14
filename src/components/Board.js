import React, { Component } from "react";
import Square from "./Square";
import StyledButton from "../styledComponents/StyledButton.js";
import StyledStatus from "../styledComponents/StyledStatus.js";
//main board class
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      xWon: 0,
      oWon: 0,
      counter: 1
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
    const winner = this.calculateWinner(this.state.squares);
    let status;
    let endStatus;

    if (winner) {
      status = "Winner: " + winner;
      if (winner === "X") {
        this.setState({ xWon: this.state.xWon + this.state.counter });
        console.log("this time won:" + winner);
      } else if (winner === "O") {
        // this.state.oWon++;
        console.log("this time won:" + winner);
      } else {
        endStatus = "Draw. start the game again.";
      }
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <StyledButton onClick={this.handlePlayAgain}>Play again</StyledButton>
        <StyledStatus>{status}</StyledStatus>
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
      </div>
    );
  }
}

export default Board;
