import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// import { useNavigate } from 'react-router-dom';

import { selectUser } from 'redux/auth/selectors';

import { updateUser } from '../../../redux/auth/operations';

import { useForm } from 'react-hook-form';

import { FormUserSchema } from './consts/FormUserSchema';

import { yupResolver } from '@hookform/resolvers/yup';

import { parse } from 'date-fns';

import { FormField } from './FormField/FormField';

import { userAvatarInput, userFormInputs } from './consts/FormUserInputs';

import { AvatarFieldFormUser } from './AvatarFieldFormUser/AvatarFieldFormUser';

import {
  Form,
  FormBody,
  FormUserButton,
  Label,
  DatePickerFormUserWrapper,
  ControlWrapper,
} from './FormUser.styled';

import { DatePickerFormUser } from './DatePickerFormUser/DatePickerFormUser';

// import FormUserButton from '../FormUserButton/FormUserButton';

const today = new Date();

export const FormUser = () => {
  const { name, email, avatarURL, phone, skype, birthday } =
    useSelector(selectUser);

  const dispatch = useDispatch();

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
  const [formBirthday, setFormBirthday] = useState();


  console.log("Info birthday")
  console.log(formBirthday)
  console.log("Info birthday")


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
    formatDate(formBirthday);
    const preparedAvatarURL = data.avatarURL === '' ? null : currentAvatarURL;
    const preparedEmail = data.email === '' ? email : data.email;
    const preparedPhone = data.phone === '' ? null : data.phone;
    const preparedSkype = data.skype === '' ? null : data.skype;
    const preparedData = {
      ...data,
      email:preparedEmail,
      phone: preparedPhone,
      skype: preparedSkype,
      birthday: preparedBirthday,
      avatarURL: preparedAvatarURL,
    };


    
  console.log("Info prepared data")
  console.log(preparedData)
  console.log("Info prepared data")

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
            <ControlWrapper>
              <DatePickerFormUserWrapper>
                <Label>Birthday</Label>
                <DatePickerFormUser
                setFormBirthday = {setFormBirthday}

                  key={input.id}
                  {...input}
                  // control={control}
                  // errors={errors}
                />
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
