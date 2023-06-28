import './landing.css'
import React, { useEffect, useState, useCallback } from 'react';
import image1 from './../assets/award01.png';
import image2 from './../assets/award02.png';
import image3 from './../assets/award03.png';
import logo1 from './../assets/gallery01.png'
import logo2 from './../assets/gallery02.png'
import logo3 from './../assets/gallery03.png'
import logo4 from './../assets/gallery04.png'
import logo5 from './../assets/chef.png'
import logo6 from './../assets/findus.png'
import logo7 from './../assets/knife.png'
import { FaPhone } from "react-icons/fa6";
import { FaM } from 'react-icons/fa6'
import { FaF } from 'react-icons/fa6'
import { FaInfo } from 'react-icons/fa6'
import { FaT } from 'react-icons/fa6'
import { FaY } from 'react-icons/fa6'






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
    {/* categories */}

    <div className="categories-wrapper paddings innerWidth">
      <div className="categories1">
        <img src={logo1} alt="" />
        <h4>Female Footballers</h4>
        <span>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit or what you <br /> Boko del Harum voluptates architecto debitis </span>
        <p>Read More</p>
      </div>
      <div className="categories2">
        <img src={logo2} alt="" />
        <h4>Female Footballers</h4>
        <span>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit or what you <br /> Boko del Harum voluptates architecto debitis </span>
        <p>Read More</p>
      </div>
      <div className="categories3">
        <img src={logo3} alt="" />
        <h4>Female Footballers</h4>
        <span>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit or what you <br /> Boko del Harum voluptates architecto debitis !</span>
        <p>Read More</p>
      </div>

    </div>

    {/* ABOUT US */}

    <div className="about paddings innerWidth">
      <h2>ABOUT US</h2>
     <div className="about-us">
      <div className="about-us1">
        <img src={logo1} alt="" />

      </div>
      <div className="about-us2">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias quo natus! Animi aperiam beatae tempore quas! Modi dolore quisquam commodi suscipit nesciunt repellat consequuntur inventore praesentium tempora officia, esse soluta doloremque doloribus explicabo ab, adipisci tenetur voluptate quia eaque amet, maiores quas. Temporibus blanditiis accusantium ullam, non cum pariatur!</p>

        <span>Read More</span>

        </div>
        <div className="about-us3">
          <img src={logo3} alt="" />

        </div>
        </div>

    </div>

    {/* our mission */}
    <div className="mission innerWidth paddings">
      <div className="mission-left">
        <img src={logo3} alt="" />
      </div>

      <div className="mission-right flexColCenter">
        <h4>OUR MISSION</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate veritatis atque corrupti eum dolor maiores consectetur laborum vero adipisci autem, <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus hic sapiente libero quaerat repellat. Commodi eos iure amet pariatur hic.</p>
      </div>
    </div>
    {/* OUR PARTNERS */}

    <div className="partner paddings innerWidth">
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

      </div>

      {/* OUR SCOUT */}
      <div>

      </div>

      {/* TESTIMONIAL */}

      <div className="testimonial innerWidth paddings">
        <h3>TESTIMONIAL</h3>
        <div className="testimonial-details">
          <div className="testimonial-card1">
            <div className="testimonial-card-details">
              <img src={logo5} alt="" />
              <div className="testimonial-card-details-info">
                <p>San Barbz</p>
                <span>HR Arravo</span>
              </div>
            </div>

            <div className="testimonial-card1-texts">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam alias vel.
            </div>

            <div className="testimonial-card1-ratings">

            </div>

          </div>
          <div className="testimonial-card2">
          <div className="testimonial-card-details">
              <img src={logo5} alt="" />
              <div className="testimonial-card-details-info">
                <p>San Barbz</p>
                <span>HR Arravo</span>
              </div>
            </div>

            <div className="testimonial-card1-texts">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam alias vel.
            </div>

            <div className="testimonial-card1-ratings">
              
            </div>
            
            </div>
            <div className="testimonial-card3">
            <div className="testimonial-card-details">
              <img src={logo5} alt="" />
              <div className="testimonial-card-details-info">
                <p>San Barbz</p>
                <span>HR Arravo</span>
              </div>
            </div>

            <div className="testimonial-card1-texts">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam alias vel.
            </div>

            <div className="testimonial-card1-ratings">
              
            </div>

            
            </div>
        </div>
      </div>
      {/* PARTNERSHIP */}
      <div className="partnersip innerWidth paddings">
      <h3>BECOME A  PARTNER</h3>
      <div className="partnership-info">
        <div className="partnership-info-left">
          <div className="partnership-info-left-icon1">
            <FaPhone className='sks'/>
          </div>
          <div className="partnership-info-left-icon2">
            <FaM className='sks'/>
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
      

      </div>
      {/* FOOTER */}
      <div className="footer innerWidth paddings">
        <div className="footer-right">
        <div className="footer-scout">
          <h3>SCOUTRIGHT</h3>
          <p>Footballers</p>
          <p>Scouts</p>
          <p>Support</p>
          <p>FAQ</p>

       </div>

       <div className="footer-icons">
        <h3>Socials</h3>
        <div className="footer-icons-icon">
          <FaF/>
          <FaInfo/>
          <FaY/>
          <FaT/>
        </div>

       </div>
        </div>

        <div className="footer-right">
          <p>Susbribe Newsletter</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus quidem </span>
        

        </div>
       
      </div>
     
    </div>
  
        </div>



   
  )

}

export default Landing