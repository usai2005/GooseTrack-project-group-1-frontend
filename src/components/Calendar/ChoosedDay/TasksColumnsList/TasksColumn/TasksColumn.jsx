import { ColumnHeadBar } from './ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { AddTaskBtn } from './AddTaskBtn/AddTaskBtn';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { useState } from 'react';

export const TasksColumn = ({ title, tasks }) => {
  const [isOpened, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpened);
  };
  return (
    <>
      <ColumnHeadBar title={title} setIsOpen={setIsOpen} />

      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} />}

      <AddTaskBtn setIsOpen={setIsOpen} />

      {isOpened && (
        <TaskModal
          // task={taskToEdit}
          onClose={handleToggle}
          category={title}
        ></TaskModal>
      )}
    </>
  );
};

//     {tasks.length > 0 ? <ColumnsTasksList /> : null}
