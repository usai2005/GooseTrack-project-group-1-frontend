import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import {
    Container,
} from './MainLayout.styled';

const MainLayout = () => {
    return (
        <Container>
            <SideBar />
            <Header />
        </Container>
    );
};

export default MainLayout;