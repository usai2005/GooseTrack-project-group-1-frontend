import { Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
const StatisticPage = lazy(() => import('../pages/StatisticsPage/StatisticsPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
    }
  }, [dispatch, token]);

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
