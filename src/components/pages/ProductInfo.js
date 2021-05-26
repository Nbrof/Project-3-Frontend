import React from "react";

const ProductInfo = (props) => {

  const url = "http://localhost:4000";

  const [iceCream, setIceCream] = React.useState({});

  const getIceCream = () => {
    fetch(url + "/icecream/" + `${props.match.params.product}`)
      .then((response) => response.json())
      .then((data) => {
        setIceCream(data[0]);
      });
  };

  React.useEffect(() => {getIceCream()}, []);

  const loaded = () => {
    return (
      <div className="product-info">
        <img src={iceCream.img} alt={iceCream.name} />
        <h3>{iceCream.name}</h3>
      </div>
    );
  };

  const loading = () => <h1>Loading...</h1>;

  return iceCream !== {} ? loaded() : loading();
};

export default ProductInfo;
