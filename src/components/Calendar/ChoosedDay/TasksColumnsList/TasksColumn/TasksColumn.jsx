import { ColumnHeadBar } from './ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { AddTaskBtn } from './AddTaskBtn/AddTaskBtn';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { useState } from 'react';
import { ContainerForm } from './TaskColumn.styled';

export const TasksColumn = ({ title, tasks }) => {
  const [isOpened, setIsOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const handleToggle = () => {
    setIsOpen(!isOpened);
  };
  return (
    <ContainerForm>
      <ColumnHeadBar title={title} setIsOpen={setIsOpen} />

      {tasks.length > 0 && (
        <ColumnsTasksList
          tasks={tasks}
          setTaskToEdit={setTaskToEdit}
          setIsOpen={setIsOpen}
        />
      )}

      <AddTaskBtn setIsOpen={setIsOpen} setTaskToEdit={setTaskToEdit} />

      {isOpened && (
        <TaskModal
          task={taskToEdit}
          onClose={handleToggle}
          category={title}
        ></TaskModal>
      )}
    </ContainerForm>
  );
};
