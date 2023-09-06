import * as Yup from 'yup';

import { isValidFileType } from './fileTypeValidation';
import { nameRegExp, phoneRegExp } from './regExps';



export const FormUserSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required')
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .max(16, 'Name may contain only 16 characters'),
  phone: Yup.string().matches(phoneRegExp, {
    message:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    excludeEmptyString: true,
  }),
  birthday: Yup.date('Invalid date format'),
  skype: Yup.string().max(16, 'Skype may contain only 16 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  avatarURL: Yup.mixed().test('is-valid-type', 'Ivalid image type', value => {
    return value === '' || isValidFileType(value);
  }),
});
