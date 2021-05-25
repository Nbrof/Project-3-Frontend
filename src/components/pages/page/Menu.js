import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  return (
    <>
    <h1>Menu Page</h1>
  
    <div className='menu-btns'>
    <Link to={'/menu'}>
      <button>Ice Creams</button>
    </Link>
    

    
    
    <Link to={'/menu'}>
      <button>Floats</button>
    </Link>
    

    
    
    <Link to={'/more'}>
      <button>More</button>
    </Link>
    


    </div>
   

    </>
  )
}

export default Menu