import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthSection = styled.section`
  width: 100vw;

  margin: 0 auto 64px;

  background-color: #3e85f3;
`;

export const AuthContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const LogoImg = styled.img`
  width: 142px;
  height: 142px;

  margin-bottom: 2px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 149px;

    margin-bottom: -5px;
  }
`;

export const AuthTitle = styled.h1`
  margin: 0 0 32px;
  padding: 0;

  color: #ffffff;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 44px;
  font-weight: 700;
  line-height: calc(48 / 44);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 100px;
    line-height: calc(130 / 100);
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: calc(150 / 120);
  }
`;

export const Span = styled.span`
  &.secondSpan {
    font-style: italic;
  }
  @media screen and (min-width: 768px) {
    &.firstSpan {
      font-style: italic;
    }
  }
`;

export const AuthList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 0;

  list-style: none;

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

  margin-bottom: 16px;

  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #3e85f3;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: -0.28px;
  text-decoration: none;

  transition: transform 250ms linear;

  span {
    margin-right: 6px;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 121px;
    height: 49px;

    margin-left: 24px;
    margin-bottom: 0;
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
  text-decoration: none;

  border-bottom: 1px solid #ffffff;

  @media screen and (min-width: 768px) {
    width: 51px;

    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DescriptionContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 128px;
    margin-bottom: 100px;
  }
`;

export const SliderContainer = styled.div`
  margin: 0 auto 64px;

  width: 335px;

  box-sizing: border-box;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 580px;

    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 1184px;

    margin-bottom: 118px;
  }
`;

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin: 0;
  padding: 0;

  list-style: none;

  &.middle {
    align-items: flex-start;
  }
`;

export const DescriptionListItem = styled.li`
  padding: 0;

  &:not(:last-child) {
    margin-bottom: 64px;
  }

  @media screen and (min-width: 768px) {
    &.middle {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 1107px;

    &.middle {
      flex-direction: row-reverse;
      align-items: center;

      margin-right: 77px;
    }
  }
`;

export const InfoThumb = styled.div`
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    width: 275px;
  }
`;

export const InfoNumber = styled.p`
  margin: 0 0 14px;
  padding: 0;

  color: #3e85f3;
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -4px;

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`;

export const InfoTitle = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 214px;
  height: 56px;

  margin-bottom: 8px;

  border-radius: 44px;

  background-color: #dcebf7;

  &.last {
    width: 139px;

    @media screen and (min-width: 768px) {
      width: 169px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 264px;
  }

  > h2 {
    color: #3e85f3;
    font-size: 32px;
    font-weight: 700;
    line-height: calc(40 / 32);
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: calc(44 / 40);
    }
  }
`;

export const ItemTitle = styled.p`
  margin: 0 0 14px;
  padding: 0;

  color: #171820;
  font-size: 32px;
  font-weight: 700;
  line-height: calc(40 / 32);
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 40px;
    line-height: calc(44 / 40);
  }
`;

export const ItemDescription = styled.p`
  margin: 0;
  padding: 0;

  color: rgba(17, 17, 17, 0.9);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
`;

export const LoginIcon = styled.svg`
  width: 18px;
  height: 18px;

  stroke: #3e85f3;
`;

export const ReviewsTitle = styled.h2`
  margin-bottom: 40px;

  text-align: center;

  font-size: 28px;
  font-weight: 700;
  line-height: calc(32 / 28);

  text-transform: uppercase;

  color: #3e85f3;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;

    font-size: 40px;
    line-height: calc(44 / 40);
  }
`;

export const Picture = styled.picture`
  width: 335px;
  height: 457px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 700px;
  }

  @media screen and (min-width: 1440px) {
    width: 604px;
    height: 700px;
  }
`;
