import React from 'react';
import FormRegister from '../FormRegister/FormRegister';
import FormTitle from '../FormTitle/FormTitle';
import { Container, ContainerForm } from './FormTemplate.styled';

const FormTemplate = () => {
  return (
    <Container>
      <ContainerForm>
        <FormTitle>Sign Up</FormTitle>
        <FormRegister />
      </ContainerForm>
    </Container>
  );
};

export default FormTemplate;
