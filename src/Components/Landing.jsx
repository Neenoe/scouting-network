import './landing.css'
import React, { useEffect, useState, useCallback } from 'react';
import Nav from './Nav/Nav';
import {data} from './../Constants/data'
import image1 from './../assets/Assets-9.jpeg';
import image2 from './../assets/Assets-10.jpeg';
import image3 from './../assets/Assets-11.jpeg';
import logo4 from './../assets/gallery04.png'
import logo5 from './../assets/chef.png'
import logo6 from './../assets/findus.png'
import logo7 from './../assets/knife.png'
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai"
import { FaPhone } from "react-icons/fa6";
import { FaM } from 'react-icons/fa6'
import Footer from './Footer/Footer';







    function Landing () {
      const [currentSlide, setCurrentSlide] = useState(0);
      const images = [image1, image2, image3]; // Replace with your image URLs
      const slideInterval = 3000; // Change slide every 3 seconds
    
      const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, [images.length]);
      const previousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
      };
    
      useEffect(() => {
        const interval = setInterval(nextSlide, slideInterval);
    
        return () => {
          clearInterval(interval);
        };
      }, [nextSlide, slideInterval]);
    


  return (
    <div className='landing-wrapper paddings'>
        <div className="landing-container ">
         
    <Nav/>
           

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

                {/* <div className="media-right">
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
                   
                </div> */}

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
           
          }}
        />
      </div>
      <div className='navigation'>
        {/* <button onClick={previousSlide}>Previous Slide</button>
        <button onClick={nextSlide}>Next Slide</button> */}
        <div onClick={previousSlide}/>
        <div />
        <div onClick={nextSlide}/>

      </div>

     
    </div>
    <div className="media-right innerWidth paddings">
      
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
                   
                </div> <br /> <br />
    {/* categories */}

    <div className="categories-wrapper paddings innerWidth">
      <div className="categories1">
        <img src={data[3].imag} alt="" />
        <h4>Female Footballers</h4>
        <span>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit or what you <br /> Boko del Harum voluptates architecto debitis </span>
        <p>Read More</p>
      </div>
      <div className="categories2">
        <img src={data[11].imag}  alt="" />
        <h4>Male Footballers</h4>
        <span>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit or what you <br /> Boko del Harum voluptates architecto debitis </span>
        <p>Read More</p>
      </div>
      <div className="categories3">
        <img src={data[5].imag}  alt="" />
        <h4>Talent Scout</h4>
        <span>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit or what you <br /> Boko del Harum voluptates architecto debitis !</span>
        <p>Read More</p>
      </div>

    </div>

    {/* ABOUT US */}

    {/* <div className="about paddings innerWidth">
      <h2>ABOUT US</h2>
     <div className="about-us">
      <div className="about-us1">
        <img src={data[2].imag} alt="" />

      </div>
      <div className="about-us2">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias quo natus! Animi aperiam beatae tempore quas! Modi dolore quisquam commodi suscipit nesciunt repellat consequuntur inventore praesentium tempora officia, esse soluta doloremque doloribus explicabo ab, adipisci tenetur voluptate quia eaque amet, maiores quas. Temporibus blanditiis accusantium ullam, non cum pariatur!</p>

        <span>Read More</span>

        </div>
        <div className="about-us3">
          <img src={data[12].imag} alt="" />

        </div>
        </div>

    </div> */}

    {/* our mission */}
    {/* <div className="mission innerWidth paddings">
      <div className="mission-left">
        <img src={data[8].imag} alt="" />
      </div>

      <div className="mission-right flexColCenter">
        <h4>OUR MISSION</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus auctor est, tempus euismod lectus efficitur ac. Morbi finibus mollis nibh, in blandit tellus pharetra eu<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus auctor est, tempus euismod lectus efficitur ac. Morbi finibus mollis nibh, in blandit tellus pharetra eu</p>
      </div>
    </div> */}
    {/* OUR PARTNERS */}

    {/* <div className="partner paddings innerWidth">
      <div className="partner-text">
       <h2>OUR PARTNERS</h2>
      </div>

      <div className="partners paddings innerWidth">
      <div>
        <img src={logo4} alt="" />
      </div>
      <div>
        <img src={logo5} alt="" />
      </div>
      <div>
        <img src={logo6} alt="" />
      </div>
      <div>
        <img src={logo7} alt="" />
      </div>
    </div>

      </div> */}

      {/* OUR SCOUT */}
      <div className='scout innerWidth paddings'>

        <h3>OUR TOP SCOUTS</h3>
        <div className="scout-top">
          <div className='scout-top-details'>
            <div className='stout'>
            <img  src={data[13].imag} alt="" />
            </div>
           
            <div className="scout-top-text">
              <p>Tony Young</p>
              <span>HR Arvado</span>
            </div>
          </div>
          <div className='scout-top-details'>
            <div className='stout'>
            <img  src={data[14].imag} alt="" />
            </div>
           
            <div className="scout-top-text">
              <p>Fantana Wills</p>
              <span>Arvado</span>
            </div>
          </div>
        </div>
        <div className="scout-middle">
        <div className='scout-middle-details'>
            <div>
            <img  src={data[15].imag} alt="" />
            </div>
           
            <div className="scout-middle-text">
              <p>Scot Ryan</p>
              <span>HR Arvado</span>
            </div>
          </div>
        </div>
        <div className="scout-down">
        <div className='scout-down-details'>
            <div>
            <img  src={data[16].imag} alt="" />
            </div>
           
            <div className="scout-down-text">
              <p>Tracy Blair</p>
              <span>HR Arvado</span>
            </div>
          </div>
          <div className='scout-down-details'>
            <div>
            <img  src={data[17].imag} alt="" />
            </div>
           
            <div className="scout-down-text">
              <p>Samuel Felix</p>
              <span>HR Arvado</span>
            </div>
          </div>
        </div>

      </div>

      {/* TESTIMONIAL */}

      <div className="testimonial innerWidth paddings">
        <h3>TESTIMONIAL</h3>
        <div className="testimonial-details">
          <div className="testimonial-card1">
            <div className="testimonial-card-details">
              <img src={data[7].imag} alt="" />
              <div className="testimonial-card-details-info">
                <p>San Barbz</p>
                <span>HR Arravo</span>
              </div>
            </div>

            <div className="testimonial-card1-texts">
              <p>Lorem ipsum dolor sit amet consec adipisicing elit. Vero nam alias vel.</p>
            </div>

            <div className="testimonial-card1-ratings">
             
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              
            </div>

          </div>
          <div className="testimonial-card2">
          <div className="testimonial-card-details">
              <img src={data[18].imag}alt="" />
              <div className="testimonial-card-details-info">
                <p>San Barbz</p>
                <span>HR Arravo</span>
              </div>
            </div>

            <div className="testimonial-card1-texts">
              <p>Lorem ipsum dolor sit amet consec adipisicing elit. Vero nam alias vel.</p>
            </div>

            <div className="testimonial-card1-ratings">
             
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              
            </div>
            
            </div>
            <div className="testimonial-card3">
            <div className="testimonial-card-details">
              <img src={data[19].imag} alt="" />
              <div className="testimonial-card-details-info">
                <p>San Barbz</p>
                <span>HR Arravo</span>
              </div>
            </div>

            <div className="testimonial-card1-texts">
              <p>Lorem ipsum dolor sit amet consec adipisicing elit. Vero nam alias vel.</p>
            </div>

            <div className="testimonial-card1-ratings">
             
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              <AiFillStar className='star'/>
              
            </div>

            
            </div>
        </div>
      </div>
      {/* PARTNERSHIP */}
      {/* <div className="partnersip innerWidth paddings">
      <h3>BECOME A  PARTNER</h3>
      <div className="partnership-info">
        <div className="partnership-info-left">
          <div className="partnership-info-left-icon1">
            <FaPhone className='sks'/>
            <p>Phone</p>
          </div>
          <div className="partnership-info-left-icon2">
            <FaM className='sks'/>
            <p>Mail</p>
          </div>
        </div>

        <div className="partnership-info-right">
        <label for="username" placeholder='Your Name'></label>
        <input type="text" id="username" name="username" placeholder='Your Name' className='input1'></input>
        <label for="email" placeholder='Your Name'></label>
        <input type="text" id="username" name="username" placeholder='Your Email' className='input1'></input>
        <label for="text" placeholder='Your Name'></label>
        <input type="text" id="username" name="username" placeholder='Message' className='input1'></input>
        <div className='partner-btn'>
          <button>SUBMIT</button>
        </div>
        
        </div>
      </div>
      

      </div> */}
      {/* FOOTER */}
  
     <Footer/>
    </div>
  
        </div>



   
  )

}

export default Landing