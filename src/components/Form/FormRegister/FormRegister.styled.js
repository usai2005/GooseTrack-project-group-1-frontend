// import styled, { css } from 'styled-components';
import { Field } from 'formik';
import { styled } from 'styled-components';

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

  ${viewport.mob} {
    font-size: 12px;
  }
`;
export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  background-color: #fff;
  color: #111;
  border: 1px solid #dce3e5;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 22px;
  padding: 18px;

  &::placeholder {
    color: #dce3e5;
    font-size: 16px;
  }

  &:focus,
  &:active {
    border: 1px solid #111111;
    background-color: #fff;
    outline: none;
  }

  ${viewport.mob} {
    padding: 14px;
  }
`;

export const StyledInlineErrorMessage = styled.div`
  color: #e74a3b;
  display: block;
  font-size: 12px;
  margin-top: -10px;
  padding-left: 16px;
  white-space: pre-line;
`;
export const StyledInlineMessage = styled.div`
  color: #3cbc81;
  display: block;
  font-size: 12px;
  margin-top: -10px;
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
