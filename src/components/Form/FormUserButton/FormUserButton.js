import React from 'react';
import { Button, Span } from './FormUserButton.styled';

const FormUserButton = ({ children, isDisabled }) => {
  return (
    <Button type="submit" disabled={isDisabled}>
      <Span> {children}</Span>
    </Button>
  );
};

export default FormUserButton;
