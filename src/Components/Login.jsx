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
import React from "react";
import { ReactComponent as GoogleIcon } from "../assets/Svg/googleLogo.svg";
import { theme } from "../Components/Discover/theme";

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column" sx={{ justifyContent: "center" }}>
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
          Sign in with Google
        </Button>
        <Typography fontWeight='500' textAlign="center" sx={{ mt: "29px" }}>
          OR
        </Typography>
        <div>
          <Typography color="#817F7F" sx={{ mt: "16px" }}>
            User Name
          </Typography>
          <TextField
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
                defaultChecked
                size="large"
                sx={{
                  color: theme.palette.primary,
                  "&.Mui-checked": {
                    color: theme.palette.primary,
                  },
                }}
              />
            }
            label="Remember me"
          />
          <FormControlLabel
            control={
              <Checkbox
              
              size="large"
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
            height: "80px",
            textTransform: "none",
            borderRadius: "10px",
            mt: "50px",
          }}
        >
          Log in
        </Button>
        <Stack gap="5px" direction="row" sx={{ mt: "38px" }}>
          <Typography color="#817F7F">Don't have an account?</Typography>{" "}
          <Typography color="primary">Sign up</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default Login;
