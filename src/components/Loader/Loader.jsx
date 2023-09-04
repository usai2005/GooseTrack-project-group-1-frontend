import { RotatingLines } from 'react-loader-spinner';
// import css from './Loader.module.css';
import { LoaderStyles } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyles>
      <RotatingLines
        strokeColor="#3E85F3"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </LoaderStyles>
  );
};

export default Loader;
