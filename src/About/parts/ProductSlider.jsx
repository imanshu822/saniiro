import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import img from "../../assets/Img.png"
import { Box, Stack, Typography } from "@mui/material";
const ProductSlider = () => {
  const features = [
    {
      src: logo1,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo2,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo3,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo1,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo2,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo3,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo1,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo2,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo3,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",

      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Box width="100%">
      <Carousel
        responsive={responsive}
        autoPlay
        showDots
        infinite
        autoPlaySpeed={1500}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      >
        {features.map((d, index) => (
          // <Box key={index}>
          //   <img
          //     src={d.src}
          //     alt={`Logo ${index + 1}`}
          //     style={{ width: "120px", height: "50px" }}
          //   />
          // </Box>
          <Stack alignItems={"center"} padding={"20px 0 60px 0"}>
            <Stack
              bgcolor={"white"}
              width={"50%"}
              boxShadow={"1px 2px 6px 4px lightgray"}
              gap={3}
              direction={"row"}
              p={"20px 20px"}
            >
              <Stack gap={2}>
                <img
                  src={d.src}
                  alt={`Logo ${index + 1}`}
                  style={{ width: "120px", height: "50px", padding: "0 50px" }}
                />

                <Typography width={"52%"} p={"0 50px"}>
                  {d.title}
                </Typography>
                <Stack direction={"row"} p={"0 35px"}>
                  <Stack width={"100px"} height={"100px"}>
                    <img src={img} alt="" />
                  </Stack>
                  <Stack justifyContent={"center"}>
                    <Typography fontWeight={"bold"} color={"grey"} fontSize={"20px"}>{d.Name}</Typography>
                    <Typography>{d.designation}</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Typography color={"#248F41"} fontSize={"220px"} lineHeight={0.9}>
                “
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductSlider;
