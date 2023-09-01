import styled from 'styled-components';

const viewport = {
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const Container = styled.section`
  border-radius: 16px;
  margin-top: 30px;
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  padding: 135px 14px;
  padding-top: 28px;
  background-color: ${props => props.theme.variable.bgStatistic};

  ${viewport.tab} {
    padding: 104px 32px;
    max-width: 704px;
  }
  ${viewport.desk} {
    padding: 104px 114px;
    max-width: 1087px;
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
    width: 230px;
  }
`;
