import { TasksColumn } from './TasksColumn/TasksColumn';

export const TasksColumnsList = ({ tasks, date }) => {
  const tasksByDay = tasks.filter(task => task.date === date);

  const tasksToDo = tasksByDay.filter(task => task.category === 'to-do');

  const tasksInProgress = tasksByDay.filter(
    task => task.category === 'in-progress'
  );

  const tasksDone = tasksByDay.filter(task => task.category === 'done');

  return (
    <>
      <TasksColumn title={'to-do'} tasks={tasksToDo} />
      <TasksColumn title={'in-progress'} tasks={tasksInProgress} />
      <TasksColumn title={'done'} tasks={tasksDone} />
    </>
  );
};
