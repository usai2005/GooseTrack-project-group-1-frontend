import AddFeedbackBt from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

import IMAGES from '../../images/sideBar/index'
import icons from '../../images/icons.svg';

import {
  ContainerHeader,
  MenuBtn,
  MenuIcon,
  ImgHeaderDay,
  PageTitle,
  TextHeader,
} from './Header.styled';

import {
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import { toggleSideBar } from '../../redux/side-bar/sideBarSlice';

import { FeedbackModal } from 'components/Feedback/FeedbackModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

const Header = () => {
  const [isOpened, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpened);
  };

  const dispatch = useDispatch();
  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };

  const { pathname } = useLocation();
  
  let pageTitle = '';
  
  if (pathname.includes('/statistics')) {
    pageTitle = 'Statistics';
  } else if (pathname.includes('/account')) {
    pageTitle = 'User Profile';
  } else {
    pageTitle = 'Calendar';
  };

  const user = useSelector(selectUser);

  return (
    <ContainerHeader>
      <MenuBtn
        type='button'
        onClick={handleToggleSideBar}
      >
        <MenuIcon>
          <use href={icons + '#icon-menu-01'}></use>
        </MenuIcon>
      </MenuBtn>
      {pathname.includes('/calendar/day') && (<ImgHeaderDay
        srcSet={`${IMAGES.headerGooseDesktop} 64w,
          ${IMAGES.headerGooseDesktop2x} 128w`}
            src={IMAGES.headerGooseDesktop}
            alt="goos of header"
            loading="lazy"
      />)}
      <div>
        <PageTitle>{pageTitle}</PageTitle>
        {pathname.includes('/calendar/day') && (<TextHeader>
          <span>Let go </span>of the past and focus on the present!
        </TextHeader>)}
      </div>
      <AddFeedbackBt setIsOpen={setIsOpen} />
      <ThemeToggler />
      <UserInfo user={user}/>
        {isOpened && (
        <FeedbackModal onClose={handleToggle} user={user}></FeedbackModal>
      )}
    </ContainerHeader>

  );
};

export default Header;