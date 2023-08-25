import React from 'react';
import { Button } from './FormButton.styled';

const FormButton = ({ children }) => {
  return <Button type="submit">{children}</Button>;
};

export default FormButton;
