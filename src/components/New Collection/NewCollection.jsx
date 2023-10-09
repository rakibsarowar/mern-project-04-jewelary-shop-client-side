import React from 'react';
import photo1 from '../../assets/product-01.webp'
import photo2 from '../../assets/product-02.webp'
import photo3 from '../../assets/product-03.webp'
import photo4 from '../../assets/product-04.webp'
import photo5 from '../../assets/product-05.webp'

const NewCollection = () => {
    return (
        <div>
            <h1 className='text-4xl pb-10 text-center'>Shop Collection</h1>
            <p className='text-center'>Welcome to our shop! Lets grab some unique items for your love.</p>
            <div className='flex flex-row mt-12'>
                <div className='div1 border-r-2 border-yellow-700'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-1/2' src={photo1} alt="" />
                    </div>
                    <p className='font-semibold text-center pb-8'>Earrings</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
                <div className='div2 border-r-2 border-yellow-700'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-1/2' src={photo2} alt="" />
                    </div>
                    <p className='font-semibold text-center pb-8'>Weding Rings</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
                <div className='div3 border-r-2 border-yellow-700'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-1/2' src={photo3} alt="" />
                    </div>
                    <p className='font-semibold text-center pb-8'>Bracelets</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
                <div className='div4 border-r-2 border-yellow-700'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-1/2' src={photo4} alt="" />
                    </div>
                    <p className='font-semibold text-center pb-8'>Necklaces</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
                <div className='div'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-1/2' src={photo5} alt="" />
                    </div>
                    <p className='font-semibold text-center pb-8'>Necklaces</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;