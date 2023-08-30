import { format, startOfWeek, addDays, parse } from 'date-fns';

import { WeekNamesContainer, WeekNames } from './DayCalendarHead.styled';
import { ContainerWeekDay, ContainerDateCell } from './DayCalendarHead.styled';
import { useSelector } from 'react-redux';
import { selectSelectedDate } from 'redux/date/selectors';

// export const DayCalendarHead = () => {
//   const today = parse(
//     useSelector(selectSelectedDate),
//     'yyyy-MM-dd',
//     new Date()
//   );
//   const weekStartDate = startOfWeek(today, { weekStartsOn: 1 });
//   const weekDays = [];

//   for (let day = 0; day < 7; day++) {
//     weekDays.push(
//       <WeekNames key={format(addDays(weekStartDate, day), 'd')}>
//         <div>
//           {' '}
//           {window.innerWidth < 767
//             ? format(addDays(weekStartDate, day), 'EEEEE')
//             : format(addDays(weekStartDate, day), 'EE')}
//         </div>
//         <div>{format(addDays(weekStartDate, day), 'd')}</div>
//       </WeekNames>
//     );
//   }
//   return <WeekNamesContainer>{weekDays}</WeekNamesContainer>;
// };

// Отдельный компонент для дней недели
const WeekDay = ({ date, isShort }) => {
  const dayFormat = isShort ? 'EEEEE' : 'EE';
  return <div>{format(date, dayFormat)}</div>;
};

// Отдельный компонент для даты
const DateCell = ({ date }) => {
  return <div>{format(date, 'd')}</div>;
};

export const DayCalendarHead = () => {
  const today = parse(
    useSelector(selectSelectedDate),
    'yyyy-MM-dd',
    new Date()
  );
  const weekStartDate = startOfWeek(today, { weekStartsOn: 1 });

  const weekDays = [];
  const isShort = window.innerWidth < 767;

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
