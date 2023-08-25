import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Label, ContainerInput } from './FormRegister.styled';
import FormButton from '../FormButton/FormButton';

const styleInput = {
  padding: 18,
  borderColor: '#dce3e5',
  borderStyle: 'solid',
  borderWeight: 1,
  borderRadius: 8,
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('This is an ERROR email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});
const FormRegister = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      // same shape as initial values
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form style={{ width: '100%' }}>
        <ContainerInput>
          <Label>Name</Label>
          <Field name="name" placeholder="Enter your name" style={styleInput} />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
        </ContainerInput>
        <ContainerInput>
          <Label>Email</Label>
          <Field
            name="email"
            type="email"
            placeholder="Enter email"
            style={styleInput}
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </ContainerInput>

        <ContainerInput>
          <Label>Password</Label>{' '}
          <Field
            type="password"
            name="password"
            placeholder="Enter password"
            style={styleInput}
          />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
        </ContainerInput>

        {/* <button type="submit">Submit</button> */}
        <FormButton>Sign Up</FormButton>
      </Form>
    )}
  </Formik>
);

export default FormRegister;
