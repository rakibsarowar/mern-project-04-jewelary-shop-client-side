import React from 'react';
import Header from '../Header/Header';
import FooterContact from '../FooterContact/FooterContact';
import Footer from '../Footer/Footer';
import image1 from '../../assets/SingleProductinfo-3.jpg'
import { useLoaderData } from 'react-router-dom';

const SingleProductPage = () => {
    const locketInfo = useLoaderData();
    const {_id, name, quantity, supplier, email, price, rating, category, details, photo } = locketInfo;
    console.log(_id)


    return (
        <>
            <div className='w-full flex flex-row justify-center'>
                <div className='absolute z-10'>
                    <Header></Header>
                </div>
            </div>
            <div className='relative'>
                <div className='Head h-96 flex justify-center items-center'>
                    <h1 className='text-5xl text-center '>Product Details</h1>
                </div>
                <div className='container mx-auto grid grid-cols-2 gap-8 py-20'>
                    <div className='box01 text-center'>
                        <img src={image1} alt="" />
                    </div>

                    <div>
                        <h3 className='text-4xl font-semibold pt-2 pb-8 text-[#b98d58]'>Beloved Kiss</h3>
                        <p className='text-4xl pb-10'>$980.00</p>
                        <p className='text-justify pb-8'>Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Congue mauris rhoncus aenean vel. Amet consectetur adipiscing elit pellentesque.</p>
                        <button className="btn btn-active btn-neutral rounded-none py-4 text-white">ADD TO CART</button>
                        <div className='pt-8'>
                            <div className='flex flex-row items-center gap-2 font-semibold'>
                                <svg aria-label="1 / 1 checks OK" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                </svg>
                                <p className='list-image-[url(checkmark.png)]'>COMPLIMENTARY SHIPPING & RETURNS</p>

                            </div>
                            <div className='flex flex-row items-center gap-2 py-4 font-semibold'>
                                <svg aria-label="1 / 1 checks OK" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                </svg>
                                <p className='list-image-[url(checkmark.png)]'>DROP A HINT</p>

                            </div>
                            <div className='flex flex-row items-center gap-2 font-semibold'>
                                <svg aria-label="1 / 1 checks OK" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                </svg>
                                <p className='list-image-[url(checkmark.png)]'>SIZE GUIDE</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-[#f9f8f4]'>
                    <div className='container mx-auto'>
                        <div>
                            <h2 className='text-4xl font-semibold pt-16 pb-6'>Description</h2>
                            <p>Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Congue mauris rhoncus aenean vel. Amet consectetur adipiscing elit pellentesque.</p>
                        </div>
                        <div className='mt-12'>
                            <h2 className='text-4xl font-semibold pb-6'>Related Products</h2>
                            <p>Returns and delivery are two important aspects of any business that sells goods to customers. Delivery is the process of transporting products from the seller to the buyer. It involves many steps including order processing, packaging, shipping, tracking, and delivery confirmation. It is important to offer fast and reliable delivery to ensure customer satisfaction and retention. Returns, on the other hand, refer to products that customers send back to the seller due to various reasons such as 
                            </p>
                        </div>

                        <div className='mt-12'>
                            <h2 className='text-4xl font-semibold pb-6'>Returns & Delivery</h2>
                            <p>Returns and delivery are two important aspects of any business that sells goods to customers. Delivery is the process of transporting products from the seller to the buyer. It involves many steps including order processing, packaging, shipping, tracking, and delivery confirmation. It is important to offer fast and reliable delivery to ensure customer satisfaction and retention. Returns, on the other hand, refer to products that customers send back to the seller due to various reasons such as damage, wrong size, or quality issues. <br /> <br />
                            Proper returns management involves clear policies and processes that allow for hassle-free returns and refunds. It helps in maintaining good customer relationships and ultimately, repeat business.Therefore, businesses must prioritize efficient delivery and easy returns management to ensure a positive customer experience. By doing so, businesses can build customer loyalty and stand out in a competitive market.
                            </p>
                        </div>
                    </div>
                </div>

                <FooterContact></FooterContact>
                <Footer></Footer>

            </div>
        </>
    );
};

export default SingleProductPage;