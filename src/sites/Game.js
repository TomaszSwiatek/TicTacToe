import React, { Component } from "react";
import Square from "../components/Square";
import Button from "../components/Button";
import PosedLogo from "../components/PosedLogo";
import Status from "../components/Status";
import styled from "styled-components";
import Layout from "../components/Layout";
import Scores from "../components/Scores";

const BoardWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 3rem 3rem 3rem;
  grid-template-rows: 3rem 3rem 3rem;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      xWon: 0,
      oWon: 0,
      status: "Starts player: " + (this.xIsNext ? "X" : "O"),
      pose: "firstState"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        pose: this.state.pose === "firstState" ? "secondState" : "firstState"
      });
    }, 1000);
  }

  handleClick = value => {
    const squares = this.state.squares.slice(); //slice kopiuje tablice troche jak map.
    if (this.calculateWinner(squares) || squares[value]) {
      return;
    }

    squares[value] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });

    const winner = this.calculateWinner(squares);
    let xWon = this.state.xWon;
    let oWon = this.state.oWon;
    let status = this.state.status;
    const xIsNext = !this.state.xIsNext;

    if (winner) {
      winner === "X" ? xWon++ : oWon++;
      status = "Winner: " + winner;
      this.setState({ xWon: xWon, oWon: oWon, status: status });
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
      this.setState({
        status: status
      });
    }
  };

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
    let status = this.state.status;

    status = `Starts player: ${this.state.xIsNext ? "X" : "O"}`;
    this.setState({
      squares: Array(9).fill(null),
      status: status
    });
  };

  render() {
    const squares = this.state.squares;
    const squareList = squares.map((square, index) => (
      <Square
        pose={this.state.pose}
        key={index}
        value={square}
        onClick={() => {
          this.handleClick(index);
        }}
      />
    ));

    return (
      <Layout>
        <PosedLogo pose={this.state.pose} />
        <Status status={this.state.status} />
        <BoardWrapper>
          <StyledBoard>{squareList}</StyledBoard>
          <Scores xWon={this.state.xWon} oWon={this.state.oWon} />
        </BoardWrapper>
        <Button onClick={this.handlePlayAgain}>Play again</Button>
      </Layout>
    );
  }
}

export default Board;
