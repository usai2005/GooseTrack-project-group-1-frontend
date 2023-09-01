import React, { useEffect } from 'react';
import { StatisticsComp } from '../../components/Statistics/StatisticsComp';
import { Container, Pagination, Calendar } from './StatisticsPage.styled';
import { PeriodPaginator } from '../../components/Calendar/CalendarToolBar/PeriodPaginator/PeriodPaginator';
import StatisticsBtn from '../../components/Statistics/StatisticsInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveDate, selectPeriodType } from 'redux/date/selectors';
import { format, parseISO } from 'date-fns';
import {
  setActiveDate,
  setPeriodType,
  setSelectedDate,
} from 'redux/date/dateSlice';

const Statistics = () => {
  //компонент отримує дату і тип періоду із параментів Url, валідує і записує в стейт, після чого робить перехід,
  //якщо параметри відсутні, або не валідні, переходить на дату зі стейту
  // статистика щоденна
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const today = useSelector(selectActiveDate);
  const periodType = useSelector(selectPeriodType);

  const currentDate = useParams();
  const normalizedDate = Object.values(currentDate)[0].split('/')[1];

  useEffect(() => {
    if (periodType === 'month') {
      dispatch(setPeriodType('day'));
    }

    try {
      console.log('test');
      const date = format(parseISO(normalizedDate), 'yyyy-MM-dd');

      if (today !== date) {
        dispatch(setSelectedDate(date));
        dispatch(setActiveDate(date));
      }
    } catch (error) {
      navigate(`${periodType}/${today}`, {});
    }
  }, [periodType, today, normalizedDate, navigate, dispatch]);
  return (
    <Container>
      <Pagination>
        <Calendar>
          <PeriodPaginator />
        </Calendar>
        <StatisticsBtn />
      </Pagination>
      <StatisticsComp />
    </Container>
  );
};

export default Statistics;
