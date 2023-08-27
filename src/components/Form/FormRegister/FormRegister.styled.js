import styled, { css } from 'styled-components';

import FilteredPropsInputField from '../FilteredPropsInputField';

export const ContainerForm = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  color: #000;
  font-size: 14px;
  line-height: 1.5px;
  font-style: normal;
  font-weight: 600;
  width: 100%;

  ${({ valid }) =>
    valid &&
    css`
      color: #3cbc81;
    `}

  ${({ error }) =>
    error &&
    css`
      color: #e74a3b;
    `}
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const Input = styled(FilteredPropsInputField)`
  background-color: white;
  border: 1px solid #dce3e5;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 18px;
  padding: 18px 14px;

  &:focus,
  &:active {
    border: 1px solid #111111;
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  /* &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  } */

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid #3cbc81;
      margin-bottom: 8px;

      &:focus,
      &:active {
        border: 1px solid #3cbc81;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      /* &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid #3cbc81;
      } */
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #e74a3b;
      margin-bottom: 8px;
      outline: none;

      &:focus,
      &:active {
        border: 1px solid #e74a3b;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      /* &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid #e74a3b;
      } */
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  color: #e74a3b;
  display: block;

  padding-left: 16px;
  white-space: pre-line;
`;
export const StyledInlineMessage = styled.div`
  color: #3cbc81;
  display: block;

  padding-left: 16px;
  white-space: pre-line;
`;

export const LoginIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 45px;
  right: 20px;
`;
