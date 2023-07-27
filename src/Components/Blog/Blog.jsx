import React , { useState, useRef, useEffect } from 'react'
import Nav from './../Nav/Nav'
import {meal} from './../../Constants/index'
import './blog.css'
import { BsFillPauseFill, BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {data} from './../../Constants/data'
import Footer from './../Footer/Footer';
import {images } from './../../Constants';
// import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
function Blog() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollRef = React.useRef(null);


  const galleryImages = [images.r1, images.r2, images.r3];
 
  return (
    <div className='blog-container paddings innerWidth'>
        <div className="blog-wrapper">
            <Nav/>

          
        </div>
          {/* media */}
          <div className='blogging'
      style={{
        position: 'relative',
        width: '100%',
        height: '400px', 
      }}
    >

  
      <video
      src={meal} type="video/mp4"
      ref={videoRef}
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          
        }}
      />
         
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          background: 'rgba(48, 45, 45, 0.37)', 
        }}
      >
            <div className='blog-media innerWidth paddings'>

<div className="blog-media-left">
  <h3>Stay <span>Updated</span> <br /> With <span>Latest</span> News</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. et accusamus veniam quasi molestiae fuhjkhghgiat hic molestias.</p>

</div>
<div className="blog-media-right">
<div className='app__video-overlay_circle ' onClick={handleVideo}> 

{isPlaying ? (
  <BsPauseFill color='#fff' fontSize={76} className='icon'/>
) : <BsFillPlayFill color='#fff' fontSize={76} className='icon'/>}

</div>
  <button>Watch Now</button>

</div>

</div>
      
      </div>
    </div>

    {/* highlight */}

    <div className="highlight-wrapper innerWidth paddings">
      <div className="highlight-intro">
        <h2>  Training highlight</h2>
        <button>Watch More</button>
        </div>

 
        <div className="highlight-details" ref={scrollRef}>
  <div className="highlight-item">
    <img src={data[20].imag} alt="" />
    <p>{data[0].duration}</p>
    <BsFillPauseFill className='stop'/>
  </div>
  <div className="highlight-item">
    <img src={data[21].imag} alt="" />
    <p>{data[1].duration}</p>
    <BsFillPauseFill className='stop'/>
  </div>
  <div className="highlight-item">
    <img src={data[22].imag} alt="" />
    <p>{data[2].duration}</p>
    <BsFillPauseFill className='stop'/>
  </div>
</div>

      

    </div>

    {/* signing */}
   
    
     <div className='r-gallery-images paddings innerWidth'>
     <div className="signee-intro">
        <h2>  Latest Signings</h2>
        <button>View All</button>
        </div>
          {/* <div className='r-gallery-images_container' ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div className='r-gallery-images_card ' key={`gallery_image-${index + 1}`}>
                <img src={image} alt="img" />
              
              </div>
            ))}
          </div> */}
               <div className="highlight-details" ref={scrollRef}>
  <div className="highlight-item">
    <img src={data[23].imag} alt="" />
   
  </div>
  <div className="highlight-item">
    <img src={data[24].imag} alt="" />
   
  </div>
  <div className="highlight-item">
    <img src={data[26].imag} alt="" />
   
  </div>
</div>

         
        </div>
    

    {/* Interviews */}
    <div className="interviews-wrapper innerWidth paddings">
    <div className="interviews-intro paddings">
        <h2>  Explore Our interviews by Categories</h2>
        <div className="interviews-intro-btns">
        <button>All</button>
        <button>Male Footbller</button>
        <button>Female Footballer</button>
        <button>Football Scout</button>
        <button>Signees</button>
  
        </div>
        </div>

        <div className="interviews-media">
          <div className='interviews-title'>
          <img src={data[25].imag} alt="" />
            <span>10m</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='interviews-title'>
          <img src={data[28].imag} alt="" />
            <span>15m</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='interviews-title'>
          <img src={data[27].imag} alt="" />
            <span>15m</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

        </div>
     

    </div>

  

    {/* weekly podcast */}
   

    {/* top-rated */}

    <div className="toprated innerWidth paddings">
    <div className="toprated-intro">
        <h2>  TOP RATED PODCAST</h2>
        <button>Watch More</button>
        </div>

        <div className="toprated-details">
        <div className="toprated1">
        <img src={data[32].imag} alt="" />
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>
      <div className="toprated1">
        <img src={data[33].imag} alt="" />
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>
      <div className="toprated1">
        <img src={data[34].imag} alt="" />
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>

        </div>

    </div>
    {/* help */}
   
  

        {/*  */}

       

        {/*  */}

 

    {/* Footer */}
     <Footer/>
    




    </div>
  )
}

export default Blog