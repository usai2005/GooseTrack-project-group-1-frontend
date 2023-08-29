// import { useState } from 'react';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodWrapper } from './CalendarToolBar.styled';

export default function CalendarToolBar() {
  return (
    <PeriodWrapper>
      <PeriodPaginator />
      <PeriodTypeSelect />
    </PeriodWrapper>
  );
}
