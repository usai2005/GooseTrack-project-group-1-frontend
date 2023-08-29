import { styled } from 'styled-components';

export const MonthToggle = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 34px;
  //
  background-color: ${props =>
    props.$currenttype
      ? props.theme.variable.activeCalendarLinkColor
      : props.theme.variable.inactiveCalendarLinkColor};
  border: none;
  color: ${props =>
    props.$currenttype ? props.theme.variable.activeTextColorBtn : '#3e85f3'};
  font-weight: 500;
  font-size: 14px;
  line-height: calc(14 / 18);
  margin-bottom: 24px;

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
