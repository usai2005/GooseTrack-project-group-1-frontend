import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPeriodType } from 'redux/date/dateSlice';
import { selectActiveDate, selectPeriodType } from 'redux/date/selectors';
import { MonthToggle } from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = () => {
  let navigate = useNavigate();

  const periodType = useSelector(selectPeriodType);
  const isMonthActive = periodType.includes('month');
  const isDayActive = periodType.includes('day');

  const currentDate = useSelector(selectActiveDate);
  const dispatch = useDispatch();

  const handleToggleMonth = () => {
    dispatch(setPeriodType('month'));
    navigate(`/calendar/month/${currentDate}`, {});
  };

  const handleToggleDay = () => {
    dispatch(setPeriodType('day'));

    navigate(`/calendar/day/${currentDate}`, {});
  };

  return (
    <>
      <div>
        <MonthToggle
          type="button"
          $currenttype={isMonthActive}
          onClick={handleToggleMonth}
        >
          Month
        </MonthToggle>
        <MonthToggle
          type="button"
          $currenttype={isDayActive}
          onClick={handleToggleDay}
        >
          Day
        </MonthToggle>
      </div>
    </>
  );
};
