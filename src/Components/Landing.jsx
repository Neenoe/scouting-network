import './landing.css'
import React, { useEffect, useState, useCallback } from 'react';
import Nav from './Nav/Nav';
import {data} from './../Constants/data'
import image1 from './../assets/Assets-9.jpeg';
import image2 from './../assets/Assets-10.jpeg';
import image3 from './../assets/Assets-11.jpeg';
import { AiFillStar } from "react-icons/ai"
import Footer from './Footer/Footer';


function Landing () {
      const [currentSlide, setCurrentSlide] = useState(0);
      const images = [image1, image2, image3]; // Replace with your image URLs
      const slideInterval = 3000; // Change slide every 3 seconds
    
      const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, [images.length]);
  
      useEffect(() => {
        const interval = setInterval(nextSlide, slideInterval);
    
        return () => {
          clearInterval(interval);
        };
      }, [nextSlide, slideInterval]);
    


  return (
    <div className='landing-wrapper innerWidth'>
        <div className="landing-container ">
         
    <Nav/>
           

   <div className='media-container'>
    <div className="media-wrapper">

   

  
      <div className='mediaa'
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '400px', // Adjust the height as needed
          borderRadius: '10px'
        }}
      >

<section className='media innerWidth'>
                <div className='media-left'>
                    <h3>LIFE IS <span>GREAT</span> <br /> <span>FOOTBALL</span> IS BETTER </h3>
                    <p>Football is played with the head <br /> Your foot is the tool</p>

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
            transition: 'opacity 3s',
            filter: 'brightness(40%)',
           
          }}
        />
      </div>
      <div className='navigation'>
            <div
              className={currentSlide === 0 ? 'active' : ''}
              onClick={() => setCurrentSlide(0)}
            />
            <div
              className={currentSlide === 1 ? 'active' : ''}
              onClick={() => setCurrentSlide(1)}
            />
            <div
              className={currentSlide === 2 ? 'active' : ''}
              onClick={() => setCurrentSlide(2)}
            />
          </div>
          </div>

     
    </div>
    <div className='media-right-container'>
    <div className="media-right ">
      <div className="media-details"> 
      <div className='media-right-content'>
      <p>4000+ </p>
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
      
     
     
  </div>

    </div>
    <br /> <br />
    {/* categories */}

   
    <div className="categories-container">
    <div className="categories-details">
          
         
      
      <div className="categories-box">
     
        <div className="categories-image">
        <img src={data[0].imag} alt="" />

        </div>
        <h4>Female Footballers</h4>
        <span>Talented, passionate athletes breaking barriers, inspiring on and off the pitch, and elevating the sport to new heights. </span>
        <p>Read More</p>
      </div>
      <div className="categories-box">
        <div className="categories-image">
        <img src={data[8].imag} alt="" />

        </div>
        <h4>Male Footballers</h4>
        <span>Skilled, passionate athletes,From local pitches to international stages,they inspire millions of young footballers </span>
        <p>Read More</p>
      </div>
      <div className="categories-box">
        <div className="categories-image">
        <img src={data[17].imag} alt="" />

        </div>
        <h4>Football Scout</h4>
        <span>Keen-eyed talent hunters, identifying potential stars, and shaping the future of the beautiful game with precision.</span>
        <p>Read More</p>
      </div>
      </div>
    </div>

   

      {/* OUR SCOUT */}
      <div className='scout innerWidth paddings'>
      <h3>OUR TOP SCOUTS</h3>
 <div className="scout-wrapper">
 <div className="scout-top">
          <div className='scout-top-details'>
            <div className='stout'>
            <img  src={data[10].imag} alt="" />
            </div>
           
            <div className="scout-top-text">
              <p>Diana Asak</p>
              <span>Asistant Coach at AOA</span>
            </div>
          </div>
          <div className='scout-top-details'>
            <div className='stout'>
            <img  src={data[11].imag} alt="" />
            </div>
           
            <div className="scout-top-text">
              <p>Koko Kenibo</p>
              <span>Scout</span>
            </div>
          </div>
        </div>
        <div className="scout-middle">
        <div className='scout-middle-details'>
            <div className='stout'>
            <img  src={data[12].imag} alt="" />
            </div>
           
            <div className="scout-middle-text">
              <p>Alabi Kazeem</p>
              <span>Head coach at AOA</span>
            </div>
          </div>
        </div>
        <div className="scout-down">
        <div className='scout-down-details'>
            <div className='stout'>
            <img  src={data[14].imag} alt="" />
            </div>
           
            <div className="scout-down-text">
              <p>Aselemi Umor</p>
              <span>Scout</span>
            </div>
          </div>
          <div className='scout-down-details'>
            <div className='stout'>
            <img  src={data[13].imag} alt="" />
            </div>
           
            <div className="scout-down-text">
              <p>Nkechi Okafor</p>
              <span>Scout</span>
            </div>
          </div>
        </div>

 </div>
        
       

      </div>

      {/* TESTIMONIAL */}


      <div className="testimonial-wrapper">
        <h3>TESTIMONIALS</h3>
        <div className="testimonial-container">
        <div className="testimonial-box">
          <div className="testimonial-details">
            <div className="testimonial-image">
            <img src={data[33].imag} alt="" />
            </div>
            <div className="testimonial-name">
              <p>Timilehin Oruan</p>
              <p>Footballer</p>
            </div>
            </div>
            <div className="testimonial-note">
              <p>"Getting signed up through a website was a game-changer for my football career! The platform connected me with scouts worldwide, and within weeks, I had opportunities I never dreamed of. Forever grateful!"</p>
            </div>
            <div className="testimonial-rate">
            <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
            </div>
           
          
        </div>
        <div className="testimonial-box">
          <div className="testimonial-details">
            <div className="testimonial-image">
            <img src={data[16].imag} alt="" />
            </div>
            <div className="testimonial-name">
              <p>Kemi Abiola</p>
              <p>HR Arrow</p>
            </div>
            </div>
            <div className="testimonial-note">
              <p>"Signing up players through this website has been a game-changer for my scouting efforts. It's a goldmine of undiscovered talent, and I found a true gem who's now making waves in the football world. Thank you!"</p>
            </div>
            <div className="testimonial-rate">
            <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
            </div>
           
          
        </div>
        <div className="testimonial-box">
          <div className="testimonial-details">
            <div className="testimonial-image">
            <img src={data[15].imag} alt="" />
            </div>
            <div className="testimonial-name">
              <p>Suarez Boaz</p>
              <p>HR Arrow</p>
            </div>
            </div>
            <div className="testimonial-note">
              <p>"Discovering talent through this website has been a game-changer for my scouting career. I found a hidden gem, and watching them grow into a star player is incredibly rewarding. Grateful for this platform!"</p>
            </div>
            <div className="testimonial-rate">
            <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
            </div>
           
          
        </div>
        </div>
       

      </div>
     
      {/* FOOTER */}
    
  
     <Footer/>
    </div>
  
        </div>



   
  )

}

export default Landing