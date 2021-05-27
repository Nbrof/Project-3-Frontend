import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Login = (props) => {

  const url = "https://project-3-seir-329.herokuapp.com";

  const [login, setLogin] = React.useState({})

  const getSignUp = (email) => {
    fetch(url + '/signup/' + email)
      .then((response) => response.json())
      .then((data) => {
        setLogin(data[0])
      })
  }


  const [loginData, setLoginData] = React.useState(props.login);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (getSignUp(loginData.email) !== {}) {
      
    }
    props.handleSubmit(loginData);
    props.history.push("/home");
  };

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h2 className="neon-text">Login</h2>
      <p className="login-details">Add your login details</p>
      <div className="login">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            className="login-email"
            placeholder="       Your email"
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />

          <input
            className="login-password"
            placeholder="       Password"
            type="text"
            name="pass"
            value={loginData.pass}
            onChange={handleChange}
          />
          {/* <input type="submit" value={props.label} /> */}
          <div>
            <Link to={"/home"}>
              <button className="login-btn">Login</button>
            </Link>
          </div>
          <div className="middle-text">
            <p className="middle-text">Forgot your password?</p>
            <p className="middle-text">or</p>
            <p className="middle-text">Login With</p>
          </div>
          <div className="other-logins">
            <button className="login-facebook"><FontAwesomeIcon icon={["fab", 'facebook-f']}/> Login with Facebook</button>
            <button className="login-google"><FontAwesomeIcon icon={["fab", 'google-plus-g']}/> Login with Google</button>
          </div>
          <p className="no-account">
            Don't have an Account? <a href="./signup"><span className="red-text">Sign Up </span></a>
          </p>
        </form>
      </div>
      {/* <input type="submit" value={props.label} /> */}
    </>
  );
};

export default Login;
