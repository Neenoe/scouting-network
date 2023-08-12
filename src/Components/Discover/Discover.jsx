import React, { useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { theme } from "./theme";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { playerData } from "../../data/playerData";

import { ReactComponent as Profile } from "../../assets/Svg/profile.svg";
import { ReactComponent as Pitch } from "../../assets/Svg/pitch.svg";
import { ReactComponent as Boot } from "../../assets/Svg/boot.svg";
import { ReactComponent as Location } from "../../assets/Svg/location.svg";
import { ReactComponent as Star } from "../../assets/Svg/star.svg";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const mdQuery = useMediaQuery('(min-width:900px)');
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

  const [buttonIndex, setButtonIndex] = useState(0);

  const navigate = useNavigate();

  const playerCardHandler= ()=>{
    navigate('/PlayerBio');
  }

  const breakpoints = {
    cursor:'pointer',
    height: {xs:'216px', md:"531px"},
    flex: 'calc(50% - 30px)'
    // flex: { xs: "calc(50% - 40px)",
    //  md: "calc(50% - 24px)"},
 };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className=" innerWidth discover">
          <Nav />
        </div>

        <main>
          <Box
            maxWidth="xl"
            sx={{
              p: {xs:'15px 30px', md:"31px 100px"},
              textAlign: "start",
            }}
          >
            <TextField
              variant="filled"
             
              InputProps={{
                sx: {
                  height: {xs:'48px', md:"75px"},
                  padding: "0px 0px 0px 1rem",
                  backgroundColor: "white",
                  width: {xs:'276px', md:"820px"},
                  boxShadow: "1",
                  borderRadius:{xs:'3px', md:'10px'},
                  overflow:'hidden',
                 
                },
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment>
                    <Button
                      color="secondary"
                      text-primary
                      variant="contained"
                      sx={{ height: {xs:'48px', md:"75px"}, width: {xs:'67px',md:"125px"} }}
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
                sx={{ width: {xs:'100%', md:"50%"}, flexWrap: "wrap", gap: {xs:'14px', md:"35px 44px"} }}
              >
                {filterButtons.map((item, index) => (
                  <Button
                    backgroundColor="primary"
                    onClick={() => setButtonIndex(index)}
                    variant={`${
                      index === buttonIndex ? "contained" : "outlined"
                    }`}
                    sx={{ height: {xs:'32px', md:"44px"}, width: {xs:'90px', md:"107px"}, borderColor: "gray" }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
              <Stack          
                justifyContent="space-between"
                direction="row"
                sx={{
                  mt: {xs:'40px', md:"81px"},
                  width: "100%",
                  flexWrap: "wrap",
                  gap: {xs:'20px 28px', md:"30px 48px"},
                }}
              >
                {playerData.map((player) => (
                  
                    <Box
                      // sx={{ width: {xs:'170px', md:"596px"}, height: {xs:'216px', md:"531px"} }}
                      sx={breakpoints}
                      id={player.id}
                      onClick={playerCardHandler}
                    >
                      <Stack
                        sx={{
                          height: {xs:'50%', md:"215px"},
                          width: "100%",
                          backgroundColor: "primary.light",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: mdQuery? 2 :0,
                        }}
                      >
                        <Avatar
                          alt="player"
                          src={player.imageURL}
                          sx={{ width: {xs:'67px', md:"148px"}, height: {xs:'67px', md:"148px"} }}
                        />
                        <Typography fontSize={mdQuery?'18px': '12px'}>{player?.name}</Typography>
                      </Stack>
                      <Box
                        sx={{
                          height: {xs:'50%', md:"316px"},
                          backgroundColor: "sgray.main",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flex:1
                        }}
                      >
                        <Grid
                          container
                          sx={{
                            width: {xs:'123px',md:"367px"},
                            height: {xs:'69px', md:"163.12px"},
                            justifyContent: "center",
                          }}
                        >
                          <Grid item xs={4}>
                            <Stack
                              direction="row"
                              sx={{alignItems: {xs:'end', md:"center"}, gap: {xs:"2px", md:"5px"} }}
                            >
                              <Profile height={mdQuery?'23px':'12px'} width={mdQuery?'19px':'10px'} />
                              <Typography fontSize={mdQuery?'12px': '6px'} >
                                {player?.age} yrs
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item xs={4}>
                            <Stack
                              direction="row"
                              sx={{
                                alignItems: "center",
                                paddingLeft: {xs:'15px', md:'30px'},
                                gap: {xs:"2px", md:"5px"},
                              }}
                            >
                              <Pitch height={mdQuery?'23px':'12px'} width={mdQuery?'19px':'10px'} />
                              <Typography fontSize={mdQuery?'12px': '6px'} >
                                {player?.position}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item xs={4}>
                            
                            <Stack
                              direction="row"
                              sx={{
          
                                alignItems: "center",
                                paddingLeft: {xs:'18px', md:"30px"},
                                gap: {xs:"2px", md:"5px"},
                              }}
                            >
                              <Boot height={mdQuery?'23px':'12px'} width={mdQuery?'19px':'10px'}/>
                              <Typography fontSize={mdQuery?'12px': '6px'} >
                                {mdQuery? player?.foot : player?.foot.substring(0, 1)}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item xs={4}>
                            <Stack
                              direction="row"
                              sx={{ alignItems: "center", gap: {xs:"2px", md:"5px"} }}
                            >
                              <Location height={mdQuery?'23px':'12px'} width={mdQuery?'19px':'10px'}/>
                              <Typography fontSize={mdQuery?'12px': '6px'} >
                                {player?.location}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item xs={4}>
                            <Stack
                              direction="row"
                              sx={{
                                alignItems: "center",
                                paddingLeft: {xs:'15px', md:'30px'},
                                gap: {xs:"2px", md:"5px"},
                                
                              }}
                            >
                              <Profile height={mdQuery?'23px':'12px'} width={mdQuery?'19px':'10px'}/>
                              <Typography fontSize={mdQuery?'12px': '6px'}>
                                {mdQuery? player?.gender : player?.gender.substring(0, 1)}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item xs={4}>
                            <Stack
                              direction="row"
                              sx={{
                                alignItems: "center",
                                paddingLeft: {xs:'18px', md:"30px"},
                               gap: {xs:"2px", md:"5px"},

                              }}
                            >
                              <Star height={mdQuery?'23px':'12px'} width={mdQuery?'19px':'10px'}/>
                              <Typography fontSize={mdQuery?'12px': '6px'}>
                                {player?.rating}/5
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Discover;
