import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import ErrorPage404 from '../ErrorPage/ErrorPage404';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Contact from '../Contact/Contact';

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
    {
      path:'/contact',
      element: <Contact></Contact>,
      errorElement: <ErrorPage404></ErrorPage404>
  },
    {
        path:'/login',
        element: <Login></Login>,
        errorElement: <ErrorPage404></ErrorPage404>
    },
    {
        path: '/register',
        element: <Register></Register>,
        errorElement: <ErrorPage404></ErrorPage404>
    },
    
  ]);

export default router;