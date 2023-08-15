import React , { useState, useRef } from 'react'
import Nav from './../Nav/Nav'
import {interviewthree, meal} from './../../Constants/index'
import {trainingone, trainingtwo, trainingthree, interviewone, interviewtwo} from './../../Constants/index'
import './blog.css'
import { BsFillPauseFill, BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {data} from './../../Constants/data'
import Footer from './../Footer/Footer';


function Blog() {
  

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHighlightVideoPlaying, setIsHighlightVideoPlaying] = useState(false);
  const [isHighlightVideoOnePlaying, setIsHighlightVideoOnePlaying] = useState(false);
  const [isHighlightVideoTwoPlaying, setIsHighlightVideoTwoPlaying] = useState(false);
  const [isInterviewVideoPlaying, setIsInterviewVideoPlaying] = useState(false);
  const [isInterviewVideoOnePlaying, setIsInterviewVideoOnePlaying] = useState(false);
   const [isInterviewVideoTwoPlaying, setIsInterviewVideoTwoPlaying] = useState(false);

  const videoRef = useRef(null);
  const highlightVideoRef = useRef(null);
  const highlightVideoOneRef = useRef(null);
  const highlightVideoTwoRef = useRef(null);
  const interviewVideoRef = useRef(null);
   const interviewVideoOneRef = useRef(null);
    const interviewVideoTwoRef = useRef(null);
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
 
  const handleHighlightVideo = () => {
    const videoElement = highlightVideoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      setIsHighlightVideoPlaying(!videoElement.paused);
    }
  };

   const handleHighlightVideoOne = () => {
    const videoElement = highlightVideoOneRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      setIsHighlightVideoOnePlaying(!videoElement.paused);
    }
  };

  const handleHighlightVideoTwo = () => {
    const videoElement = highlightVideoTwoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      setIsHighlightVideoTwoPlaying(!videoElement.paused);
    }
  };

  const handleInterviewVideo = () => {
    const videoElement = interviewVideoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      setIsInterviewVideoPlaying(!videoElement.paused);
    }
  }

  const handleInterviewVideoOne = () => {
    const videoElement = interviewVideoOneRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      setIsInterviewVideoOnePlaying(!videoElement.paused);
    }
  }

  const handleInterviewVideoTwo = () => {
    const videoElement = interviewVideoTwoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
      setIsInterviewVideoTwoPlaying(!videoElement.paused);
    }
  }
 
  const scrollRef = React.useRef(null);

 
  return (
    <div className='blog-container innerWidth'>
        <div className="blog-wrapper">
            <Nav/>

          
        </div>
          {/* media */}

          <div className="blog-hero">
            <div className="blog-hero-wrapper">
            <div className='blogging'
      style={{
        position: 'relative',
        width: '100%',
        height: '400px', 
        borderRadius: '10px'
      }}
    >

  
      <video
      src={meal} type="video/mp4"
      ref={videoRef}
        
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '10px'
          
        }}
      />
         
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          background: 'rgba(48, 45, 45, 0.37)',
          borderRadius: '10px' 
        }}
      >
            <div className='blog-media innerWidth paddings'>

<div className="blog-media-left">
  <h3>Stay <span>Updated</span> <br /> With <span>Latest</span> News</h3>
  <p>"Stay informed and up-to-date with the latest breaking news from around the world. Get your daily dose of updates here!"</p>

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
            </div>
      
          </div>
   {/* hgihlight-one */}
   <div className="interviews-wrapper">
    <div className="interviews-intro">
      <div className='training-details'>

      <h3>  Training Highlight</h3>
        <div className="training-btns">
        
        <button>Watch More</button>
  
        </div>
        </div>
        

        <div className="interviews-media">
          <div className='interviews-title'>
            <div className="interviews-img">
            {/* <img src={data[25].imag} alt="" /> */}
            <video
      src={trainingone} type="video/mp4"
         ref={highlightVideoRef}
        
        loop
        style={{width: '100%',
        height: '100%',
        objectFit: 'cover',
         borderRadius: '10px'
       }}
      />

            <span className="time-span">10m</span>
            </div>
         
            
            {isHighlightVideoPlaying? (
        <BsFillPauseFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleHighlightVideo}
        />
      ) : (
        <BsFillPlayFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleHighlightVideo}
        />
      )}
            {/* <p>Electrifying interview with one outstanding young footballer at trials</p> */}
          </div>
          <div className='interviews-title'>
          <div className="interviews-img">
            {/* <img src={data[27].imag} alt="" /> */}
            <video
      src={trainingtwo} type="video/mp4"
         ref={highlightVideoOneRef}
        loop
        style={{width: '100%',
        height: '100%',
        objectFit: 'cover',
         borderRadius: '10px',
         
       }}
      />
            <span className="time-span">10m</span>
            </div>
           
            {isHighlightVideoOnePlaying? (
        <BsFillPauseFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleHighlightVideoOne}
        />
      ) : (
        <BsFillPlayFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleHighlightVideoOne}
        />
      )}
            {/* <p>Insightful interview with one of the top scouts.</p> */}
          </div>
          <div className='interviews-title'>
          <div className="interviews-img">
            {/* <img src={data[28].imag} alt="" /> */}
            <video
      src={trainingthree} type="video/mp4"
         ref={highlightVideoTwoRef}
        
        loop
        style={{width: '100%',
        height: '100%',
        objectFit: 'cover',
         borderRadius: '11px'
       }}
      />
            <span className="time-span">10m</span>
            </div>
           
             {isHighlightVideoTwoPlaying? (
        <BsFillPauseFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleHighlightVideoTwo}
        />
      ) : (
        <BsFillPlayFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleHighlightVideoTwo}
        />
      )}
            {/* <p>Spot light on new signee after medicals</p> */}
          </div>

        </div>
        </div>
     

    </div>

    {/* highlight */}

  

    {/* signing */}
   
    
     <div className='r-gallery-images '>
      <div className="signing-container">
      <div className="signee-intro">
        <h2>  Latest Signings</h2>
        <button>View All</button>
        </div>
        <div className="highlight-details" ref={scrollRef}>
          <div className="signing-details">
          <div className="highlight-item">
    <img src={data[20].imag} alt="" />
   
  </div>
  <div className="highlight-item">
    <img src={data[23].imag} alt="" />
   
  </div>
  <div className="highlight-item">
    <img src={data[21].imag} alt="" />
   
  </div>
          </div>

</div>
      </div>
 
        </div>
    

    {/* Interviews */}
    <div className="interviews-wrapper">
    <div className="interviews-intro">
      <div className='interview-details'>

      
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
            <div className="interviews-img">
            {/* <img src={data[25].imag} alt="" /> */}
            <video
      src={interviewone} type="video/mp4"
         ref={interviewVideoRef}
        
        loop
        style={{width: '100%',
        height: '100%',
        objectFit: 'cover',
         borderRadius: '10px'
       }}
      />

            <span className="time-span">10m</span>
            </div>
         
            
            {isInterviewVideoPlaying? (
        <BsFillPauseFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleInterviewVideo}
        />
      ) : (
        <BsFillPlayFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleInterviewVideo}
        />
      )}
            <p>Electrifying interview with one outstanding young footballer at trials</p>
          </div>
          <div className='interviews-title'>
          <div className="interviews-img">
            {/* <img src={data[27].imag} alt="" /> */}
            <video
      src={interviewtwo} type="video/mp4"
         ref={interviewVideoOneRef}
        loop
        style={{width: '100%',
        height: '100%',
        objectFit: 'cover',
         borderRadius: '10px',
         
       }}
      />
            <span className="time-span">10m</span>
            </div>
           
            {isInterviewVideoOnePlaying? (
        <BsFillPauseFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleInterviewVideoOne}
        />
      ) : (
        <BsFillPlayFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleInterviewVideoOne}
        />
      )}
            <p>Insightful interview with one of the top scouts.</p>
          </div>
          <div className='interviews-title'>
          <div className="interviews-img">
            {/* <img src={data[28].imag} alt="" /> */}
            <video
      src={interviewthree} type="video/mp4"
         ref={interviewVideoTwoRef}
        
        loop
        style={{width: '100%',
        height: '100%',
        objectFit: 'cover',
         borderRadius: '11px'
       }}
      />
            <span className="time-span">10m</span>
            </div>
           
             {isInterviewVideoTwoPlaying? (
        <BsFillPauseFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleInterviewVideoTwo}
        />
      ) : (
        <BsFillPlayFill
          className='stop'
          style={{ cursor: 'pointer' }}
          onClick={handleInterviewVideoTwo}
        />
      )}
            <p>Spot light on new signee after medicals</p>
          </div>

        </div>
        </div>
     

    </div>

  

    {/* weekly podcast */}


   

    {/* top-rated */}

    <div className="toprated">
      <div className="toprated-container">
      <div className="toprated-intro">
        <h2>  TOP RATED PODCAST</h2>
        <button>Watch More</button>
        </div>
        <div className="toprated-details">
        <div className="toprated1">
          <div className="toprated1-img">
          <img src={data[29].imag} alt="" />
          </div>
       
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[26].imag} alt="" />
        </div>
        <p>Top scout bear their thoughts <br /> about the young talents</p>
      </div>
      <div className="toprated1">
      <div className="toprated1-img">
          <img src={data[31].imag} alt="" />
          </div>
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[26].imag} alt="" />
        </div>
        <p>A talk on how to connect with <br /> football scout.</p>
      </div>
      <div className="toprated1">
      <div className="toprated1-img">
          <img src={data[30].imag} alt="" />
          </div>
        <div className="toprated-icon">
          <BsFillPauseFill className='pause'/>
          <img src={data[26].imag} alt="" />
        </div>
        <p>Time out with the successful  <br /> players at the just concluded trials</p>
      </div>

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