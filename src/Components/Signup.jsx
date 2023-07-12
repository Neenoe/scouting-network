import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import {ReactComponent as GoogleIcon} from '../assets/Svg/googleLogo.svg';
import { theme } from "../Components/Discover/theme";
import { auth } from "../firebase";

const Signup = () => {
const [signupAs, setSignupAs] = useState('scout');

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');

const handleInputChange = (setState)=> (event)=>{
  setState(event.target.value)
};

const handleSignUp = (event) =>{
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      console.log(error)
    })
  ;
}

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
    <Stack direction="column" sx={{ justifyContent: "center" }}>
      <form onSubmit={handleSignUp}>
        
      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{
          width: "100%",
          height: "80px",
          color: "gray",
          borderColor: "#223E88",
          textTransform: "none",
          borderRadius: "10px",
        }}
      >
        Sign up with Google
      </Button>
      <Typography fontWeight='500' textAlign="center" sx={{ mt: "29px" }}>
        OR
      </Typography>
      <div>
        <Typography color="#817F7F" sx={{ mt: "16px" }}>
           Name
        </Typography>
        <TextField
          value={name}
          onChange={handleInputChange(setName)}
          fullWidth
          sx={{
            fieldset: {
              borderColor: "#223E88",
              height: "80px",
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
              height: "80px",
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
              height: "80px",
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
              size="large"
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
            size="large"
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
          height: "80px",
          textTransform: "none",
          borderRadius: "10px",
          mt: "50px",
        }}
      >
        Sign up
      </Button>
      <Stack gap="5px" direction="row" sx={{ mt: "38px" }}>
        <Typography color="#817F7F">Already an account?</Typography>{" "}
        <Typography color="primary">Sign in</Typography>
      </Stack>
      </form>
    </Stack>
  </ThemeProvider>
  )
}

export default Signup
