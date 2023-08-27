import { format, startOfWeek, addDays } from 'date-fns';

import {
  WeekNames,
  DateNumber,
  WeekDatesNamesContainer,
} from 'components/Calendar/ChoosedDay/ChoosedDay.styled';

export const DayCalendarHead = () => {
  const weekStartDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [];
  const dates = []; // массив для хранения дат

  console.log(window.innerWidth);
  for (let day = 0; day < 7; day++) {
    const currentDate = addDays(weekStartDate, day);
    weekDays.push(
      <WeekNames key={format(addDays(weekStartDate, day), 'EE')}>
        {window.innerWidth < 767
          ? format(currentDate, 'EEEEE')
          : format(currentDate, 'EE')}
      </WeekNames>
    );
    dates.push(
      <DateNumber key={currentDate} isToday={currentDate === new Date()}>
        {format(currentDate, 'd')}
      </DateNumber>
    );
  }
  return (
    <WeekDatesNamesContainer isWeekend>
      {(weekDays, dates)}
    </WeekDatesNamesContainer>
  );
};
