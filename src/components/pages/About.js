import React from 'react'
import "./css/About.css";

const About = (props) => {
  return (
    <>

  <p>About Page</p>
<div className='team-img'>


<div class="container">
      <div class="image">
        <img className='christina' src="https://res.cloudinary.com/dejg3dz16/image/upload/v1621977052/Christina_ka3z92.jpg" />
      </div>
      <div class="text">
        <p>This is Christina.  Christina's role in this project has been the Full-Stack developer on the frontend.  Creating components and designing the app/website layout.</p>
      </div>
    </div>

    <div class="container">
      <div class="image">
        <img className='chun' src="https://res.cloudinary.com/dejg3dz16/image/upload/v1621977053/Chun_jctgkb.jpg" />
      </div>
      <div class="text">
        <p>This is Chun! Chun's role as a Full-Stack Developer was huge in the frontend, and also had a hand in the backend structure.  Creating routes and component with links to certain pages.</p>
      </div>
    </div>

    <div class="container">
      <div class="image">
        <img className='gabe' src="https://res.cloudinary.com/dejg3dz16/image/upload/v1621988860/gabe2_timsed.jpg" />
      </div>
      <div class="text">
        <p>This is Gabe!  Gabe built models on the backend and has a role on the frontend styling and components.</p>
      </div>
    </div>

    <div class="container">
      <div class="image">
        <img className='nikolaus' src="https://res.cloudinary.com/dejg3dz16/image/upload/v1621977052/Nikolaus_zpbdip.jpg" />
      </div>
      <div class="text">
        <p>This is Nikolaus!  Nikolaus has jumpstarted the team with the main layout of the components and deploying and making our app live.</p>
      </div>
    </div>

  

  {/* <img className='chun' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1621977053/Chun_jctgkb.jpg' alt='Chun'/>
  <p className='txt chun-text'>This is Chun</p>

  <img className='gabe' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1621977051/gabe_dz4xup.jpg' alt='Gabe'/>
  <p className='txt gabe-text'>This is Gabe</p>

  <img className='nikolaus' src='https://res.cloudinary.com/dejg3dz16/image/upload/v1621977052/Nikolaus_zpbdip.jpg' alt='Nikolaus'/>
  <p className='txt nikolaus-text'>This is Nikolaus</p> */}


  
  </div>
  
  </>
  
  )
}

export default About