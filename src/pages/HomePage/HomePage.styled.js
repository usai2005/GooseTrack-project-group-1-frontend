import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const SectionHero = styled.section`
// `;

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  min-width: 374px;
  height: 100vh;

  background-color: #3e85f3;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const HeroTitle = styled.h1`
  color: #ffffff;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 44px;
  font-weight: 700;
  line-height: calc(48 / 44);

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: calc(130 / 100);
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: calc(150 / 120);
  }

  span {
    font-style: italic;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const LoginLink = styled(Link)`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 131px;
  height: 46px;

  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #3e85f3;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14); /* 128.571% */
  letter-spacing: -0.28px;
  text-decoration: none;

  cursor: pointer;

  span {
    margin-right: 6px;
  }

  @media screen and (min-width: 768px) {
    width: 121px;
    height: 49px;
  }
`;

export const SignupLink = styled(Link)`
  width: 44px;

  color: #ffffff;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 12px;
  font-weight: 600;
  line-height: calc(14 / 12);

  border-bottom: 1px solid #ffffff;

  @media screen and (min-width: 768px) {
    width: 51px;

    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
