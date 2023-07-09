import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { Box, Modal, Typography } from "@mui/material";
import Login from "../Login";
import Signup from "../Signup";
import {BiMenuAltRight} from 'react-icons/bi'
import { FaLinesLeaning } from "react-icons/fa6";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 649,
  bgcolor: "background.paper",
  p: '96px 64px',
};

function Nav() {
  const [open, setOpen] = useState(false);
  const [authType, setAuthType] = useState();
  
  const handleOpen = (e) => {
    setOpen(true)
    setAuthType(e.target.id)
  };
  const handleClose = () => setOpen(false);
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return{right: !menuOpened ? '0' : '-100%'}
    }
  }
  

  return (
    <div>
         <div className="header flexCenter paddings innerWidth">
                <div className="header-logo">
                <h3>SCOUTING REPORT</h3>
                </div>
                <div className={`header-list flexStart ${menuOpened ? "active" : ""}`} style={getMenuStyles(menuOpened)}>
                   <Link to="/"> <div>HOME</div> </Link> 
                 <Link to="/discover">  <div>DISCOVER</div> </Link> 
                   <Link to="/blog">  <div>BLOG</div> </Link>
                  <Link to="/login"> <div>LOGIN</div> </Link> 
                  <div className="header-btn">
          <button id ='signup' onClick={(e)=>handleOpen(e)}>REGISTER</button>
        </div> 
                </div>

       

        <div className='menu-icon'
        onClick={() => setMenuOpened((prev) =>!prev)}
        >
    <BiMenuAltRight size={30}/>

    </div>
      </div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {authType==='login'? <Login/> : <Signup/>}
          </Typography>
         
        </Box>
      </Modal>


    </div>
  );
}

export default Nav;
