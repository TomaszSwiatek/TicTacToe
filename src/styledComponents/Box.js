import posed from "react-pose";
import styled from "styled-components";

const Box = styled(
  posed.div({
    top: { scale: 1, backgroundColor: "#f9415d", opacity: 1 },
    bottom: { scale: 1.5, backgroundColor: "#fcab10", opacity: 0.5 }
  })
)`
  width: 30vw;
  height: 30vh;
  background-color: #f9415d;
`;

// const Animation = () => {
//   return (
//     <Box className="box" pose={this.state.isVisible ? "visible" : "hidden"} />
//   );
// };

export default Box;
