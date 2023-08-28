import { Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

// import Loader from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ChoosedMonth } from './Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from './Calendar/ChoosedDay/ChoosedDay';
import { FeedbackModal } from './Feedback/FeedbackModal';
import { currentUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import Loader from './Loader/Loader';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const StatisticPage = lazy(() =>
  import('../pages/StatisticsPage/StatisticsPage')
);
const NotFound = lazy(() => import('../pages/NotFound'));
const UserProfile = lazy(() => import('../pages/UserProfile'));

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // console.log('isRefreshing', isRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={selectIsLoggedIn ? <Layout /> : <MainPage />}
          >
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
              path="account"
              element={
                <PrivateRoute redirectTo="/" component={<UserProfile />} />
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
              path="statistics"
              // element={
              //   <PrivateRoute redirectTo="/" component={<StatisticPage />} />
              // }
              element={<StatisticPage />}
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
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/feedback" element={<FeedbackModal />} />
      </Routes>
    </HelmetProvider>
  );
};
