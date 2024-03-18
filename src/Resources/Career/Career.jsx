import React from "react";
import Nav from "../../Navbar/Nav";
import CareerBanner from "./parts/CareerBanner";
import JobSection from "./parts/JobSection";
import Readytosign from "../../Contact/parts/Readytosign";
import Footer from "../../utils/Footer";
import { Stack } from "@mui/material";
function Career() {
  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Nav />
        <CareerBanner />
        <JobSection />
      </Stack>
      <Readytosign />
      <Footer />
    </>
  );
}

export default Career;
