import React from 'react';
import photo from '../../assets/ring1.png';
import backgroundPhoto from "../../assets/background-4.jpg";
import './Hero.css'

const Hero = () => {
    
    return (
        <div>
            <div className="hero min-h-screen bg-neutral-100 xl:-mt-24">
                <div className='container mx-auto'>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="partners-intro--thumb aos-init aos-animate w-1/3" style={{ backgroundImage: 'url(https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/bg/partners-circle.png)' }}>
                            <div className="partners-intro--partners">
                                <div className="partners-intro--partners-item -pos-1">
                                    <img className="lazy loaded" data-src="https://i.ibb.co/VNpHVfR/product-01.webp" alt="" src="https://i.ibb.co/VNpHVfR/product-01.webp" data-was-processed="true" />
                                </div>
                                <div className="partners-intro--partners-item -pos-2">
                                    <img className="lazy loaded" data-src="https://i.ibb.co/yy6HhVs/product-02.webp" alt="" src="https://i.ibb.co/yy6HhVs/product-02.webp" data-was-processed="true" />
                                </div>
                                <div className="partners-intro--partners-item -pos-3">
                                    <img className="lazy loaded" data-src="https://i.ibb.co/Z2sf10j/product-03.webp" alt="" src="https://i.ibb.co/Z2sf10j/product-03.webp" data-was-processed="true" />
                                </div>
                                <div className="partners-intro--partners-item -pos-4">
                                    <img className="lazy loaded" data-src="https://i.ibb.co/7zhCPt8/product-04.webp" alt="" src="https://i.ibb.co/7zhCPt8/product-04.webp" data-was-processed="true" />
                                </div>
                            </div>
                            <div className="partners-intro--logo">
                                <img className="lazy loaded" data-src="" alt="" src="https://i.ibb.co/7zhCPt8/product-04.webp" data-was-processed="true" />
                            </div>
                        </div>
                        <div className='w-2/3'>
                            <p className="text-yellow-700 font-semibold pb-8">2023 COLLECTIONS</p>
                            <h1 className="text-8xl font-bold pb-10">Sparkle With Our Unique Jewelry</h1>
                            <p className="font-semibold pb-8">Discover our new 2023 warmth and shine collection that will delight you at any time. Visit our store and see the collection!</p>
                            <button className="btn btn-active btn-neutral rounded-none py-4">Go to the Shop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
