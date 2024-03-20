import React from "react";
import CaseStudyBanner from "./parts/CaseStudyBanner";
import CompanyBanner from "./parts/CompanyBanner";
import ReviewSection from "./parts/ReviewSection";
import Footer from ".././utils/Footer";
import TestimonialsCardsSection from "../Testimonials/parts/TestimonialsCardsSection";
import { Stack } from "@mui/material";
const CaseStudy = () => {
  return (
    <>
      <CaseStudyBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <CompanyBanner />
      </Stack>
      <TestimonialsCardsSection />
      <Footer />
    </>
  );
};

export default CaseStudy;
