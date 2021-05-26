import React from "react";
import { Link } from "react-router-dom";

const Default = (props) => {
  return (
    <div>
      <Link to="signup">
        <button className="btns">Sign Up</button>
      </Link>
      <Link to="login">
        <button className="btns">Log In</button>
      </Link>
    </div>
  );
};

export default Default;
