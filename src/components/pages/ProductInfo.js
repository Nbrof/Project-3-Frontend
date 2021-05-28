import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./css/ProductInfo.css"




const ProductInfo = (props) => {
  
  const url = "https://project-3-seir-329.herokuapp.com";

  const [iceCream, setIceCream] = React.useState(null);
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
        <h1 className="neon-text-pi">Product Info</h1>
        <img className='pi-img' src={iceCream.img} alt={iceCream.name} />
        <h3 className='ic-name'>{iceCream.name}</h3>
        <h4 className="product-rating">
          <FontAwesomeIcon className="star-rating" icon={["fas", "star"]} /> {iceCream.rating.split('/')[0]/2}
        </h4>
        <h4>Type: {iceCream.type}</h4>
        <h4>Has Dairy: {iceCream.dairy}</h4>
        <h4>Has Toppings: {iceCream.toppings}</h4>
        <h4>Description: {iceCream.description}</h4>
        <h4>$ {iceCream.price}</h4>
        <div className='cart-img'>
        <button className="add-to-cart" onClick={() => props.handleAdd(iceCream)}>Add to Cart</button>
        <Link to={'/order'}><img className='cart' src='https://cdn4.iconfinder.com/data/icons/VISTA/business/png/400/shopping_cart.png'/></Link>
        </div>

      </div>
  
      
    );
  };

  const loading = () => <h1>Loading...</h1>;

  return iceCream !== null ? loaded() : loading();

};



export default ProductInfo;

        