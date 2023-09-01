import { useDispatch } from 'react-redux';
import icons from '../../../images/icons.svg';

import { LogoutLink, LogoutIcon } from './LogoutBtn.styled';
import { logOut } from 'redux/auth/operations';
// import { setActiveDate, setSelectedDate } from 'redux/date/dateSlice';
// import { useNavigate } from 'react-router-dom';
// import { format } from 'date-fns';

const LogoutBtn = () => {
  const dispatch = useDispatch();
    // const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(logOut());
    //   dispatch(setActiveDate(format(new Date(), 'yyyy-MM-dd')));
    //   dispatch(setSelectedDate(format(new Date(), 'yyyy-MM-dd')));
      // navigate('/login', {});
      
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized: The user is not authenticated.');
      } else {
        console.error(
          'An error occurred while fetching current user:',
          error
        );
        }
    }
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
