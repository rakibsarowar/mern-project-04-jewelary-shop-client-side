import React from 'react';
import photo1 from '../../assets/product-01.webp'

const NewCollection = () => {
    return (
        <div>
            <h1 className='text-4xl pb-10 text-center'>Shop Collection</h1>
            <p className='text-center'>Welcome to our shop! Lets grab some unique items for your love.</p>
            <div className='flex flex-row'>
                <div>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-1/3' src={photo1} alt="" />
                    </div>
                    <p className='font-semibold text-center pb-8'>Earrings</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
                <div>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-1/3' src={photo1} alt="" />
                    </div>
                    <p className='font-semibold text-center pb-8'>Earrings</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;