import React from "react";
import { Link } from 'react-router-dom'

const Login = (props) =>{
const [loginData, setLoginData] = React.useState(props.login)

const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(loginData);
    props.history.push("/home")
};


const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value});
};


return (
    <form onSubmit={handleSubmit}>

        <input
            placeholder="email"
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleChange}
        />

        <input
            placeholder="password"
            type="text"
            name="pass"
            value={loginData.pass}
            onChange={handleChange}
        />

    {/* <input type="submit" value={props.label} /> */}
    <button className='links'>
    <Link to={'/menu'}>Login</Link>
    </button>

    </form>
)




}



export default Login;