import { useDispatch, useSelector } from 'react-redux';

import { toggleSideBar } from '../../redux/side-bar/sideBarSlice';
import { selectOpenSideBar } from '../../redux/side-bar/sideBarSelectors';

import Logo from '../Logo/Logo';
import UserNav from './UserNav/UserNav';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import icons from '../../images/icons.svg';

import {
    Container,
    SideBarContainer,
    Wrapper,
    MenuCloseBtn,
    CloseIcon,
    TitleSideBar,
} from './SideBar.styled';

const SideBar = () => {
    const dispatch = useDispatch();
    const currentState = useSelector(selectOpenSideBar);

    const handleToggleSideBar = () => {
        dispatch(toggleSideBar());
    };
    
    return (
        <Container className={!currentState && "is-open"}>
            <SideBarContainer>
                <Wrapper>
                    <Logo />
                    <MenuCloseBtn type="button" onClick={handleToggleSideBar}>
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
            </SideBarContainer>
        </Container>
    );
};

export default SideBar;