import React from 'react';

const SingleReleaseItem = ({data}) => {
    // Destructure the data
    const {
        product_name,
        image,
        product_id,
        category,
        gross_weight,
        availability,
        price,
        ships_within,
        shipping_charges,
        product_details,
        product_information,
        product_specifications,
        metal_details,
        diamond_details,
        delivery,
        ratings_and_reviews
      } = data;

    return (
        <div className='mb-12'>
            <img src={image} alt="" />
            <h2 className='text-yellow-700 font-medium pb-4'>{product_name}</h2>
            <p className='font-medium mb-8'>$ {price}</p>
            <button className="btn btn-active btn-neutral rounded-none">Add to Cart</button>
        </div>
    );
};

export default SingleReleaseItem;