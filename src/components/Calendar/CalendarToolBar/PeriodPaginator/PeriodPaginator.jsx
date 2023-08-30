import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDays,
  addMonths,
  format,
  parse,
  subDays,
  subMonths,
} from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  ControlWrapper,
  DatePickerWrapper,
} from 'components/Calendar/CalendarToolBar/PeriodPaginator/PeriodPaginator.styled';
import { Controls } from './PeriodPaginator.styled';

import { selectActiveDate, selectPeriodType } from 'redux/date/selectors';
import { useEffect, useRef } from 'react';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { useNavigate } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';

export const PeriodPaginator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createdAt } = useSelector(selectUser);

  const periodType = useSelector(selectPeriodType);
  const currentDate = useSelector(selectActiveDate);

  const prevDateRef = useRef(parse(currentDate, 'yyyy-MM-dd', new Date()));
  const isDisable = new Date(currentDate) <= new Date(createdAt);
  const date = parse(currentDate, 'yyyy-MM-dd', new Date());

  useEffect(() => {
    if (format(date, 'yyyy-MM') !== format(prevDateRef.current, 'yyyy-MM')) {
      dispatch(fetchTasks(format(date, 'yyyy-MM')));
    }
  }, [dispatch, date, currentDate]);

  useEffect(() => {
    prevDateRef.current = parse(currentDate, 'yyyy-MM-dd', new Date());
  }, [currentDate]);

  return (
    <>
      <ControlWrapper>
        <DatePickerWrapper>
          <ReactDatePicker
            selected={date}
            onChange={value => {
              if (periodType === 'month') {
                navigate(`${periodType}/${format(value, 'yyyy-MM-dd')}`, {});
              } else {
                navigate(`${periodType}/${format(value, 'yyyy-MM-dd')}`, {});
              }
            }}
            calendarStartDay={1}
            dateFormat={periodType === 'month' ? 'MMMM yyyy' : 'dd MMMM yyyy'}
            closeOnScroll={true}
            formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
            todayButton="Today"
            minDate={new Date(createdAt)}
          />
        </DatePickerWrapper>
        <div>
          <Controls
            type="button"
            disabled={isDisable}
            onClick={() => {
              if (periodType === 'month') {
                navigate(
                  `${periodType}/${format(subMonths(date, 1), 'yyyy-MM-dd')}`,
                  {}
                );
              } else {
                navigate(
                  `${periodType}/${format(subDays(date, 1), 'yyyy-MM-dd')}`,
                  {}
                );
              }
            }}
          >
            <AiOutlineLeft />
          </Controls>
          <Controls
            type="button"
            onClick={() => {
              if (periodType === 'month') {
                navigate(
                  `${periodType}/${format(addMonths(date, 1), 'yyyy-MM-dd')}`,
                  {}
                );
              } else {
                navigate(
                  `${periodType}/${format(addDays(date, 1), 'yyyy-MM-dd')}`,
                  {}
                );
              }
            }}
          >
            <AiOutlineRight />
          </Controls>
        </div>
      </ControlWrapper>
    </>
  );
};
