import styled from "styled-components";
import img from "../assets/background.jpg";
//styled-components to game:
const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #121a20;
  font-family: "Roboto";
  /* background-image: url(${img}); */
  background-position: center;
  background-size: cover;
`;

export default StyledWrapper;
