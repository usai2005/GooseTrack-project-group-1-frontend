import icons from '../../../images/icons.svg';

import {
    LogoutLink,
    LogoutIcon,
} from './LogoutBtn.styled';

const LogoutBtn = () => {
    return (
        <LogoutLink>
            <span>Log out</span>
            <LogoutIcon>
                <use href={icons + '#icon-log-out-01'}></use>
            </LogoutIcon>
        </LogoutLink>
    );
};

export default LogoutBtn;