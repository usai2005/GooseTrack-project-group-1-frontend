import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 136px;
  height: 35px;
  margin-right: 25px;

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 58px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${props =>
    props.$currenttype
      ? props.theme.variable.gooseColor
      : props.theme.variable.gooseColorNav};

  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Coolvetica, sans-serif;
  font-size: 16px;
  line-height: calc(22 / 16);

  text-decoration: none;

  span {
    font-style: italic;
  }

  img {
    margin-right: 6px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);

    img {
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: calc(24 / 24);
  }
`;

export const LogoImg = styled.img`
  width: 36px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 71px;
  }
`;
