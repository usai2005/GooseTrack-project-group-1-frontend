import styled from 'styled-components';

const viewport = {
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const PageWrapper = styled.div`

  padding: 0 20px 95px 20px;

  ${viewport.tab} {
    padding: 0 32px 64px 32px;
  }

  ${viewport.desk} {
    padding: 0 32px 32px 32px;
  }
`;

export const StatisticWrapper = styled.div`
  background-color: ${props => props.theme.variable.secondaryBg};
  border-radius: 16px;

  padding: 28px 14px 135px 14px;

  ${viewport.tab} {
    padding: 132px 32px 224px 32px;
  }

  ${viewport.desk} {
    padding: 134px 113px 104px 113px;
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
