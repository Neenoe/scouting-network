import React, { useState, useEffect } from "react";
import "./../Nav/nav.css";
import { Link } from "react-router-dom";
import ScoutLogo from '../ScoutLogo'
import { GiHamburgerMenu } from 'react-icons/gi';

const PlayerBioNav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
   
      
      const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
      };
    
      const [activeLink, setActiveLink] = useState("/");
      useEffect(() => {
        // This function will be called whenever activeLink changes
        // We'll update the active state of the links here.
        const currentPath = window.location.pathname;
        setActiveLink(currentPath);
      }, [activeLink]);
      const handleLinkClick = (path) => {
      setActiveLink(path);
    };
  return (
    <div>
         <div className="header" style={{paddingLeft: 35}}>
       
       <div className="header-logo">
       <ScoutLogo/>
       </div> 
       <div className="header-list flexStart" style={{marginRight: 80}}>
    
   
       <Link to="/" onClick={() => handleLinkClick("/")}>
         {" "}
         <div className={activeLink === "/" ? "active" : ""}>Overview</div>{" "}
       </Link>
       <Link >
         {" "}
         <div className={activeLink === "/" ? "active" : ""}>Messages</div>{" "}
       </Link>
       <Link >
         {" "}
         <div className={activeLink === "/" ? "active" : ""}>Notifications</div>{" "}
       </Link>
       <Link >
         {" "}
         <div className={activeLink === "/" ? "active" : ""}>Settings</div>{" "}
       </Link>
       <Link >
         {" "}
         <div className={activeLink === "/" ? "active" : ""}>Connections</div>{" "}
       </Link>
       
        
         </div>

       {/*  */}
       
       

       <div className='app__navbar-smallscreen'>
     <GiHamburgerMenu color='#fff' className="hamburger" fontSize={25} onClick={handleToggleMenu}/>


   {toggleMenu && (
   <div className='app__navbar-smallscreen_overlay '>

     {/* <OutsideClickHandler onOutsideClick={handleToggleMenu}> */}
     
     <ul className='app__navbar-smallscreen-links'>
     <Link to="/" onClick={() => handleLinkClick("/")}>
           {" "}
           <div className={activeLink === "/" ? "active" : ""} >HOME</div>{" "}
         </Link>
         <Link to="/discover" onClick={() => handleLinkClick("/discover")}>
           {" "}
           <div className={activeLink === "/discover" ? "active" : ""}>DISCOVER</div>{" "}
         </Link>
         <Link to="/blog" onClick={() => handleLinkClick("/blog")}>
           {" "}
           <div className={activeLink === "/blog" ? "active" : ""}>BLOG</div>{" "}
         </Link>
        
        
     
   </ul>

    
     

   </div>
   )}


    

   </div>

   
     </div>
    </div>
  )
}

export default PlayerBioNav