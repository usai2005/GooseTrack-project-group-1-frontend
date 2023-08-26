import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  set,
} from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  WeekContainer,
  WeekDay,
  DateNum,
  DateWrap,
  DatePickerWrapper,
  ControlWrapper,
  Controls,
} from '../../Calendar.styled';

import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { CalendarTasks } from './CalendarTasks/CalendarTasks';

const tasks = [
  { id: 1, date: '24-08-2023', text: 'To do something', priority: 'low' },
  { id: 1111, date: '24-08-2023', text: 'To do something', priority: 'low' },

  { id: 11, date: '23-08-2023', text: 'To do 2', priority: 'medium' },
  { id: 111, date: '20-08-2023', text: 'To do 3', priority: 'Hight' },
];

const generateDatesForCurrentWeek = (
  date,
  selectedDate,
  activeDate,
  setSelectedDate
) => {
  let currentDate = date;
  const week = [];

  for (let day = 0; day < 7; day++) {
    const cloneDate = currentDate;

    const isToday = isSameDay(currentDate, new Date());

    const tasksToShow = tasks.filter(
      task => task.date === format(cloneDate, 'dd-MM-yyyy')
    );

    week.push(
      <WeekDay
        key={currentDate}
        // className={`day ${
        //   isSameMonth(currentDate, activeDate) ? '' : 'inactiveDay'
        // } ${isSameDay(currentDate, selectedDate) ? 'selectedDay' : ''}
        // ${isSameDay(currentDate, new Date()) ? 'today' : ''}`}

        onClick={() => {
          console.log('click');
          //// очищение добавить
          setSelectedDate(cloneDate);
          console.log(selectedDate);
        }}
      >
        {!isSameMonth(currentDate, activeDate) ? (
          <span></span>
        ) : (
          <DateNum>
            <DateWrap istoday={isToday}>{format(currentDate, 'd')}</DateWrap>
          </DateNum>
        )}

        {tasksToShow.length > 0 && CalendarTasks(tasksToShow)}
      </WeekDay>
    );
    currentDate = addDays(currentDate, 1);
  }
  return week;
};
//////////
export const CalendarTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth, { weekStartsOn: 1 });
  // const endDate = endOfWeek(endOfTheSelectedMonth);

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endOfTheSelectedMonth) {
    allWeeks.push(
      generateDatesForCurrentWeek(
        currentDate,
        selectedDate,
        activeDate,
        setSelectedDate
      )
    );
    currentDate = addDays(currentDate, 7);
  }
  //////////temporary solution/////////
  // const renderMonthContent = (month, shortMonth, longMonth) => {
  //   const tooltipText = `Tooltip for month: ${longMonth}`;
  //   return <span title={tooltipText}>{shortMonth}</span>;
  // };
  // const renderDayContents = (day, date) => {
  //   const tooltipText = `Tooltip for date: ${date}`;
  //   return <span title={tooltipText}>{getDate(date)}</span>;
  // };
  /*
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      renderDayContents={renderDayContents}
*/

  console.log(allWeeks);

  return (
    <>
      <ControlWrapper>
        <DatePickerWrapper>
          <ReactDatePicker
            selected={activeDate}
            onChange={setActiveDate}
            // renderDayContents={renderDayContents}
            // renderMonthContent={renderMonthContent}
            // showMonthYearPicker
            // locale="ua-Uk"
            calendarStartDay={1}
            dateFormat="MMMM yyyy"
            closeOnScroll={true}
            formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
            // minDate={'02-01-2020'}
            todayButton="Today"
          />
        </DatePickerWrapper>
        <div>
          <Controls
            type="button"
            onClick={() => setActiveDate(subMonths(activeDate, 1))}
          >
            <AiOutlineLeft />
          </Controls>
          <Controls
            type="button"
            onClick={() => setActiveDate(addMonths(activeDate, 1))}
          >
            <AiOutlineRight />
          </Controls>
        </div>
      </ControlWrapper>

      <WeekContainer>{allWeeks}</WeekContainer>
    </>
  );
};
