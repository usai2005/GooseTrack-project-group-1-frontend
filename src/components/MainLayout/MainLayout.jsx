import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllTasks } from 'redux/tasks/tasksOperations';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import { Container } from './MainLayout.styled';

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
