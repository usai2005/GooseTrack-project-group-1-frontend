import styled from 'styled-components';
import { light, dark } from '../../../styles/theme';
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme === 'light' ? light.variable.buttonBg : dark.variable.buttonBg};
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  border-color: none;
  margin-top: 8px;
  text-align: center;
  color: ${props =>
    props.theme === 'light' ? light.variable.textBtn : dark.variable.textBtn};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.theme === 'light'
        ? light.variable.btnColorActive
        : dark.variable.btnColorActive};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: ${props =>
      props.theme === 'light'
        ? light.variable.btndisActive
        : dark.variable.btnDisActive};

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

export const Span = styled.span`
  margin-right: 11px;
`;
export const LoginIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${props =>
    props.theme === 'light' ? light.variable.textBtn : dark.variable.textBtn};
`;
