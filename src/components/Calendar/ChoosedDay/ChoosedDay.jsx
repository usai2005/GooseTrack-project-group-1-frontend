import { useSelector } from 'react-redux';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';

// import { selectTasks } from 'redux/tasks/tasksSelectors';
import { selectSelectedDate } from 'redux/date/selectors';

// import { tasks } from '../ChoosedMonth/CalendarTable/CalendarTable';
import { selectTasks } from 'redux/tasks/tasksSelectors';

export const ChoosedDay = () => {
  const tasks = useSelector(selectTasks);

  const date = useSelector(selectSelectedDate);

  return (
    <>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasks} date={date} />
    </>
  );
};
