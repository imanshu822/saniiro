import React from "react";
import Nav from "../Navbar/Nav";
import TestimonialsBanner from "./parts/TestimonialsBanner";
import TestimonialsCardsSection from "./parts/TestimonialsCardsSection";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
const Testimonials = () => {
  return (
    <>
      <Nav />
      <TestimonialsBanner />
      <TestimonialsCardsSection />
      <Footer />
    </>
  );
};

export default Testimonials;
