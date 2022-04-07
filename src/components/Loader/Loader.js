import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        type="RotatingLines"
        width="100"
        strokeColor="rgb(230, 200, 230)"
      />
    </LoaderWrapper>
  );
};

export default Loader;
