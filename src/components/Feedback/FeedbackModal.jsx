import { Modal } from '../Modal/Modal';
import { FeedbackForm } from './FeedbackForm';

export const FeedbackModal = ({ onClose, user }) => {
  return (
    <Modal onClose={onClose} user={user}>
      <FeedbackForm onClose={onClose} user={user} />
    </Modal>
  );
};
