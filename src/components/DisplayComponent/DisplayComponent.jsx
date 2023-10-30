import React from 'react';
import photo1 from '../../assets/background-2.jpg'
import "./DisplayComponent.css"

const DisplayComponent = () => {
    return (
        <div className='container mx-auto md:-mt-16 mb-16'>
            <div className='flex flex-row justify-center gap-4'>
                <div className='box1 w-1/2'>
                    <div className=' py-16 px-4 text-center'>
                        <h1 className='text-4xl font-bold text-white py-16 '>Gold Ring & Earrings With Diamonds</h1>
                        <p className='text-white pb-6 mx-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className="btn btn-active rounded-none btn-warning py-4 my-12">Go to the Shop</button>
                    </div>
                </div>
                <div className='box2 w-1/2'>
                    <div className=' py-16 px-4 text-center'>
                        <h1 className='text-4xl font-bold text-white py-16 '>Gold Ring & Earrings With Diamonds</h1>
                        <p className='text-white mx-12 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <button className="btn btn-active rounded-none btn-warning py-4 my-12">Go to the Shop</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DisplayComponent;