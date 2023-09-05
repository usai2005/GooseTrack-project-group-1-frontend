import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toggleSideBar } from '../../../redux/side-bar/sideBarSlice';

import icons from '../../../images/icons.svg';

import { List, ItemLink } from './UserNav.styled';

const UserNav = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const handleToggleSideBar = () => {
        dispatch(toggleSideBar());
    };

  return (
    <List>
      <li>
        <ItemLink
          className={
              pathname === '/account'
            && 'is-active'}
          onClick={handleToggleSideBar}
          to="/account">
          <svg width="20" height="20">
            <use href={icons + '#icon-user-check-01'}></use>
          </svg>
          My account
        </ItemLink>
      </li>
      <li>
        <ItemLink
          className={
              pathname.includes('/calendar')
            && 'is-active'}
          onClick={handleToggleSideBar}
          to="/calendar">
          <svg width="20" height="20">
            <use href={icons + '#icon-calendar-check-02'}></use>
          </svg>
          Calendar
        </ItemLink>
      </li>
      <li>
        <ItemLink
          className={
              pathname.includes('/statistics')
            && 'is-active'}
          onClick={handleToggleSideBar}
          to='/statistics'>
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
