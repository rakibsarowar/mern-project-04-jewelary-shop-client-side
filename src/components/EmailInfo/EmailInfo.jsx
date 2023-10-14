import React from 'react';

const EmailInfo = () => {
    return (
        <div>
            <div className='bg-orange-100'>
                <h1 className='text-4xl font-bold pb-6 text-center py-12'>Receive Our News In Your Email</h1>
                <p className='text-center pb-10'>Sign up to receive offers for new products and updates</p>
                <div className='text-center py-8'>
                    <input type="text" placeholder="Your Mail" className="input input-bordered rounded-none input-md w-full max-w-xs" />
                    <button className="btn btn-active btn-neutral rounded-none">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default EmailInfo;