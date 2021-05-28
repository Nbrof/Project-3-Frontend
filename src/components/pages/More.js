import React from 'react'
import {Link} from 'react-router-dom'

import './css/More.css'

const More = (props) => {
  return (
    <body className='more-body'>
    <div className='more'>
      <h1 className='neon-text-more'>More</h1>
      <div className='about-more'>
      <Link  to='home'>
        <button className='home-more'>
          Home
        </button>
      </Link>
      <Link  to='about'>
        <button className='about-about'>
          About
        </button>
      </Link>
      <Link to='/order'>
        <button className='about-sec'>
          Order
        </button>
      </Link>
      </div>
    </div>
    </body>
  )
}

export default More