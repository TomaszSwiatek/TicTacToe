import styled from "styled-components";

const StyledSquare = styled.button`
  box-sizing: border-box;
  /* padding: 2rem 2rem; */
  width: 2rem;
  height: 2rem;
  margin: 0.1rem;
  padding: 0;
  border-radius: 5px;
  background: #fff;
  border: none;
  transition: background 0.4s ease;

  :hover {
    background: #39bae8;
    color: white;
  }

  /* zrobic tak ze bdLeft - i wtedy ma border left */
`;

export default StyledSquare;
