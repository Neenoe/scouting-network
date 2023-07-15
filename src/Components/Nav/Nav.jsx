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
import { useIdleTimer } from 'react-idle-timer';

const style = {
  maxHeight: "800px",
  position: "absolute",
  overflowY: "scroll",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "649px",
  bgcolor: "background.paper",
  p: "96px 64px",
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

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened ? "0" : "-100%" };
    }
  };

  return (
    <div>
      <div className="header flexCenter paddings innerWidth">
        <div className="header-logo">
          <h3>SCOUTING REPORT</h3>
        </div>
        <div
          className={`header-list flexStart`}
        >
          <Link to="/">
            {" "}
            <div>HOME</div>{" "}
          </Link>
          <Link to="/discover">
            {" "}
            <div>DISCOVER</div>{" "}
          </Link>
           {/* <Link to="/ScoutProfile">
            {" "}
            <div>DISCOVER</div>{" "}
          </Link> */}
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
        <Login setLocalValue={setLocalValue} localValue={localValue}/>
         : 
         <Signup setLocalValue={setLocalValue} localValue={localValue} />
         }
         </Box>
      </Modal>
    </div>
  );
}

export default Nav;
