import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import icons from '../../../images/icons.svg';

import {
  Label,
  Input,
  StyledInlineErrorMessage,
  ContainerForm,
  LoginIcon,
  LoginIconPassword,
} from './FormLogin.styled';
import FormButton from '../FormButton/FormButton';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email'),
  password: Yup.string()
    .required('Please enter your password')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

function FormLogin() {
  const [formValues, setFormValues] = useState();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        // console.log(values);
        setFormValues(values);

        dispatch(logIn(values));

        const timeOut = setTimeout(() => {
          actions.setSubmitting(false);

          clearTimeout(timeOut);
        }, 1000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        isSubmitting,

        isValid,
      }) => {
        return (
          <ContainerForm>
            <Form name="contact" method="post" onSubmit={handleSubmit}>
              <Label htmlFor="email">
                Email
                <Input
                  type="email"
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  autoComplete="email"
                  placeholder="Enter email"
                  valid={touched.email && !errors.email}
                  error={touched.email && errors.email}
                />
              </Label>
              <ErrorMessage name="email">
                {msg => (
                  <StyledInlineErrorMessage>
                    {msg}
                    <LoginIcon>
                      <use href={icons + '#icon-log-in-01'}></use>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
              </ErrorMessage>
              <Label htmlFor="password">
                Password
                <Input
                  type="text"
                  name="password"
                  autoCorrect="off"
                  autoComplete="password"
                  placeholder="Enter password"
                  valid={touched.password && !errors.password}
                  error={touched.password && errors.password}
                />
              </Label>
              {errors.password && touched.password && (
                <StyledInlineErrorMessage>
                  {errors.password}
                  <LoginIconPassword>
                    <use href={icons + '#icon-log-in-01'}></use>
                  </LoginIconPassword>
                </StyledInlineErrorMessage>
              )}

              {/* <Submit type="submit" disabled={!isValid}>
                <span>Sign up</span>
                <LoginIcon>
                  <use href={icons + '#icon-log-in-01'}></use>
                </LoginIcon>
              </Submit> */}
              <FormButton isValid={isValid}>Log in</FormButton>
            </Form>
          </ContainerForm>
        );
      }}
    </Formik>
  );
}

export default FormLogin;
