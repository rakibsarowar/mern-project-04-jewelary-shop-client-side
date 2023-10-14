import React from 'react';
import photo1 from '../../assets/mini-product-1.png'
import photo2 from '../../assets/mini-product-2.png'
import photo3 from '../../assets/mini-product-3.png'

const DisplayComponent2 = () => {
    return (
        <div className='container mx-auto mb-16'>
            <div className='flex flex-row justify-center gap-4'>
                <div className='box1 w-1/3'>
                    <div className='flex flex-row bg-slate-200 py-8 px-6 text-center'>
                        <img className='w-1/2 h-1/2' src={photo1} alt="" />
                        <div>
                            <h1 className='text-3xl text-left text-gray-700'>Discover The Perfect Gift</h1>
                            <p className='text-yellow-700 text-left pt-4 pb-6'>From $ 950</p>
                            <p className='text-yellow-700 font-semibold text-left pb-6'>SHOP NOW</p>
                        </div>
                    </div>
                </div>
                <div className='box2 w-1/3'>
                    <div className='flex flex-row bg-slate-200 py-8 px-6 text-center'>
                        <img className='w-1/2 h-1/2' src={photo2} alt="" />
                        <div>
                            <h1 className='text-3xl text-left text-gray-700'>Discover The Perfect Gift</h1>
                            <p className='text-yellow-700 text-left pt-4 pb-6'>From $ 950</p>
                            <p className='text-yellow-700 font-semibold text-left pb-6'>SHOP NOW</p>
                        </div>
                    </div>
                </div>
                <div className='box3 w-1/3'>
                    <div className='flex flex-row bg-slate-200 py-8 px-6 text-center'>
                        <img className='w-1/2 h-1/2' src={photo3} alt="" />
                        <div>
                            <h1 className='text-3xl text-left text-gray-700'>Discover The Perfect Gift</h1>
                            <p className='text-yellow-700 text-left pt-4 pb-6'>From $ 950</p>
                            <p className='text-yellow-700 font-semibold text-left pb-6'>SHOP NOW</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DisplayComponent2;