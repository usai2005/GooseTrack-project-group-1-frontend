import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 225px;
  min-height: 100vh;
  padding: 20px 24px;

  background-color: ${props => props.theme.variable.sideBar};
  stroke: #343434;

  @media screen and (min-width: 768px) {
    position: static;
    width: 289px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 24px 24px 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
`;

export const MenuCloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: transparent;
  border-radius: 50%;
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const TitleSideBar = styled.h2`
  margin-bottom: 36px;

  color: rgba(52, 52, 52, 0.5);

  color: ${props =>
    props.$currenttype
      ? props.theme.variable.bgReversLabel
      : props.theme.variable.navText};

  font-size: 12px;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 14px;
  }
`;
