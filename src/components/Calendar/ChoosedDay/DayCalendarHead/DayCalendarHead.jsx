import { format, startOfWeek, addDays, parse, isSameDay } from 'date-fns';
import { useMediaQuery } from 'react-responsive';

import {
  WeekNamesContainer,
  WeekNames,
  WeekDayNum,
} from './DayCalendarHead.styled';
import { ContainerWeekDay, ContainerDateCell } from './DayCalendarHead.styled';
import { useSelector } from 'react-redux';
import { selectSelectedDate } from 'redux/date/selectors';

// Отдельный компонент для дней недели
const WeekDay = ({ date, isShort }) => {
  const dayFormat = isShort ? 'EEEEE' : 'EE';
  return <div>{format(date, dayFormat)}</div>;
};

// Отдельный компонент для даты
const DateCell = ({ date }) => {
  const today = useSelector(selectSelectedDate);

  const isToday = isSameDay(new Date(date), new Date(today));

  return <WeekDayNum $istoday={isToday}>{format(date, 'd')}</WeekDayNum>;
};

export const DayCalendarHead = () => {
  const today = parse(
    useSelector(selectSelectedDate),
    'yyyy-MM-dd',
    new Date()
  );
  const weekStartDate = startOfWeek(today, { weekStartsOn: 1 });

  const weekDays = [];
  const isShort = useMediaQuery({ query: '(max-width: 767px)' });

  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <WeekNames key={day}>
        <ContainerWeekDay>
          <WeekDay date={addDays(weekStartDate, day)} isShort={isShort} />
        </ContainerWeekDay>
        <ContainerDateCell>
          <DateCell date={addDays(weekStartDate, day)} />
        </ContainerDateCell>
      </WeekNames>
    );
  }

  return <WeekNamesContainer>{weekDays}</WeekNamesContainer>;
};
