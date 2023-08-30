import AddFeedbackBt from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

import icons from '../../images/icons.svg';

import {
  Container,
  ContainerHeader,
  Wrapper,
  MenuIcon,
  UserTitle,
} from './Header.styled';
import { useState } from 'react';
import { FeedbackModal } from 'components/Feedback/FeedbackModal';

const Header = () => {
  const [isOpened, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpened);
  };
  return (
    <Container>
      <ContainerHeader>
        <Wrapper>
          <MenuIcon>
            <use href={icons + '#icon-menu-01'}></use>
          </MenuIcon>
        </Wrapper>
        <UserTitle>User Profile</UserTitle>
        <AddFeedbackBt setIsOpen={setIsOpen} />
        <ThemeToggler />
        <UserInfo />
      </ContainerHeader>
      {isOpened && <FeedbackModal onClose={handleToggle}></FeedbackModal>}
    </Container>
  );
};

export default Header;
