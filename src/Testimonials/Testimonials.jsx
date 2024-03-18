import React from "react";
import Nav from "../Navbar/Nav";
import TestimonialsBanner from "./parts/TestimonialsBanner";
import TestimonialsCardsSection from "./parts/TestimonialsCardsSection";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
const Testimonials = () => {
  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Nav />
        <TestimonialsBanner />

        <TestimonialsCardsSection />
      </Stack>
      <Footer />
    </>
  );
};

export default Testimonials;
