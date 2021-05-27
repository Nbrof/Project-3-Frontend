import React from "react";
import "./css/Default.css";
import { Link } from "react-router-dom";

const Default = (props) => {
  return (
    <body className="default-bg">
      {/* <img
        className="bw-bg"
        src="https://res.cloudinary.com/dejg3dz16/image/upload/v1622003751/icecream_bg_pljiay.jpg"
      /> */}
      <div className="logo-grp"></div>
      <h1 className="logo">
        FR
        <img
          className="i-frizz-default"
          src="https://cdn0.iconfinder.com/data/icons/city-park-flat/512/0_City_Park-05-512.png"
        />
        ZZY
      </h1>
      <p className="default-p">Discover the best</p>
      <p className="default-p">flavored ice-cream</p>
      <p className="default-p">and have access to fast</p>
      <p className="default-p">delivery to your doorstep</p>

      <div className="home-btns">
        <Link to={"/login"}>
          <button className="login-btn2">Login</button>
        </Link>

        <Link to={"/signup"}>
          <button className="signup-btn2">Create an Account</button>
        </Link>
      </div>
    </body>
  );
};

export default Default;
