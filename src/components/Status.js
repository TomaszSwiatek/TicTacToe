import styled from "styled-components";
import React from "react";
const StyledStatus = styled.div`
  /* width: 30%; */
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 2rem;
  border-radius: 5px;
  font-size: 0.5rem;
  font-weight: 700;
`;

const Status = props => {
  return <StyledStatus>{props.status}</StyledStatus>;
};

export default Status;
