import {
  ContainerColumnCard,
  TextCard,
  ContainerAvatar,
  ContainerData,
  Priority,
} from './TaskColumnCard.styled';

export const TaskColumnCard = ({ task }) => {
  const avatarUrl = task.owner.avatarURL ?? 'default url';
  return (
    <ContainerColumnCard>
      <TextCard>{task.title}</TextCard>
      <ContainerData>
        <ContainerAvatar src={avatarUrl} alt="user name" />
        <Priority>{task.priority}</Priority>
      </ContainerData>
    </ContainerColumnCard>
  );
};
