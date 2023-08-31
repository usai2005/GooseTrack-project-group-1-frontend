import {
  ContainerColumnCard,
  TextCard,
  ContainerAvatar,
  ContainerData,
  Priority,
  WrapperData,
} from './TaskColumnCard.styled';

// --------------------

import {
  AreaEdit,
  EditBtn,
  DeleteBtn,
} from 'components/Feedback/FeedbackForm.styled';

import { ReactComponent as IconEdit } from 'images/feedback/edit.svg';
import { ReactComponent as IconTrash } from 'images/feedback/trash.svg';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/tasksOperations';

// const handleEdit = () => {
//   setIsEditActive(!isEditActive);
// };



// ----------------

export const TaskColumnCard = ({ task }) => {
  const avatarUrl = task.owner.avatarURL ?? 'default url';
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task._id));
  };

  return (
    <ContainerColumnCard>
      <TextCard>{task.title}</TextCard>
      <ContainerData>
        <WrapperData>
          <ContainerAvatar src={avatarUrl} alt="user name" />
          <Priority>{task.priority}</Priority>
        </WrapperData>
        <AreaEdit>
          <EditBtn>
            {/* <EditBtn onClick={handleEdit} isActive={isEditActive} type="button"> */}
            <IconEdit />
          </EditBtn>
          {/* <DeleteBtn type="button" onClick={handleDelete}> */}
          <DeleteBtn onClick={handleDelete}>
            <IconTrash />
          </DeleteBtn>
        </AreaEdit>
      </ContainerData>
    </ContainerColumnCard>
  );
};