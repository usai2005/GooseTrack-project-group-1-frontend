export const TaskColumnCard = ({ task }) => {
  const avatarUrl = task.owner.avatarURL ?? 'default url';
  return (
    <div>
      <p>{task.title}</p>
      <img src={avatarUrl} alt="user name" />
      <p>{task.priority}</p>
      {/* <TaskToolbar />
      <TaskModal />  */}
    </div>
  );
};
