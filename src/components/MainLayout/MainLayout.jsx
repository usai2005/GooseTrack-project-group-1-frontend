import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllTasks } from 'redux/tasks/tasksOperations';
import { fetchOwnReviews } from 'redux/reviews/reviewsOperations';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import { Container } from '../../styles/container';
import { MainLayoutContainer, Wrapper } from './MainLayout.styled';

const MainLayout = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(getAllTasks());
      dispatch(fetchOwnReviews());
    }
  }, [dispatch, token]);

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
