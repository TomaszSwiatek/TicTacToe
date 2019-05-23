import posed from "react-pose";
import styled from "styled-components";
import img from "../assets/logo.svg";

const Box = styled(
  posed.div({
    top: { scale: 0.5, opacity: 0.2, rotate: 0 },
    bottom: { scale: 1, opacity: 1, rotate: 7 }
  })
)`
  width: ${({ isBigWidth }) => (isBigWidth ? "60%" : "40%")};
  height: ${({ isBigHeight }) => (isBigHeight ? "50%" : "30%")};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
`;

// const Animation = () => {
//   return (
//     <Box className="box" pose={this.state.isVisible ? "visible" : "hidden"} />
//   );
// };

export default Box;
