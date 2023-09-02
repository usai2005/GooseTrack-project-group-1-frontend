
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export  const DatePickerFormUser = ( {setFormBirthday}

  ) => {


    return (
        <>
          <ReactDatePicker
          onChange = {value => {
            setFormBirthday(value)
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
            calendarStartDay={1}
            // dateFormat={periodType === 'month' ? 'MMMM yyyy' : 'dd MMM yyyy'}
            closeOnScroll={true}
            formatWeekDay={nameOfDay => nameOfDay.substr(0, 1)}
            todayButton="Today"
            // minDate={new Date(createdAt)}
          />
        </>
      );


















}