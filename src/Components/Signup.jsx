import { Box, Button, Stack } from '@mui/material'
import React from 'react';
import {ReactComponent as GoogleIcon} from '../assets/Svg/googleLogo.svg';

const Signup = () => {
  return (
    <Stack direction='column' sx={{justifyContent:'center'}}>
      <Button variant='outlined'  startIcon={<GoogleIcon/>} sx={{width:'100%', height:'80px', color:'gray', borderColor:'primary', textTransform: 'none'}}>
        Sign up with Google
      </Button>
    </Stack>
  )
}

export default Signup
