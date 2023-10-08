import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Login></Login>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;