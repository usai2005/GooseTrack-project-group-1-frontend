// import { useState } from 'react';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import PeriodPaginator from './PeriodPaginator/PeriodPaginator';

export default function CalendarToolBar() {
  return (
    <>
      <PeriodPaginator />
      <PeriodTypeSelect />
    </>
  );
}
