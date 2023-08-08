import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import Login from "../Login";
import Signup from "../Signup";
import { GiHamburgerMenu } from 'react-icons/gi';
import ScoutLogo from '../ScoutLogo'
import { motion } from "framer-motion";






const style = {
  maxHeight: {xs:"70%", md:"800px"},
  position: "absolute",
  overflowY: "scroll",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:"80%", md:"40.56rem"},
  bgcolor: "background.paper",
  p: {xs:'40px 32px', md:"96px 64px"},
  "&:focus": {
    outline: "none",
  },
};

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [open, setOpen] = useState(false);
  const [authType, setAuthType] = useState();
  const  [localValue, setLocalValue] = useState('');

  const handleOpen = (e) => {
    setOpen(true);
    setAuthType(e.target.id);
  };
  const handleClose = () => setOpen(false);
  
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
    <div className="head">
      <div className="header">
        <div className="header-logo">
        <ScoutLogo/>
        </div>
        
        <div className="header-list flexStart" 
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
     
    
        <Link to="/" onClick={() => handleLinkClick("/")}>
          {" "}
          <div className={activeLink === "/" ? "active" : ""}>Home</div>{" "}
        </Link>
        <Link to="/discover" onClick={() => handleLinkClick("/discover")}>
          {" "}
          <div className={activeLink === "/discover" ? "active" : ""}>Discover</div>{" "}
        </Link>
        <Link to="/blog" onClick={() => handleLinkClick("/blog")}>
          {" "}
          <div className={activeLink === "/blog" ? "active" : ""}>Blog</div>{" "}
        </Link>
          <div
            id="login"
            onClick={(e) => handleOpen(e)}
            style={{ cursor: "pointer" }}
          >
            Login
          </div>
          <div className="header-btn">
            <button id="signup" onClick={(e) => handleOpen(e)}>
              REGISTER
            </button>
          </div>
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
          <div
            id="login"
            onClick={(e) => handleOpen(e)}
            style={{ cursor: "pointer" }}
          >
            LOGIN
          </div>
          <div className="header-btn">
            <button id="signup" onClick={(e) => handleOpen(e)}>
              REGISTER
            </button>
          </div>
      
    </ul>

      {/* </OutsideClickHandler> */}
      

    </div>
    )}


     

    </div>

    
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{authType === "login" ? 
        <Login setOpen={setOpen} setLocalValue={setLocalValue} localValue={localValue}/>
         : 
         <Signup setOpen={setOpen}  setLocalValue={setLocalValue} localValue={localValue} />
         }
         </Box>
      </Modal>
    </div>
  );
}

export default Nav;
