import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 20px 95px 20px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px 64px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 32px 32px 32px;
  }
`;

export const MenuBtn = styled.button`
  margin-right: auto;

  background-color: transparent;

  stroke: ${props => props.theme.variable.arrowColor};

  cursor: pointer;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MenuIcon = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

export const ImgHeaderDay = styled.img`
  width: 64px;

  margin-right: 8px;

  @media screen and (max-width: 1439px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;


export const PageTitle = styled.h1`
  color: ${props => props.theme.variable.headerText};

  @media screen and (max-width: 1439px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  margin: 0;
  margin-bottom: 8px;

  //   color: #111111;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 32px;
  line-height: calc(32 / 32);
`;

export const TextHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  color: ${props => props.theme.variable.headerText};

  span {
    color: ${props => props.theme.variable.weekendTextColor};
  }

  @media screen and (max-width: 1439px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;