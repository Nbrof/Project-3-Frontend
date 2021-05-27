import React from 'react'
import {Link} from 'react-router-dom'

const More = (props) => {
  return (
    <div className='more'>
      <h1 className='neon-text'>More</h1>
      <Link to='about'>
        <button>
          About
        </button>
      </Link>
      <Link to='/order'>
        <button>
          Order
        </button>
      </Link>
    </div>
  )
}

export default More