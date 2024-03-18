import React from "react";
import ResourceBanner from "./parts/ResourceBanner";
import Readytosign from "../Contact/parts/Readytosign";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
const Resources = () => {
  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <ResourceBanner />
      </Stack>
      <Readytosign />
      <Footer />
    </>
  );
};

export default Resources;
