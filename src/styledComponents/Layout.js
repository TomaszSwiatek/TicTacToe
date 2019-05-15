import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import StyledWrapper from "./StyledWrapper";

import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

 body{
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
}
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
