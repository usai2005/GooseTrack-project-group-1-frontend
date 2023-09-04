import sprite from '../../../../images/icons.svg';

import {
  HiddenInput,
  Label,
  DefaultAvatarSvg,
  PlusSvgOnAvatar,
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
  avatarURL,
  currentAvatarURL,
  setCurrentAvatarURL,
  setIsDisabled,
  register,
}) => {
  return (
    <UserAvatarWrapper>
      <Label htmlFor={id}>
        {!avatarURL ? (
          <p>
            <DefaultAvatarSvg>
              <use href={`${sprite}#icon-user`} />
            </DefaultAvatarSvg>
          </p>
        ) : (
          <img src={URL.createObjectURL(currentAvatarURL)} alt="user_photo" />
        )}
      </Label>
      <HiddenInput
        {...register(inputName)}
        id={id}
        type={type}
        accept="image/*"
        onChange={e => {
          setCurrentAvatarURL(e.target.files[0]);
          console.log(currentAvatarURL);
          setIsDisabled(false);
          return e;
        }}
      />
      <p>
        <PlusSvgOnAvatar>
          <use href={sprite + '#icon-plus'}></use>
          {/* <use href={`${sprite}#icon-plus`} /> */}
        </PlusSvgOnAvatar>
      </p>
      <InfoWrapper>
        <h3>{userName}</h3>
        <p>User</p>
      </InfoWrapper>
    </UserAvatarWrapper>
  );
};
