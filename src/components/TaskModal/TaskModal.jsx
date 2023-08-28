import React from 'react';
import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';

export const TaskModal = ({ category, task, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm onClose={onClose} category={category} task={task} />
    </Modal>
  );
};
