import { Fragment } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// :: Layout
import Layout from '../layout/Layout';

// :: Pages
import Home from '../pages/Home/Home';
import Page404 from '../pages/Page404/Page404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </>,
  ),
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
