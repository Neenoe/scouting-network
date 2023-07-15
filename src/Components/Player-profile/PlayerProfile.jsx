import React, {  useState } from "react";
import './scoutprofile.css'
import {data} from './../../Constants/data'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Footer from "../Footer/Footer";

function ScoutProfile() {
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[""];
  const _onSelect = (selectedOption) => {
    console.log(selectedOption); // Do something with the selected option
  };

  
  return (
    <div className='scoutprofile innerWidth paddings'>
        <div className="top">

          
        </div> 
        <div className="scout-img">
          <img src={data[37].imag} alt="" />
        </div>  
       

        <div className="input-details">
        <label for="username" placeholder='Your Name'></label>
        <input type="text" id="username" name="username"  placeholder='FIRST NAME' className='info-input'></input>
        <label for="username" placeholder='Your Name'></label>
        <input type="text" id="username" name="username"  placeholder='LAST NAME' className='info-input'></input>
        </div>
        {/*  */}
        <label for="email" placeholder='EMAIL'></label>
        <input type="text" id="email" name="email"  placeholder='EMAIL' className='info-input1'></input>
     
    <div className="dropdown">
    <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="NATIONALITY" className="drop"/>

    </div>
    <label for="username" placeholder='Your Name'></label>
        <input type="text" id="username" name="username"  placeholder='SCOUT' className='info-input1'></input>
        <div className="dropdown">
    <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="INTEREST" className="drop"/>

    </div>
    <label for="username" placeholder='Your Name'></label>
        <input type="text" id="username" name="username"  placeholder='ORGANISATION' className='info-input1'></input>

        <div className="checkbox"/>

        <h4>Your Bio</h4>
        <label for="w3review"></label>

<textarea id="w3review" name="w3review" rows="14" cols="150">

</textarea>

<div className="scout-button">
  <button>SAVE</button>
</div>
<Footer/>
 

    </div>
  )
}

export default ScoutProfile