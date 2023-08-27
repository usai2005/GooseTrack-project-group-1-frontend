import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addMonths, format, parse, subMonths } from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  ControlWrapper,
  DatePickerWrapper,
} from 'components/Calendar/CalendarToolBar/PeriodPaginator/PeriodPaginator.styled';
import { Controls } from './PeriodPaginator.styled';

import { selectActiveDate, selectPeriodType } from 'redux/date/selectors';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { setActiveDate, setSelectedDate } from 'redux/date/dateSlice';
// import { useParams } from 'react-router-dom';

export const PeriodPaginator = () => {
  const dispatch = useDispatch();

  const periodType = useSelector(selectPeriodType);
  const currentDate = useSelector(selectActiveDate);
  const date = parse(currentDate, 'dd-MM-yyyy', new Date());

  // console.log(currentDate);
  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks(format(date, 'MM-yyyy')));
  }, [dispatch, date]);

  return (
    <>
      <ControlWrapper>
        <DatePickerWrapper>
          <ReactDatePicker
            selected={date}
            onChange={value => {
              dispatch(setSelectedDate(format(value, 'dd-MM-yyyy')));
              dispatch(setActiveDate(format(value, 'dd-MM-yyyy')));
            }}
            calendarStartDay={1}
            // showMonthYearPicker
            dateFormat={periodType === 'month' ? 'MMMM yyyy' : 'dd MMMM yyyy'}
            closeOnScroll={true}
            formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
            // minDate={'02-01-2020'}
            todayButton="Today"
          />
        </DatePickerWrapper>
        <div>
          <Controls
            type="button"
            onClick={() => {
              dispatch(setActiveDate(format(subMonths(date, 1), 'dd-MM-yyyy')));
            }}
          >
            <AiOutlineLeft />
          </Controls>
          <Controls
            type="button"
            onClick={() => {
              dispatch(setActiveDate(format(addMonths(date, 1), 'dd-MM-yyyy')));
            }}
          >
            <AiOutlineRight />
          </Controls>
        </div>
      </ControlWrapper>
    </>
  );
};
