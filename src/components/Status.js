import styled from "styled-components";
import React from "react";
const StyledStatus = styled.div`
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.font.bitBold};
`;

const Status = props => {
  return <StyledStatus>{props.status}</StyledStatus>;
};

export default Status;
