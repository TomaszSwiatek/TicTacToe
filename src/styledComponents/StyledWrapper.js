import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  font-family: "Roboto";

  background-position: center;
  background-size: cover;
`;

export default StyledWrapper;
