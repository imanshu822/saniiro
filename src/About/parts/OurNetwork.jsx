import { Stack, Typography } from '@mui/material'
import React from 'react'
import DottedMaps from './DottedMaps';
import ProductSlider from './ProductSlider';

const OurNetwork = () => {
  return (
    <Stack gap={2} pt={8}>
      <Typography
        color={"black"}
        fontWeight={"bold"}
        fontSize={"30px"}
        textAlign={"center"}
      >
        Saniiro Network
      </Typography>
      <Typography color={"grey"} p={"0 360px"} textAlign={"center"}>
        Saniiro Business Cloud People, delivers amazing workforce experiences,
        so that customers can become great employer brands, increasing
        engagement, performance, and retention, while making it easier to
        acquire top talent.
      </Typography>
      <DottedMaps/>
    </Stack>
  );
}

export default OurNetwork