import React from "react";



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
    <form onSubmit={handleSubmit}>

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
            name="password"
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

    <input type="submit" value={props.label} />

    </form>
)









}







export default Signup