import { Route, Routes } from 'react-router-dom';
// import Loader from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);

  return (
    //  isLoading ? (
    //   <Loader />
    // ) : (
    <>
      <Routes>
        <Route path="/" element={<TaskForm />}>
          {/* <Route index element={<HomePage />} /> */}
        </Route>
      </Routes>
    </>
  );
};
