import { UserName, UserAvatar } from './UserInfo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const UserInfo = () => {
const user = useSelector(selectUser);

console.log(user);


  return (
    <>
      <UserName>{user.name}</UserName>
      <UserAvatar src={user.avatarURL} alt={user.name}/>
    </>
  );
};

export default UserInfo;
