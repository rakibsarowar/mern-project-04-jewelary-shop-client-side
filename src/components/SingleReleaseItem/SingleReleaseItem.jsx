import React from 'react';

const SingleReleaseItem = ({jewelry}) => {
    const {name, price, image, description}=jewelry
    return (
        <div className=''>
            <img className='w-1/3' src={image} alt="" />
        </div>
    );
};

export default SingleReleaseItem;