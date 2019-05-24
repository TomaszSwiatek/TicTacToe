import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

// Layout created mainly with flexbox. Styles use ThemeProvider to create one source of breakpoints, colors, font-weight.
// Global App styles. Here are also added media queries to fix views on varius devices.
const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

html{
   body{
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
   }
      ${({ theme }) => theme.media.sm} {
font-size: 16px;
  }
      ${({ theme }) => theme.media.md} {
font-size: 22px;
  }
     ${({ theme }) => theme.media.lg} {
font-size: 26px;
  }
   ${({ theme }) => theme.media.xl} {
font-size: 22px;
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
