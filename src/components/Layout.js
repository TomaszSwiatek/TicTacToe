import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

html{
   body{
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
   }
      ${({ theme }) => theme.media.tablet} {
font-size: 24px;
  }

}


`;

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  font-family: "Roboto";
`;

const Layout = ({ children }) => (
  // each prop we give to ThemeProvider we can use also in each child component
  <ThemeProvider theme={theme}>
    {/* theme provider can has only one child */}
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>;
    </>
  </ThemeProvider>
);

export default Layout;
