import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const WelcomeToSaniiro = () => {
  return (
    <Stack alignItems={"Center"}>
      <Stack
        bgcolor={"#248F41"}
        width={"90%"}
        alignItems={"center"}
        p={"40px 0"}
        gap={2}
      >
        <Typography
          fontWeight={"bold"}
          fontSize={"40px"}
          color={"white"}
          textAlign={"center"}
        >
          What is Saniiro?
        </Typography>
        <Typography
          fontSize={"18px"}
          color={"#FFFFFF"}
          textAlign={"center"}
          width={"800px"}
        >
          Saniiro Business Cloud People, delivers amazing workforce experiences,
          so that customers can become great employer brands, increasing
          engagement, performance, and retention, while making it easier to
          acquire top talent.
        </Typography>
        <Stack
          bgcolor={"white"}
          width={"1178px"}
          p={"30px 0"}
          mt={2}
          borderRadius={1}
          direction={"row"}
        >
          <Stack alignItems={"center"} width={"33%"}>
            <Typography fontSize={"45px"} color={"#248F41"}>
              2800+
            </Typography>
            <Typography>Employees</Typography>
          </Stack>
          <Stack width={"3px"} height={"120px"} bgcolor={"#248F41"}></Stack>
          <Stack alignItems={"center"} width={"33%"}>
            <Typography fontSize={"45px"} color={"#248F41"}>
              5000+
            </Typography>
            <Typography>Partners</Typography>
          </Stack>
          <Stack width={"3px"} height={"120px"} bgcolor={"#248F41"}></Stack>

          <Stack alignItems={"center"} width={"33%"}>
            <Typography fontSize={"45px"} color={"#248F41"}>
              12 Million
            </Typography>
            <Typography>Users</Typography>
          </Stack>
          
        </Stack>
      </Stack>
    </Stack>
  );
}

export default WelcomeToSaniiro