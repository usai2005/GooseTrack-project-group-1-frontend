import React from 'react';
import { StatisticsComp } from '../../components/Statistics/StatisticsComp';
import { Container, Pagination, Calendar } from './StatisticsPage.styled';
import { PeriodPaginator } from '../../components/Calendar/CalendarToolBar/PeriodPaginator/PeriodPaginator';
import StatisticsBtn from '../../components/Statistics/StatisticsInfo';

const Statistics = () => {
  return (
    <Container>
      <Pagination>
        <Calendar>
        <PeriodPaginator />
        </Calendar>
        <StatisticsBtn/>
      </Pagination>
      <StatisticsComp />
    </Container>
  );
};

export default Statistics;
