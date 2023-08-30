import { styled } from 'styled-components';

export const WeekNames = styled.li`
  list-style: none;
  color: ${props => props.theme.variable.calendarTextColor};
  // font-size: 16px;
  // font-weight: 600;
  // line-height: calc(18 / 16);
  text-transform: uppercase;
  text-align: center;

  // /* &:nth-last-of-type(-n + 2) {
  //   color: #3e85f3;
  // } */
`;

export const WeekNamesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 0 10px 0;
  margin: 0 0 14px;
  border: ${props => props.theme.variable.borderColorWeekCalendar};
  border-radius: 8px;
  background-color: ${props => props.theme.variable.bgCalendar};
`;

export const ContainerWeekDay = styled.li`
  color: ${props => props.theme.variable.textAvatar};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  margin-bottom: 4px;

  /* &:nth-last-of-type(-n + 2) {
    color: #3e85f3;
  } */
`;

export const ContainerDateCell = styled.li`
  color: ${props => props.theme.variable.calendarTextColor};
  font-size: 16px;
  font-weight: 700;
  line-height: calc(18 / 16);

  /* &:nth-last-of-type(-n + 2) {
    color: #3e85f3;
  } */
`;

// background-color: ${props => (props.$istoday ? '#3e85f3' : 'none')};
// color: ${props =>
//   props.$istoday ? 'white' : props.theme.variable.calendarTextColor};
