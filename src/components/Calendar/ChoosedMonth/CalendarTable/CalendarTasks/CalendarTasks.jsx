import {
  TaskItem,
  TaskList,
} from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable.styled';

export const CalendarTasks = tasks => {
  return (
    tasks.length > 0 && (
      <TaskList>
        {tasks.splice(-1).map(({ text, priority, id }) => {
          return (
            <TaskItem key={id} priority={priority}>
              <p priority={priority}>{`${text.slice(
                0,
                -text.length + 3
              )}...`}</p>
            </TaskItem>
          );
        })}
      </TaskList>
    )
  );
};
