import CalendarToolBar from 'components/Calendar/CalendarToolBar/CalendarToolBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { selectActiveDate, selectPeriodType } from 'redux/date/selectors';
import { PageWrapper } from './CalendarPage.styled';

// import { Container } from 'styles/container';
import { format, parseISO } from 'date-fns';
import {
  setActiveDate,
  setPeriodType,
  setSelectedDate,
} from 'redux/date/dateSlice';

export default function CalendarPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const today = useSelector(selectActiveDate);
  const periodType = useSelector(selectPeriodType);

  const { currentDate } = useParams();
  const params = useParams();
  const paramsPeriod = Object.values(params)[0].split('/')[0];

  useEffect(() => {
    try {
      const date = format(parseISO(currentDate), 'yyyy-MM-dd');

      // console.log('date', date);
      // console.log('today', today);
      if (today !== date) {
        dispatch(setSelectedDate(date));
        dispatch(setActiveDate(date));
      }
      if (
        periodType !== paramsPeriod &&
        (paramsPeriod === 'day' || paramsPeriod === 'month')
      ) {
        dispatch(setPeriodType(paramsPeriod));
      }
    } catch (error) {
      navigate(`${periodType}/${today}`, {});
    }
  }, [periodType, today, currentDate, navigate, dispatch, paramsPeriod]);

  return (
    <PageWrapper>
      <CalendarToolBar />
      <Outlet />
    </PageWrapper>
  );
}
