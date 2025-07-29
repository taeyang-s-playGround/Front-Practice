import { GlobalStyle } from './css/GlobalStyle';
import { Router } from './router/Router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './css/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
