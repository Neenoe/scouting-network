import {
  Avatar,
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { theme } from "../Discover/theme";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import ReactStars from "react-rating-star-with-type";
import { ReactComponent as ImageSvg } from "../../assets/Svg/picture.svg";
import { ReactComponent as VideoSvg } from "../../assets/Svg/videography.svg";
import { ReactComponent as FlagSvg } from "../../assets/Svg/nigeriaflag.svg";
import { ReactComponent as LikeSvg } from "../../assets/Svg/like.svg";
import meal from "../../assets/meal.mp4";
import {third,sixth, fifth} from '../../Constants'
import ReactPlayer from "react-player";

const PlayerBio = () => {
  const [star, setStar] = useState(5);

  const onStarChange = (nextValue) => {
    setStar(nextValue);
  };
  const attributes = [
    "AGE",
    "GENDER",
    "LOCATION",
    "HEIGHT",
    "FOOT",
    "POSITION",
    "RATING",
    "AVAILABILITY",
  ];

  const [buttonIndex, setButtonIndex] = useState(0);
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
            <Stack
              direction="row"
              gap="8px"
              sx={{ justifyContent: "space-between" }}
            >
              <Box
                sx={{
                  width: "948px",
                  height: "782px",
                  background: theme.palette.primary.lighter,
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "250px",
                    backgroundColor: theme.palette.secondary.main,
                    position: "relative",
                    borderRadius: "10px 10px 0 0",
                  }}
                >
                  <Avatar
                    src={sixth}
                    sx={{
                      width: "251px",
                      height: "251px",
                      position: "absolute",
                      bottom: "-125px",
                      marginLeft: "48px",
                    }}
                  />
                </Box>
                <Stack sx={{ padding: "145px 91px", gap: "20px" }}>
                  <Typography>TIMILEHIN ORIJAN</Typography>
                  <Stack
                    direction="row"
                    sx={{ aligItems: "center", gap: "10px" }}
                  >
                    <FlagSvg />
                    <Typography>LAGOS, NIGERIA</Typography>
                  </Stack>
                  <Typography>@TIMILEHIN ORJAN</Typography>
                  <Typography fontWeight="bold">Bio</Typography>
                  <Typography
                    sx={{
                      color: theme.palette.grey[400],
                      fontWeight: "regular",
                      fontSize: "18px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel nibh sit amet justo tincidunt bibendum.Nam
                    ultrices enim eget sagittis scelerisque. Aenean feugiat sem
                    quis odio dapibus, non ullamcorper sem pulvinar.
                  </Typography>
                  <Stack direction="row" gap="52px">
                    <Button sx={{ textTransform: "none" }} variant="outlined">
                      Message
                    </Button>
                    <Button sx={{ textTransform: "none" }} variant="contained">
                      Share Profile
                    </Button>
                  </Stack>
                </Stack>
              </Box>
              <Box
                sx={{
                  width: "283px",
                  height: "full",
                  background: theme.palette.primary.lighter,
                  borderRadius: "10px 0 0 10px",
                  padding: "27px 24px",
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  CONNECTIONS
                </Typography>
                <Box sx={{ mt: "24px" }}>
                  <Stack direction="row" sx={{ position: "relative" }}>
                    <Avatar src={sixth} sx={{ width: "65px", height: "65px" }}></Avatar>
                    <Avatar
                        src={third}
                      sx={{ left: "-20px", width: "65px", height: "65px" }}
                    ></Avatar>
                  </Stack>
                  <Typography>Ahmed Bortman</Typography>
                  <Typography
                    color={theme.palette.grey[400]}
                    sx={{ fontSize: "14px" }}
                  >
                    Lead Scout At Nike
                  </Typography>
                </Box>
                <Box sx={{ mt: "24px" }}>
                  <Stack direction="row" sx={{ position: "relative" }}>
                    <Avatar src={sixth} sx={{ width: "65px", height: "65px" }}></Avatar>
                    <Avatar
                        src={fifth}
                      sx={{ left: "-20px", width: "65px", height: "65px" }}
                    ></Avatar>
                  </Stack>
                  <Typography>Ahmed Bortman</Typography>
                  <Typography
                    color={theme.palette.grey[400]}
                    sx={{ fontSize: "14px" }}
                  >
                    Lead Scout At Nike
                  </Typography>
                </Box>
                <Box sx={{ mt: "24px" }}>
                  <Stack direction="row" sx={{ position: "relative" }}>
                    <Avatar src={sixth} sx={{ width: "65px", height: "65px" }}></Avatar>
                    <Avatar
                        src={third}
                      sx={{ left: "-20px", width: "65px", height: "65px" }}
                    ></Avatar>
                  </Stack>
                  <Typography>Ahmed Bortman</Typography>
                  <Typography
                    color={theme.palette.grey[400]}
                    sx={{ fontSize: "14px" }}
                  >
                    Lead Scout At Nike
                  </Typography>
                </Box>
                <Box sx={{ mt: "24px" }}>
                  <Stack direction="row" sx={{ position: "relative" }}>
                    <Avatar src={sixth} sx={{ width: "65px", height: "65px" }}></Avatar>
                    <Avatar
                    src={fifth}
                      sx={{ left: "-20px", width: "65px", height: "65px" }}
                    ></Avatar>
                  </Stack>
                  <Typography>Ahmed Bortman</Typography>
                  <Typography
                    color={theme.palette.grey[400]}
                    sx={{ fontSize: "14px" }}
                  >
                    Lead Scout At Nike
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Box
              sx={{
                width: "948px",
                height: "356px",
                background: theme.palette.primary.lighter,
                mt: "15px",
                padding: "28px 71px",
                borderRadius: "10px",
              }}
            >
              <Typography color={theme.palette.primary.main}>
                ATTRIBUTES
              </Typography>
              <Stack
                direction="row"
                sx={{ mt: "40px", flexWrap: "wrap", gap: "20px" }}
              >
                {attributes.map((item, index) => (
                  <Button
                    onClick={() => setButtonIndex(index)}
                    variant="contained"
                    sx={{
                      "&:hover": {
                        backgroundColor: `${
                          index === buttonIndex
                            ? theme.palette.primary.main
                            : "transparent"
                        }`,
                      },
                      boxShadow: "0",
                      height: "73px",
                      width: "147.55px",
                      color: `${
                        index === buttonIndex
                          ? "white"
                          : theme.palette.primary.main
                      }`,
                      backgroundColor: `${
                        index === buttonIndex ? "primary" : "white"
                      }`,
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography sx={{ mt: "50px", mb: "25px" }}>
                Player Rating
              </Typography>
              <ReactStars
                onChange={onStarChange}
                value={1}
                isEdit={true}
                size="55px"
                activeColor="#D7AE37"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "407px",
                }}
              />
            </Box>

            <TextField
              placeholder="Write a comment"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
                sx: {
                  height: "229px",
                  padding: "0px 0px 0px 1rem",
                  textTransform: "none",
                  backgroundColor: theme.palette.primary.lighter,
                  boxShadow: "0",
                  borderRadius: "10px",
                },
              }}
            />

            <Stack
              direction="row"
              gap="70px"
              sx={{
                height: "242px",
                width: "full",
                mt: "25px",
                background: theme.palette.primary.lighter,
                padding: "26px 54px",
                borderRadius: "10px",
              }}
            >
              <Avatar src={sixth} sx={{ height: "91px", width: "91px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>What is On Your Mind?!</Typography>
                <Stack gap="57px" direction="row">
                  <ImageSvg />
                  <VideoSvg />
                </Stack>
              </Box>
            </Stack>

            <Box
              sx={{
                width: "full",
                mt: "25px",
                background: theme.palette.primary.lighter,
                padding: "26px 54px",
                borderRadius: "10px",
              }}
            >
              <Stack direction="row" gap="40px">
                <Avatar src={sixth} sx={{ height: "91px", width: "91px" }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    TIMILEHIN ORLAN
                  </Typography>
                  <Typography>2d</Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  maxWidth: "928px",
                  fontSize: "13px",
                  fontWeight: "regular",
                  color: theme.palette.grey[500],
                  mt:'64px'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel nibh sit amet justo tincidunt bibendum. Nam ultrices enim
                eget sagittis scelerisque. Aenean feugiat sem quis odio dapibus,
                non ullamcorper sem pulvinar.
              </Typography>
              <Box sx={{ width: "full", height: "450px", mt:'27px', mb:'24px' }}>
                <ReactPlayer
                  light={true}
                  controls
                  playing
                  url={meal}
                  width="100%"
                  height="100%"
                />
              </Box>
              <LikeSvg />
              <Stack direction="row" gap="41px" sx={{ alignItems: "center", mt:'24px', mb:'65px' }}>
                <Avatar src={fifth} sx={{height:'91px', width:'91px'}} />
               
                <TextField
                placeholder="Write a comment"
                fullWidth
                  sx={{
                    fieldset: {
                      borderColor: "",
                      height: "80px",
                      textTransform:'none',
                      borderRadius: "50px",
                    },
                  }}
                />
              </Stack>
            </Box>

            <Box
              sx={{
                width: "full",
                mt: "25px",
                background: theme.palette.primary.lighter,
                padding: "26px 54px",
                borderRadius: "10px",
              }}
            >
              <Stack direction="row" gap="40px">
                <Avatar src={sixth} sx={{ height: "91px", width: "91px" }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    TIMILEHIN ORLAN
                  </Typography>
                  <Typography>2d</Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  maxWidth: "928px",
                  fontSize: "13px",
                  fontWeight: "regular",
                  color: theme.palette.grey[500],
                  mt:'64px'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel nibh sit amet justo tincidunt bibendum. Nam ultrices enim
                eget sagittis scelerisque. Aenean feugiat sem quis odio dapibus,
                non ullamcorper sem pulvinar.
              </Typography>
              <Box sx={{ width: "full", height: "450px", mt:'27px', mb:'24px' }}>
                <img src={third} alt='Player' style={{height:'100%', width:'100%', objectFit:'cover'}}/>
              </Box>
              <LikeSvg />
              <Stack direction="row" gap="41px" sx={{ alignItems: "center", mt:'24px', mb:'65px' }}>
                <Avatar src={fifth} sx={{height:'91px', width:'91px'}} />
               
                <TextField
                placeholder="Write a comment"
                fullWidth
                  sx={{
                    fieldset: {
                      borderColor: "",
                      height: "80px",
                      textTransform:'none',
                      borderRadius: "50px",
                    },
                  }}
                />
              </Stack>
            </Box>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PlayerBio;
