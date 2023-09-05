import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  background-color: ${props => props.theme.variable.secondaryBg};

  & > button {
    /* padding: 14px 50px;
    margin-top: 0px;
    margin-bottom: 40px; */
    display: flex;

    justify-content: center;
    align-items: center;

    width: 195px;
    height: 46px;

    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      /* padding: 15px 84px; */
      width: 262px;
      height: 48px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 60px;
    }
  }
`;

export const FormBody = styled.div`
  /* width: 100%;
  display: grid;
  padding: 0px 18px;
  margin: 40px 0;
  gap: 18px; */
  width: 299px;
  margin: 40px 0;

  @media screen and (min-width: 768px) {
    width: 354px;
    padding: 0px;
  }

  /* @media screen and (min-width: 1078px) {
    max-width: 758px;

    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: 24px;
  } */

  @media screen and (min-width: 1440px) {
    width: 758px;
    /* padding-left: 164px;
    padding-right: 164px; */
    /* margin-top: 44px;
    margin-bottom: 88px; */
  }
  /* 
  @media screen and (min-width: 2560px) {
    max-width: 1440px;
    padding: 50px;
    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  } */
`;

// export const DatePickerWrapper = styled.div`
//   /* font-family: 'Inter', sans-serif;
//   margin-right: 8px; */
//   padding: 18px;
//   & .react-datepicker__today-button {
//     border: none;
//     background: none;
//   }
//   & input {
//     display: inline;

//     text-align: center;
//     padding: 0;
//     background-color: #3e85f3;
//     outline: none;
//     border: none;
//     border-radius: 8px;
//     height: 30px;

//     width: 140px; ///

//     color: white;
//     text-transform: uppercase;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: calc(14 / 18);
//   }
//   & .react-datepicker {
//     background-color: #3e85f3;
//     color: white;
//     border-radius: 16px;
//     padding: 18px;
//   }
//   & .react-datepicker__header {
//     background-color: #3e85f3;
//     border-top-left-radius: 16px;
//     border-top-right-radius: 16px;
//     border-color: #fff;
//   }
//   & .react-datepicker__triangle::after,
//   & .react-datepicker__triangle::before {
//     background-color: #3e85f3;
//     display: none;
//   }
//   & .react-datepicker__current-month {
//     font-size: 16px;
//     margin-bottom: 18px;
//   }
//   & .react-datepicker__day-name,
//   & .react-datepicker__day.react-datepicker__day--outside-month {
//     color: rgba(255, 255, 255, 0.5);
//   }

//   & .react-datepicker__navigation-icon::before {
//     border-color: white;
//   }
//   & .react-datepicker__current-month {
//     color: white;
//   }
//   & .react-datepicker__week:last-of-type {
//     margin-bottom: 0;
//   }
//   & .react-datepicker__week:not(:last-of-type) {
//     margin-bottom: 7px;
//   }
//   & .react-datepicker__day.react-datepicker__day--selected {
//     border-radius: 50%;
//     color: #3e85f3;

//     background-color: rgba(255, 255, 255, 0.5);
//   }
//   & .react-datepicker__day.react-datepicker__day--today {
//     background-color: #fff;
//     border-radius: 50%;
//     color: #3e85f3;
//     font-weight: 500;
//   }
//   & .react-datepicker__day--keyboard-selected {
//     border: none;
//     background: none;
//   }
//   & .react-datepicker__day {
//     color: inherit;
//     font-size: 14px;
//   }
// `;
// export const ControlWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 18px;
// `;

export const FormUserButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 262px;
  height: 48px;

  padding: 15px, 83px;

  font-size: 14px;
  font-weight: 600;
  color: #fff;
  line-height: calc(18 / 14);

  background-color: ${props => props.theme.variable.buttonBg};
  border-radius: 16px;

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
  /* margin-bottom: 8px; */

  font-size: 12px;
  color: ${props => props.theme.variable.bgReversLabel};

  line-height: calc(14 / 12);

  @media screen and (min-width: 768px) {
    font-size: 14px;

    line-height: calc(18 / 14);
  }
`;

export const DatePickerFormUserWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-content: center; */

  width: 299px;
  height: 64px;

  margin-bottom: 18px;
  /* font-family: 'Inter', sans-serif;
  margin-right: 8px; */
  & .react-datepicker__today-button {
    border: none;
    background: none;
    display: none;
  }
  & input {
    width: 100%;
    height: 42px;

    padding: 12px 14px;

    background-color: ${props => props.theme.variable.secondaryBg};
    outline: none;

    border: 1px solid ${props => props.theme.variable.borderProfileColor};
    border-radius: 8px;

    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.variable.text};
    line-height: calc(18 / 14);

    @media screen and (min-width: 768px) {
      width: 354px;
      height: 46px;

      padding: 14px 18px;

      font-size: 16px;
      line-height: calc(18 / 16);
    }

    &::placeholder {
      font-size: 16px;
      line-height: 18px;
      color: 'inherit';
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
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 299px;
  height: 64px;

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 72px;
  } */
`;

// export const Controls = styled.button`
//   display: none;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   width: 36px;
//   height: 30px;
//   background-color: ${props => props.theme.variable.CalendarLinkColor};
//   border: ${props => props.theme.variable.borderColorWeekCalendar};
//   color: ${props => props.theme.variable.calendarTextColor};

//   &:disabled {
//     background-color: ${({ theme }) => theme.variable.mainBackgroundColor};
//     color: ${({ theme }) => theme.variable.activeArrowColor};
//   }

//   @media screen and (min-width: 768px) {
//     width: 38px;
//   }
//   &:first-of-type {
//     border-top-left-radius: 8px;
//     border-bottom-left-radius: 8px;
//     border-right-width: 0.5px;
//   }
//   &:last-of-type {
//     border-top-right-radius: 8px;
//     border-bottom-right-radius: 8px;
//     border-left-width: 0.5px;
//   }
// `;

export const DatePickerChevronDown = styled.svg`
  position: absolute;

  width: 18px;
  height: 18px;

  fill: none;
  stroke: ${props => props.theme.variable.calendarTextColor};
  pointer-events: none;

  top: 34px;
  right: 12px;

  @media screen and (min-width: 768px) {
    top: 32px;
    right: -40px;
  }
`;
