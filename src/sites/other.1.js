class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      xWon: 0,
      oWon: 0,
      status: "",
      pose: "firstState"
    };
  }
  handleClick(value) {
    const squares = this.state.squares.slice();
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
  render() {
    const winner = this.calculateWinner(this.state.squares);

    if (winner) {
      winner === "X" ? this.setState({ xWon: this.state.xWon++ }) : this.setState({ oWon: this.state.xWon++ });
      this.setState({
        status: this.state.status = "Winner: " + winner
      })
    } else {
      this.setState({
        status: this.state.status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      })
      
    }
    return (
    ...
    );
  }
}


