import styled from 'styled-components';
import { light, dark } from '../../../styles/theme';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
};

export const Title = styled.h2`
  color: ${props =>
    props.theme === 'light'
      ? light.variable.weekendTextColor
      : dark.variable.weekendTextColor};
  font-size: 24px;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  ${viewport.mob} {
    font-size: 18px;
  }
`;
