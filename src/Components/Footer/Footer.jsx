import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons';
import FooterLogo from './../FooterLogo'
import FooterLogoMobile from '../FooterLogoMobile';
function Footer() {
  return (
    <div className='footer-container innerWidth'>
            <div className="footer">
        <div className="footer-left">
        <div className="footer-scout">
          <div className="scout-img">
        <FooterLogo className='foot-img'/>
          </div>
          
          <p>Footballers</p>
          <p>Scouts</p>
          <p>Support</p>
          <p>FAQ</p>

       </div>

       <div className="footer-icons">
        <h3>Socials</h3>
        <div className="footer-icons-icon">
       
       <div className="social-icon1">
       <SocialIcon url="https://twitter.com" network="twitter" className='hi-con'  bgColor="#fff" fgColor='#1DA1F2'   />
       <SocialIcon url="https://facebook.com" network="facebook" className='hi-con' bgColor="#fff" fgColor='#1DA1F2' />
       <SocialIcon url="https://youtube.com" network="youtube" className='hi-con' bgColor="#fff" fgColor='#FF0000' />
       <SocialIcon url="https://instagram.com" network="instagram" className='hi-con' bgColor="#fff" fgColor='#FF0000' />

       </div>

       <div className="social-icon">
       <SocialIcon url="https://twitter.com"  network="twitter" className='hi-con'  bgColor="#fff" fgColor='#1DA1F2' style={{width: 12}} />
       <SocialIcon url="https://facebook.com"  network="facebook" className='hi-con' bgColor="#fff" fgColor='#1DA1F2' style={{width: 12}} />
       <SocialIcon url="https://youtube.com"  network="youtube" className='hi-con' bgColor="#fff" fgColor='#FF0000' style={{width: 12}} />
       <SocialIcon url="https://instagram.com"  network="instagram" className='hi-con' bgColor="#fff" fgColor='#FF0000' style={{width: 12}} />

       </div>
       
        </div>

       </div>
        </div>

        <div className="footer-right">
          <p>Susbribe Newsletter</p>
          <span>Never miss what matters with our <br /> daily free newsletter delivered into <br /> your inbox </span>
          <div className="footer-right-info innerWidth">
            <div className="footer-right-info1">
            <label htmlFor="username" placeholder='Your Name'></label>
        <input type="text" id="username" name="username"  placeholder='Enter Your Email' className='info'></input>
            </div>
            <div className="footer-right-info2">
            <button>SEND</button>

            </div>
            </div>
         
       

          </div>

        

        </div>

        
        <div className='footer-mobile'>
          <div className='footer-1'>
            <h3>Football is <span>played</span>  with the head <span>  your foot</span> is the tool</h3>
            <button>SIGN UP</button>

          </div>
          <div className='footer-2'>
            <h3>NEED HELP</h3>
            <span>Email</span>

          </div>
          <div className='footer-3'>
            <h3>PAGES</h3>
            <p>Home</p>
            <p>Top Scouts</p>
            <p>Testimonials</p>
            <p>Blog</p>
            <p>Discover</p>

          </div>
          <div className='footer-4' style={{marginBottom: '2rem'}}>
            <div className="mobile-icon">
            <SocialIcon url="https://twitter.com"  network="twitter" className='hi-con'  bgColor="#fff" fgColor='#1DA1F2'  style={{width: 30, height: 30}} />
       <SocialIcon url="https://facebook.com"  network="facebook" className='hi-con' bgColor="#fff" fgColor='#1DA1F2' style={{width: 30, height: 30}} />
       <SocialIcon url="https://youtube.com"  network="youtube" className='hi-con' bgColor="#fff" fgColor='#FF0000' style={{width: 30, height: 30}} />
       <SocialIcon url="https://instagram.com"  network="instagram" className='hi-con' bgColor="#fff" fgColor='#FF0000' style={{width: 30, height: 30}} />
            </div>
            <div className="footer-logo" style={{width: '50px', height: '80px'}}>
            <FooterLogoMobile style={{height: '50%', width: '50%'}}/>
            </div>
           
         
      

          </div>

        </div>
        
       
      
    </div>
  )
}

export default Footer