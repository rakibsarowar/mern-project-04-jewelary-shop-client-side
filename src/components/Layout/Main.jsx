import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import NewCollection from '../New Collection/NewCollection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <NewCollection></NewCollection>
            <Login></Login>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;