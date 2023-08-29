import { format, isSameMonth } from 'date-fns';
import { DateNum, DateWrap, WeekDay } from '../CalendarTable.styled';
import { CalendarTasks } from '../CalendarTasks/CalendarTasks';
import { useDispatch } from 'react-redux';
import {
  setActiveDate,
  setPeriodType,
  setSelectedDate,
} from 'redux/date/dateSlice';
import { Navigate } from 'react-router-dom';

export const WeekDayItem = ({
  currentDate,
  activeDate,
  isToday,
  setOpening,
  tasksToShow,
  setTaskToEdit,
}) => {
  const dispatch = useDispatch();

  const handleClick = (e, date) => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      dispatch(setPeriodType('day'));
      dispatch(setSelectedDate(date));
      dispatch(setActiveDate(date));
      Navigate(`/calendar/day/${date}`);
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
