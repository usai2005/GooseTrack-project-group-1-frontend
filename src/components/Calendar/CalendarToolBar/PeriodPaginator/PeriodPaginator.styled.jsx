import { styled } from 'styled-components';
//// Date picker

export const DatePickerWrapper = styled.div`
  font-family: 'Inter', sans-serif;
  margin-right: 8px;
  & .react-datepicker__today-button {
    border: none;
    background: none;
  }
  & input {
    display: inline;

    text-align: center;
    padding: 0;
    background-color: #3e85f3;
    outline: none;
    border: none;
    border-radius: 8px;
    height: 30px;

    width: 140px; ///

    color: white;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    line-height: calc(14 / 18);
  }
  & .react-datepicker {
    background-color: #3e85f3;
    color: white;
    border-radius: 16px;
  }
  & .react-datepicker__header {
    background-color: #3e85f3;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-color: rgba(255, 255, 255, 0.5);
  }
  & .react-datepicker__triangle::after,
  & .react-datepicker__triangle::before {
    background-color: #3e85f3;
    display: none;
  }
  & .react-datepicker__current-month {
    font-size: 16px;
    margin-bottom: 18px;
  }
  & .react-datepicker__day-name,
  & .react-datepicker__day.react-datepicker__day--outside-month {
    color: rgba(255, 255, 255, 0.5);
  }

  & .react-datepicker__navigation-icon::before {
    border-color: white;
  }
  & .react-datepicker__current-month {
    color: white;
  }
  & .react-datepicker__week:last-of-type {
    margin-bottom: 0;
  }
  & .react-datepicker__week:not(:last-of-type) {
    margin-bottom: 7px;
  }
  & .react-datepicker__day.react-datepicker__day--selected {
    border-radius: 50%;
    color: #3e85f3;

    background-color: rgba(255, 255, 255, 0.5);
  }
  & .react-datepicker__day.react-datepicker__day--today {
    background-color: #fff;
    border-radius: 50%;
    color: #3e85f3;
    font-weight: 500;
  }
  & .react-datepicker__day--keyboard-selected {
    border: none;
    background: none;
  }
  & .react-datepicker__day {
    color: inherit;
    font-size: 14px;
  }
`;

const viewport = {
  mob: '@media screen and (max-width: 767px)',
};

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  ${viewport.mob} {
    margin-bottom: 18px;
  }
`;

export const Controls = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  background-color: ${props => props.theme.variable.CalendarLinkColor};
  border: ${props => props.theme.variable.borderColorWeekCalendar};
  color: ${props => props.theme.variable.calendarTextColor};

  &:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right-width: 0.5px;
  }
  &:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left-width: 0.5px;
  }
`;
