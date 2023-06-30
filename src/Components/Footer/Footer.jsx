import React from 'react'
import insta from './../../assets/instagram.png'
import facebook from './../../assets/facebook.png'
import twitter from './../../assets/twitter.png'
import { YouTube } from '@mui/icons-material';
import youtube from './../../assets/youtube.png'
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './footer.css'

function Footer() {
  return (
    <div>
            <div className="footer innerWidth paddings">
        <div className="footer-left">
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
         {/* <BsInstagram/>
         <BsTwitter/>
         <YouTube/> */}
         <img src={facebook} alt="" />
         <img src={twitter} alt="" />
         <img src={youtube} alt="" />
    
         <img src={insta} alt="" />
        </div>

       </div>
        </div>

        <div className="footer-right">
          <p>Susbribe Newsletter</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus quidsdem </span>
          <div className="footer-right-info innerWidth">
            <div className="footer-right-info1">
            <label for="username" placeholder='Your Name'></label>
        <input type="text" id="username" name="username"  placeholder='Your Name' className='info-input'></input>
            </div>
            <div className="footer-right-info2">
            <button>SEND</button>

            </div>
         
       

          </div>
        

        </div>
       
      </div>
    </div>
  )
}

export default Footer