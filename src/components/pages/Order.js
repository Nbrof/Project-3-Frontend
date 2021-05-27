import React from "react";
import './css/Order.css'


const Order = (props) => {
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
      <div className="order">
        <h1 className="neon-text">Order Page</h1>
        <div className='order-list'>
          {order}
          <hr/>
          <div className='total'>
            <h4>Total:</h4>
            <h4>$ {total}</h4>
          </div>
        </div>
        <button>Confrim Order</button>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="order">
        <h1 className="neon-text">Order Page</h1>
        <h4>Empty Cart</h4>
      </div>
    );
  };

  return props.cart.length > 0 ? loaded() : loading()
};

export default Order;
