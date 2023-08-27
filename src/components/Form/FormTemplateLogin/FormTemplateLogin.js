import React from 'react';
import FormLogin from '../FormLogin/FormLogin';
import FormTitle from '../FormTitle/FormTitle';
import {
  Container,
  ContainerForm,
  Img,
  SignupLink,
  Wrapper,
} from './FormTemplateLogin.styled';
import desk1x from '../../../images/login/desk@1.webp';
import desk2x from '../../../images/login/desk@2.webp';

const FormTemplateLogin = () => {
  return (
    <Container>
      <Img
        srcSet={`${desk1x} 1440w, ${desk2x} 2880w,`}
        src={desk1x}
        alt="goose"
      />
      <Wrapper>
        <ContainerForm>
          <FormTitle>Log In</FormTitle>
          <FormLogin />
        </ContainerForm>
        <SignupLink to="/login">Sign up</SignupLink>
      </Wrapper>
    </Container>
  );
};

export default FormTemplateLogin;
