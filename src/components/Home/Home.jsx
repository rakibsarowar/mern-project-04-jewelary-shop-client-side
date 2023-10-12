import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Hero from '../Hero/Hero';
import NewCollection from '../New Collection/NewCollection';
import Footer from '../Footer/Footer';
import NewReleases from '../NewReleases/NewReleases';
import DisplayComponent from '../DisplayComponent/DisplayComponent';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DisplayComponent></DisplayComponent>
            <NewCollection></NewCollection>
            <NewReleases></NewReleases>
        </div>
    );
};

export default Home;