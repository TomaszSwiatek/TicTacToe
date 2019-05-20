import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

 body{
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
}
`;

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  font-family: "Roboto";

  background-position: center;
  background-size: cover;
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
