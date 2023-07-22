import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import {ReactComponent as GoogleIcon} from '../assets/Svg/googleLogo.svg';
import { theme } from "../Components/Discover/theme";
import { auth, provider } from "../firebase";


const Signup = ({setLocalValue, localValue}) => {
  const mdQuery = useMediaQuery('(min-width:900px)');
const [signupAs, setSignupAs] = useState('scout');

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const navigate = useNavigate();

const profileFunc= ()=>{
  if(signupAs ==='scout'){
    navigate('/ScoutProfile')
  }else if (signupAs ==='footballer'){
    navigate('/PlayerProfile')
  }
}

const handleInputChange = (setState)=> (event)=>{
  setState(event.target.value)
};

const handleSignUp = (event) =>{
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      setLocalValue(email)
      localStorage.setItem('email', email)
      profileFunc();
    })
    .catch((error) => {
      toast.error(`${error.code}. Please check details`);
      console.log(error)
    })
  ;
}

const handleGoogleAuth = ()=> {
  signInWithPopup(auth, provider).then((data)=>{
    setLocalValue(data.user.email)
    localStorage.setItem("email", data.user.email)
    profileFunc();
  })
}

useEffect(()=>{
  setLocalValue(localStorage.getItem('email'))
},[setLocalValue])

const handleCheckButton = (e)=>{
  if (signupAs=== e.target.id){
    setSignupAs('')
  }
  if (signupAs!== e.target.id){
    setSignupAs(e.target.id)
  }
}

  return (
    <ThemeProvider theme={theme}>
      <Toaster/>
    <Stack direction="column" sx={{ justifyContent: "center" }}>
      <form onSubmit={handleSignUp}>
        
      <Button
      onClick={handleGoogleAuth}
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{
          width: "100%",
          height: {xs:'60px', md:"80px"},
          color: "gray",
          borderColor: "#223E88",
          textTransform: "none",
          borderRadius: "10px",
          cursor:'pointer'
        }}
      >
        Sign up with Google
      </Button>
      <Typography fontWeight='500' textAlign="center" sx={{ mt: {xs:'16px', md:"29px"}  }}>
        OR
      </Typography>
      <div>
        <Typography color="#817F7F" sx={{ mt: {xs:'8px', md:"16px"}  }}>
           Name
        </Typography>
        <TextField
          value={name}
          onChange={handleInputChange(setName)}
          fullWidth
          sx={{
            fieldset: {
              borderColor: "#223E88",
              height: {xs:'60px', md:"80px"},
              borderRadius: "10px",
            },
          }}
        />
      </div>
      <div>
        <Typography color="#817F7F" sx={{ mt: "40px" }}>
           Email
        </Typography>
        <TextField
        value={email}
        onChange={handleInputChange(setEmail)}
        type='email'
        required
          fullWidth
          sx={{
            fieldset: {
              borderColor: "#223E88",
              height:{xs:'60px', md:"80px"},
              borderRadius: "10px",
            },
          }}
        />
      </div>
      <div>
        <Typography sx={{ mt: "40px" }} color="#817F7F">
          Password
        </Typography>
        <TextField
        value={password}
        onChange={handleInputChange(setPassword)}
        type='password'
        required
          fullWidth
          sx={{
            fieldset: {
              borderColor: "#223E88",
              height: {xs:'60px', md:"80px"},
              borderRadius: "10px",
            },
          }}
        />
      </div>
      <FormGroup sx={{display:'flex', flexDirection:'row', gap:'5px', mt:'40px'}}>
        <FormControlLabel
          control={
            <Checkbox
            checked={signupAs === 'scout' ? true : false}
            id="scout"
            onClick={(e)=>handleCheckButton(e)}
            size={mdQuery? 'large':'small'}
              sx={{
                color: theme.palette.primary,
                "&.Mui-checked": {
                  color: theme.palette.primary,
                },
              }}
            />
          }
          label="Scout"
        />
        <FormControlLabel
          control={
            <Checkbox
            checked={signupAs === 'footballer'}
            id="footballer"
            onClick={(e)=>handleCheckButton(e)}
            size={mdQuery? 'large':'small'}
              sx={{
                color: theme.palette.primary,
                "&.Mui-checked": {
                  color: theme.palette.primary,
                },
              }}
            />
          }
          label="Footballer"
        />
      </FormGroup>
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "100%",
          height: {xs:'60px', md:"80px"},
          textTransform: "none",
          borderRadius: "10px",
          mt: "50px",
        }}
      >
        Sign up
      </Button>
      <Stack gap="5px" direction="row" sx={{ mt: "38px" }}>
        <Typography color="#817F7F">Already have an account?</Typography>{" "}
        <Typography color="primary">Sign in</Typography>
      </Stack>
      </form>
    </Stack>
  </ThemeProvider>
  )
}

export default Signup
