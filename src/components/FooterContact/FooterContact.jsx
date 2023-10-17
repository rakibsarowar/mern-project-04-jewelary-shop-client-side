import React from 'react';
import image from '../../assets/product-02.webp';
const FooterContact = () => {
    return (
        <div className='bg-gray-800'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-2'>
                    <div className='col-start-1 col-end-5 border-4 border-yellow-700 text-center m-16 p-16'>
                        <img src={image} alt="" />
                        <p className='text-white text-3xl'>18kt White Gold Wedding Ring For $2,000</p>
                        <button className="btn btn-active rounded-none btn-warning px-20 py-4 my-12">Buy now</button>
                    </div>
                    <div className='col-start-5 col-end-8 border-4 border-indigo-500/100'>
                        <h1 className='text-white'>Hellos</h1>
                    </div>
                    <div className='col-start-8 col-end-12 border-4 border-indigo-500/100'>
                        <h1 className='text-white'>Hellos</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FooterContact;