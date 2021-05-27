import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductInfo = (props) => {
  const url = "https://project-3-seir-329.herokuapp.com";

  const [iceCream, setIceCream] = React.useState({});

  const getIceCream = () => {
    fetch(url + "/icecream/" + `${props.match.params.product}`)
      .then((response) => response.json())
      .then((data) => {
        setIceCream(data[0]);
      });
  };

  React.useEffect(() => {
    getIceCream();
  }, []);

  const loaded = () => {
    return (
      <div className="product-info">
        <h1 className="neon-text">Product Info</h1>
        <img src={iceCream.img} alt={iceCream.name} />
        <h3>{iceCream.name}</h3>
        <h4 className="product-rating">
          <FontAwesomeIcon className="star-rating" icon={["fas", "star"]} /> {iceCream.rating.split('/')[0]/2}
        </h4>
        <h4>Type: {iceCream.type}</h4>
        <h4>Has Dairy: {iceCream.dairy}</h4>
        <h4>Has Toppings: {iceCream.toppings}</h4>
        <h4>Description: {iceCream.description}</h4>
        <h4>$ {iceCream.price}</h4>
        <button onClick={() => props.handleAdd(iceCream)}>Add to Cart</button>
      </div>
    );
  };

  const loading = () => <h1>Loading...</h1>;

  return iceCream !== {} ? loaded() : loading();
};

export default ProductInfo;
