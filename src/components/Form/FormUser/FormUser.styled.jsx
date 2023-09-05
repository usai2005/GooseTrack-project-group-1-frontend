import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  background-color: ${props => props.theme.variable.secondaryBg};

  & > button {
    padding: 14px 50px;
    margin-top: 0px;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      padding: 15px 84px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 60px;
    }
  }
`;

export const FormBody = styled.div`
  width: 100%;
  display: grid;
  padding: 0px 18px;
  margin: 40px 0;
  gap: 18px;

  @media screen and (min-width: 768px) {
    width: 354px;
    padding: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 758px;
    padding: 0px;

    grid-auto-flow: column;
    grid-template-rows: repeat(3, 1fr);

    column-gap: 50px;
    row-gap: 24px;
  }
`;

export const FormUserButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: InterRegular;
  font-size: 14px;
  width: 262px;
  height: 48px;
  padding: 15px, 83px;
  background-color: ${props => props.theme.variable.buttonBg};
  border-radius: 16px;
  color: #fff;

  &:disabled {
    background-color: rgb(163, 168, 173);
    color: ${props => props.theme.variable.btndisActive};
  }

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.variable.btnColorActive};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  font-family: 'InterRegular';
  font-size: 14px;
  line-height: 15px;

  color: ${props => props.theme.variable.bgReversLabel};
`;

export const DatePickerFormUserWrapper = styled.div`
  /* font-family: 'Inter', sans-serif;
  position:relative;
  margin-right: 8px; */
  & .react-datepicker__today-button {
    border: none;
    background: none;
    display: none;
  }
  & input {
    font-size: 14px;
    background-color: ${props => props.theme.variable.secondaryBg};
    outline: none;
    border: 1px solid ${props => props.theme.variable.borderProfileColor};
    border-radius: 8px;
    padding: 12px 14px;
    height: 42px;
    width: 299px;

    color: ${props => props.theme.variable.text};
    text-transform: uppercase;

    font-weight: 600;
    line-height: calc(18 / 14);

    @media screen and (min-width: 768px) {
      height: 46px;
      width: 354px;
      padding: 14px 18px;
      font-size: 16px;
    }

    &::placeholder {
      font-size: 16px;
      line-height: calc(18 / 16);
      color: rgba(17, 17, 17, 0.15);
    }
  }

  & .react-datepicker {
    background-color: #3e85f3;
    color: white;
    border-radius: 16px;
    padding: 18px;
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
    font-size: 20px;
    margin-bottom: 18px;
  }
  & .react-datepicker__day-name {
    color: #fff;
    font-size: 14px;
  }
  & .react-datepicker__day.react-datepicker__day--outside-month {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
  }

  & .react-datepicker__navigation {
    top: 24px;
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
  & .react-datepicker__day--disabled {
    color: grey;
  }

  .react-datepicker__year-option {
    color: #3e85f3;
  }

  .react-datepicker__year-option:first-of-type {
    color: #3e85f3;
    content: ^;
  }

  .react-datepicker__month-option {
    color: #3e85f3;
  }

  .react-datepicker__month-year-option {
    color: #3e85f3;
  }

  .react-datepicker__month-dropdown {
    color: #3e85f3;
  }

  .react-datepicker__year-dropdown {
    color: #3e85f3;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  /*  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  } */
`;

export const Controls = styled.button`
  display: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  background-color: ${props => props.theme.variable.CalendarLinkColor};
  border: ${props => props.theme.variable.borderColorWeekCalendar};
  color: ${props => props.theme.variable.calendarTextColor};

  &:disabled {
    background-color: ${({ theme }) => theme.variable.mainBackgroundColor};
    color: ${({ theme }) => theme.variable.activeArrowColor};
  }

  @media screen and (min-width: 768px) {
    width: 38px;
  }
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

export const DatePickerChevronDown = styled.svg`
  stroke: ${props => props.theme.variable.calendarTextColor};
  pointer-events: none;

  position: absolute;

  width: 18px;
  height: 18px;
  z-index: 10;
  top: 38px;
  right: 14px;

  fill: none;
`;
