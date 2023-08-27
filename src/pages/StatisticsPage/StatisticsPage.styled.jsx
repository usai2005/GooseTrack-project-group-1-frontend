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
  padding-bottom: 40px;

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
  flex-direction: column;
  width: 307px;
  margin: 0 auto;
  ${viewport.tab} {
    flex-direction: row;
    width: 600px;
  }
  ${viewport.desk} {
    width: 800px;
  }
`;

export const Calendar = styled.div`
  width: 307px;
  ${viewport.tab} {
    width: 220px;
  }
`;
