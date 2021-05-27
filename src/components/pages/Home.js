import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
  const parlours = props.parlours.map((parlour, index) => {
    return (
      <div className="parlour" key={index}>
        <Link 
          to='/products'
          onClick={() => props.handleFilter(props.iceCreams, 'all')}
        >
          <img src={parlour.image} alt="parlour" />
          <h2>{parlour.name}</h2>
          <div className="rating">
            <FontAwesomeIcon className="star" icon="star" />
            <span>{parlour.rating.split('')[0]/2}</span>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <body className="home-bg2 home">
      <h1>HOME</h1>
      {parlours}
    </body>
  );
};
export default Home;
