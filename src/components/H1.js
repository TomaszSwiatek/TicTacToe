import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? "1.5rem" : "1rem")};
  color: ${({ isSecondary }) => (isSecondary ? "pink" : "white")};
  text-shadow: 0px 1px 3px ${({ theme }) => theme.colors.secondary};

  ${({ theme }) => theme.media.lg} {
    font-size: ${({ isBig }) => (isBig ? "2.3rem" : "1.5rem")};
  }
`;

export default H1;
