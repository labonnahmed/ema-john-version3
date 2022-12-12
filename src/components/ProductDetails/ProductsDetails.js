import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { emaJohnContext } from '../../App';
import '../Products/Products.css'

const ProductsDetails = () => {
    const[cart, setCart] = useContext(emaJohnContext);

    const handleRemoveProduct = (pd) => {
        const restItems= cart.filter(product => product.key !== pd.key);
        setCart(restItems);
    }
    return (
        <>
            { cart.map(pd => 
                <Container className="product-component">
                    <img src={pd.img} alt="" />
                    <div>
                        <h4>{pd.name}</h4>
                        <h6><small>By {pd.seller}</small></h6>
                        <h5>Price: ${pd.price}</h5>
                        <p><small>Quantity of added this Item: {pd.quantity}</small></p>
                        <Button
                            onClick= { () => handleRemoveProduct(pd)}
                            variant="warning" 
                            style={{color:'white'}}>
                                Remove to Card <FontAwesomeIcon 
                                icon={faTrashCan} 
                                style={{color:'white'}}
                                />
                        </Button>
                     </div>
                </Container>
            )}
        </>
    );
};

export default ProductsDetails;