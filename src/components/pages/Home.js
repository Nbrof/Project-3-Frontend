import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
  const parlours = props.parlours.map((parlour, index) => {
    return (
      <div className="parlour" key={index}>
        <Link
          to="/products"
          onClick={() => props.handleFilter(props.iceCreams, "all")}
        >
          <img src={parlour.image} alt="parlour" />
          <div className='parlour-info'>
            <h2>{parlour.name}</h2>
            <h3 className="rating">
              <FontAwesomeIcon className="star" icon="star" />
              <span>{parlour.rating.split("/")[0] / 2}</span>
            </h3>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="home-bg2 home">
      <h1 className='home-pars'>HOME</h1>
      <div className='parlour-list'>
        {parlours}
      </div>
    </div>
  );
};
export default Home;
