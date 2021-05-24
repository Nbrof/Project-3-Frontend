import React from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
  return (
    <nav>
      <Link to='/menu'>
        <FontAwesomeIcon icon='th-large' size='lg'/>
        <p>Menu</p>
      </Link>
      <Link to='/home'>
        <FontAwesomeIcon icon='home' size='lg'/>
        <p>Home</p>
      </Link>
      <Link to='/profile'>
        <FontAwesomeIcon icon='user' size='lg'/>
        <p>Profile</p>
      </Link>
      <Link to='/more'>
        <FontAwesomeIcon icon='bars' size='lg'/>
        <p>More</p>
      </Link>
    </nav>
  )
}

export default Footer