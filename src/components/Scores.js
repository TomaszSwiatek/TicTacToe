import styled from "styled-components";
import React from "react";

const ScoresWrapper = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledScores = styled.div`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-weight: ${({ theme }) => theme.font.bold};
`;

const Scores = props => {
  return (
    <ScoresWrapper>
      <StyledScores>X:{props.xWon}</StyledScores>
      <StyledScores>O: {props.oWon}</StyledScores>
    </ScoresWrapper>
  );
};

export default Scores;
