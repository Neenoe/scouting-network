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

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 200;
    } else {
      current.scrollLeft += 200;
    }
  };
  const galleryImages = [images.r1, images.r2, images.r3, images.r4, images.r5];
 
  return (
    <div className='blog-container paddings innerWidth'>
        <div className="blog-wrapper">
            <Nav/>

          
        </div>
          {/* media */}
          <div
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
        <h4>  Trending highlight</h4>
        <button>Watch More</button>
        </div>

        <div className="highlight-details" ref={scrollRef}>
          <div>
          <p>{data[0].duration}</p>
          <img src={data[20].imag} alt="" />
          </div>
          <div>
          <p>{data[1].duration}</p>
          <img src={data[21].imag} alt="" />
          </div>
          <div>
          <p>{data[2].duration}</p>
          <img src={data[22].imag} alt="" />
          </div>
          
        </div>

      

    </div>
    {/* Signees */}

    {/* <div className="signee-wrapper innerWidth paddings">
    <div className="signee-intro">
        <h4>  Latest Signings</h4>
        <button>View All</button>
        </div>

        <div className="signee-details">
          <div>
         
          <img src={data[23].imag} alt="" />
          </div>
          <div>
         
          <img src={data[24].imag} alt="" />
          </div>
          <div>
        
          <img src={data[26].imag} alt="" />
          </div>
          
        </div>


    </div> */}
    
     <div className='r-gallery-images paddings innerWidth'>
     <div className="signee-intro">
        <h4>  Latest Signings</h4>
        <button>View All</button>
        </div>
          <div className='r-gallery-images_container' ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div className='r-gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt="img" />
              
              </div>
            ))}
          </div>

         
        </div>
    

    {/* Interviews */}
    <div className="interviews-wrapper innerWidth paddings">
    <div className="interviews-intro paddings">
        <h4>  Explore Our interviews by Categories</h4>
        <div className="interviews-intro-btns">
        <button>All</button>
        <button>Male Footbller</button>
        <button>Female Footballer</button>
        <button>Football Scout</button>
        <button>Signees</button>
  
        </div>
        </div>

        <div className="interviews-media">
          <div>
            <span>45s</span>
            <img src={data[27].imag} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, tempore!</p>
          </div>
          <div>
            <span>45s</span>
            <img src={data[28].imag} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, tempore!</p>
          </div>
          <div>
            <span>45s</span>
            <img src={data[25].imag} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, tempore!</p>
          </div>

        </div>
     

    </div>

    {/* most viwed */}
    <div className="mostviewed paddings innerWidth">
    <div className="mostviewed-intro">
        <h4>  Trending highlight</h4>
        <button>Watch More</button>
        </div>
        <div className="mostviewed-details">
          <img src={data[17].imag} alt="" />
          <div className="mostviwed-texts">
            <h6>INDEPT INTERVIEWS WITH THE SCOUTS</h6>
            <p>Resume: 45m left <span>.series 12 episode 10</span></p>

          </div>
          <BsFillPlayFill className='play'/>
        </div>
        <div className="mostviewed-details">
          <img src={data[17].imag} alt="" />
          <div className="mostviwed-texts">
            <h6>INDEPT INTERVIEWS WITH THE SCOUTS</h6>
            <p>Resume: 45m left <span>.series 12 episode 10</span></p>

          </div>
          <BsFillPlayFill className='play'/>
        </div>
        <div className="mostviewed-details">
          <img src={data[17].imag} alt="" />
          <div className="mostviwed-texts">
            <h6>INDEPT INTERVIEWS WITH THE SCOUTS</h6>
            <p>Resume: 45m left <span>.series 12 episode 10</span></p>

          </div>
          <BsFillPlayFill className='play'/>
        </div>
    </div>

    {/* weekly podcast */}
    <div className="podcast innerWidth paddings">
    <div className="mostviewed-intro">
        <h4>  TRENDING HIGHLIGHT</h4>
        <button>Watch More</button>
        </div>

        <div className="podcast-details">
        <div className="podcast1">
        <img src={data[30].imag} alt="" />
        <div className="podcast-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore facilis dolor animi sequi?</p>
      </div>
      <div className="podcast1">
        <img src={data[30].imag} alt="" />
        <div className="podcast-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore facilis dolor animi sequi?</p>
      </div>
      <div className="podcast1">
        <img src={data[31].imag} alt="" />
        <div className="podcast-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore facilis dolor animi sequi?</p>
      </div>

        </div>
     

    </div>

    {/* top-rated */}

    <div className="toprated innerWidth paddings">
    <div className="toprated-intro">
        <h4>  Trending highlight</h4>
        <button>Watch More</button>
        </div>

        <div className="toprated-details">
        <div className="toprated1">
        <img src={data[32].imag} alt="" />
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore facilis dolor animi sequi?</p>
      </div>
      <div className="toprated1">
        <img src={data[33].imag} alt="" />
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore facilis dolor animi sequi?</p>
      </div>
      <div className="toprated1">
        <img src={data[34].imag} alt="" />
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[29].imag} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut labore facilis dolor animi sequi?</p>
      </div>

        </div>

    </div>
    {/* help */}
    <div className="help-wrapper innerWidth paddings">
    <div className="help-intro">
        <h4>  NEED HELP ?</h4>
        <button>View All</button>
        </div>
        <div className="help-media">
        <div>
         
         <img src={data[0].imag} alt="" />
         </div>
         <div>
        
         <img src={data[1].imag} alt="" />
         </div>
         <div>
       
         <img src={data[2].imag} alt="" />
         </div>

        </div>

    </div>
  

        {/*  */}

       

        {/*  */}

 

    {/* Footer */}
     {/* <Footer/> */}
    




    </div>
  )
}

export default Blog