import { format, startOfWeek, addDays, parse } from 'date-fns';

// import { DateNumber } from 'components/Calendar/ChoosedDay/ChoosedDay.styled';
import { WeekNames, WeekNamesContainer } from './DayCalendarHead.styled';
import { useSelector } from 'react-redux';
import { selectSelectedDate } from 'redux/date/selectors';

export const DayCalendarHead = () => {
  const today = parse(
    useSelector(selectSelectedDate),
    'dd-MM-yyyy',
    new Date()
  );
  const weekStartDate = startOfWeek(today, { weekStartsOn: 1 });
  const weekDays = [];
  // const dates = []; // массив для хранения дат

  // console.log(window.innerWidth);
  // for (let day = 0; day < 7; day++) {
  //   const currentDate = addDays(weekStartDate, day);
  //   weekDays.push(
  //     <WeekNames key={format(addDays(weekStartDate, day), 'EE')}>
  //       {window.innerWidth < 767
  //         ? format(currentDate, 'EEEEE')
  //         : format(currentDate, 'EE')}
  //     </WeekNames>
  //   );
  //   dates.push(
  //     <DateNumber key={currentDate} isToday={currentDate === new Date()}>
  //       {format(currentDate, 'd')}
  //     </DateNumber>
  //   );
  // }
  // return (
  //   <WeekDatesNamesContainer isWeekend>
  //     {(weekDays, dates)}
  //   </WeekDatesNamesContainer>
  // );
  // console.log(window.innerWidth);
  for (let day = 0; day < 7; day++) {
    weekDays.push(
      <WeekNames key={format(addDays(weekStartDate, day), 'd')}>
        <div>
          {' '}
          {window.innerWidth < 767
            ? format(addDays(weekStartDate, day), 'EEEEE')
            : format(addDays(weekStartDate, day), 'EE')}
        </div>
        <div>{format(addDays(weekStartDate, day), 'd')}</div>
      </WeekNames>
    );
  }
  return <WeekNamesContainer>{weekDays}</WeekNamesContainer>;
};
