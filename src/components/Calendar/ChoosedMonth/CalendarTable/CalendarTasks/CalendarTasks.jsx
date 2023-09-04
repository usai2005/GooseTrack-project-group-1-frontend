import {
  TaskItem,
  TaskList,
} from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable.styled';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiAlarmExclamation } from 'react-icons/bi';
// import { useMediaQuery } from 'react-responsive';
export const CalendarTasks = ({
  tasks,
  setTaskToEdit,
  setOpening,
  isOverdue,
}) => {
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
              $priority={task.priority}
              $isOverdue={isOverdue(task)}
              onClick={() => {
                setOpening(true);
                setTaskToEdit(task);
              }}
            >
              <p priority={tasks.priority}>
                {!isOverdue(task) ? (
                  <>
                    <AiOutlineCheck />
                    <span>{shortTitle(task.title)}</span>
                  </>
                ) : (
                  <>
                    <BiAlarmExclamation />
                    <span>{shortTitle(task.title)}</span>
                  </>
                )}
              </p>
            </TaskItem>
          );
        })}
      </TaskList>
    )
  );
};
