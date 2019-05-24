import posed from "react-pose";
import styled from "styled-components";
import img from "../assets/logo.svg";

//Here are assigned properties to animation states. Popmotion library which i used itself sets the rest of the properties, such as the length of the animation or its type
const PosedLogo = styled(
  posed.div({
    firstState: { scale: 0.5, opacity: 0.01, rotate: 0 },
    secondState: { scale: 1, opacity: 1, rotate: 7 }
  })
)`
  width: ${({ isBigWidth }) => (isBigWidth ? "50%" : "35%")};
  height: ${({ isBigHeight }) => (isBigHeight ? "60%" : "25%")};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin: 2rem;
`;

export default PosedLogo;
