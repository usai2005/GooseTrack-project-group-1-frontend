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
  { id: 1, date: '24-08-2023', text: 'To do something', priority: 'low' },
  { id: 1111, date: '24-08-2023', text: 'To do something', priority: 'low' },

  { id: 11, date: '23-08-2023', text: 'To do 2', priority: 'medium' },
  { id: 111, date: '20-08-2023', text: 'To do 3', priority: 'Hight' },
];

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
      task => task.date === format(cloneDate, 'dd-MM-yyyy')
    );

    week.push(
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
    currentDate = addDays(currentDate, 1);
  }
  return week;
};

//////////
export const CalendarTable = () => {
  // const dispatch = useDispatch();

  // const selectedDate = parse(
  //   useSelector(selectSelectedDate),
  //   'dd-MM-yyyy',
  //   new Date()
  // );
  const activeDate = parse(
    useSelector(selectActiveDate),
    'dd-MM-yyyy',
    new Date()
  );
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [activeDate, setActiveDate] = useState(new Date());

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth, { weekStartsOn: 1 });

  let currentDate = startDate;
  console.log('currentDate', currentDate);

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
  console.log(allWeeks);

  return (
    <>
      {/* <ControlWrapper>
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
      </ControlWrapper> */}

      <WeekContainer>{allWeeks}</WeekContainer>
    </>
  );
};
