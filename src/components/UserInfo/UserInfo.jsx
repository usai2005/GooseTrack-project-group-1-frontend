import { UserName, UserAvatar } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = () => {
  const user = useSelector(selectUser);
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
        img={'user.avatarUrl'}
        src={user.avatarURL}
        alt={user.name}
        onClick={handleClick}
      />
    </>
  );
};

export default UserInfo;
