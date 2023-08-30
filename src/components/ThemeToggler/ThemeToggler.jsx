import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../images/icons.svg';
import { MoonIcon, SunIcon, Wrapper } from './ThemeToggler.styled'; 
import { toggleTheme } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/theme/themeSelectors';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Wrapper onClick={handleThemeToggle}>
      {currentTheme === 'light' ? (
        <MoonIcon>
          <use href={icons + '#icon-moon'}></use>
        </MoonIcon>
      ) : (
        <SunIcon>
          <use href={icons + '#icon-sun'}></use>
        </SunIcon>
      )}
    </Wrapper>
  );
};

export default ThemeToggler;