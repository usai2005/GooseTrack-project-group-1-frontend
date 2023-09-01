import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';

export const ColumnsTasksList = ({ tasks, setTaskToEdit, setIsOpen }) => {
  return (
    <ul>
      {tasks &&
        tasks.map(task => {
          return (
            <TaskColumnCard
              key={task._id}
              task={task}
              setTaskToEdit={setTaskToEdit}
              setIsOpen={setIsOpen}
            />
          );
        })}
    </ul>
  );
};
