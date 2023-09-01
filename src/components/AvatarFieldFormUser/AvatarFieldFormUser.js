import sprite from '../../images/icons.svg';

import {
  HiddenInput,
  Label,
  Svg,
  UserAvatarWrapper,
  InfoWrapper,
} from './AvatarFieldFormUser.styled';

const setFileUrl = (file, cbSetFileUrl) => {
  if (!file) return cbSetFileUrl(null);
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    cbSetFileUrl(fileReader.result);
  };
};

export const AvatarFieldFormUser = ({
  userName,
  inputName,
  type,
  id,
  currentAvatarURL,
  setCurrentAvatarURL,
  setIsDisabled,
  register,
}) => {
  return (
    <UserAvatarWrapper>
      <Label htmlFor={id}>
        {!currentAvatarURL ? (
          <p>
            <Svg>
            <use href={`${sprite}#icon-user`} />
            </Svg>
          </p>
        ) : (
          <img src={currentAvatarURL} alt="user_photo" />
        )}
      </Label>
      <HiddenInput
        {...register(inputName)}
        id={id}
        type={type}
        accept="image/*"
        onChange={e => {
          const file = e.target.files[0];
          setFileUrl(file, setCurrentAvatarURL);
          setIsDisabled(false);
          return e;
        }}
      />
      <InfoWrapper>
        <h3>{userName}</h3>
        <p>User</p>
      </InfoWrapper>
    </UserAvatarWrapper>
  );
};
