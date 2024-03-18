import React from "react";
import Nav from "../Navbar/Nav";
import FaqBanner from "./parts/FaqBanner";
import FeqBodyTop from "./parts/FeqBodytop";
import FeqBodyContent from "./parts/FaqBodyContent";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
const FaqActivities = () => {
  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Nav />
        <FaqBanner />
        <FeqBodyTop />
        <FeqBodyContent />
      </Stack>
      <Footer />
    </>
  );
};

export default FaqActivities;
