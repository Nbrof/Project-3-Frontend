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

    // return (
    //   <div className='signup-pull'>
    //     <h1 className='neon-text'>Profile</h1>
    //     {profiles}
    //   </div>
    // )
  

  const loading = () => <h1>Loading...</h1>
  return signups.length > 0 ? loaded() : loading()
}

  
    

export default Profile