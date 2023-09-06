import { UserName, DefaultAvatarSvg, UserAvatarImg } from './UserInfo.styled';
import { useNavigate } from 'react-router-dom';
import sprite from '../../images/icons.svg';

const UserInfo = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = e => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      navigate(`/account/user=${user.name}`, {});
    }
  };

const {avatarURL,name} = user

  return (
    <>
      <UserName>{user.name}</UserName>
      {!avatarURL ? (
        <p>
          <DefaultAvatarSvg onClick={handleClick}>
          <use href={`${sprite}#icon-user`} />
          </DefaultAvatarSvg>
        </p>
      ) : (
        <UserAvatarImg
          src={avatarURL}
          alt={name}
          onClick={handleClick}
        />
      )}
    </>
  );
};

export default UserInfo;
