import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormRegister from '../FormRegister/FormRegister';
import FormTitle from '../FormTitle/FormTitle';
import FormButton from '../FormButton/FormButton';
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
