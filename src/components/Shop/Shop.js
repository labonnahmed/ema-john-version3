import React, { useState } from 'react';
import Products from '../Products/Products';
import fakeData from '../../fakeData'
import './Shop.css'
import Card from '../Card/Card';

const Shop = () => {
    const displayProducts= fakeData.slice(0, 10);
    const [products, setProducts] = useState(displayProducts);

    return (
        <div className='parent-container'>
            <div className='Product-container '>
                {
                    products.map(p => <Products
                    product={p}
                    key={p.key}
                    >
                    </Products>)
                }
            </div>
            <div className='price-contaianer'>
                <Card />
            </div> 
        </div>
    );
};

export default Shop;