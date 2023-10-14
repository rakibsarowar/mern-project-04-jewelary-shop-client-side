import React from 'react';
import Hero from '../Hero/Hero';
import NewCollection from '../New Collection/NewCollection';
import NewReleases from '../NewReleases/NewReleases';
import DisplayComponent from '../DisplayComponent/DisplayComponent';
import DisplayComponent2 from '../DisplayComponent2/DisplayComponent2';
import EmailInfo from '../EmailInfo/EmailInfo';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DisplayComponent></DisplayComponent>
            <DisplayComponent2></DisplayComponent2>
            <NewCollection></NewCollection>
            <NewReleases></NewReleases>
            <EmailInfo></EmailInfo>
        </div>
    );
};

export default Home;