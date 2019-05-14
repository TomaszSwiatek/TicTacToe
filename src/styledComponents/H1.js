import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? "3rem" : "1rem")};
  color: ${({ isSecondary }) => (isSecondary ? "#be2d33" : "#151a20")};
`;

export default H1;
