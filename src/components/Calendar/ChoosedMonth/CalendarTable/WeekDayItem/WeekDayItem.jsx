import { format, isSameMonth } from 'date-fns';
import { DateNum, DateWrap, WeekDay } from '../CalendarTable.styled';
import { CalendarTasks } from '../CalendarTasks/CalendarTasks';
import 'redux/date/dateSlice';
import { useNavigate } from 'react-router-dom';

export const WeekDayItem = ({
  currentDate,
  activeDate,
  isToday,
  setOpening,
  tasksToShow,
  setTaskToEdit,
}) => {
  const navigate = useNavigate();

  const handleClick = (e, date) => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      navigate(`/calendar/day/${date}`, {});
    }
  };

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
