import styled from "styled-components";

const StyledStatus = styled.div`
  width: 30%;
  text-align: center;
  text-decoration: none;
  color: white;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  font-size: 0.5rem;
  font-weight: 700;
`;

export default StyledStatus;
