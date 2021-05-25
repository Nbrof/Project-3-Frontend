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
      <h2 className="neon-text">Sign Up!</h2>
      <div className="signup">
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            className="form-name"
            placeholder="name"
            type="text"
            name="name"
            value={signupData.name}
            onChange={handleChange}
          />

          <input
            className="form-pass"
            placeholder="password"
            type="text"
            name="pass"
            value={signupData.pass}
            onChange={handleChange}
          />

          <input
            className="form-email"
            placeholder="email"
            type="text"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />

          {/* <input type="submit" value={props.label} /> */}
          <div>
            <Link to={"/home"}>
              <button className="signup-btn">Signup</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
