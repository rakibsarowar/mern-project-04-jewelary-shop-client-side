import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import NewCollection from '../New Collection/NewCollection';
import Footer from '../Footer/Footer';
import NewReleases from '../NewReleases/NewReleases';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <NewCollection></NewCollection>
            <NewReleases></NewReleases>
        </div>
    );
};

export default Home;