import { ColumnHeadBar } from './ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { AddTaskBtn } from './AddTaskBtn/AddTaskBtn';

export const TasksColumn = () => {
  return (
    <>
      <ColumnHeadBar />
      <ColumnsTasksList />
      <AddTaskBtn />
    </>
  );
};
