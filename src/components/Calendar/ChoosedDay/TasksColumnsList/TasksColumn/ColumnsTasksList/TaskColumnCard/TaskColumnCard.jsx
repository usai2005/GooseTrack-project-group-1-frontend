export const TaskColumnCard = ({ task }) => {
  const avatarUrl = 'http//';
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
