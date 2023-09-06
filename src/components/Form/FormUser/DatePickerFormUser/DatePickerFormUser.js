import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// import { ErrorMessage } from '@hookform/error-message';
// import { StyledErrorMessage } from '../consts/styledErrorMessage.styled';

import { format, subYears, parse } from 'date-fns';

export const DatePickerFormUser = ({
  setFormBirthday,
  formBirthday,
  setValue,
  // errors
}) => {
  return (
    <>
      <ReactDatePicker
        selected={parse(formBirthday, 'yyyy-MM-dd', new Date())}
        showYearDropdown
        showMonthDropdown
        minDate={new Date('1970-01-01')}
        maxDate={subYears(new Date(), 6)}
        closeOnScroll={false}
        formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
        onChange={value => {
          setFormBirthday(format(value, 'yyyy-MM-dd'));
          setValue('birthday', format(value, 'yyyy-MM-dd'), {
            shouldDirty: true,
          });
        }}
      />
      {/* <StyledErrorMessage>
        <ErrorMessage errors={errors} name={inputName} />
      </StyledErrorMessage> */}
    </>
  );
};
