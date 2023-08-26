// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
} from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MonthToggle } from 'components/Calendar/Calendar.styled';

// import dayjs from 'dayjs';
const Dater = () => {
  const renderMonthContent = (month, shortMonth, longMonth) => {
    const tooltipText = `Tooltip for month: ${longMonth}`;
    return <span title={tooltipText}>{shortMonth}</span>;
  };
  return (
    <ReactDatePicker
      selected={new Date()}
      renderMonthContent={renderMonthContent}
      showMonthYearPicker
      dateFormat="MMMM yyyy"
    />
  );
};

export default function PeriodPaginator() {
  const isMonth = true; // useSlector periodType

  return (
    <>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        {isMonth ? (
          <DesktopDatePicker
            defaultValue={dayjs(format(new Date(), 'MMM yyyy'))}
            // label={format(new Date(), 'MMMM yyyy')}
            openTo="month"
            views={['year', 'month']}
          />
        ) : (
          <DesktopDatePicker
            defaultValue={dayjs(format(new Date(), 'd MMMM yyyy'))}
            // label={format(new Date(), 'MMMM yyyy')}
            openTo="day"
            views={['day', 'month', 'year']}
          />
        )}
      </LocalizationProvider> */}

      {/* <Dater /> */}
      {/* {---------------------------------------------------------------------------} */}
      {/* <div>
        <button type="button">
          <AiOutlineLeft />
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        </button>
        <button type="button">
          <AiOutlineRight />
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        </button>
      </div> */}
      <div>
        <MonthToggle
          type="button"
          // onClick={() => setActiveDate(subMonths(activeDate, 1))}
        >
          Month
        </MonthToggle>
        <MonthToggle
          type="button"
          // onClick={() => setActiveDate(addMonths(activeDate, 1))}
        >
          Day
        </MonthToggle>
      </div>
    </>
  );
}
