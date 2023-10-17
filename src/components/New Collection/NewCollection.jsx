import React from 'react';
import photo1 from '../../assets/product-01.webp'
import photo2 from '../../assets/product-02.webp'
import photo3 from '../../assets/product-03.webp'
import photo4 from '../../assets/product-04.webp'
import photo5 from '../../assets/product-05.webp'

const NewCollection = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold pb-6 text-center'>Shop Collection</h1>
            <p className='text-center pb-10'>Welcome to our shop! Lets grab some unique items for your love.</p>
            <div className='flex flex-row mt-12 px-24'>
                <div className='div1 border-e border-yellow-700'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-9/12 py-6' src={photo1} alt="" />
                    </div>
                    <p className='font-semibold text-xl text-center pb-6'>Earrings</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
                <div className='div2 border-e border-yellow-700'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-9/12 py-6' src={photo2} alt="" />
                    </div>
                    <p className='font-semibold text-xl text-center pb-6'>Weding Rings</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
                <div className='div3 border-e border-yellow-700'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-9/12 py-6' src={photo3} alt="" />
                    </div>
                    <p className='font-semibold text-xl text-center pb-6'>Bracelets</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
                <div className='div4 border-e border-yellow-700'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-9/12 py-6' src={photo4} alt="" />
                    </div>
                    <p className='font-semibold text-xl text-center pb-6'>Necklaces</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>

                <div className='div5 border-e border-yellow-700 '>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-9/12 py-6' src={photo5} alt="" />
                    </div>
                    <p className='font-semibold text-xl text-center pb-6'>Necklaces</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>

                <div className='div'>
                    <div className='flex align-middle justify-center'>
                        <img className='text-center w-9/12 py-6' src={photo5} alt="" />
                    </div>
                    <p className='font-semibold text-xl text-center pb-6'>Necklaces</p>
                    <p className='text-center text-yellow-700 font-semibold'>SHOP NOW</p>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;