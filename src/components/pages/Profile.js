

import React from 'react'
import "./css/Profile.css";
import { Link } from 'react-router-dom'


const Profile = (props) => {
  const { signup } = props
  const {signups, handleClick} = props
  const loaded = () => {
      return (
        

        
        <div className='profile'>
          <Link 
            to={`/profile`}
            onClick={() => handleClick(signup)}>
            <p>{signup.name}</p>
            <p>{signup.email}</p>
            <p>{signup.address}</p>
          </Link>
           {/* EDIT button */}
                <button className="edit" onClick={() => {
                    props.selectSignup(signup)
                    props.history.push("/edit")
                }}>
                    EDIT
                </button>
                {/* DELETE button */}
                <button className="delete" onClick={() => {
                    props.deleteSignup(signup)
                }}>
                    Delete
                </button>
        </div>




      )
    }
    
  return (
    // IMAGE
    <div className='bg-image profile'>
  
    {/* Logo */}
    <h1 className='frizz-logo'>FR<img className='i-frizz' src='https://cdn0.iconfinder.com/data/icons/city-park-flat/512/0_City_Park-05-512.png' />ZZY</h1>

    {/* Avatar for login */}
    <img className='avatar' src='https://cdn2.iconfinder.com/data/icons/essenstial-ultimate-ui/64/avatar-512.png' alt='avatar icon'/>

    <article className='static-info'>
    <h4>name: Emma Jones</h4>
    <h4>email: youremail@nomail.com</h4>
    <h4>address: 123 Hibiscus Cone Dr.</h4>
    <h4>Ice Cream, DE 12345</h4>
    </article>
    
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
    
      <span className='log-out-btn'>
      <Link to='/'>
        <button>Log Out</button>
      </Link>
      </span>

      {/* IMAGE div */}
    </div>

  )
}
export default Profile
