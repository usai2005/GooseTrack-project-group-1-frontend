import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// import Loader from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const CalendarPage = lazy(() => import('../pages/Calendar'));

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

    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/calendar"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/calendar"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
            }
          />
        </Route>
      </Routes>
    </HelmetProvider>
  );
};
