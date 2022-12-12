import React, { useContext } from 'react';
import './Products.css';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { emaJohnContext } from '../../App';
import { Link } from 'react-router-dom';

const Products = (props) => {
  const{name, img, price, seller, stock, key}= props.product;
  const[cart, setCart] =useContext(emaJohnContext);

  const handleAddProduct= (product) => {
    const sameProduct= cart.find( pd => pd.key === product.key);
      let count= 1;
      let newCart;

      if(sameProduct){
          count = product.quantity + 1;
          product.quantity = count;
          
          const otherProducts = cart.filter( pd => pd.key !== product.key);
          newCart= [...otherProducts, sameProduct];
      }
      else{
          product.quantity= 1;
          newCart= [...cart, product];
      }
      setCart(newCart);
    }
  return (
    <Container className="product-component">
      <img src={img} alt="" />
      <div>
        <h3>
          <Link to={`/product/${key}`} style={{color:'#7c2830', textDecoration:'none'}}>
            {name}
          </Link>
        </h3>
        <h6><small>By {seller}</small></h6>
        <h5>Price: ${price}</h5>
        <p><small>Only {stock} products left - Order Soon</small></p>
        <Button
          onClick= { () => handleAddProduct(props.product)}
          variant="warning" 
          style={{color:'white'}}>
            Add to Card <FontAwesomeIcon 
              icon={faShoppingCart} 
              style={{color:'white'}}
            />
        </Button>
      </div>

    </Container>
  );
};

export default Products;