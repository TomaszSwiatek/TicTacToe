import React, { Component } from "react";
import Square from "../components/Square";
import StyledButton from "../styledComponents/StyledButton.js";
import Status from "../components/Status";
import styled from "styled-components";

import Layout from "../styledComponents/Layout";
import Logo from "../styledComponents/Logo";
import posed from "react-pose";

const BoardWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 3rem 3rem 3rem;
  grid-template-rows: 3rem 3rem 3rem;
  grid-gap: 1rem;
`;

// instead strings we put object into function:
const PosedH1 = posed.h1({
  visibleAnimation: {
    x: 0,
    opacity: 1
  },
  hidden: {
    x: "-150%",
    opacity: 0
  }
});

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
      visibleAnimation: false
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

    //_______________________
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

  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    const winner = this.calculateWinner(this.state.squares);

    if (winner) {
      winner === "X" ? this.state.xWon++ : this.state.oWon++;
      this.state.status = "Winner: " + winner;
      console.log(this.state.xWon, this.state.oWon);
    } else {
      this.state.status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    // squares start
    const squares = this.state.squares;
    const squareList = squares.map((square, index) => (
      <Square
        key={index}
        value={square}
        onClick={() => {
          this.handleClick(index);
        }}
      />
    ));
    // squares end

    return (
      <Layout>
        {/* <button onClick={this.toggleAnimation}>Animate</button> */}

        {/* <PosedH1
          onLoad={this.toggleAnimation}
        >
          Mi PosedH1 header
        </PosedH1> */}
        <Logo />
        <Status status={this.state.status} />
        <BoardWrapper>
          <StyledBoard>{squareList}</StyledBoard>
        </BoardWrapper>
        <StyledButton onClick={this.handlePlayAgain}>Play again</StyledButton>
      </Layout>
    );
  }
}

export default Board;
