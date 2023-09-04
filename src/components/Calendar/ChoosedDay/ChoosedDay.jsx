import { useSelector } from 'react-redux';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { selectSelectedDate } from 'redux/date/selectors';
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
