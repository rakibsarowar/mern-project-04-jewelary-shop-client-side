import React from 'react';
import photo from '../../assets/ring1.png';
import backgroundPhoto from "../../assets/background-4.jpg";

const Hero = () => {
    
    return (
        <div>
            <div className="hero min-h-screen bg-neutral-100 md:-mt-24">
                <div>
                <div className='container mx-auto'>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={photo} className="max-w-lg" />
                        <div>
                            <p className="text-yellow-700 font-semibold pb-8">2023 COLLECTIONS</p>
                            <h1 className="text-8xl font-bold pb-10">Sparkle With Our Unique Jewelry</h1>
                            <p className="font-semibold pb-8">Discover our new 2023 warmth and shine collection that will delight you at any time. Visit our store and see the collection!</p>
                            <button className="btn btn-active btn-neutral py-4">Go to the Shop</button>
                        </div>
                    </div>
                </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;
