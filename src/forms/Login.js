import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [loginData, setLoginData] = React.useState(props.login);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(loginData);
    props.history.push("/home");
  };

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h2 className="neon-text">Log In!</h2>
      <div className="login">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            className="login-email"
            placeholder="email"
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />

          <input
            className="login-password"
            placeholder="password"
            type="text"
            name="pass"
            value={loginData.pass}
            onChange={handleChange}
          />


        {/* <input type="submit" value={props.label} /> */}
        <div>
          <Link to={"/menu"}>
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </form>
      <div>
        <p>Forgot your password?</p>
        <p>or</p>
        <p>Login With</p>
      </div>
      <div>
          <button>Login with Facebook</button>
        <button>Login with Google</button>
      </div>
      <p>
        Don't have an account? <span>Sign </span>
      </p>
    </div>
          {/* <input type="submit" value={props.label} /> */}
          <div>
            <Link to={"/menu"}>
              <button className="login-btn">Login</button>
            </Link>
          </div>
    </>
  );
};

export default Login