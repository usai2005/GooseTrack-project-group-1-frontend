import icons from '../../../../../../images/icons.svg';
import { Button, Icon, Span } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ setIsOpen, setTaskToEdit }) => {
  return (
    <Button
      type="button"
      onClick={() => {
        setIsOpen(true);
        setTaskToEdit(null);
      }}
    >
      <Icon>
        <use href={icons + '#icon-plus'}></use>
      </Icon>
      <Span> Add task</Span>
    </Button>
  );
};
