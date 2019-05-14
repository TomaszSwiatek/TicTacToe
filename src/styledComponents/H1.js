import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? "5rem" : "3rem")};
`;

export default H1;
