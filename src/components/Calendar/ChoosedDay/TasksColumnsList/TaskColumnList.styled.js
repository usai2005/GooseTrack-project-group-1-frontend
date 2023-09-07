import { styled } from 'styled-components';

export const Container = styled.div`

  display: flex;
  gap: 16px;
  margin-top: 14px;
  list-style: none;
  color: ${props => props.theme.variable.calendarTextColor};


  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;
