import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllTasks } from 'redux/tasks/tasksOperations';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import { Container } from '../../styles/container';
import { MainLayoutContainer, Wrapper } from './MainLayout.styled';
import { fetchOwnReviews } from 'redux/reviews/reviewsOperations';

const MainLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks());
    dispatch(fetchOwnReviews());
  }, [dispatch]);

  return (
    <Container>
      <MainLayoutContainer>
        <SideBar />
        <Wrapper>
          <Header />
          <Outlet />
        </Wrapper>
      </MainLayoutContainer>
    </Container>
  );
};

export default MainLayout;
