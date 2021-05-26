import React from 'react'
import "./css/Offer.css";


const Offer = (props) => {
  return (

    <div className='offer'>
    <h1 className='neon-text'>Flavor of the MONTH!</h1>

    <img className='icecream-month' src='https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'  alt='icecream of the month'/>

    <p className='month-txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

    </div>
  )
}

export default Offer;