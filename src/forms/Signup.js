import React from "react";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const [signupData, setSignupData] = React.useState(props.signup);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(signupData);
    props.history.push("/home");
  };

  const handleChange = (event) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h2 className="neon-text">Sign Up</h2>
      <p className="signup-details">Add your details to sign up</p>
      <div className="signup">
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            className="form-name"
            placeholder="      Name"
            type="text"
            name="name"
            value={signupData.name}
            onChange={handleChange}
          />


          <input
            className="form-email"
            placeholder="      Email"
            type="text"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />
          <input
            className="form-mobile"
            placeholder="      Mobile No"
            type="text"
            name="mobile"
            value={signupData.pass}
            onChange={handleChange}
          />
          <input
            className="form-address"
            placeholder="      Address"
            type="text"
            name="address"
            value={signupData.email}
            onChange={handleChange}
          />
          <input
            className="form-password"
            placeholder="      Password"
            type="text"
            name="password"
            value={signupData.email}
            onChange={handleChange}
          />
          <input
            className="form-confirm-password"
            placeholder="      Confirm Password"
            type="text"
            name="confirm-password"
            value={signupData.email}
            onChange={handleChange}
          />

          {/* <input type="submit" value={props.label} /> */}
          <div>
            <Link to={"/home"}>
              <button className="signup-btn">Signup</button>
            </Link>
          </div>
        <p className="made-account">Already have an Account? <a href="./Login"><span className="red-text">Login</span></a></p>
        </form>
      </div>
    </>
  );
};

export default Signup;
