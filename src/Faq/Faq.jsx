import { Stack } from "@mui/material";
import React from "react";
import Nav from "../Navbar/Nav";
import FaqBanner from "./parts/FaqBanner";
import { Search } from "@mui/icons-material";
import SearchSection from "./parts/SearchSection";
import ActivityManagement from "./parts/ActivityManagement";
import Footer from "./../utils/Footer";
const Faq = () => {
  return (
    <>
      <Nav />
      <FaqBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <SearchSection />
        <ActivityManagement />
      </Stack>
      <Footer />
    </>
  );
};

export default Faq;
