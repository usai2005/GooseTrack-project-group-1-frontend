import { Link } from 'react-router-dom';
import icons from '../../../images/icons.svg';

import { List, Item } from './UserNav.styled';

const UserNav = () => {
  return (
    <List>
      <Item>
        <Link to="/account">
          <svg width="20" height="20">
            <use href={icons + '#icon-user-check-01'}></use>
          </svg>
          My account
        </Link>
      </Item>
      <Item>
        <Link to="/calendar">
          <svg width="20" height="20">
            <use href={icons + '#icon-calendar-check-02'}></use>
          </svg>
          Calendar
        </Link>
      </Item>
      <Item>
        <Link to="/statistics">
          <svg width="20" height="20">
            <use href={icons + '#icon-chart'}></use>
          </svg>
          Statistics
        </Link>
      </Item>
    </List>
  );
};

export default UserNav;
