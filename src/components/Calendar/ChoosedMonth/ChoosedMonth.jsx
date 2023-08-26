import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';

export const ChoosedMonth = () => {
  return (
    <>
      <MonthCalendarHead />
      <CalendarTable />
    </>
  );
};
