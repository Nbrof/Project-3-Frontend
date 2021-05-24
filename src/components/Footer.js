import React from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
  return (
    <nav>
      <Link to='/menu'>
        <FontAwesomeIcon icon='th-large'/>
        <p>Menu</p>
      </Link>
      <Link to='/home'>
        <FontAwesomeIcon icon='home'/>
        <p>Home</p>
      </Link>
      <Link to='/profile'>
        <FontAwesomeIcon icon='user'/>
        <p>Profile</p>
      </Link>
      <Link to='/more'>
        <FontAwesomeIcon icon='bars'/>
        <p>More</p>
      </Link>
    </nav>
  )
}

export default Footer