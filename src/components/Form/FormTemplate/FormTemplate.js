import React from 'react';
import FormRegister from '../FormRegister/FormRegister';
import FormTitle from '../FormTitle/FormTitle';
import {
  Container,
  ContainerForm,
  Img,
  SignupLink,
  Wrapper,
} from './FormTemplate.styled';
import desk1x from '../../../images/register/desk@1.webp';
import desk2x from '../../../images/register/desk@2.webp';

const FormTemplate = () => {
  return (
    <Container>
      <Img
        srcSet={`${desk1x} 1440w, ${desk2x} 2880w,`}
        src={desk1x}
        alt="goose"
      />
      <Wrapper>
        <ContainerForm>
          <FormTitle>Sign Up</FormTitle>
          <FormRegister />
        </ContainerForm>
        <SignupLink to="/login">Log in</SignupLink>
      </Wrapper>
    </Container>
  );
};

export default FormTemplate;
