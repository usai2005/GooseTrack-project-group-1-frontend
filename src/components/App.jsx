import { Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Loader from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ChoosedMonth } from './Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from './Calendar/ChoosedDay/ChoosedDay';
import { FeedbackModal } from './Feedback/FeedbackModal';
import { currentUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import Loader from './Loader/Loader';
import MainLayout from './MainLayout/MainLayout';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));

const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
// const UserProfile = lazy(() => import('../pages/UserProfile'));

const StatisticPage = lazy(() =>
  import('../pages/StatisticsPage/StatisticsPage')
);
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const isLoggedIn = useSelector(state => selectIsLoggedIn(state));
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(currentUser());
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized: The user is not authenticated.');
        } else {
          console.error(
            'An error occurred while fetching current user:',
            error
          );
        }
      }
    };

    fetchData();
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={isLoggedIn ? <MainLayout /> : <MainPage />}>
            <Route
              index
              element={
                <PrivateRoute
                  redirectTo="/"
                  component={<Navigate to="/calendar/month/:currentDate" />}
                />
              }
            />
            <Route
              path="account/*"
              element={
                <PrivateRoute redirectTo="/" component={<AccountPage />} />
              }
            />
            <Route
              path="calendar/*"
              element={
                <PrivateRoute redirectTo="/" component={<CalendarPage />} />
              }
            >
              <Route
                path="month/:currentDate"
                element={
                  <PrivateRoute redirectTo="/" component={<ChoosedMonth />} />
                }
              />
              <Route
                path="day/:currentDate"
                element={
                  <PrivateRoute redirectTo="/" component={<ChoosedDay />} />
                }
              />
            </Route>

            <Route
              path="statistics/*"
              element={
                <PrivateRoute redirectTo="/" component={<StatisticPage />} />
              }
            />
          </Route>
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/login"
                component={<RegisterPage />}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/feedback" element={<FeedbackModal />} />
      </Routes>
    </HelmetProvider>
  );
};
