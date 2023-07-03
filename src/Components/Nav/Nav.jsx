import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
         <div className="header flexCenter paddings innerWidth">
                <div className="header-logo">
                <h3>SCOUTING REPORT</h3>
                </div>
                <div className="header-list flexStart">
                   <Link to='/'> <div>HOME</div></Link> 
                   <div>DISCOVER</div>
                   <Link to="/blog">  <div>BLOG</div> </Link>
                    <div>LOGIN</div>
                </div>

                <div className="header-btn">
                    <button>REGISTER</button>
                </div>
            </div>
    </div>
  )
}

export default Nav