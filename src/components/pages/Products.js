import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Products.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Product = (props) => {

  const {iceCreams} = props

  const loaded = () => {
    const products = iceCreams.map((product, index) => {
      return (
      <>
        <h3 className="product-name">{product.name}</h3>
        <div className='ice-cream' key={index}>
          <Link 
            to={`/products/${product.name}`}
            // onClick={() => handleClick(product)}
          >
              <img className='icecream-img' src={product.img} alt='ice cream' />
              <h4 className="product-rating">
                <FontAwesomeIcon className="star-rating" icon={["fas", 'star']}/> {product.rating.split('/')[0]/2}
              </h4>
          </Link>
          </div>
          </>
      )
    }) 

    return (
      <div className='products'>
        <h1 className='neon-text'>Products</h1>
        {products}
      </div>
    )
  }

  const loading = () => <h1>Loading...</h1>
  return iceCreams.length > 0 ? loaded() : loading()
}

export default Product