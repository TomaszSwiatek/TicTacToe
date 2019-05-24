import posed from "react-pose";
import styled from "styled-components";
import img from "../assets/logo.svg";

const PosedLogo = styled(
  posed.div({
    firstState: { scale: 0.5, opacity: 0.01, rotate: 0 },
    secondState: { scale: 1, opacity: 1, rotate: 7 }
  })
)`
  width: ${({ isBigWidth }) => (isBigWidth ? "20rem" : "35%")};
  height: ${({ isBigHeight }) => (isBigHeight ? "20rem" : "25%")};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  margin: 2rem;
`;

export default PosedLogo;
