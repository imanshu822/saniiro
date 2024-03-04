import { Stack, Typography } from '@mui/material'
import React from 'react'
import Aboutbanner from "../../assets/AboutBanner.svg"
import Button from '../../utils/Button';
const AboutBanner = () => {
  return (
    <Stack>
      <Stack
        pt={1}
        height={"600px"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${Aboutbanner})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img src={Aboutbanner} alt="" /> */}
        <Stack gap={2}>
          <Typography
            color={"#4DB267"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={"38px"}
            textAlign={"center"}
          >
            Welcome to Saniiro
          </Typography>
          <Typography color={"#052973"} fontWeight={"bold"} fontSize={"46px"} width={"700px"} textAlign={"center"}>
            Online Accounting Software for Every Business
          </Typography>
          <Stack direction={"row"} gap={2} justifyContent={"center"}>
            <Button
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Work Sans",
                p: 1.5,
              }}
            >
              SIGN UP FOR FREE
            </Button>
            <Button
              sx={{
                bgcolor: "white",
                color: "black",
                border: "1px solid black",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Work Sans",
                p: "0 20px",
              }}
            >
              REQUEST DEMO
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AboutBanner