import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductOverview = () => {
    const{productKey} =useParams();
    const product= fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            { <Products product={product} /> }
        </div>
    );
};

export default ProductOverview;