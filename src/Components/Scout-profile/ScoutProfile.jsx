import React, { useState } from "react";
import "./scoutprofile.css";
import { data } from "./../../Constants/data";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

function ScoutProfile() {
  const options = ["One", "Two", "Three"];
  const defaultOption = options[""];
  const _onSelect = (selectedOption) => {
    console.log(selectedOption); // Do something with the selected option
  };

  return (
    <div>
      <Nav />
      <div className="scoutprofile innerWidth paddings">
        <div className="top">
        <div className="scout-imgg">
          <img src={data[32].imag} alt="" />
        </div>
        </div>
       

        <div className="input-details">
          
          <input
            type="text"
            id="username"
            name="username"
            placeholder="FIRST NAME"
            className="info-input"
          ></input>
          
          <input
            type="text"
            id="username"
            name="username"
            placeholder="LAST NAME"
            className="info-input"
          ></input>
        </div>
        {/*  */}
        <div className="email">
      <input
          type="text"
          id="email"
          name="email"
          placeholder="EMAIL"
          className="info-input1"
        ></input>
      </div>

        <div className="dropdown">
          <Dropdown
            options={options}
            onChange={_onSelect}
            value={defaultOption}
            placeholder="NATIONALITY"
            className="drop"
          />
        </div>
        <div className="scoutt">
       <input
          type="text"
          id="username"
          name="username"
          placeholder="SCOUT"
          className="info-input1"
        ></input>
       </div>
        <div className="dropdown">
          <Dropdown
            options={options}
            onChange={_onSelect}
            value={defaultOption}
            placeholder="INTEREST"
            className="drop"
          />
        </div>
        <div className="organisation">
       <input
          type="text"
          id="username"
          name="username"
          placeholder="ORGANISATION"
          className="info-input1"
        ></input>
       </div>

      <div className="check">
      <input type="checkbox" className="checking" name="vehicle1" value="Bike"></input>
      
     <p>By accessing and using this website, you agree to abide by these terms and conditions.</p>
      </div>
       

        <h4>Your Bio</h4>
        <label for="w3review"></label>

        <div className="textarea">
        <textarea id="w3review" name="w3review" rows="14" cols="120"></textarea>
        </div>

        

        <div className="scout-button">
          <button>SAVE</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ScoutProfile;
