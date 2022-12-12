import React from 'react';
import ProductsDetails from '../ProductDetails/ProductsDetails';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    return (
        <div className='parent-container'>
            <div className='Product-container '>
                <ProductsDetails />
            </div>
            <div className='price-contaianer'>
                <ReviewItems />
            </div>
        </div>
    );
};

export default Review;