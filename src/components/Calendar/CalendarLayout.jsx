import { useState } from 'react';
import CalendarToolBar from './CalendarToolBar/CalendarToolBar';
import { ChoosedDay } from './ChoosedDay/ChoosedDay';
import { ChoosedMonth } from './ChoosedMonth/ChoosedMonth';
import { Wrapper } from './Calendar.styled';

// const PERIOD = {
//   Month: 'month',
//   Day: 'day',
// };
export const CalendarLayout = () => {
  const isMonth = true; // useSlector periodType

  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [activeDate, setActiveDate] = useState(new Date());
  // const [periodType, setPeriodType] = useState(PERIOD.Month);

  return (
    <Wrapper>
      <CalendarToolBar />

      {isMonth ? <ChoosedMonth /> : <ChoosedDay />}
    </Wrapper>
  );
};
