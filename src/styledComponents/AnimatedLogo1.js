import styled from "styled-components";
import img from "../assets/logo.svg";
import posed from "react-pose";

const AnimatedLogo = styled.div`
  background-image: url(${img});
  width: ${({ isBigWidth }) => (isBigWidth ? "60%" : "40%")};
  height: ${({ isBigHeight }) => (isBigHeight ? "50%" : "30%")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(7deg);
`;

export default AnimatedLogo;
