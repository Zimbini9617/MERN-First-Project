import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import ErrorPage from './error-page';
import NewPost from './pages/NewPost';
import AllPost from './pages/AllPost';
import Home from './pages/Home';
import Update from './pages/Update';


const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-post",
        element: <AllPost />,
      },
      {
        path: "/new-post",
        element: <NewPost />,
      },
      {
        path: "/:id",
        element: <Update />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />;
}

export default App