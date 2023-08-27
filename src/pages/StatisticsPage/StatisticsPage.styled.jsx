import styled from 'styled-components';

const viewport = {
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const Container = styled.section`
  border-radius: 16px;
  margin-top: 30px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 135px;

  background-color: #fff;
  ${viewport.tab} {
    padding-bottom: 224px;
  }
  ${viewport.desk} {
    padding-bottom: 104px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  padding: 0px 50px;
`;

export const Calendar = styled.div`
  width: 220px;
`;
