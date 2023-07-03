import React, {  useState } from "react";
import {
  ThemeProvider,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Typography,
  Box,
  Stack,
  Avatar,
  Grid,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { theme } from "./theme";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import playerData from "../../data/playerData.json";

import {ReactComponent as Profile} from '../../assets/Svg/profile.svg';
import {ReactComponent as Pitch} from '../../assets/Svg/pitch.svg';
import {ReactComponent as Boot} from '../../assets/Svg/boot.svg';
import {ReactComponent as Location} from '../../assets/Svg/location.svg';
import {ReactComponent as Star} from '../../assets/Svg/star.svg';


const Discover = () => {
  const filterButtons = [
    "AGE",
    "SEX",
    "FOOT",
    "POSITION",
    "HEIGHT",
    "RATING",
    "LOCATION",
    "SKILLS",
  ];

const [buttonIndex, setButtonIndex] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <main>
          <div
            maxWidth="xl"
            style={{
              padding: "31px 100px",
              textAlign: "start",
            }}
          >
            <TextField
              variant="filled"
              InputProps={{
                sx: {
                  height: "75px",
                  padding: "0px 0px 0px 1rem",
                  backgroundColor: "white",
                  width: "820px",
                  boxShadow: "3",
                },
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment>
                    <Button
                      color="secondary"
                      text-primary
                      variant="contained"
                      style={{ height: "75px", width: "125px" }}
                    >
                      <IconButton edge="end" color="primary">
                        <Search fontSize="large" />
                      </IconButton>
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <Box>
              <Typography sx={{ marginY: "31px" }}>Filter</Typography>
              <Stack
                direction="row"
                sx={{ width: "50%", flexWrap: "wrap", gap: "35px 44px" }}
              >
                {filterButtons.map((item, index) => (
                  <Button
                  backgroundColor='primary'
                  onClick={()=> setButtonIndex(index)}
                    variant={`${index ===buttonIndex? 'contained': 'outlined'}`}
                    sx={{ height: "44px", width: "107px", borderColor: "gray",  }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
              <Stack
                direction="row"
                sx={{
                  mt: "81px",
                  width: "100%",
                  flexWrap: "wrap",
                  gap: "35px 44px",
                }}
              >
                {playerData.map((player) => (
                  <Box sx={{ width: "596px", height: "531px" }} id={player.id}>
                    <Stack
                      sx={{
                        height: "215px",
                        width: "100%",
                        backgroundColor: "primary.light",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                      }}
                    >
                      <Avatar
                        alt="player"
                        src="https://s.hdnux.com/photos/01/14/12/43/19966188/6/rawImage.jpg"
                        sx={{ width: "148px", height: "148px" }}
                      />
                      <Typography>{player?.name}</Typography>
                    </Stack>
                    <Box
                      sx={{
                        height: "316px",
                        backgroundColor: "sgray.main",
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                      }}
                    >
                      <Grid container sx={{width:'367px', height:'163.12px', justifyContent:'center'}}>
                        <Grid item md={4}>
                          <Stack direction='row' sx={{alignItems:'center', gap:'5px'}} ><Profile/><Typography fontSize={12}>{player?.age} yrs</Typography></Stack>
                        </Grid>
                        <Grid item md={4}>
                        <Stack direction='row' sx={{alignItems:'center', paddingLeft:'30px', gap:'5px'}}><Pitch/><Typography fontSize={12}>{player?.position}</Typography></Stack>
                        </Grid>
                        <Grid item md={4}>
                        <Stack direction='row' sx={{alignItems:'center', paddingLeft:'30px', gap:'5px'}}><Boot/><Typography fontSize={12} >{player?.foot}</Typography></Stack>
                        </Grid>
                        <Grid item md={4}>
                        <Stack direction='row' sx={{alignItems:'center', gap:'5px'}}><Location/><Typography fontSize={12}>{player?.location}</Typography></Stack>
                        </Grid>
                        <Grid item md={4}>
                        <Stack direction='row' sx={{alignItems:'center', paddingLeft:'30px', gap:'5px'}}><Profile/><Typography fontSize={12} >{player?.gender}</Typography></Stack>
                        </Grid>
                        <Grid item md={4}>
                        <Stack direction='row' sx={{alignItems:'center', paddingLeft:'30px', gap:'5px'}}><Star/><Typography fontSize={12}>{player?.rating}/5</Typography></Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Discover;
