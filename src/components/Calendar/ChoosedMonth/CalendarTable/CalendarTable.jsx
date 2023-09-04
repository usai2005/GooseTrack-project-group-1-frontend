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

import { useSelector } from 'react-redux';
import { selectActiveDate } from 'redux/date/selectors';
import { WeekDayItem } from './WeekDayItem/WeekDayItem';
import { useState } from 'react';
import { TaskModal } from 'components/TaskModal/TaskModal';
import {} from 'redux/date/dateSlice';
import { selectTasks } from 'redux/tasks/tasksSelectors';
// import { Notify } from 'notiflix';

export const CalendarTable = () => {
  const [isOpened, setIsOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const tasks = useSelector(selectTasks);

  // if (tasks.length === 0) Notify.info('You have no any tasks for this period.');
  const handleToggle = () => {
    setIsOpen(!isOpened);
  };

  const activeDate = parse(
    useSelector(selectActiveDate),
    'yyyy-MM-dd',
    new Date()
  );

  const generateDatesForCurrentWeek = (
    date,
    activeDate,
    // handleClick,
    setIsOpen,
    setTaskToEdit,
    tasks
  ) => {
    let currentDate = date;
    const week = [];

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;

      const isToday = isSameDay(currentDate, new Date());

      const tasksToShow = tasks.filter(
        task => task.date === format(cloneDate, 'yyyy-MM-dd')
      );

      week.push(
        <WeekDayItem
          key={currentDate}
          currentDate={currentDate}
          activeDate={activeDate}
          isToday={isToday}
          setOpening={setIsOpen}
          tasksToShow={tasksToShow}
          setTaskToEdit={setTaskToEdit}
        />
      );
      currentDate = addDays(currentDate, 1);
    }
    return week;
  };

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
        setIsOpen,
        setTaskToEdit,
        tasks
      )
    );
    currentDate = addDays(currentDate, 7);
  }

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
