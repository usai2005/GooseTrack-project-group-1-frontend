import AddFeedbackBt from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';

import icons from '../../images/icons.svg';

import {
    Container,
    Wrapper,
    MenuIcon,
    UserTitle,
} from './Header.styled';

const Header = () => {
    return (
        <header>
            <Container>
                <Wrapper>
                    <MenuIcon>
                        <use href={ icons + "#icon-menu-01" }></use>
                    </MenuIcon>
                </Wrapper>
                <UserTitle>
                    User Profile
                </UserTitle>
                <AddFeedbackBt />
                <ThemeToggler />
                <UserInfo />
            </Container>
        </header>
    )
}

export default Header;