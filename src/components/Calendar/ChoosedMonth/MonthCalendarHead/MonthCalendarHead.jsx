import { format, startOfWeek, addDays } from 'date-fns';

import {
  WeekNames,
  WeekNamesContainer,
} from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable.styled';

export const MonthCalendarHead = () => {
  const weekStartDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [];

  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <WeekNames key={format(addDays(weekStartDate, day), 'EE')}>
        {window.innerWidth < 767
          ? format(addDays(weekStartDate, day), 'EEEEE')
          : format(addDays(weekStartDate, day), 'EE')}
      </WeekNames>
    );
  }
  return <WeekNamesContainer>{weekDays}</WeekNamesContainer>;
};
