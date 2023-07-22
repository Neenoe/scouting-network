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
import { Link } from "react-router-dom";

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

  const [buttonIndex, setButtonIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="paddings innerWidth discover">
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
                  borderRadius:'10px',
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
                  gap: {xs:'28px 0px', md:"35px 0px"},
                }}
              >
                {playerData.map((player) => (
                  <Link to='/PlayerBio'>
                    <Box
                      sx={{ width: {xs:'170px', md:"596px"}, height: {xs:'216px', md:"531px"} }}
                      id={player.id}
                    >
                      <Stack
                        sx={{
                          height: {xs:'108px', md:"215px"},
                          width: "100%",
                          backgroundColor: "primary.light",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 2,
                        }}
                      >
                        <Avatar
                          alt="player"
                          src={player.imageURL}
                          sx={{ width: {xs:'67px', md:"148px"}, height: {xs:'67px', md:"148px"} }}
                        />
                        <Typography>{player?.name}</Typography>
                      </Stack>
                      <Box
                        sx={{
                          height: {xs:'100%', md:"316px"},
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
                          <Grid item md={4}>
                            <Stack
                              direction="row"
                              sx={{ alignItems: "center", gap: "5px" }}
                            >
                              <Profile />
                              <Typography fontSize={12}>
                                {player?.age} yrs
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack
                              direction="row"
                              sx={{
                                alignItems: "center",
                                paddingLeft: "30px",
                                gap: "5px",
                              }}
                            >
                              <Pitch />
                              <Typography fontSize={12}>
                                {player?.position}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack
                              direction="row"
                              sx={{
                                alignItems: "center",
                                paddingLeft: "30px",
                                gap: "5px",
                              }}
                            >
                              <Boot />
                              <Typography fontSize={12}>
                                {player?.foot}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack
                              direction="row"
                              sx={{ alignItems: "center", gap: "5px" }}
                            >
                              <Location />
                              <Typography fontSize={12}>
                                {player?.location}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack
                              direction="row"
                              sx={{
                                alignItems: "center",
                                paddingLeft: "30px",
                                gap: "5px",
                              }}
                            >
                              <Profile />
                              <Typography fontSize={12}>
                                {player?.gender}
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item md={4}>
                            <Stack
                              direction="row"
                              sx={{
                                alignItems: "center",
                                paddingLeft: "30px",
                                gap: "5px",
                              }}
                            >
                              <Star />
                              <Typography fontSize={12}>
                                {player?.rating}/5
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Link>
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
