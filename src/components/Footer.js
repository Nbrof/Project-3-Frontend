import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => {
  return (
    <nav>
      <div className='comp-btns'>
      <Link to="/menu">
        <FontAwesomeIcon className='menu-btn' icon="th-large" size="lg" />
        <p>Menu</p>
      </Link>
      <Link to="/offer">
        <FontAwesomeIcon className='offer-btn'icon="ice-cream" size="lg" />
        <p>Offer</p>
      </Link>
      <Link to="/home">
        <FontAwesomeIcon className='home-btn'icon="home" size="lg" />
        {/* <p>Home</p> */}
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon className='profile-btn' icon="user" size="lg" />
        <p>Profile</p>
      </Link>
      <Link to="/more">
        <FontAwesomeIcon className='more-btn' icon="bars" size="lg" />
        <p>More</p>
      </Link>
      </div>
    </nav>

  );
};


export default Footer;
