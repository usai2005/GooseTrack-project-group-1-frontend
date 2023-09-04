import * as Yup from 'yup';

const nameRegExp = new RegExp(
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
);

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validFileExtensions = {
  image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'],
};

const isValidFileType = value => {
  if (typeof value === 'string' && value.includes('image')) return true;
  if (value.length === 0) return true;
  const fileName = value[0]?.name.toLowerCase();
  return validFileExtensions['image'].indexOf(fileName.split('.').pop()) > -1;
};

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
  // avatarURL: Yup.mixed().test('is-valid-type', 'Ivalid image type', value => {
  //   return value === '' || isValidFileType(value);
  // }),
});
