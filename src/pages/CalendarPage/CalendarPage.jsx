import CalendarToolBar from 'components/Calendar/CalendarToolBar/CalendarToolBar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  selectActiveDate,
  selectPeriodType,
  selectSelectedDate,
} from 'redux/date/selectors';
import { PageWrapper } from './CalendarPage.styled';

export default function CalendarPage() {
  const navigate = useNavigate();
  const currentDay = useSelector(selectActiveDate);
  const selectedDate = useSelector(selectSelectedDate);
  const periodType = useSelector(selectPeriodType);

  // console.log(currentDay, 'calendar redirect date');

  const date = periodType === 'month' ? currentDay : selectedDate;

  useEffect(() => {
    navigate(`${periodType}/${date}`, {});
  }, [date, navigate, periodType]);

  return (
    <PageWrapper>
      <CalendarToolBar />
      <Outlet />
    </PageWrapper>
  );
}
