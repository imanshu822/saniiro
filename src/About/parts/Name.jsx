import React from 'react'
import name from "../../assets/Name.svg"
import { Stack, Typography } from '@mui/material'
const Name = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} pt={5} alignItems={"end"}>
      <Stack alignItems={"center"} position={"relative"} justifyContent={"center"}>
        <img src={name} alt="" style={{ height: "500px" }} />
        <Stack bgcolor={"white"} borderRadius={1} position={"absolute"} width={"80%"} bottom={"10%"}>
          <Typography p={2} fontSize={"12px"}>
            A Quality Management System (QMS) serves as the backbone for
            organisations aiming for operational and quality excellence
          </Typography>
        </Stack>
      </Stack>
      <Stack width={"50%"} gap={2}>
        <Typography
          p={"0 60px"}
          color={"#013E60"}
          fontSize={"46px"}
          fontWeight={"bold"}
        >
          Name
        </Typography>
        <Typography
          p={"0 90px 0 70px"}
          letterSpacing={1.1}
          textAlign={"left"}
          lineHeight={1.3}
        >
          <li>
            Jayanthi is an out-of-the-box thinker, strategist, learner, and
            collaborator passionate about delivering quality solutions and
            empowering people and organizations.
          </li>
          <br />
          <li>
            She has a master’s degree in Pharmaceutical Sciences, M Pharm, a
            Registered Pharmacist, with over 18 years of progressive
            international work experience in Quality and Regulatory Compliance
            including leadership roles with major American multinational
            companies like Mylan Inc (now Viatris) and Abbott Inc.
          </li>
          <br />
          <li>
            She lived on three continents and was well-travelled across the US,
            Europe, and Asia, providing solutions to projects that require
            exceptional negotiating and business transforming skills.
          </li>
          <br />
          <li>
            She recently delivered the “Pharmaceutical Quality Compliance -
            Access to Affordable, Quality Medicines” keynote address at a G20
            Nations Global Tech Summit.
          </li>
          <br />
          <li>
            She loves Cakes, Music, and Arts (yes, in that order!) and often
            volunteers among students and young people encouraging them to live
            life to their full potential.
          </li>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Name