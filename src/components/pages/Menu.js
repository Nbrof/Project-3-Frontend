import React from "react";
import { Link } from "react-router-dom";
import "./css/Menu.css";

const Menu = (props) => {
  return (
    <>

      <p className="menu-header">Menu Page</p>

      <div className="menu-btns">
        <div className="red-box"></div>

        <Link to={"/menu"}>
          <img
            className="icecreams-button"
            src="https://res.cloudinary.com/dejg3dz16/image/upload/v1621962157/scale_ksqcjj.jpg"
            alt="ice creams"
          />
          <button className="icecream-btn">Cream</button>
          <button class="button button5">&#62;</button>
        </Link>

        <Link to={"/menu"}>
          <img
            className="floats-button"
            src="https://res.cloudinary.com/dejg3dz16/image/upload/v1621963185/4be670890df07c2cba3d457fb162edb1--soda-drink-strawberry-ice-cream-cake_q4luze.jpg"
            alt="ice cream floats"
          />
          <button className="floats-btn">Floats</button>
          <button class="button button5">&#62;</button>
        </Link>

        <Link to={"/offer"}>
          <img
            className="offer-button"
            src="https://res.cloudinary.com/dejg3dz16/image/upload/v1621962761/5b19b1fcaa39cfeb3413dc0f_vopdfj.webp"
            alt="flavors of the month"
          />
          <button className="offer-btn2">Offers</button>
          <button class="button button5">&#62;</button>
        </Link>
      </div>

    </>
  );
};

export default Menu;
