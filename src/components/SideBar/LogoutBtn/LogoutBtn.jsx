import { useDispatch } from 'react-redux';
import icons from '../../../images/icons.svg';

import { LogoutLink, LogoutIcon } from './LogoutBtn.styled';
import { logOut } from 'redux/auth/operations';
// import { setActiveDate, setSelectedDate } from 'redux/date/dateSlice';
// import { useNavigate } from 'react-router-dom';
// import { format } from 'date-fns';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    //   dispatch(setActiveDate(format(new Date(), 'yyyy-MM-dd')));
    //   dispatch(setSelectedDate(format(new Date(), 'yyyy-MM-dd')));
    //   navigate('/login', {});
  };

  return (
    <LogoutLink onClick={handleLogout}>
      <span>Log out</span>
      <LogoutIcon>
        <use href={icons + '#icon-log-out-01'}></use>
      </LogoutIcon>
    </LogoutLink>
  );
};

export default LogoutBtn;
