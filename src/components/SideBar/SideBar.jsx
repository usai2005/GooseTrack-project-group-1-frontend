import { useState } from 'react';

import Logo from '../Logo/Logo';
import UserNav from './UserNav/UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import icons from '../../images/icons.svg';

import {
    Container,
    Wrapper,
    MenuCloseBtn,
    CloseIcon,
    TitleSideBar,
} from './SideBar.styled';

const SideBar = () => {

    const [closedMenu, setCloseMenu] = useState(true);

    const handleCloseMenu = () => {
        setCloseMenu(!closedMenu);
    };
    
    return (
        <Container>
            <Wrapper>
                <Logo />
                <MenuCloseBtn type="button" onClick={handleCloseMenu}>
                    <CloseIcon>
                        <use href={ icons + "#icon-x-close" }></use>
                    </CloseIcon>
                </MenuCloseBtn>
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