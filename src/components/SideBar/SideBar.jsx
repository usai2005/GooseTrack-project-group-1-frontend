import Logo from '../Logo/Logo';
import UserNav from './UserNav/UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import icons from '../../images/icons.svg';

import {
    Container,
    Wrapper,
    CloseIcon,
    TitleSideBar,
} from './SideBar.styled';

const SideBar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo />
                <CloseIcon>
                    <use href={ icons + "#icon-x-close" }></use>
                </CloseIcon>
            </Wrapper>
            <TitleSideBar>
                User Panel
            </TitleSideBar>
            <UserNav />
            <LogoutBtn />
        </Container>
    );
};

export default SideBar;