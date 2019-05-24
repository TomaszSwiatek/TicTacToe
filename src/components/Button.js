import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  font-weight: 700;
  transition: box-shadow 0.3s ease;

  margin: 2rem 1rem;

  :hover {
    box-shadow: 0 10px 20px -15px ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.media.tablet} {
  }
`;

export default Button;
