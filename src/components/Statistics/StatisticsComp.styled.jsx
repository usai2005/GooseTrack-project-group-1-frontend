import styled from 'styled-components';
// import { CartesianGrid } from 'recharts';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const Container = styled.div`
  border: solid 1px ${props => props.theme.variable.borderColor};
  stroke: rgba(52, 52, 52, 0.5);
  stroke: ${props => props.theme.variable.titleAvatar};

  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  padding: 40px 14px;
  ${viewport.mob} {
    width: 307px;
    height: 413px;
  }
  ${viewport.tab} {
    width: 640px;
    height: 424px;
    border-radius: 29px;
    padding: 32px 32px;
  }
  ${viewport.desk} {
    width: 860px;
    height: 440px;
    padding: 40px 40px;
  }
`;

export const Title = styled.div`
  color: ${props => props.theme.variable.titleAvatar};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  margin: 0;
`;

export const Wrapper = styled.div`
  stroke: ${props => props.theme.variable.titleAvatar};

  ${viewport.mob} {
    width: 279px;
    height: 333px;
  }
  ${viewport.tab} {
    width: 576px;
    height: 360px;
  }
  ${viewport.desk} {
    width: 780px;
    height: 360px;
  }
`;
