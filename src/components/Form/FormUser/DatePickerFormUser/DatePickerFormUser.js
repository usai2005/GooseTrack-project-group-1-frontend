import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { format,subYears,parse } from 'date-fns';

export  const DatePickerFormUser = ( {setFormBirthday, formBirthday}

  ) => {


    return (
        <>
          <ReactDatePicker
          selected = {parse(formBirthday,'yyyy-MM-dd', new Date())}
          showYearDropdown
          showMonthDropdown
          minDate={new Date('1970-01-01')}
          maxDate={subYears(new Date(),6)}
          closeOnScroll={false}
          formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
          onChange = {value => {
            setFormBirthday((format(value, 'yyyy-MM-dd')))
            console.log("Info value")
            console.log(value)
            console.log("Info value")
          }}
            // selected={date}
            // onChange={value => {
            //   if (periodType === 'month') {
            //     navigate(`${periodType}/${format(value, 'yyyy-MM-dd')}`, {});
            //   } else {
            //     navigate(`${periodType}/${format(value, 'yyyy-MM-dd')}`, {});
            //   }
            // }}
            
            // dateFormat={periodType === 'month' ? 'MMMM yyyy' : 'dd MMM yyyy'}
        
            // todayButton="Today"
            // minDate={new Date(createdAt)}
          />
        </>
      );


















}