import icons from '../../../images/icons.svg';

import {
    List,
    Item,
} from './UserNav.styled';

const UserNav = () => {
    return (
        <List>
            <Item>
                <svg width="20" height="20">
                    <use href={ icons + "#icon-user-check-01" }></use>
                </svg>
                My account
            </Item>
            <Item>
                <svg width="20" height="20">
                    <use href={ icons + "#icon-calendar-check-02" }></use>
                </svg>
                Calendar
            </Item>
            <Item>
                <svg width="20" height="20">
                    <use href={ icons + "#icon-chart" }></use>
                </svg>
                Calendar
            </Item>
        </List>
    );
};

export default UserNav;