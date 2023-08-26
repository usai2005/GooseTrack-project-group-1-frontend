import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: 100%;
`;

export const WeekContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 94px;

  padding: 0;
  border: 0.5px solid #dce3e5;
  border-radius: 8px;
  overflow: hidden;
`;
export const WeekDay = styled.li`
  list-style: none;
  padding: 8px 4px;
  border: 0.5px solid #dce3e5;
  cursor: pointer;

  &:first-of-type {
    border-top-left-radius: 8px;
  }
  &:last-of-type {
    border-bottom-right-radius: 8px;
  }
  &:nth-of-type(7) {
    border-top-right-radius: 8px;
  }
  &:nth-last-of-type(7) {
    border-bottom-left-radius: 8px;
  }
`;

export const DateNum = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  padding: 4px;
  width: 16px;
  height: 22px;
  color: #343434;
  font-size: 12px;
  font-weight: 700;
  margin-left: auto;
`;

export const DateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 20px;
  height: 22px;
  background-color: ${props => (props.istoday ? '#3e85f3' : 'white')};
  color: ${props => props.istoday && 'white'};
`;

export const WeekNames = styled.li`
  list-style: none;
  color: #343434;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(18 / 16);
  text-transform: uppercase;
  text-align: center;

  &:nth-last-of-type(-n + 2) {
    color: #3e85f3;
  }
`;
export const WeekNamesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 16px;
  margin: 0 0 14px;
  border: 1px solid #dce3e5;
  border-radius: 8px;
  background-color: #fff;
`;

const priorityColor = { low: '#3E85F3', medium: '#F3B249', Hight: '#EA3D65' };
const priorityBg = { low: '#CEEEFD', medium: '#FCF0D4', Hight: '#FFD2DD' };

export const TaskList = styled.ul`
  padding: 0;
  margin: 0;
`;
export const TaskItem = styled.li`
  list-style: none;
  padding: 4px;
  margin: 0;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  /* height: 14px; */
  border-radius: 8px;
  background-color: ${({ priority }) => priorityBg[priority]};
  color: ${({ priority }) => priorityColor[priority]};

  font-size: 10px;
  font-weight: 700;
  line-height: calc(10 / 14);

  &:not(:last-of-type) {
    margin-bottom: 4px;
  }

  & p {
    padding: 0;
    margin: 0;
  }
`;

//// Date picker

export const DatePickerWrapper = styled.div`
  font-family: 'Inter', sans-serif;
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

////// toolbar

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Controls = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  background-color: white;
  border: 1px solid #dce3e5;

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

export const MonthToggle = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 34px;
  background-color: ${({ isCurrentType }) =>
    isCurrentType ? '#CAE8FF' : '#e3f3ff'};
  border: none;
  color: #3e85f3;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(14 / 18);

  &:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: 1px solid rgba(62, 133, 143, 0.2);
  }

  &:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: 1px solid rgba(62, 133, 143, 0.2);
  }
`;
