import React from 'react';
import Header from '../Header/Header';
import FooterContact from '../FooterContact/FooterContact';
import Footer from '../Footer/Footer';
import image1 from "../../assets/Shop-Photo.jpg"
import image2 from "../../assets/About-info-1.jpg"
import image3 from "../../assets/About-info-2.jpg"
import image4 from "../../assets/About-info-3.jpg"

const AboutUs = () => {
    return (
        <>
            <div className='w-full flex flex-row justify-center'>
                <div className='absolute z-10'>
                    <Header></Header>
                </div>
            </div>
            <div className='relative'>
                <div className='Head h-96 flex justify-center items-center'>
                    <h1 className='text-5xl text-center '>About Us</h1>
                </div>
                <div className='container mx-auto grid grid-cols-2 py-20'>
                    <div className='box-02 md:pe-44'>
                        <h3 className='font-semibold pt-20 pb-8 text-[#b98d58]'>EXPERIENCE</h3>
                        <p className='text-4xl leading-snug pb-10'>Beautiful 18kt Solid Gold & <br /> Precious Stones Exquisitely <br /> Crafted By Hand</p>
                        <p className='text-justify leading-relaxed pb-8 '>Tempor id eu nisl nunc mi ipsum faucibus. Eget velit aliquet sagittis id consectetur purus ut faucibus. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ridiculus mus mauris vitae ultricies leo integer.</p>
                        <button className="btn btn-active btn-neutral rounded-none py-4 text-white">Read More</button>
                    </div>

                    <div className='box-01 text-center'>
                        <img src={image1} alt="" />
                    </div>


                </div>
                <div className='bg-[#f9f8f4]'>
                    <div className='container mx-auto md:px-40'>
                        <div className='container mx-auto grid grid-cols-3 gap-8 py-32'>

                            <div className='box01 text-center text-white bg-[#2d2d3d]'>
                                <div className='p-8'>
                                    <img className='border-4 border-white' src={image2} alt="" />
                                </div>
                                <h3 className='text-3xl font-semibold leading-relaxed px-8'>The Truth Is That Designing Custom Jewelry</h3>
                                <p className='p-10 leading-loose'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>

                            </div>

                            {/* box 2------------------------------------------------------ */}
                            <div className='box02 text-center text-white bg-[#2d2d3d]'>
                                <div className='p-8'>
                                    <img className='border-4 border-white' src={image3} alt="" />
                                </div>
                                <h3 className='text-3xl font-semibold leading-relaxed px-8'>Highest Quality Diamonds & Gemstones</h3>
                                <p className='p-10 leading-loose'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>


                            {/* box 3------------------------------------------------------ */}
                            <div className='box03 text-center text-white bg-[#2d2d3d]'>
                                <div className='p-8'>
                                    <img className='border-4 border-white' src={image4} alt="" />
                                </div>
                                <h3 className='text-3xl font-semibold leading-relaxed px-10'>We Create Handmade, Engraved Jewelry</h3>
                                <p className='p-10 leading-loose'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterContact></FooterContact>
                <Footer></Footer>

            </div>
        </>
    );
};

export default AboutUs;