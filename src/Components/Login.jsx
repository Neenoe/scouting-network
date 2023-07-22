import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery
} from "@mui/material";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ReactComponent as GoogleIcon } from "../assets/Svg/googleLogo.svg";
import { theme } from "./Discover/theme";
import { auth, provider } from "../firebase";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = ({setLocalValue, localValue}) => {
    const mdQuery = useMediaQuery('(min-width:900px)');
    const xsQuery = useMediaQuery('(min-width:0px)');

  const [checkStatus, setCheckStatus] = useState("remember");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleSignin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.code}. Please check login details`);
      });
  };
  const navigate = useNavigate();

  useEffect(()=> {
    const listen = onAuthStateChanged(auth, (user)=> {
      if (user) {
        navigate('/')
      }else {
        return user
      }
    })
    return () => {
      listen();
    }
  }, [navigate])


const handleGoogleAuth = ()=> {
  signInWithPopup(auth, provider).then((data)=>{
    setLocalValue(data.user.email)
    localStorage.setItem("email", data.user.email)
  })
}

useEffect(()=>{
  setLocalValue(localStorage.getItem('email'))
  navigate('/Discover')
},[navigate, setLocalValue])

  const handleCheckButton = (e) => {
    if (checkStatus === e.target.id) {
      setCheckStatus("");
    }
    if (checkStatus !== e.target.id) {
      setCheckStatus(e.target.id);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Toaster
        toastOptions={{
          error: {
            duration: 3000,
            theme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
      <Stack direction="column" sx={{ justifyContent: "center" }}>
        <form onSubmit={handleSignin}>
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
            Sign in with Google
          </Button>
          <Typography fontWeight="500" textAlign="center" sx={{ mt: {xs:'16px', md:"29px"} }}>
            OR
          </Typography>
          <div>
            <Typography color="#817F7F" sx={{ mt: {xs:'8px', md:"16px"} }}>
              User Name
            </Typography>
            <TextField
              value={email}
              onChange={handleInputChange(setEmail)}
              type="email"
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
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: {xs:'0px', md:"5px"},
              mt: "40px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkStatus === "remember"}
                  id="remember"
                  onClick={(e) => handleCheckButton(e)}
                  size={mdQuery? 'large':'small'}
                  sx={{
                    color: theme.palette.primary,
                    "&.Mui-checked": {
                      color: theme.palette.primary,
                    },
                  }}
                />
              }
              label="Remember Me"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkStatus === "forgotPass"}
                  id="forgotPass"
                  onClick={(e) => handleCheckButton(e)}
                  size= {mdQuery? 'large':'small'}
                  sx={{
                    color: theme.palette.primary,
                    "&.Mui-checked": {
                      color: theme.palette.primary,
                    },
                  }}
                />
              }
              label="Forgot Password"
            />
          </FormGroup>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: {xs:'60px', md:"80px"},
              textTransform: "none",
              borderRadius: "10px",
              mt: "50px",
            }}
            type="submit"
          >
            Log in
          </Button>
          <Stack gap="5px" direction="row" sx={{ mt: "38px" }}>
            <Typography color="#817F7F">Don't have an account?</Typography>{" "}
            <Typography color="primary">Sign up</Typography>
          </Stack>
        </form>
      </Stack>
    </ThemeProvider>
  );
};

export default Login;
