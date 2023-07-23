import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import Login from "../Login";
import Signup from "../Signup";
import { BiMenuAltRight } from "react-icons/bi";
import { FaLinesLeaning } from "react-icons/fa6";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import OutsideClickHandler from 'react-outside-click-handler'


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



  return (
    <div className="head">
      <div className="header">
        <div className="header-logo">
          <h3>SCOUTING REPORT</h3>
        </div>
        <div
          className={`header-list flexStart`}
        >
          <Link to="/">
            {" "}
            <div>Home</div>{" "}
          </Link>
          <Link to="/discover">
            {" "}
            <div>Discover</div>{" "}
          </Link>
        
          <Link to="/blog">
            {" "}
            <div>Blog</div>{" "}
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
      <GiHamburgerMenu color='#fff' className="hamburger" fontSize={25} onClick={() => setToggleMenu(true)}/>


    {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay '>

      <OutsideClickHandler onOutsideClick={() => setToggleMenu(false)}>
      
      <ul className='app__navbar-smallscreen-links'>
      <Link to="/">
            {" "}
            <div>HOME</div>{" "}
          </Link>
          <Link to="/discover">
            {" "}
            <div>DISCOVER</div>{" "}
          </Link>
          <Link to="/blog">
            {" "}
            <div>BLOG</div>{" "}
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

      </OutsideClickHandler>
      

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
