import { Modal } from '../Modal/Modal';
import { FeedbackForm } from './FeedbackForm';

export const FeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  );
};