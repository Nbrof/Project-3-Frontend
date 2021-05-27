import React from "react";

const Order = (props) => {
  const loaded = () => {
    const order = props.cart.map((product, index) => {
      return (
        <div>
          <h4>
            {product.name} <span>{product.price}</span>
          </h4>
        </div>
      );
    });
    return (
      <div className="order">
        <h1 className="neon-text">Order Page</h1>
        {order}
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
