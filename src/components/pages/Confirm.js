import React from "react";
import { Link } from 'react-router-dom';
import "./css/Confirm.css";

const Confirm = (props) => {
  return (
    // <>
    // <div className="popup-box">
    //   <div className="box">
    //     <span className="close-icon" onClick={props.handleClose}>x</span>
    //     {props.content}
    //   </div>
    // </div>
    // </>

    <div className="confirm">
      <img
        src="https://res.cloudinary.com/dvxvez8mj/image/upload/v1622154473/Project%203/confirm_image_jshihg.png"
        alt=""
      />
      <h1>Thank You!å</h1>
      <h2>for your order</h2>
      <p>
        Your Order is now being processed. We will let you know once the order
        is picked from the outlet. Check the status of your Order
      </p>
      <Link to="/home">
        <button className="confirm-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default Confirm;
