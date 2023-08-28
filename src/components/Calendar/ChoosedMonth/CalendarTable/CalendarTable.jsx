import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  isSameDay,
  parse,
} from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

import { WeekContainer } from './CalendarTable.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectActiveDate } from 'redux/date/selectors';
import { WeekDayItem } from './WeekDayItem/WeekDayItem';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TaskModal } from 'components/TaskModal/TaskModal';
import {
  setActiveDate,
  setPeriodType,
  setSelectedDate,
} from 'redux/date/dateSlice';

const tasks = [
  {
    _id: 1,
    date: '2023-08-24',
    title: 'To do something',
    start: '12:00',
    end: '13:30',
    priority: 'low',
  },
  {
    _id: 1111,
    date: '2023-08-24',
    title: 'To do something',
    start: '15:00',
    end: '18:30',
    priority: 'low',
  },
  {
    _id: 11,
    date: '2023-08-22',
    title: 'To do 2',
    start: '12:00',
    end: '18:30',
    priority: 'medium',
  },
  {
    _id: 111,
    date: '2023-08-21',
    title: 'To do 3',
    start: '12:00',
    end: '20:30',
    priority: 'Hight',
  },
];

const generateDatesForCurrentWeek = (
  date,
  activeDate,
  handleClick,
  setIsOpen,
  setTaskToEdit
) => {
  let currentDate = date;
  const week = [];

  for (let day = 0; day < 7; day++) {
    const cloneDate = currentDate;

    const isToday = isSameDay(currentDate, new Date());

    const tasksToShow = tasks.filter(
      task => task.date === format(cloneDate, 'yyyy-MM-dd')
    );

    if (tasksToShow.length > 0) {
      console.log('tasksToShow', tasksToShow);
    }
    week.push(
      <WeekDayItem
        currentDate={currentDate}
        activeDate={activeDate}
        isToday={isToday}
        handleClick={handleClick}
        setOpening={setIsOpen}
        tasksToShow={tasksToShow}
        setTaskToEdit={setTaskToEdit}
      />
    );
    currentDate = addDays(currentDate, 1);
  }
  return week;
};

export const CalendarTable = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (e, date) => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      dispatch(setPeriodType('day'));
      dispatch(setSelectedDate(date));
      dispatch(setActiveDate(date));
      Navigate(`/calendar/day/${date}`);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpened);
    console.log(isOpened);
  };

  const activeDate = parse(
    useSelector(selectActiveDate),
    'yyyy-MM-dd',
    new Date()
  );

  const startOfTheSelectedMonth = startOfMonth(activeDate);
  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth, { weekStartsOn: 1 });

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endOfTheSelectedMonth) {
    allWeeks.push(
      generateDatesForCurrentWeek(
        currentDate,
        activeDate,
        handleClick,
        setIsOpen,
        setTaskToEdit
      )
    );
    currentDate = addDays(currentDate, 7);
  }
  console.log(taskToEdit, 'task to edit-3');

  return (
    <>
      <WeekContainer>{allWeeks}</WeekContainer>
      {isOpened && (
        <TaskModal
          task={taskToEdit}
          onClose={handleToggle}
          category={taskToEdit.category}
        ></TaskModal>
      )}
    </>
  );
};
