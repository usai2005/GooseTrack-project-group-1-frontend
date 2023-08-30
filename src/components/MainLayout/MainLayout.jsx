import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import { Container } from './MainLayout.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTasks } from 'redux/tasks/tasksOperations';

const MainLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

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
