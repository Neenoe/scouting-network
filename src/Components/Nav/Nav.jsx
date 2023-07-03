import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { Box, Modal, Typography } from "@mui/material";
import Login from "../Login";
import Signup from "../Signup";


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
  

  return (
    <div>
         <div className="header flexCenter paddings innerWidth">
                <div className="header-logo">
                <h3>SCOUTING REPORT</h3>
                </div>
                <div className="header-list flexStart">
                   <Link to="/"> <div>HOME</div> </Link> 
                 <Link to="/discover">  <div>DISCOVER</div> </Link> 
                   <Link to="/blog">  <div>BLOG</div> </Link>
                  <Link to="/login"> <div>LOGIN</div> </Link>  
                </div>

        <div className="header-btn">
          <button id ='signup' onClick={(e)=>handleOpen(e)}>REGISTER</button>
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
