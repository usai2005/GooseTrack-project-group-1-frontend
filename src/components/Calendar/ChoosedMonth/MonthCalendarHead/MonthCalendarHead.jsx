import { format, startOfWeek, addDays } from 'date-fns';

import {
  WeekNames,
  WeekNamesContainer,
} from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable.styled';
import { useMediaQuery } from 'react-responsive';

export const MonthCalendarHead = () => {
  const weekStartDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [];
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <WeekNames key={format(addDays(weekStartDate, day), 'EE')}>
        {isMobile
          ? format(addDays(weekStartDate, day), 'EEEEE')
          : format(addDays(weekStartDate, day), 'EE')}
      </WeekNames>
    );
  }
  return <WeekNamesContainer>{weekDays}</WeekNamesContainer>;
};
