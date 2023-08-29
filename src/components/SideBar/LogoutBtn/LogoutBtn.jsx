import { useDispatch } from 'react-redux';
import icons from '../../../images/icons.svg';

import {
    LogoutLink,
    LogoutIcon,
} from './LogoutBtn.styled';
import { logOut } from 'redux/auth/operations';

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
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