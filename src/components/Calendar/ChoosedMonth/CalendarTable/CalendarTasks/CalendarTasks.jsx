import {
  TaskItem,
  TaskList,
} from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable.styled';

export const CalendarTasks = ({ tasks, setTaskToEdit, setOpening }) => {
  const shortTitle = title => {
    if (window.innerWidth < 767) {
      return title.length > 3 ? title.substring(0, 3) + '...' : title;
    }
    if (window.innerWidth > 767) {
      return title.length > 7 ? title.substring(0, 7) + '...' : title;
    }
    return title;
  };
  const shortList =
    window.innerWidth < 767 ? tasks.slice(0, 2) : tasks.slice(0, 3);

  return (
    tasks.length > 0 && (
      <TaskList>
        {shortList.map(task => {
          return (
            <TaskItem
              key={task._id}
              priority={task.priority}
              onClick={() => {
                setOpening(true);
                setTaskToEdit(task);
              }}
            >
              <p priority={tasks.priority}>{shortTitle(task.title)}</p>
            </TaskItem>
          );
        })}
      </TaskList>
    )
  );
};
