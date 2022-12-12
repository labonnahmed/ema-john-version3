import React, { useContext} from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { emaJohnContext } from '../../App';

const Card = () => {
    const[cart, setCart] =useContext(emaJohnContext);

    // calculate total price....
    const totalPrice= cart.reduce((total, product)=> total + product.price * product.quantity, 0);

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
            <h3 className=' card-header'>Order Summary</h3>
            <div  className="card-details">
                <p>selected Items: {cart.length}<br />
                    <small style={{fontSize:'15px'}}>
                        Total Price: ${formatNumber(totalPrice)} <br />
                        Total Shipping Charge: ${shipment}<br />
                        Tax: ${formatNumber(tax)}
                    </small> 
                </p>
                <h4>Grand Total: ${formatNumber(totalPrice + shipment + tax)}</h4>
            </div> 
            <Link to='/' className='link'>
                <Button 
                    variant="warning" 
                    className='Card-btn text-white'  
                    onClick={() => setCart([])}>
                    Clear Cart <FontAwesomeIcon 
                                        icon={faTrashCan} 
                                        style={{color:'white'}} 
                                        />
                </Button> 
            </Link>
            <br />
            <Link to='/review' className='link'>
                <Button  variant="danger" className='Card-btn'>Review Order <FontAwesomeIcon icon={faArrowRightLong} />
                </Button>
            </Link>
        </Container>
    );
};

export default Card;