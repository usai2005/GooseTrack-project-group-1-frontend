import styled from 'styled-components';
import { Link } from 'react-router-dom';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  background-color: #dce3e5;
  height: 100vh;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 480px;
  height: 521px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 125px;
  margin-bottom: 24px;
  padding: 40px;
  border-radius: 8px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 416px;

  ${viewport.tab} {
    opacity: 0;
  }
  ${viewport.desk} {
    opacity: 1;
  }
`;

export const SignupLink = styled(Link)`
  /* width: 44px; */

  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 18px;
  font-weight: 600;
  line-height: calc(14 / 12);
  text-decoration: none;

  border-bottom: 1px solid #ffffff;
  /* 
  @media screen and (min-width: 768px) {
    width: 51px;

    font-size: 14px;
    line-height: calc(18 / 14);
  } */
`;
