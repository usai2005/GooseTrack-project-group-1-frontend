import * as Yup from 'yup';

// import { isValidFileType } from './fileTypeValidation';
import { nameRegExp, phoneRegExp } from './regExps';

import moment from 'moment/moment';
const dayMoment = moment().format('DD/MM/YYYY');

export const FormUserSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .max(20, 'At most 16 digits is required')
    .test(
      'name-validation',
      'Name must be at least 3 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 3;
      }
    ),
  birthday: Yup.date().max(
    dayMoment,

    'Birthday must be earlier than today'
  ),
  email: Yup.string()
    .email('This is an ERROR email')
    .matches(/^[a-zA-Z0-9@.]+$/, 'Email must contain only Latin characters')
    .required('Email is required field'),
  phone: Yup.string()
    .min(13, 'The phone number must be in format: +38 (000) 111-2345')
    .max(20, 'The phone number must be in format: +38 (000) 111-2345')
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .matches(
      phoneRegExp.phone,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
  skype: Yup.string()
    .matches(/^\S[\S\s]{0,28}\S$/, 'Skype must be between 3 and 16 characters')
    .max(13, 'At most 13 digits is required')
    .test(
      'Skype-validation',
      'Skype must be at least 3 characters long',
      value => {
        return value && value.replace(/\s/g, '').length >= 3;
      }
    ),
  // avatarURL: Yup.mixed().test('is-valid-type', 'Ivalid image type', value => {
  //   return value === '' || isValidFileType(value);
  // }),
});
