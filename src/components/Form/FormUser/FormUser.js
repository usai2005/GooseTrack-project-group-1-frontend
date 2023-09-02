import { useEffect, useState } from 'react';


import { useSelector,useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { selectUser } from 'redux/auth/selectors';

import { updateUser } from '../../../redux/auth/operations';

import { useForm } from 'react-hook-form';

import { FormUserSchema } from './consts/FormUserSchema';

import { yupResolver } from '@hookform/resolvers/yup';

import { parse } from 'date-fns';

import { FormField } from './FormField/FormField';

import { userAvatarInput, userFormInputs } from './consts/FormUserInputs';

import { AvatarFieldFormUser } from './AvatarFieldFormUser/AvatarFieldFormUser';

import { Form, FormBody, Controls } from './FormUser.styled';

import {DatePickerFormUser} from './DatePickerFormUser/DatePickerFormUser';


// import FormUserButton from '../FormUserButton/FormUserButton';

const today = new Date();




export const FormUser = () => {
  const { name, email, avatarURL, phone, skype, birthday } =
    useSelector(selectUser);

    const dispatch= useDispatch()


  const {
    register: reg,
    // control,
    handleSubmit,
    formState: {
      // errors,
      isDirty,
      dirtyFields,
    },
  } = useForm({
    resolver: yupResolver(FormUserSchema),
    defaultValues: {
      name,
      email,
      phone: !phone ? '' : phone,
      birthday: !birthday ? today : parse(birthday, 'yyyy-MM-dd', today),
      skype: !skype ? '' : skype,
      avatarURL: !avatarURL ? '' : avatarURL,
    },
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [currentAvatarURL, setCurrentAvatarURL] = useState(avatarURL);

  // const [] = useAuth();

  // const navigate = useNavigate();

  const formatDate = date => {
    if (typeof date === 'string') return date;
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();

    return `${y}-${(m + 1).toString().padStart(2, '0')}-${d
      .toString()
      .padStart(2, '0')}`;
  };

  // useEffect(() => {
  //   if () navigate(0);
  // }, []);

  const onSubmit = async data => {
    const preparedBirthday =
      formatDate(data.birthday) === formatDate(today)
        ? null
        : formatDate(data.birthday);
    const preparedAvatarURL = data.avatarURL === '' ? null : currentAvatarURL;
    const preparedPhone = data.phone === '' ? null : Number(data.phone);
    const preparedSkype = data.skype === '' ? null : data.skype;
    const preparedData = {
      ...data,
      phone: preparedPhone,
      skype: preparedSkype,
      birthday: preparedBirthday,
      avatarURL: preparedAvatarURL,
    };
    dispatch(updateUser(preparedData));
    setIsDisabled(true);
  };

  useEffect(() => {
    const checkIsDirty = () => {
      if (currentAvatarURL === avatarURL) {
        if (isDirty) setIsDisabled(false);
        if (!isDirty) setIsDisabled(true);
        // if (isError && error?.status !== 413) setIsDisabled(true);
      }
    };

    checkIsDirty();
  }, [isDirty, dirtyFields, currentAvatarURL, avatarURL]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
      <AvatarFieldFormUser
        userName={name}
        // errors={errors}
        register={reg}
        currentAvatarURL={currentAvatarURL}
        setCurrentAvatarURL={setCurrentAvatarURL}
        setIsDisabled={setIsDisabled}
        {...userAvatarInput}
      />
      <FormBody>
        {userFormInputs.map(input =>
          input.type !== 'date' ? (
            <FormField key={input.id} {...input} register={reg} />
          ) : (
            <DatePickerFormUser key={input.id}
            {...input}
            // control={control}
            // errors={errors}
            />
          )
        )}
      </FormBody>
      <Controls type="submit" function="save" disabled={isDisabled}>
        Save changes
      </Controls>
    </Form>
  );
};
