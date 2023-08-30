import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/theme/themeSelectors';
import { light, dark } from 'styles/theme';

const ThemeProviderWrapper = ({ children }) => {
  const currentTheme = useSelector(selectCurrentTheme);

  return (
    <ThemeProvider theme={currentTheme === 'light' ? light : dark}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
