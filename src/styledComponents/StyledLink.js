import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background: #39bae8;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 700;
  transition: box-shadow 0.3s ease;

  :hover {
    box-shadow: 0 10px 20px -15px white;
  }
`;

export default StyledLink;
