import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { Box, Modal} from "@mui/material";
import Login from "../Login";
import Signup from "../Signup";

const style = {
  maxHeight:'800px',
  position: "absolute",
  overflowY:'scroll',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '649px',
  bgcolor: "background.paper",
  p: "96px 64px",
  "&:focus": {
    outline: "none"
  }
};

function Nav() {
  const [open, setOpen] = useState(false);
  const [authType, setAuthType] = useState();
  const handleOpen = (e) => {
    setOpen(true);
    setAuthType(e.target.id);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="header flexCenter paddings innerWidth">
        <div className="header-logo">
          <h3>SCOUTING REPORT</h3>
        </div>
        <div className="header-list flexStart">
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
        </div>

        <div className="header-btn">
          <button id="signup" onClick={(e) => handleOpen(e)}>
            REGISTER
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose} 
      >
        <Box sx={style}>{authType === "login" ? <Login /> : <Signup />}</Box>
      </Modal>
    </div>
  );
}

export default Nav;
