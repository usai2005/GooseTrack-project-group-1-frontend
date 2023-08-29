// import { TaskModal } from "components/TaskModal/TaskModal";

export const AddTaskBtn = ({ setIsOpen }) => {
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        + Add task
      </button>
    </>
  );
};
