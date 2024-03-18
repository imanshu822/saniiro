import React from "react";
import VideoSection from "./VideoSection";
import VideoSection2 from "./VideoSection2";
import VideoSection3 from "./VideoSection3";
import Signupfree from "../../Solutions/Signupfree";
import Footer from "../../utils/Footer";
import { Stack } from "@mui/material";

const Videos = () => {
  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <VideoSection />
        <VideoSection2 />
        <VideoSection3 />
      </Stack>
      <Signupfree />
      <Footer />
    </>
  );
};

export default Videos;
