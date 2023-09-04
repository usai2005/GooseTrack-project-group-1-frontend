import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { updateUser } from '../../../redux/auth/operations';
import { useForm } from 'react-hook-form';
import { FormUserSchema } from './consts/FormUserSchema';
import { yupResolver } from '@hookform/resolvers/yup';
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

export const FormUser = () => {
  const { name, email, avatarURL, phone, skype, birthday } =
    useSelector(selectUser);

  const dispatch = useDispatch();

  const {
    register: reg,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(FormUserSchema),
    mode: 'onSubmit',
    defaultValues: {
      name,
      email,
      phone: !phone ? '' : phone,
      birthday: birthday ? birthday : '1900-01-01',
      skype: !skype ? '' : skype,
      avatarURL: !avatarURL ? '' : avatarURL,
    },
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [currentAvatarURL, setCurrentAvatarURL] = useState(null);
  const [formBirthday, setFormBirthday] = useState('1990-01-01');

  useEffect(() => {
    if (birthday) {
      setFormBirthday(birthday);
    }
  }, [birthday]);

  const onSubmit = async data => {
    // const preparedBirthday = formBirthday === '' ? formBirthday : formBirthday;
    const preparedEmail = data.email === '' ? email : data.email;
    const preparedPhone = data.phone === '' ? ' ' : data.phone;
    const preparedSkype = data.skype === '' ? '   ' : data.skype;

    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', preparedEmail);
    formData.append('phone', preparedPhone);
    formData.append('skype', preparedSkype);
    formData.append('birthday', formBirthday);
    formData.append('avatarURL', currentAvatarURL);

    console.log(formData);

    dispatch(updateUser(formData));

    Notify.success('Changes saved successfully');
    reset();
  };

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
        avatarURL={avatarURL}
        currentAvatarURL={currentAvatarURL}
        setCurrentAvatarURL={setCurrentAvatarURL}
        setIsDisabled={setIsDisabled}
        {...userAvatarInput}
      />
      <FormBody>
        {userFormInputs.map(input =>
          input.type !== 'date' ? (
            <FormField
              key={input.id}
              {...input}
              register={reg}
              setIsDisabled={setIsDisabled}
            />
          ) : (
            <ControlWrapper key={input.id}>
              <DatePickerFormUserWrapper>
                <Label>Birthday</Label>
                <DatePickerFormUser
                  setFormBirthday={setFormBirthday}
                  formBirthday={formBirthday}
                  key={input.id}
                  {...input}
                />
                <DatePickerChevronDown>
                  <use href={`${sprite}#chevron-down`} />
                </DatePickerChevronDown>
              </DatePickerFormUserWrapper>
            </ControlWrapper>
          )
        )}
      </FormBody>
      <FormUserButton type="submit" function="save" disabled={isDisabled}>
        Save changes
      </FormUserButton>
    </Form>
  );
};
