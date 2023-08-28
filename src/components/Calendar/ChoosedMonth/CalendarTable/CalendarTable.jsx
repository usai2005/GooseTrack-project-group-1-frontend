import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  // endOfWeek,
  isSameMonth,
  isSameDay,
  // subMonths,
  // addMonths,
  // set,
  parse,
} from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

import {
  WeekContainer,
  WeekDay,
  DateNum,
  DateWrap,
} from './CalendarTable.styled';

// import { useState } from 'react';
import { CalendarTasks } from './CalendarTasks/CalendarTasks';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import {
  selectActiveDate,
  //  selectSelectedDate
} from 'redux/date/selectors';

const tasks = [
  { id: 1, date: '2023-08-24', title: 'To do something', priority: 'low' },
  { id: 1111, date: '2023-08-24', title: 'To do something', priority: 'low' },
  { id: 11, date: '2023-08-22', title: 'To do 2', priority: 'medium' },
  { id: 111, date: '2023-08-21', title: 'To do 3', priority: 'Hight' },
];

const WeekDayItem = ({ currentDate, activeDate, isToday, tasksToShow }) => {
  return (
    <WeekDay key={currentDate}>
      {!isSameMonth(currentDate, activeDate) ? (
        <span></span>
      ) : (
        <DateNum>
          <DateWrap $istoday={isToday}>{format(currentDate, 'd')}</DateWrap>
        </DateNum>
      )}

      {tasksToShow.length > 0 && CalendarTasks(tasksToShow)}
    </WeekDay>
  );
};

const generateDatesForCurrentWeek = (
  date,
  // selectedDate,
  activeDate
  // setSelectedDate
) => {
  let currentDate = date;
  const week = [];
  // const dispatch = useDispatch();

  for (let day = 0; day < 7; day++) {
    const cloneDate = currentDate;

    const isToday = isSameDay(currentDate, new Date());

    const tasksToShow = tasks.filter(
      task => task.date === format(cloneDate, 'yyyy-MM-dd')
    );

    week.push(
      // <WeekDay key={currentDate}>
      //   {!isSameMonth(currentDate, activeDate) ? (
      //     <span></span>
      //   ) : (
      //     <DateNum>
      //       <DateWrap $istoday={isToday}>{format(currentDate, 'd')}</DateWrap>
      //     </DateNum>
      //   )}

      //   {tasksToShow.length > 0 && CalendarTasks(tasksToShow)}
      // </WeekDay>
      <WeekDayItem
        currentDate={currentDate}
        activeDate={activeDate}
        isToday={isToday}
        tasksToShow={tasksToShow}
      />
    );
    currentDate = addDays(currentDate, 1);
  }
  return week;
};

//////////
export const CalendarTable = () => {
  // const dispatch = useDispatch();

  // const selectedDate = parse(
  //   useSelector(selectSelectedDate),
  //   'yyyy-MM-dd',
  //   new Date()
  // );
  const activeDate = parse(
    useSelector(selectActiveDate),
    'yyyy-MM-dd',
    new Date()
  );

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth, { weekStartsOn: 1 });

  let currentDate = startDate;
  // console.log('currentDate', currentDate);

  const allWeeks = [];

  while (currentDate <= endOfTheSelectedMonth) {
    allWeeks.push(
      generateDatesForCurrentWeek(
        currentDate,
        // selectedDate,
        activeDate
        // setSelectedDate
      )
    );
    currentDate = addDays(currentDate, 7);
  }
  // console.log(allWeeks);

  return (
    <>
      <WeekContainer>{allWeeks}</WeekContainer>
    </>
  );
};
