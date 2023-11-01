import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import ErrorPage404 from '../ErrorPage/ErrorPage404';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Contact from '../Contact/Contact';
import SingleProductPage from '../SingleProductPage/SingleProductPage';
import AboutUs from '../AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage404></ErrorPage404>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

    ],
  },
  {
    path: '/contact',
    element: <Contact></Contact>,
    errorElement: <ErrorPage404></ErrorPage404>
  },
  {
    path: '/login',
    element: <Login></Login>,
    errorElement: <ErrorPage404></ErrorPage404>
  },
  {
    path: '/register',
    element: <Register></Register>,
    errorElement: <ErrorPage404></ErrorPage404>
  },
  {
    path: '/shop-single-Product-info',
    element: <SingleProductPage></SingleProductPage>,
    errorElement: <ErrorPage404></ErrorPage404>
  },
  {
    path: '/about-us',
    element: <AboutUs></AboutUs> ,
    errorElement: <ErrorPage404></ErrorPage404>
  },


]);

export default router;