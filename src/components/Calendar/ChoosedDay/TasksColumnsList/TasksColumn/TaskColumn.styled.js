import { styled } from 'styled-components';
// const viewport = {
//   mob: '@media screen and (max-width: 767px)',
//   tab: '@media screen and (min-width: 768px)',
//   desk: '@media screen and (min-width: 1440px)',
// };
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 10px;

  min-width: 335px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  color: ${props => props.theme.variable.calendarTextColor};
  border: ${props => props.theme.variable.borderColorWeekCalendar};
  background-color: ${props => props.theme.variable.bgCalendar};

  @media (min-width: 768px) {
    min-width: 344px;
  }

  @media (min-width: 1440px) {
    min-width: 344px;
  }
`;
