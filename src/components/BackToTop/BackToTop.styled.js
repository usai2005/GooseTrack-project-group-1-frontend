import styled from 'styled-components';
import { light, dark } from '../../styles/theme';
import { FaAnglesUp } from 'react-icons/fa6';

export const Btn = styled.button`
  display: flex;
  position: fixed;
  right: 20px;
  height: 40px;
  width: 40px;
  font-size: 40px;

  color: ${props =>
    props.theme === 'light' ? light.variable.buttonBg : dark.variable.buttonBg};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  &:active,
  &:focus,
  &:hover {
    color: ${props =>
      props.theme === 'light'
        ? light.variable.btnColorActive
        : dark.variable.btnColorActive};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const Icon = styled(FaAnglesUp)`
  color: inherit;
`;
