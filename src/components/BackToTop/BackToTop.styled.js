import styled from 'styled-components';
import { light, dark } from '../../styles/theme';
import { FaAnglesUp } from 'react-icons/fa6';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const Btn = styled.button`
  display: flex;
  position: fixed;
  right: 15px;
  height: 30px;
  width: 30px;
  background-color: transparent;

  ${viewport.tab} {
    right: 18px;
    height: 40px;
    width: 40px;
  }
  ${viewport.desk} {
    right: 20px;
    height: 50px;
    width: 50px;
  }

  color: ${props =>
    props.theme === 'light' ? light.variable.buttonBg : dark.variable.buttonBg};
  /* box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48); */

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
  height: 30px;
  width: 30px;

  ${viewport.tab} {
    height: 40px;
    width: 40px;
  }
  ${viewport.desk} {
    height: 50px;
    width: 50px;
  }
`;
