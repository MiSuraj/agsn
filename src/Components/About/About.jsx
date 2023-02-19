import React from 'react'
import './About.css'



function About() {
  return (
    <div>
        <h1 className='aboutUs'><span id='About'>About </span><span id='us'>Us</span></h1>
        <p className='who'><span id='us'>Who are we</span></p>
        <div className='apar'>
          <div className="aleft"></div>
          <div className="aright"></div>
        </div>

        <div className='acpar'>
          <div className="acleft">
              <h4>WE ARE <span>AGRASARANA</span></h4>
               <hr/>
               <p>We are Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eius tempore laudantium facilis consectetur. Pariatur at et dolore fugiat, in optio, similique, voluptatum quisquam qui adipisci ducimus doloribus voluptates dicta!</p>
          </div>
          <div className="acright"></div>
        </div>

        <div className='aceopar'>
          <div className="aceoright"></div>
        </div>

       




    </div>
  )
}

export default About