import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import icons from '../../../images/icons.svg';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import {
  Label,
  Input,
  StyledInlineErrorMessage,
  ContainerForm,
  LoginIcon,
  InputContainer,
  StyledInlineMessage,
  IconEye,
} from '../FormRegister/FormRegister.styled';
import FormButton from '../FormButton/FormButton';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email'),
  password: Yup.string()
    .required('Please enter your password')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
});

function FormLogin() {
  const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));

        const timeOut = setTimeout(() => {
          actions.setSubmitting(false);

          clearTimeout(timeOut);
        }, 1000);
      }}
    >
      {({ errors, touched, handleSubmit, isValid, values }) => {
        return (
          <ContainerForm>
            <Form name="contact" method="post" onSubmit={handleSubmit}>
              <InputContainer>
                <Label
                  htmlFor="email"
                  style={{
                    color:
                      touched.email && !errors.email
                        ? '#3cbc81'
                        : touched.email && errors.email
                        ? '#e74a3b'
                        : 'initial',
                  }}
                >
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    autoComplete="email"
                    placeholder="Enter email"
                    style={{
                      borderColor:
                        touched.email && !errors.email
                          ? '#3cbc81'
                          : touched.email && errors.email
                          ? '#e74a3b'
                          : '#dce3e5',
                    }}
                  />
                </Label>
                <ErrorMessage name="email">
                  {msg => (
                    <StyledInlineErrorMessage>
                      {msg}
                      <LoginIcon>
                        <use
                          href={icons + '#icon-baseline-error-outline'}
                        ></use>
                      </LoginIcon>
                    </StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                {!errors.name && touched.name && (
                  <StyledInlineMessage>
                    This is an CORRECT email
                    <LoginIcon>
                      <use href={icons + '#icon-done'}></use>
                    </LoginIcon>
                  </StyledInlineMessage>
                )}
              </InputContainer>
              <InputContainer>
                <Label
                  htmlFor="password"
                  style={{
                    color:
                      values.password.length > 0 && !errors.password
                        ? '#3cbc81'
                        : values.password.length > 0 && errors.password
                        ? '#e74a3b'
                        : 'initial',
                  }}
                >
                  Password
                  <Input
                    type={passwordType}
                    name="password"
                    autoCorrect="off"
                    autoComplete="password"
                    placeholder="Enter your password"
                    aria-label="Password"
                    style={{
                      borderColor:
                        values.password.length > 0 && !errors.password
                          ? '#3cbc81'
                          : values.password.length > 0 && errors.password
                          ? '#e74a3b'
                          : '#dce3e5',
                    }}
                  />
                </Label>
                {errors.password && values.password.length > 0 && (
                  <StyledInlineErrorMessage>
                    {errors.password}
                    <LoginIcon>
                      <use href={icons + '#icon-baseline-error-outline'}></use>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
                {values.password.length > 0 && (
                  <IconEye
                    style={{
                      right: errors.password ? '45px' : '20px',
                    }}
                    onClick={() => {
                      passwordType === 'password'
                        ? setPasswordType('text')
                        : setPasswordType('password');
                    }}
                  >
                    {passwordType === 'password' ? (
                      <AiFillEyeInvisible size="20px" />
                    ) : (
                      <AiFillEye size="20px" />
                    )}
                  </IconEye>
                )}
              </InputContainer>
              <FormButton isValid={isValid}>Log in</FormButton>
            </Form>
          </ContainerForm>
        );
      }}
    </Formik>
  );
}

export default FormLogin;
