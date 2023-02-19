import React from 'react'
import './Hero.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typewritter from 'typewriter-effect';



function Hero() {
  
  return (
    <div>
      
      <Carousel transitionTime="1500"showStatus={false} infiniteLoop={true}showThumbs={false}autoPlay={true}swipeable={true}showIndicators={false}dynamicHeight={true}>
                <div className='par'>
                    <img className="image"width="auto" height="600px"src="https://img.freepik.com/free-photo/empty-square-modern-architecture_1359-395.jpg?w=900&t=st=1675756995~exp=1675757595~hmac=8eda096d84b3571fd0da3cc349c8ba501583d6cbf0890d8c778d50d2bd079305"/>
                   
                    <div className="center i-name">

                    <span>We are </span>
                    <span>Agrasarana Group</span>
                    </div>
                       

                        

                </div>
                <div className='par'>
                <img className="image"width="auto" height="600px"src="https://img.freepik.com/free-photo/light-trails-buildings_1359-714.jpg?t=st=1675850497~exp=1675851097~hmac=a66b8f23e38e4682079032366228f5059adf48b56cc38e1239817a17e132c1f3"/>
                <div className="center i-name">

                 <span>We are </span>
                 <span>Agrasarana Group</span>
                 </div>
   
                </div>
                <div className='par'>
                <img className="image"width="auto" height="600px"src="https://img.freepik.com/free-photo/empty-square-modern-architecture_1359-395.jpg?w=900&t=st=1675756995~exp=1675757595~hmac=8eda096d84b3571fd0da3cc349c8ba501583d6cbf0890d8c778d50d2bd079305"/>
                <div className="center i-name">

                <span>We are </span>
                <span>
                  Agrasarana Group</span>
                 </div>
   

    

</div>
            </Carousel>
        
        
   
            <div className='hpar'>
                 <div className="hleft"></div>
                 <div className="hright"></div>
             </div>

      
    </div>
  )
}

export default Hero
