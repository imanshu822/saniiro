import React from "react";
import Nav from "../Navbar/Nav";
import HnTHeader from "./parts/HnTHeader";
import HnTVirtal from "./parts/HnTVirtal";
import HnTBanner from "./parts/HnTBanner";
import HnTTranie from "./parts/HnTTranie";
import ContactFaq from "../Home/parts/ContactFaq";
import Footer from "../utils/Footer";
import Quote from "./parts/Quote";
import CareerBanner from "../Resources/Career/parts/CareerBanner";
import { Stack } from "@mui/material";
const HelpAndTraining = () => {
  return (
    <>
      <Nav />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <HnTHeader />
        <HnTVirtal />
        <HnTBanner />
        <HnTTranie />
        <Quote />
        <ContactFaq />
      </Stack>
      <Footer />
    </>
  );
};

export default HelpAndTraining;
