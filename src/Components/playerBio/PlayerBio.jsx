import {
  Avatar,
  Button,
  TextField,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, padding, Stack } from "@mui/system";
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
import { third, sixth, fifth } from "../../Constants";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { playerData } from "../../data/playerData";

const PlayerBio = () => {

  const {id } = useParams();
  const playerID = id;
  const fetchedPlayers = playerData

  const fetchedPlayer = fetchedPlayers.find(item=> item.id == playerID);
  
//   for (let i = 0; i < fetchedPlayers.length; i++) {
//     if (fetchedPlayers[i].id == playerID) {
//         console.log(fetchedPlayers[i]);
//     }
// }

  const mdQuery = useMediaQuery("(min-width:900px)");
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
          <Box
            maxWidth="xl"
            sx={{
              padding: mdQuery ? "31px 100px" : "15px 30px",
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
                  width: mdQuery ? "948px" : "100%",
                  height: mdQuery ? "782px" : "auto",
                  background: theme.palette.primary.lighter,
                  borderRadius: { sx: "0px", md: "10px" },
                }}
              >
                <Box
                  sx={{
                    height: mdQuery ? "250px" : "131px",
                    backgroundColor: theme.palette.secondary.main,
                    position: "relative",
                    borderRadius: { sx: "0px", md: "10px 10px 0 0" },
                  }}
                >
                  <Avatar
                    src={fetchedPlayer.imageURL}
                    sx={{
                      width: mdQuery ? "251px" : "107px",
                      height: mdQuery ? "251px" : "107px",
                      position: "absolute",
                      bottom: mdQuery ? "-125px" : "-40%",
                      marginLeft: mdQuery ? "48px" : "17px",
                    }}
                  />
                </Box>
                <Stack
                  sx={{ padding: mdQuery ? "145px 91px" : "64px 17px" }}
                  gap={mdQuery ? "20px" : "10px"}
                >
                  <Typography
                    fontWeight="bold"
                    fontSize={mdQuery ? "20px" : "15px"}
                  >
                    {fetchedPlayer.name}
                  </Typography>
                  <Stack
                    direction="row"
                    sx={{ aligItems: "center", gap: "10px" }}
                  >
                    <FlagSvg />
                    <Typography
                      fontWeight="light"
                      fontSize={mdQuery ? "18px" : "10px"}
                    >
                      LAGOS, NIGERIA
                    </Typography>
                  </Stack>
                  <Typography
                    fontWeight="light"
                    fontSize={mdQuery ? "18px" : "10px"}
                  >
                    @{fetchedPlayer.name}
                  </Typography>
                  <Typography
                    fontSize={mdQuery ? "18px" : "10px"}
                    fontWeight="bold"
                  >
                    Bio
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.grey[400],
                      fontWeight: "regular",
                      fontSize: mdQuery ? "18px" : "10px",
                    }}
                  >
                    Hey, football fanatics! I'm {fetchedPlayer.name}, a passionate 15-year-old 
                    midfielder from Nigeria. Since my early days kicking 
                    the ball around the local park, my love for the game has 
                    grown into an unstoppable drive to become the best.
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
                  display: { xs: "none", md: "block" },
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
                    <Avatar
                      src={sixth}
                      sx={{ width: "65px", height: "65px" }}
                    ></Avatar>
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
                    <Avatar
                      src={sixth}
                      sx={{ width: "65px", height: "65px" }}
                    ></Avatar>
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
                    <Avatar
                      src={sixth}
                      sx={{ width: "65px", height: "65px" }}
                    ></Avatar>
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
                    <Avatar
                      src={sixth}
                      sx={{ width: "65px", height: "65px" }}
                    ></Avatar>
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
                width: { xs: "100%", md: "948px" },
                height: { xs: "auto", md: "356px" },
                background: mdQuery ? theme.palette.primary.lighter : "#F4FFFF",
                mt: "15px",
                padding: { xs: "18px 23px", md: "28px 71px" },
                borderRadius: { xs: "none", md: "10x" },
              }}
            >
              <Typography
                color={theme.palette.primary.main}
                sx={{ display: mdQuery ? "block" : "none" }}
              >
                ATTRIBUTES
              </Typography>
              <Stack
                gap="20px"
                direction="row"
                sx={{
                  mt: "40px",
                  flexWrap: "wrap",
                  display: mdQuery ? "flex" : "none",
                }}
              >
                {attributes.map((item, index) => (
                  <Button
                    key={index}
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
              <Stack
                direction="row"
                gap="15px"
                sx={{ flexWrap: "wrap", display: mdQuery ? "none" : "flex" }}
              >
                {attributes.map((item, index) => (
                  <Box key={index}>
                    <Typography fontSize="10px" fontWeight="bold">
                      {item}
                    </Typography>
                    <Box
                      sx={{
                        height: "32px",
                        width: "80px",
                        background: "white",
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: "5px",
                      }}
                    >

                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography
                fontWeight="bold"
                fontSize={{ xs: "18px", md: "26px" }}
                sx={{
                  mt: { xs: "45px", md: "50px" },
                  mb: { xs: "15px", md: "25px" },
                }}
              >
                Player Rating
              </Typography>
              <ReactStars
                onChange={onStarChange}
                value={1}
                isEdit={true}
                size={mdQuery ? "55px" : "17.5px"}
                activeColor="#D7AE37"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: mdQuery ? "407px" : "125px",
                  marginBottom: mdQuery ? "30px" : "15px",
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
                  height: { xs: "88px", md: "229px" },
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
              gap={{ xs: "21px", md: "70px" }}
              sx={{
                height: { xs: "81px", md: "242px" },
                width: "full",
                mt: { xs: "15px", md: "25px" },
                background: theme.palette.primary.lighter,
                padding: { xs: "6px 23px", md: "26px 54px" },
                borderRadius: "10px",
              }}
            >
              <Avatar
                src={sixth}
                sx={{
                  height: { xs: "37px", md: "91px" },
                  width: { xs: "37px", md: "91px" },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>What is On Your Mind?!</Typography>
                <Stack gap={{ xs: "19px", md: "57px" }} direction="row">
                  <Box sx={{height:{xs:"20.47px", md:"36.96px"}, width:{xs:"23.37px", md:"51px"}}}>
                    <ImageSvg />
                  </Box>
                  <Box sx={{height:{xs:"20.47px", md:"36.96px"}, width:{xs:"23.37px", md:"51px"}}}>
                    <VideoSvg />
                  </Box>
                </Stack>
              </Box>
            </Stack>

            <Box
              sx={{
                width: "full",
                mt: {xs:"15px", md:"25px"},
                background: theme.palette.primary.lighter,
                padding: {xs:"22px 20px", md:"26px 54px"},
                borderRadius: {xs:"none", md:"10px"},
              }}
            >
              <Stack direction="row" gap={{xs:"12px", md:"40px"}}>
                <Avatar src={sixth} sx={{ height: {xs:"48px", md:"91px"}, width: {xs:"48px", md:"91px"}}} />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {fetchedPlayer.name}
                  </Typography>
                  <Typography>2d</Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  maxWidth: {xs:"291px", md:"928px"},
                  fontSize: {xs:"10px", md:"13px"},
                  fontWeight: "regular",
                  color: theme.palette.grey[500],
                  mt: {xs:"9px", md:"64px"},
                }}
              >
                The atmosphere was electric as fans filled the City Stadium to
                witness a fiercely contested local derby between Blue Lions FC
                and Red Tigers FC. From the first whistle, it was evident that
                both teams were determined to secure bragging rights in this
                highly anticipated matchup.
              </Typography>
              <Box
                sx={{ width: "full", height: {xs:"141px", md:"450px"}, mt: {xs:"15px", md:"27px"}, mb: {xs:"9px", md:"24px"} }}
              >
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
              <Stack
                direction="row"
                gap={{xs:'18px', md:'41px'}}
                sx={{ alignItems: "center", mt: {xs:'12.8px', md:'24px'}, mb: {xs:'28px', md:'65px'} }}
              >
                <Avatar src={fifth} sx={{ height: {xs:'35px', md:'91px'}, width: {xs:'35px', md:'91px'}}} />

                <input
                  placeholder="Write a comment"
                 style={{
                  fontSize: mdQuery? '18px': '10px',
                  border: `1px solid ${theme.palette.primary.main}`,
                  height: {xs:'22px', md:'80px'},
                  borderRadius: "50px",
                  width:'100%',
                  textTransform:'none',
                  padding: mdQuery? '8px 32px': '4px 17px',
                  backgroundColor:'inherit',
                }}/>

                
              </Stack>
            </Box>

            <Box
             sx={{
              width: "full",
              mt: {xs:"15px", md:"25px"},
              background: theme.palette.primary.lighter,
              padding: {xs:"22px 20px", md:"26px 54px"},
              borderRadius: {xs:"none", md:"10px"},
            }}
            >
              <Stack direction="row" gap={{xs:"12px", md:"40px"}}>
                <Avatar src={sixth} sx={{ height: {xs:"48px", md:"91px"}, width: {xs:"48px", md:"91px"}}} />
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {fetchedPlayer.name}
                  </Typography>
                  <Typography>2d</Typography>
                </Box>
              </Stack>
              <Typography
                sx={{
                  maxWidth: {xs:"291px", md:"928px"},
                  fontSize: {xs:"10px", md:"13px"},
                  fontWeight: "regular",
                  color: theme.palette.grey[500],
                  mt: {xs:"9px", md:"64px"},
                }}
              >
                It was a hard-fought match filled with camaraderie and
                sportsmanship. proud of our performance in this exciting
                football encounter.
              </Typography>
              <Box
                sx={{ width: "full", height: {xs:"141px", md:"450px"}, mt: {xs:"15px", md:"27px"}, mb: {xs:"9px", md:"24px"} }}
              >
                <img
                  src={third}
                  alt="Player"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Box>
              <LikeSvg />
              <Stack
               direction="row"
               gap={{xs:'18px', md:'41px'}}
               sx={{ alignItems: "center", mt: {xs:'12.8px', md:'24px'}, mb: {xs:'28px', md:'65px'} }}
              >
                <Avatar src={fifth} sx={{ height: {xs:'35px', md:'91px'}, width: {xs:'35px', md:'91px'}}} />

               
                <input
                  placeholder="Write a comment"
                 style={{
                  fontSize: mdQuery? '18px': '10px',
                  border: `1px solid ${theme.palette.primary.main}`,
                  height: {xs:'22px', md:'80px'},
                  borderRadius: "50px",
                  width:'100%',
                  textTransform:'none',
                  padding: mdQuery? '8px 32px': '4px 17px',
                  backgroundColor:'inherit',
                }}/>
              </Stack>
            </Box>
          </Box>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PlayerBio;
