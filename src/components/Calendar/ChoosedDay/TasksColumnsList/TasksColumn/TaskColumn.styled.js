import { styled } from 'styled-components';

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 10px;

  width: 100%;
  /* height: 100%; */
  /* height: 390px; */
  height: calc(100vh - 264px);
  min-width: 335px;

  border-radius: 8px;

  color: ${props => props.theme.variable.calendarTextColor};

  background-color: ${props => props.theme.variable.bgCalendar};

  @media screen and (min-width: 768px) {
    min-width: 344px;
    height: calc(100vh - 250px);
  }

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-color: ${props => props.theme.variable.borderFormColor};

  /* min-height: 165px; */

  @media screen and (min-width: 1440px) {
    min-width: 344px;
    height: 495px;
  }

  & ul {
    overflow-y: scroll;
    scroll-snap-type: y proximity;
  }
`;
