import {
  ContainerColumnCard,
  TextCard,
  ContainerAvatar,
  ContainerData,
  Priority,
  WrapperData,
  DeleteBtn,
  MoveBtn,
} from './TaskColumnCard.styled';

// --------------------

// const dispatch = useDispatch();

import { AreaEdit, EditBtn } from 'components/Feedback/FeedbackForm.styled';

import { ReactComponent as IconArrow } from 'images/task/arrow.svg';
import { ReactComponent as IconEdit } from 'images/feedback/edit.svg';
import { ReactComponent as IconDelete } from 'images/task/delete.svg';
// import { ReactComponent as IconTrash } from 'images/feedback/trash.svg';

// const handleEdit = () => {
//   setIsEditActive(!isEditActive);
// };

// const handleDelete = () => {
//   dispatch(deleteReview(userReview._id));
//   onClose();
// };

// ----------------

export const TaskColumnCard = ({ task }) => {
  const avatarUrl = task.owner.avatarURL ?? 'default url';
  return (
    <ContainerColumnCard>
      <TextCard>{task.title}</TextCard>
      <ContainerData>
        <WrapperData>
          <ContainerAvatar src={avatarUrl} alt="user name" />
          <Priority>{task.priority}</Priority>
        </WrapperData>
        <AreaEdit>
          <MoveBtn>
            <IconArrow />
          </MoveBtn>
          <EditBtn>
            {/* <EditBtn onClick={handleEdit} isActive={isEditActive} type="button"> */}
            <IconEdit />
          </EditBtn>
          {/* <DeleteBtn type="button" onClick={handleDelete}> */}
          <DeleteBtn>
            <IconDelete />
          </DeleteBtn>
        </AreaEdit>
      </ContainerData>
    </ContainerColumnCard>
  );
};
