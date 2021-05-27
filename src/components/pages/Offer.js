import React from 'react'
import "./css/Offer.css";
import { Link } from 'react-router-dom'


const Offer = (props) => {

  const {iceCreams, handleFilter} = props
  
  return (

    <div className='offer'>
    {/* <h1 className='neon-text2'>Flavor of the MONTH!</h1> */}


    <div className='bubble-icons'>

      <Link 
        to={"/products"}
        onClick={() => handleFilter(iceCreams, "ice cream")}
      >
          <img className="icon-1" src='https://res.cloudinary.com/dejg3dz16/image/upload/c_scale,w_193/v1622098547/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12_tpnbiv.jpg' />
      </Link>
      <p className='txt-btns'>Flavors</p>
      

      <Link 
        to={"/products"}
        onClick={() => handleFilter(iceCreams, "float")}
      >
          <img className="icon-1" src='https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/223129.jpg?output-format=auto&output-quality=auto' />
      </Link>
      <p className='txt-btns'>Floats</p>


      <Link to={"/home"}>
          <img className="icon-1" src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_29/1462597/cowlicks_creamery_cones-americas_best_ice_cream-071819-1462597.jpg' />
      </Link>

      <p className='txt-btns'>Parlours</p>

      <Link to={"/more"}>
          <img className="icon-1" src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_29/1462597/cowlicks_creamery_cones-americas_best_ice_cream-071819-1462597.jpg' />
      </Link>
      <p className='txt-btns'>More</p>


    </div>

    

    
    <h2 className='pop-fla'>Popular Flavors</h2>
    <h3 className='ice-cream2'>Ice Cream</h3>
    <p className='star'>&#9733; 4.9</p>
    <img className='icecream-month' src='https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'  alt='icecream of the month'/>

    <p className='month-txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

    <h3 className='floats'>Floats</h3>
    <p className='star'>&#9733; 4.9</p>    <img className='icecream-month' src='https://hips.hearstapps.com/hmg-prod/images/delish-red-wine-floats-still001-1534278249.jpg'  alt='float of the month'/>

    <p className='month-txt2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

    </div>
  )
}

export default Offer;