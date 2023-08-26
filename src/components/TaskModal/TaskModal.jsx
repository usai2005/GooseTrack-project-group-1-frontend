import React from 'react'
import { Modal } from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';

export const TaskModal = ({ onClose, action, column, createTask }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm onClose={onClose} createTask={createTask} />
    </Modal>
  );
};

