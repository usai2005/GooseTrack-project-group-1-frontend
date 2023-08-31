import { styled } from 'styled-components';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
};

export const WeekNames = styled.li`
  list-style: none;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.variable.textAvatar};

  &:nth-last-of-type(-n + 2) {
    color: #3e85f3;
  }

  /* ${viewport.mob} {
     display: block;
    width: 287px;
    font-size: 14px;
    margin: 32px auto;
  }  */
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

export const ContainerWeekDay = styled.div`
  color: ${props => props.theme.variable.textAvatar};

  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  margin-bottom: 4px;

  ${viewport.mob} {
   
    font-size: 16px;
    line-height: calc(16 / 16);
  }
`;

export const ContainerDateCell = styled.div`
  color: ${props => props.theme.variable.calendarTextColor};
  font-size: 16px;
  font-weight: 700;
  line-height: calc(18 / 16);
`;

export const WeekDayNum = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 22px;
  border-radius: 8px;
  color: ${props =>
    props.$istoday ? 'white' : props.theme.variable.calendarTextColor};
  background-color: ${props => (props.$istoday ? '#3e85f3' : 'none')};

`;
