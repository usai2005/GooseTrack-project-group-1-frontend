import styled from 'styled-components';
import { Link } from 'react-router-dom';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  background-color: #dcebf7;
  height: 770px;
  font-family: InterSemiBold;
  font-size: 18px;
  font-style: normal;
  line-height: calc(18 / 16);
  color: #111;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 480px;
  height: 424px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 174px;
  margin-bottom: 24px;
  padding: 40px;
  border-radius: 8px;

  ${viewport.mob} {
    margin-top: 202px;
    width: 335px;
    height: 376px;
    margin-bottom: 18px;
    padding: 40px 24px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 20px;
  right: 60px;
  width: 368px;
  height: 521px;
  opacity: 0;

  ${viewport.desk} {
    opacity: 1;
  }
`;

export const SignupLink = styled(Link)`
  color: #3e85f3;
  line-height: calc(24 / 18);
  text-decoration: underline;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  ${viewport.mob} {
    font-size: 12px;
    line-height: calc(14 / 12);
  }
`;
