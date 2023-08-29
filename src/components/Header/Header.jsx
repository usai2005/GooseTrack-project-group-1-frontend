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

const Header = () => {
    return (
        <Container>
            <ContainerHeader>
                <Wrapper>
                    <MenuIcon>
                        <use href={icons + "#icon-menu-01"}></use>
                    </MenuIcon>
                </Wrapper>
                    <UserTitle>
                        User Profile
                    </UserTitle>
                    <AddFeedbackBt />
                    <ThemeToggler />
                    <UserInfo />
            </ContainerHeader>
        </Container>
    );
}

export default Header;