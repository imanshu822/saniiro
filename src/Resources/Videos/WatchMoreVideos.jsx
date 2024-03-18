import React from "react";
import Header from "./parts/Header";
import Nav from "../../Navbar/Nav";
import VideoFeedSection from "./parts/VideoFeedSection";
import Signupfree from "../../Solutions/Signupfree";
import Footer from "../../utils/Footer";
import { Stack } from "@mui/material";
const WatchMoreVideos = () => {
  return (
    <div>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Nav />
        <Header />
        <VideoFeedSection />
      </Stack>
      <Signupfree />
      <Footer />
    </div>
  );
};

export default WatchMoreVideos;
