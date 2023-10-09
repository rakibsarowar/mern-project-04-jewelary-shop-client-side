import React from 'react';

const SingleReleaseItem = ({jewelry}) => {
    const {name, price, image, description}=jewelry
    return (
        <div className='mb-12'>
            <img src={image} alt="" />
            <h2 className='text-yellow-700 font-medium pb-4'>{name}</h2>
            <p className='font-medium mb-8'>$ {price}</p>
            <button className="btn btn-active btn-neutral rounded-none">Add to Cart</button>
        </div>
    );
};

export default SingleReleaseItem;