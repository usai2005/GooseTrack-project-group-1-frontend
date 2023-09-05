import sprite from '../../../../images/icons.svg';

import {
  HiddenInput,
  Label,
  DefaultAvatarSvg,
  PlusSvgOnAvatar,
  UserAvatarWrapper,
  InfoWrapper,
} from './AvatarFieldFormUser.styled';

export const AvatarFieldFormUser = ({
  userName,
  inputName,
  type,
  id,
  avatarURL,
  currentAvatarURL,
  setCurrentAvatarURL,
  setIsDisabled,
  register,
}) => {
  return (
    <UserAvatarWrapper>
      <Label htmlFor={id}>
        {currentAvatarURL ? (
          <img src={URL.createObjectURL(currentAvatarURL)} alt="user_photo" />
        ) : avatarURL ? (
          <img src={avatarURL} alt="user_photo" />
        ) : (
          <p>
            <DefaultAvatarSvg>
              <use href={`${sprite}#icon-user`} />
            </DefaultAvatarSvg>
          </p>
        )}
      </Label>
      <HiddenInput
        {...register(inputName)}
        id={id}
        type={type}
        accept="image/*"
        onChange={e => {
          setCurrentAvatarURL(e.target.files[0]);
          setIsDisabled(false);
        }}
      />
      <p>
        <PlusSvgOnAvatar>
          <use href={sprite + '#icon-plus'}></use>
        </PlusSvgOnAvatar>
      </p>
      <InfoWrapper>
        <h3>{userName}</h3>
        <p>User</p>
      </InfoWrapper>
    </UserAvatarWrapper>
  );
};
