import styled from 'styled-components';
import { Link } from 'react-router-dom';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  position: relative;
  display: flex;
  height: 150px;
  width: 252px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 285px;

  ${viewport.tab} {
    height: 250px;
    width: 503px;
    margin-top: 364px;
  }

  ${viewport.desk} {
    height: 250px;
    width: 503px;
    margin-top: 302px;
  }
`;

export const Text = styled.p`
  color: #3e85f3;
  font-size: 100px;
  font-weight: 700;
  line-height: 150px;

  ${viewport.tab} {
    font-size: 200px;
    font-weight: 700;
    line-height: 250px;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  width: 81px;
  height: 188px;
  transform: translate(-50%, -40%) rotate(-31deg);

  ${viewport.tab} {
    width: 178px;
    height: 414px;
    transform: translate(-50%, -40%) rotate(-31.56deg);
  }
`;

export const Info = styled.div`
  margin-top: 28px;
  padding: 0px 40px;

  ${viewport.tab} {
    margin-top: 100px;
  }
`;

export const Title = styled.p`
color: rgba(17, 17, 17, 0.70);
text-align: center;

font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.2; 
`;

export const Btn = styled(Link)`
  padding: 16px 48px;
  border-radius: 16px;
  background-color: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: #fff;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.36px;
  text-decoration: none;

  &:focus,
  &:hover {
    background-color: #2b78ef;
  }
`;
