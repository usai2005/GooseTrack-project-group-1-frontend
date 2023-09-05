import { nanoid } from '@reduxjs/toolkit';

export const userFormInputs = [
  {
    inputName: 'name',
    type: 'text',
    id: nanoid(),
    label: 'User Name',
    placeholder: 'Enter your name',
  },
  {
    inputName: 'birthday',
    type: 'date',
    id: nanoid(),
    label: 'Birthday',
    placeholder: 'DD/MM/YYYY',
  },
  {
    inputName: 'email',
    type: 'email',
    id: nanoid(),
    label: 'Email',
    placeholder: 'Enter email',
  },
  {
    inputName: 'phone',
    type: 'tel',
    id: nanoid(),
    label: 'Phone',
    placeholder: 'Enter phone',
  },
  {
    inputName: 'skype',
    type: 'string',
    id: nanoid(),
    label: 'Skype',
    placeholder: 'Add a skype number',
  }
];

export const userAvatarInput = {
  inputName: 'avatarURL',
  type: 'file',
  id: nanoid(),
  label: '',
  placeholder: '',
};
