import React from 'react';
import image from '../../assets/product-02.webp';
import "./FooterContact.css"
const FooterContact = () => {
    return (
        <div className='bg-neutral-800 MainContainer'>
            <div className='container mx-auto'>
                <div className='box grid grid-cols-12 gap-x-0'>
                    {/* box1---------------------------------- */}
                    <div className='col-start-1 col-end-5 border-4 border-yellow-700 text-center m-16 p-16'>
                        <img src={image} alt="" />
                        <p className='text-white text-3xl'>18kt White Gold Wedding Ring For $2,000</p>
                        <button className="btn btn-active rounded-none btn-warning px-20 py-4 my-12">Buy now</button>
                    </div>

                    {/* box2---------------------------------- */}

                    <div className='col-start-5 col-end-8 text-left m-16 h-100'>

                        <div className='grid grid-cols-1 items-center h-full '>

                            <div className=''>
                                <p className=' text-3xl text-yellow-700'>Los Angles</p> <br /> <br />
                                <p className='text-white font-semibold'>Address: <br />
                                    3119 Maxwell Street <br />
                                    Bloomfield</p> <br /> <br />
                                <p className='text-white font-semibold'>Phone: <br />
                                    860-796-7230 <br />
                                    860-912-2307</p> <br /> <br />

                                <p className='text-white font-semibold'>E-mail: <br />
                                    noemail@nodomain.com</p>
                            </div>
                        </div>
                    </div>

                    {/* box3---------------------------------- */}
                    <div className='col-start-8 col-end-12 text-left m-16 h-100'>

                        <div className='grid grid-cols-1 items-center h-full '>

                            <div className=''>
                                <p className=' text-3xl text-yellow-700'>Texas</p> <br /> <br />
                                <p className='text-white font-semibold'>Address: <br />
                                    3119 Maxwell Street <br />
                                    Bloomfield</p> <br /> <br />
                                <p className='text-white font-semibold'>Phone: <br />
                                    860-796-7230 <br />
                                    860-912-2307</p> <br /> <br />

                                <p className='text-white font-semibold'>E-mail: <br />
                                    noemail@nodomain.com</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default FooterContact;