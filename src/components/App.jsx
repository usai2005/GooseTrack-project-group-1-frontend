import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  //useEffect,
  lazy,
} from 'react';
// import { useDispatch } from 'react-redux';

// import Loader from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ChoosedMonth } from './Calendar/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from './Calendar/ChoosedDay/ChoosedDay';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    /* 
    просто лодер
   
     isLoading ? (
      <Loader />
    ) : (

    //////////////
    або перевірка юзера кастомним хуком useAuth
    isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      */
    // <>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       {/* <Route index element={<HomePage />} /> */}
    //     </Route>
    //   </Routes>
    // </>

    <Provider store={store}>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/calendar/month"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/calendar/month"
                  component={<LoginPage />}
                />
              }
            />
            {/* <Route
              path="/calendar"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<CalendarPage />}
                />
              }
            /> */}
            <Route path="/calendar" element={<CalendarPage />}>
              <Route path="month/:currentDay" element={<ChoosedMonth />} />
              <Route path="day/:currentDay" element={<ChoosedDay />} />
            </Route>
          </Route>
        </Routes>
      </HelmetProvider>
    </Provider>
  );
};
