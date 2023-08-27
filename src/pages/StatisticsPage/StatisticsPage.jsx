import React from 'react';
import { StatisticsComp } from '../../components/Statistics/StatisticsComp';
import { Container } from './StatisticsPage.styled';
import CalendarToolBar from '../../components/Calendar/CalendarToolBar/CalendarToolBar'


export const Statistics = () => {
  return (
    <Container>
      <CalendarToolBar/>
      <StatisticsComp />
    </Container>
  );
};
