import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import down from "../../assets/down.svg";
import ReactPlayer from "react-player";
import Polygon from "../../assets/Polygon.svg";
const ExploreAbout = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };
  const lists = [
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we productions.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we productions.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "Offer standard, office-based support, available 24x7; that said, we are a no-nonsense team and will always respond promptly when you need us.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we productions.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we productions.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "Offer standard, office-based support, available 24x7; that said, we are a no-nonsense team and will always respond promptly when you need us.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we productions.",
    },
  ];
  return (
    <Stack bgcolor={"#052973"} mt={2} alignItems={"center"} p={"60px 0"} gap={8}>
      <Stack
        width={"90%"}
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"#000000"}
          width={"30%"}
          height={"432px"}
          textAlign={"center"}
          borderRadius={1}
        >
          <Typography fontWeight={"bold"} fontSize={"40px"} color={"white"}>
            Why do customers like Saniiro?
          </Typography>
        </Stack>
        {lists.map((d) => (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"white"}
            width={"30%"}
            height={"432px"}
            textAlign={"center"}
            borderRadius={1}
          >
            <Typography fontWeight={"bold"} fontSize={"40px"} color={"black"}>
              {d.title}
            </Typography>
          </Stack>
        ))}
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"#38548f"}
          width={"30%"}
          height={"432px"}
          textAlign={"center"}
          borderRadius={1}
        >
          <Typography fontWeight={"bold"} fontSize={"40px"} color={"white"}>
            Why do customers like Saniiro?
          </Typography>
        </Stack>
      </Stack>
      <Stack alignItems={"center"}>
        <Stack
          bgcolor={"black"}
          width={"84%"}
          borderRadius={1}
          direction={"row"}
        >
          <Stack width={"70%"} justifyContent={"center"} alignItems={"center"}>
            <Typography
              color={"white"}
              fontSize={"30px"}
              fontWeight={500}
              textAlign={"center"}
            >
              Saniiro Business Cloud People, delivers amazing workforce
              experiences, so that customers can become great employer brands,
            </Typography>
          </Stack>
          <Stack width={"30%"}>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              {isVideoPlaying ? (
                <ReactPlayer
                  url="https://www.example.com/your-video-url.mp4"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <Stack alignItems={"center"}>
                  <img
                    src={down}
                    alt="Thumbnail"
                    style={{
                      width: "350px",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    onClick={playVideo}
                    position={"absolute"}
                    width={"50px"}
                    height={"50px"}
                    top={"50%"}
                    left={"50%"}
                    bgcolor={"#D9D9D9"}
                    borderRadius={"50%"}
                    border={"2px solid #FB5555"}
                    sx={{
                      transform: "translate(-50%, -50%)",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={Polygon}
                      alt=""
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "30%",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  </Box>
                </Stack>
              )}
            </div>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ExploreAbout;
