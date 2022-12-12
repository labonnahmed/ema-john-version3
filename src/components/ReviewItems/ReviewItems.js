import { faArrowLeftLong, faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { emaJohnContext } from '../../App';

const ReviewItems = () => {
    const[cart] = useContext(emaJohnContext);

    const totalPrice= cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
    const totalQuantity= cart.reduce((total, pd) => total + pd.quantity,0)
    
    // calculate shipment charge...
    let shipment;
    if(totalPrice > 500){
        shipment= 0;
    }
    else if(totalPrice > 200){
        shipment= 4.99;
    }
    else{
        shipment= 12.99
    };

    // calculatev Vat & tax...
    const tax= totalPrice / 15;

    const formatNumber= (num) =>{
        const precious= num.toFixed(2);
        return Number(precious);
    }

    return (
        <Container className='card-component'>
            <h3 className=' card-header'>Review Order</h3>
            <div  className="card-details">
                <small>
                    selected Items: {cart.length}<br />
                    Total selected Items: {totalQuantity}
                </small>
                <p className='cartAmount'>
                    Total Price: ${formatNumber(totalPrice)}<br />
                    Total Shipping Charge: ${shipment}<br />
                    Tax: ${formatNumber(tax)}
                </p>
                <h4 className='grandTotal'>Grand Total: ${formatNumber(totalPrice + shipment + tax)}</h4>
            </div>
            <Link to='/shipment' className='link'>
                <Button variant="warning" className='Card-btn text-white'>Proceed Checkout <FontAwesomeIcon icon={faArrowRightLong} style={{color:'white'}} /> </Button>
            </Link>
            <br />
            <Link to='/shop' className='link'>
                <Button variant="danger" className='Card-btn' >Continue Shopping <FontAwesomeIcon icon={faArrowLeftLong} /> </Button>
            </Link> 
        </Container>
    );
};

export default ReviewItems;