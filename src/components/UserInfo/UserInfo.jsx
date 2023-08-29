import { UserName, UserAvatar } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <UserName>{user.name}</UserName>
      <UserAvatar>
        <img src={user.avatarUrl} alt={user.name} />
      </UserAvatar>
    </>
  );
};

export default UserInfo;
