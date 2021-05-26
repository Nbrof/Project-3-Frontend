import React from 'react'
import {Link} from 'react-router-dom'

const Product = (props) => {

  const {iceCreams, handleClick} = props

  const loaded = () => {
    const products = iceCreams.map((product, index) => {
      return (
        <div className='ice-cream' key={index}>
          <Link 
            to={`/products/${product.name}`}
            onClick={() => handleClick(product)}
          >
            <img src={product.img} alt='ice cream'/>
          </Link>
        </div>
      )
    }) 

    return (
      <div className='ice-cream-list'>
        {products}
      </div>
    )
  }

  const loading = () => <h1>Loading...</h1>
  return iceCreams.length > 0 ? loaded() : loading()
}

export default Product