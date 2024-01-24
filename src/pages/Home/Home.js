import PropTypes from 'prop-types';

// :: Lib
import { getTestProps } from '../../lib/helper';

const Home = ({ testId }) => {
  return (
    <div
      className="bg-gray text-gray-900 w-full h-screen flex flex"
      {...getTestProps(testId, 'container')}
    >
      Home Page
    </div>
  );
};

export default Home;

Home.propTypes = {
  testId: PropTypes.string,
};
