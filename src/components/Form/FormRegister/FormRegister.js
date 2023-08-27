import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import icons from '../../../images/icons.svg';
import { register } from 'redux/auth/operations';

import {
  Label,
  Input,
  StyledInlineErrorMessage,
  StyledInlineMessage,
  ContainerForm,
  LoginIcon,
  InputContainer,
} from './FormRegister.styled';
import FormButton from '../FormButton/FormButton';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Your name is too short')
    .required('Please enter your name'),
  email: Yup.string()
    .email('This is an ERROR email')
    .required('Please enter your email'),
  password: Yup.string()
    .required('Please enter your password')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

function FormRegister() {
  // const [formValues, setFormValues] = useState();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          await dispatch(register(values));
          resetForm();

          // console.log(values);
        } catch (error) {
          console.error('Registration failed', error);
        }
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
              <InputContainer>
                <Label
                  htmlFor="name"
                  valid={touched.email && !errors.name}
                  error={touched.email && errors.name}
                >
                  Name
                  <Input
                    type="text"
                    name="name"
                    autoCorrect="off"
                    autoComplete="name"
                    placeholder="Enter your name"
                    valid={touched.name && !errors.name}
                    error={touched.name && errors.name}
                  />
                </Label>
                {errors.name && touched.name && (
                  <StyledInlineErrorMessage>
                    {errors.name}
                    <LoginIcon>
                      <use href={icons + '#icon-baseline-error-outline'}></use>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
              </InputContainer>
              <InputContainer>
                <Label
                  htmlFor="email"
                  valid={touched.email && !errors.email}
                  error={touched.email && errors.email}
                >
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
                        <use
                          href={icons + '#icon-baseline-error-outline'}
                        ></use>
                      </LoginIcon>
                    </StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
                {!errors.email && touched.email && (
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
                  valid={touched.password && !errors.password}
                  error={touched.password && errors.password}
                >
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
                    <LoginIcon>
                      <use href={icons + '#icon-baseline-error-outline'}></use>
                    </LoginIcon>
                  </StyledInlineErrorMessage>
                )}
              </InputContainer>

              <FormButton isValid={isValid}>Sign up</FormButton>
            </Form>
          </ContainerForm>
        );
      }}
    </Formik>
  );
}

export default FormRegister;
