// POPUP PAGE

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Confirm from './Confirm';
import "./css/Order.css";



function Order(props) {

  const loaded = () => {
    let total = 0
    const order = props.cart.map((product, index) => {
      total += product.price
      return (
        <div className='order-product' key={index}>
          <h4>{product.name} </h4>
          <h4>$ {product.price}</h4>
        </div>
      );
    });
    
    
    return (
      <>
      <div className="order2">
        <h1 className="neon-text">Order Page</h1>
        <h4>Empty Cart</h4>
      </div>

      <div className="order">
        {/* <h1 className="neon-text">Order Page</h1>
        <h4>Empty Cart</h4> */}
        <div className='order-list'>
          {order}
          <hr/>
          <div className='total'>
            <h4>Total:</h4>
            <h4>$ {total}</h4>
          </div>
        </div>
        <Link 
          to='/order/confirm'
          onClick={() => props.handleConfirm()}
        >
          <button>Confirm Order</button>
        </Link>
        
      </div>
      </>
    );
  };

  
  
  
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

 
  return <div>
    <input
      type="button"
      value="Place Order"
      onClick={togglePopup}
    />
    {/* <p className='order-body'>Items in Cart</p> */}
    {isOpen && <Confirm
      content={<>
        <b>Thank you for your Order</b>

        <img src='https://res.cloudinary.com/dvxvez8mj/image/upload/v1622154473/Project%203/confirm_image_jshihg.png' alt=''/>

        <p>Your order is now being processed.  We will let you know once the order is picked up from the outlet.  Check the status of your order!</p>
        <Link to='/home'>
        <button>Back to Home</button>
      </Link>
      </>}
      handleClose={togglePopup}
    />}
  </div>

};
 
export default Order;
