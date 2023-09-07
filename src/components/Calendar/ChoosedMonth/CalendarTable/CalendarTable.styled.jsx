import styled from 'styled-components';

export const WeekContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 94px;

  padding: 0;
  border: ${props => props.theme.variable.borderColorCalendar};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.theme.variable.bgCalendar};
  color: ${props => props.theme.variable.text};

  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  @media screen and (min-width: 768px) {
    grid-auto-rows: 144px;
  }

  @media screen and (min-width: 1440px) {
    grid-auto-rows: 125px;
  }
`;
export const WeekDay = styled.li`
  list-style: none;
  padding: 8px 4px;
  border: ${({ $isOverdue, theme }) =>
    $isOverdue ? '' : theme.variable.borderColorCalendar};
  cursor: pointer;
  transition: border 250ms linear;
  &:hover,
  &:focus {
    border: 1px solid #ceeefd;
  }

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
  /* color: #343434; */
  font-size: 12px;
  font-weight: 700;
`;

export const DateWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  align-items: center;
  border-radius: 6px;
  width: 20px;
  height: 22px;
  margin-bottom: 8px;
  background-color: ${props => (props.$istoday ? '#3e85f3' : 'none')};
  color: ${props =>
    props.$istoday ? 'white' : props.theme.variable.calendarTextColor};
`;

export const WeekNames = styled.li`
  list-style: none;
  color: ${props => props.theme.variable.calendarTextColor};

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
  padding: 14px 0 14px 0;
  margin: 0 0 15px;
  border: ${props => props.theme.variable.borderColorWeekCalendar};

  border-radius: 8px;
  background-color: ${props => props.theme.variable.bgCalendar};

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    margin-top: 8px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 15px;
  }
`;

const priorityColor = { low: '#3E85F3', medium: '#F3B249', high: '#EA3D65' };
const priorityBg = { low: '#CEEEFD', medium: '#FCF0D4', high: '#FFD2DD' };

export const TaskList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const TaskItem = styled.li`
  list-style: none;
  padding: 4px;
  margin: 0;
  overflow: hidden;
  /* text-decoration: ${({ $isOverdue }) => $isOverdue && 'line-through'}; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* height: 14px; */
  border-radius: 8px;
  background-color: ${({ $priority, $isOverdue }) =>
    $isOverdue ? '#DCE3E5' : priorityBg[$priority]};
  color: ${({ $priority, $isOverdue }) =>
    $isOverdue ? 'grey' : priorityColor[$priority]};

  font-size: 10px;
  font-weight: 700;
  line-height: calc(10 / 14);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &:not(:last-of-type) {
    margin-bottom: 4px;
  }

  & p {
    display: flex;
    gap: 2px;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;
