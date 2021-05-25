import React from "react";
import { Link } from "react-router-dom"



const Signup = (props) => {
const [signupData, setSignupData] = React.useState(props.signup)

const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(signupData);
    props.history.push("/");
};

const handleChange = (event) => {
    setSignupData({ ...signupData, [event.target.name]: event.target.value});
};



return (
    <>
    <h2>Sign Up!</h2>
    <div className='signup'>
    <form onSubmit={handleSubmit} className='signup-form'>

        <input
            placeholder="name"
            type="text"
            name="name"
            value={signupData.name}
            onChange={handleChange}
        />

        <input
            placeholder="password"
            type="text"
            name="pass"
            value={signupData.pass}
            onChange={handleChange}
        />

        <input
            placeholder="email"
            type="text"
            name="email"
            value={signupData.email}
            onChange={handleChange}
        />

    {/* <input type="submit" value={props.label} /> */}
    <div className='login-btn'>
    <button className='signup-btn'>
    <Link to={'/home'}>Signup</Link>
    </button>
    </div>

    </form>
    </div>
    </>
)









}







export default Signup