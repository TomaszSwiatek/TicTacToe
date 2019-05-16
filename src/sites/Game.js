import React, { Component } from "react";
import Board from "../components/Board";
import Layout from "../styledComponents/Layout";
import H1 from "../styledComponents/H1";
import posed from "react-pose";

// instead strings we put object into function:
const PosedH1 = posed.h1({
  visible: {
    x: 0,
    opacity: 1
  },
  hidden: {
    x: "-150%",
    opacity: 0
  }
});

class Game extends Component {
  state = {
    visible: false
  };
  toggleAnimation = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };
  render() {
    return (
      <Layout>
        <button onClick={this.toggleAnimation}>Animate</button>

        {/* <PosedH1
          onLoad={this.toggleAnimation}
        >
          Mi PosedH1 header
        </PosedH1> */}
        {/* <H1 isBig>Tic Tac Toe</H1> */}
        {/* <H1 isSecondary>Play the game</H1> */}
        <Board />
      </Layout>
    );
  }
}

export default Game;
