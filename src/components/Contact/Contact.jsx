import React from 'react';
import "./Contact.css"
import Header from '../Header/Header';
import FooterContact from '../FooterContact/FooterContact';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className='Head h-96 flex justify-center items-center'>
                <h1 className='text-5xl text-center '>Contact Us</h1>
            </div>
            <div className='container mx-auto grid grid-cols-3 gap-8 py-32'>

                <div className='box01 text-center'>
                    <h3 className='text-2xl font-semibold pb-6'>Contact Email</h3>
                    <p className='pb-2'>contact@custom-made.com</p>
                    <p>email@custom-made.com</p> <br /> <br />
                    <p className='text-sm underline'>SEND EMAIL</p>
                </div>

                {/* box 2------------------------------------------------------ */}
                <div className='box02 text-center'>
                    <h3 className='text-2xl font-semibold pb-6'>Pickup Location</h3>
                    <p className='pb-2'>3119 Maxwell Street Bloomfield</p>
                    <p>114 Colonial Drive Bryan</p> <br /> <br />
                    <p className='text-sm underline'>SEE LOCATION</p>
                </div>


                {/* box 3------------------------------------------------------ */}
                <div className='box03 text-center'>
                    <h3 className='text-2xl font-semibold pb-6'>Contact Expert</h3>
                    <p className='pb-2'>860-796-7230</p>
                    <p>860-912-2307</p> <br /> <br />
                    <p className='text-sm underline'>CONTACT US</p>
                </div>
            </div>
            
            <FooterContact></FooterContact>
            <Footer></Footer>
        </div>
    );
};

export default Contact;