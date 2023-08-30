import icons from '../../../images/icons.svg';

import { List, ItemLink } from './UserNav.styled';

const UserNav = () => {
  return (
    <List>
      <li>
        <ItemLink to="/account">
          <svg width="20" height="20">
            <use href={icons + '#icon-user-check-01'}></use>
          </svg>
          My account
        </ItemLink>
      </li>
      <li>
        <ItemLink to="/calendar">
          <svg width="20" height="20">
            <use href={icons + '#icon-calendar-check-02'}></use>
          </svg>
          Calendar
        </ItemLink>
      </li>
      <li>
        <ItemLink to="/statistics">
          <svg width="20" height="20">
            <use href={icons + '#icon-chart'}></use>
          </svg>
          Statistics
        </ItemLink>
      </li>
    </List>
  );
};

export default UserNav;
