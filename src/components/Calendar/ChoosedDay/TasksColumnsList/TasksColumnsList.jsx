import { TasksColumn } from './TasksColumn/TasksColumn';

export const TasksColumnsList = ({ tasks, date }) => {
  const tasksByDay = tasks.filter(task => task.date === date);
  console.log(tasksByDay, 'tasksByDay');

  const tasksToDo = tasksByDay.filter(task => task.category === 'to-do');
  console.log(tasksToDo, 'tasksToDo');

  const tasksInProgress = tasksByDay.filter(
    task => task.category === 'in-progress'
  );
  console.log(tasksInProgress, 'tasksInProgress');

  const tasksDone = tasksByDay.filter(task => task.category === 'done');
  console.log(tasksDone, 'tasksDone');

  return (
    <>
      <TasksColumn title={'to-do'} tasks={tasksToDo} />
      <TasksColumn title={'in-progress'} tasks={tasksInProgress} />
      <TasksColumn title={'done'} tasks={tasksDone} />
    </>
  );
};
