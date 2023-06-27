import './landing.css'
import React, { useEffect, useState, useCallback } from 'react';
import image1 from './../assets/award01.png';
import image2 from './../assets/award02.png';
import image3 from './../assets/award03.png';





    function Landing () {
        const [currentSlide, setCurrentSlide] = useState(0);
        const images = [image1, image2, image3];


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };
    


  return (
    <div className='landing-wrapper'>
        <div className="landing-container ">
            <div className="header flexCenter paddings innerWidth">
                <div className="header-logo">
                <h3>SCOUTING REPORT</h3>
                </div>
                <div className="header-list flexStart">
                    <div>HOME</div>
                    <div>HOME</div>
                    <div>HOME</div>
                    <div>HOME</div>
                </div>

                <div className="header-btn">
                    <button>REGISTER</button>
                </div>
            </div>

           

   <div >

  
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '400px', // Adjust the height as needed
        }}
      >

<section className='media innerWidth'>
                <div className='media-left'>
                    <h3>LIFE IS <span>GREAT</span> <br /> <span>FOOTBALL</span> IS BETTER </h3>
                    <p>Football is played with the head <br /> Your foot is the tool</p>

                </div>

                <div className="media-right">
                    <div className='media-right-content'>
                    <p>4000 + </p>
                    <span>Footballers</span>
                    </div>
                    <div className='media-right-content'>
                    <p>60% </p>
                    <span>Signees</span>
                    </div>
                    <div className='media-right-content'>
                    <p>2500+ </p>
                    <span>Scouts</span>
                    </div>
                   
                </div>

            </section>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images[currentSlide]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 1s',
          }}
        />
      </div>
      <div>
        <button onClick={previousSlide}>Previous Slide</button>
        <button onClick={nextSlide}>Next Slide</button>
      </div>

     
    </div>
    </div>
  
        </div>



   
  )

}

export default Landing