import CalendarToolBar from 'components/Calendar/CalendarToolBar/CalendarToolBar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectActiveDate, selectPeriodType } from 'redux/date/selectors';
import { PageWrapper } from './CalendarPage.styled';

export default function CalendarPage() {
  console.log('Calendar');
  const navigate = useNavigate();
  const currentDate = useSelector(selectActiveDate);
  const periodType = useSelector(selectPeriodType);
  console.log(periodType, 'lllllll');

  console.log(currentDate, 'calendar redirect date');

  useEffect(() => {
    navigate(`${periodType}/${currentDate}`, {});
  }, [currentDate, navigate, periodType]);

  return (
    <PageWrapper>
      <CalendarToolBar />
      <Outlet />
    </PageWrapper>
  );
}
