import { Route, Routes } from 'react-router-dom';
// import Loader from './Loader/Loader';
import { Layout } from './Layout/Layout';

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);

  return (
    //  isLoading ? (
    //   <Loader />
    // ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
        </Route>
      </Routes>
    </>
  );
};
