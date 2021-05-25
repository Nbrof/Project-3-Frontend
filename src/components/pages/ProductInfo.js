import React from 'react'

const ProductInfo = (props) => {

  const {iceCream} = props

  const loaded = () => {
    return (
      <div className='product-info'>
        <img src={iceCream.img} alt={props.iceCream.name}/>
        <h3>{iceCream.name}</h3>
      </div>
    )
  }

  const loading = () => <h1>Loading...</h1>

  return iceCream !== {} ? loaded() : loading()
}

export default ProductInfo