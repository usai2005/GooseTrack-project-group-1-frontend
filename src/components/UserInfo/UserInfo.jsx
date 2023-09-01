import { UserName, UserAvatar } from './UserInfo.styled';
import { useNavigate } from 'react-router-dom';

const UserInfo = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = e => {
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      navigate(`/account/user=${user.name}`, {});
    }
  };
  return (
    <>
      <UserName>{user.name}</UserName>

      <UserAvatar
        img={user.avatarUrl}
        src={user.avatarURL}
        alt={user.name}
        onClick={handleClick}
      />
    </>
  );
};

export default UserInfo;
