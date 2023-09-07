import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from '../../../redux/auth/operations';
import { useForm } from 'react-hook-form';
import { FormField } from './FormField/FormField';
import { userAvatarInput, userFormInputs } from './consts/FormUserInputs';

import sprite from '../../../images/icons.svg';
import { AvatarFieldFormUser } from './AvatarFieldFormUser/AvatarFieldFormUser';
import {
  Form,
  FormBody,
  FormUserButton,
  Label,
  DatePickerFormUserWrapper,
  ControlWrapper,
  DatePickerChevronDown,
} from './FormUser.styled';
import { DatePickerFormUser } from './DatePickerFormUser/DatePickerFormUser';
import { Notify } from 'notiflix';

import { FormUserSchema } from './consts/validation/FormUserSchema';
import { yupResolver } from '@hookform/resolvers/yup';

export const FormUser = () => {
  const { name, email, avatarURL, phone, skype, birthday } =
    useSelector(selectUser);

  const dispatch = useDispatch();

  const {
    register: reg,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    setError,
  } = useForm({
    resolver: yupResolver(FormUserSchema),
    mode: 'onBlur',
    defaultValues: {
      name,
      email,
      phone: !phone ? '' : phone,
      birthday: birthday ? birthday : '1900-01-01',
      skype: !skype ? '' : skype,
      avatarURL: !avatarURL ? '' : avatarURL,
    },
  });

  // const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [currentAvatarURL, setCurrentAvatarURL] = useState(null);
  const [formBirthday, setFormBirthday] = useState('1990-01-01');

  useEffect(() => {
    if (birthday) {
      setFormBirthday(birthday);
    }
  }, [birthday]);

  const onSubmit = async data => {
    // const preparedEmail = data.email === '' ? email : data.email;
    // const preparedPhone = data.phone === '' ? ' ' : data.phone;
    // const preparedSkype = data.skype === '' ? '' : data.skype;

    const formData = new FormData();
    //setValue('')
    if (data.phone.includes('_')) {
      setError('phone', {
        type: 'manual',
        message: 'The phone number must be in format: +38 (000) 111-2345',
      });
      return;
    }
    if (name !== data.name) formData.append('name', data.name);
    if (email !== data.email) formData.append('email', data.email.trim());
    if (phone !== data.phone) formData.append('phone', data.phone.trim());
    if (skype !== data.skype) formData.append('skype', data.skype.trim());
    if (birthday !== formBirthday)
      formData.append('birthday', formBirthday.trim());
    if (currentAvatarURL) formData.append('avatarURL', currentAvatarURL);
    // console.log('formData', formData);
    dispatch(updateUser(formData));

    Notify.success('Changes saved successfully');
  };

  // console.log('isDirty', isDirty);
  // console.log('isValid', isValid);
  // console.log('errors', errors);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      encType="multipart/form-data"
    >
      <AvatarFieldFormUser
        type="file"
        userName={name}
        register={reg}
        setValue={setValue}
        avatarURL={avatarURL}
        currentAvatarURL={currentAvatarURL}
        setCurrentAvatarURL={setCurrentAvatarURL}
        {...userAvatarInput}
      />
      <FormBody>
        {userFormInputs.map(input =>
          input.type !== 'date' ? (
            <FormField
              key={input.id}
              {...input}
              register={reg}
              setValue={setValue}
              error={errors[input.inputName]}
            />
          ) : (
            <ControlWrapper key={input.id}>
              <DatePickerFormUserWrapper>
                <Label>
                  Birthday
                  <DatePickerChevronDown>
                    <use href={`${sprite}#icon-chevron-down`} />
                  </DatePickerChevronDown>
                </Label>
                <DatePickerFormUser
                  setValue={setValue}
                  setFormBirthday={setFormBirthday}
                  formBirthday={formBirthday}
                  key={input.id}
                  {...input}
                />
              </DatePickerFormUserWrapper>
            </ControlWrapper>
          )
        )}
      </FormBody>
      <FormUserButton
        type="submit"
        // function="save"
        disabled={!isDirty || !isValid}
      >
        Save changes
      </FormUserButton>
    </Form>
  );
};
