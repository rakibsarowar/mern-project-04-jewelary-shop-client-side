import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import ErrorPage404 from '../ErrorPage/ErrorPage404';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <ErrorPage404></ErrorPage404>,
      children: [
        {
                path: '/',
                element: <Home></Home>
        },
      ],
    },
    
  ]);

export default router;