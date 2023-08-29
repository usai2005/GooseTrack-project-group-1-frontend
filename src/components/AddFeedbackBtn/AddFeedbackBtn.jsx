import { FeedbackButton } from './AddFeedbackBtn.styled';

const AddFeedbackBtn = ({ setIsOpen }) => {
  return (
    <FeedbackButton
      type="button"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      Feedback
    </FeedbackButton>
  );
};

export default AddFeedbackBtn;
