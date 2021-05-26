import React from 'react'
import "./css/Profile.css";
import { Link } from 'react-router-dom'



const Profile = (props) => {
  
  return (
    <>
    <h4>Profile Page</h4>


    {/* Background */}
    {/* <img className='bg-dark' src='https://images.unsplash.com/photo-1484876586759-80555b97b22d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' alt='background' /> */}

    {/* Logo */}
    <h1>FR<img className='i-frizz' src='https://cdn0.iconfinder.com/data/icons/city-park-flat/512/0_City_Park-05-512.png' />ZZY</h1>
    
    {/* Avatar for login */}
    <img className='avatar' src='https://cdn2.iconfinder.com/data/icons/essenstial-ultimate-ui/64/avatar-512.png' alt='avatar icon'/>

  {/* const loading = () => <h1>Loading...</h1>
  // return signups.length > 0 ? loaded() : loading()
  return (
    <div>
      <h1>profile</h1>
      <Link to='/'>
        <button>Log out</button>
      </Link>
    </div>)
} */}

      <Link to='/'>
        <button>Log Out</button>
      </Link>
    </>

  )
}

export default Profile