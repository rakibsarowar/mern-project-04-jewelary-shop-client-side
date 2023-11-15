import React from 'react';
import { Link } from 'react-router-dom';

const SingleReleaseItem = ({ data }) => {
    // Destructure the data
    const {
        _id,
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

            <Link to={`/shop-single-Product-info/${_id}`}>
                <button className="btn btn-active btn-neutral rounded-none">View Details</button>
            </Link>
        </div>
    );
};

export default SingleReleaseItem;