import React from 'react';
import { Button, LoginIcon, Span } from './FormButton.styled';
import icons from '../../../images/icons.svg';

const FormButton = ({ children, isValid }) => {
  return (
    <Button type="submit" disabled={!isValid}>
      <Span> {children}</Span>
      <LoginIcon>
        <use href={icons + '#icon-log-in-01'}></use>
      </LoginIcon>
    </Button>
  );
};

export default FormButton;
