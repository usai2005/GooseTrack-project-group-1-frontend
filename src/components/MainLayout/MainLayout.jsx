import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import { Container } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <Container>
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </Container>
  );
};

export default MainLayout;
