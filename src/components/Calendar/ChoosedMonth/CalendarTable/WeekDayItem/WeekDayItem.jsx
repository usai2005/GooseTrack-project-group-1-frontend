import { format, isSameMonth } from 'date-fns';
import { DateNum, DateWrap, WeekDay } from '../CalendarTable.styled';
import { CalendarTasks } from '../CalendarTasks/CalendarTasks';

export const WeekDayItem = ({
  currentDate,
  activeDate,
  isToday,
  handleClick,
  setOpening,
  tasksToShow,
  setTaskToEdit,
}) => {
  return (
    <WeekDay
      key={currentDate}
      onClick={e => handleClick(e, format(currentDate, 'yyyy-MM-dd'))}
    >
      {!isSameMonth(currentDate, activeDate) ? (
        <span></span>
      ) : (
        <DateNum>
          <DateWrap $istoday={isToday}>{format(currentDate, 'd')}</DateWrap>
        </DateNum>
      )}

      {tasksToShow.length > 0 && (
        <CalendarTasks
          tasks={tasksToShow}
          setTaskToEdit={setTaskToEdit}
          setOpening={setOpening}
        />
      )}
    </WeekDay>
  );
};
