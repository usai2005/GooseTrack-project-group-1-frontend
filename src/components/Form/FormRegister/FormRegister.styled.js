import styled, { css } from 'styled-components';
import { light, dark } from '../../../styles/theme';

import FilteredPropsInputField from '../FilteredPropsInputField';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const ContainerForm = styled.div`
  width: 400px;
  margin: 40px auto;
  font-family: InterRegular;

  ${viewport.mob} {
    width: 287px;
    font-size: 14px;
    margin: 32px auto;
  }
`;

export const Label = styled.label`
  font-family: InterSemiBold;
  font-size: 14px;
  line-height: normal;
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

    ${viewport.mob} {
    font-size: 12px;
  }
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const Input = styled(FilteredPropsInputField)`
  background-color: ${props =>
    props.theme === 'light'
      ? light.variable.bgCalendar
      : dark.variable.bgCalendar};
  color: ${props =>
    props.theme === 'light' ? light.variable.text : dark.variable.text};
  border: ${props =>
    props.theme === 'light'
      ? light.variable.activeArrowColor
      : dark.variable.activeArrowColor};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
  padding: 18px;

  &::placeholder {
    color: ${props =>
      props.theme === 'light'
        ? light.variable.activeArrowColor
        : dark.variable.activeArrowColor};
    font-size: 16px;
  }

  &:focus,
  &:active {
    border: ${props =>
      props.theme === 'light'
        ? light.variable.borderUserForm
        : dark.variable.borderUserForm};
    outline: none;
  }

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
    `}

     ${viewport.mob} {
    padding: 14px;
  }
`;

export const StyledInlineErrorMessage = styled.div`
  color: #e74a3b;
  display: block;
  font-size: 12px;

  padding-left: 16px;
  white-space: pre-line;
`;
export const StyledInlineMessage = styled.div`
  color: #3cbc81;
  display: block;
  font-size: 12px;

  padding-left: 16px;
  white-space: pre-line;
`;

export const LoginIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 40px;
  right: 20px;
  overflow: visible;
`;
