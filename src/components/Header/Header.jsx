import AddFeedbackBt from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

import icons from '../../images/icons.svg';

import {
  Container,
  ContainerHeader,
  Wrapper,
  MenuIcon,
  PageTitle,
} from './Header.styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FeedbackModal } from 'components/Feedback/FeedbackModal';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

let pageTitle = 'User Profile';

const Header = () => {
  const [isOpened, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpened);
  };

  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (pathname.includes('/statistics')) {
      pageTitle = 'Statistics';
      return;
    } else if (pathname.includes('/account')) {
      pageTitle = 'User Profile';
    } else {
      pageTitle = 'Calendar';
    }
  }, [location]);

  const user = useSelector(selectUser);

  return (
    <Container>
      <ContainerHeader>
        <Wrapper>
          <MenuIcon>
            <use href={icons + '#icon-menu-01'}></use>
          </MenuIcon>
        </Wrapper>
        <PageTitle>{pageTitle}</PageTitle>
        <AddFeedbackBt setIsOpen={setIsOpen} />
        <ThemeToggler />
        <UserInfo user={user} />
      </ContainerHeader>
      {isOpened && (
        <FeedbackModal onClose={handleToggle} user={user}></FeedbackModal>
      )}
    </Container>
  );
};

export default Header;
