import React from 'react'
import "./css/Home.css";
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
<<<<<<< HEAD
    <>
  < img className='bw-bg' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1622003751/icecream_bg_pljiay.jpg' />

  <h1 className='logo'>FR<img className='i-frizz' src='https://cdn0.iconfinder.com/data/icons/city-park-flat/512/0_City_Park-05-512.png' />ZZY</h1>

      <div className='home-btns'>

        <Link to={"/login"}>
          <button className="login-btn2">Login</button>
        </Link>

        <Link to={"/signup"}>
          <button className="signup-btn2">Create an Account</button>
        </Link>

        </div>
  </>
=======
    <div className='home'>
      <h1 className='neon-text'>Home Page</h1>
    </div>
>>>>>>> fd3c6060dd0ebc17a71cefc7a77a6903fb420353
  )
}

export default Home