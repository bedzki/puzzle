import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

// :: Lib
import { getTestProps } from '../lib/helper';

const Layout = ({ testId, children }) => {
  return (
    <div className="flex flex-row" {...getTestProps(testId, 'container')}>
      <div className="w-1/2">Sidebar</div>

      <div className="w-1/2"> {children ? children : <Outlet />}</div>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  testId: PropTypes.string,
};

Layout.defaultProps = {
  testId: '',
};
