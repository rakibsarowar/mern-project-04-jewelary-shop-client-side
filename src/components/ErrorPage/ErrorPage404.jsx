import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '../../assets/errorpage.png'

const ErrorPage404 = () => {

    const { error} = useRouteError()

    return (
        <>
            <div className='mt-12'>
                <div className='flex justify-center'>
                    <img className='img-fluid w-25' src={img} alt="" />
                </div>
                <p className='text-2xl font-bold text-center mt-12'>
                    {error?.message}
                </p>

            </div>

        </>
    );
};

export default ErrorPage404;